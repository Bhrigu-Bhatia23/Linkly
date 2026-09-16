import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import user from "@/models/user";
import bcrypt from "bcryptjs";
import { connectDB } from "./mongodb";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },

      authorize: async (credentials) => {
        const { email, password } = credentials;

        await connectDB();

        const data = await user.findOne({ email });
        
        if (!data || !data.password) {
          return null;
        }

        const isMatch = await bcrypt.compare(password, data.password);

        if (isMatch) {
          return {
            id: data._id.toString(),
            name: data.name,
            email: data.email,
            username: data.username,
          };
        }

        return null;
      },
    }),
  ],

  callbacks: {
    async signIn({ user: googleUser, account }) {
      if (account?.provider === "google") {
        await connectDB();

        let data = await user.findOne({
          email: googleUser.email,
        });

        if (!data) {
          const baseUsername = googleUser.email
            .split("@")[0]
            .toLowerCase()
            .replace(/[^a-z0-9]/g, "");

          let username = baseUsername;
          let count = 1;

          while (await user.findOne({ username })) {
            username = `${baseUsername}${count}`;
            count++;
          }

          data = await user.create({
            email: googleUser.email,
            name: googleUser.name,
            username: username,
            profilepic: googleUser.image,
          });
        }

        googleUser.username = data.username;
      }

      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
      }

      return token;
    },

    async session({ session, token }) {
      session.user.username = token.username;

      return session;
    },
  },
};

