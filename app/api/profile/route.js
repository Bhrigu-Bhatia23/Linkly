import profile from "@/models/profile";
import user from "@/models/user";
import { connectDB } from "@/lib/mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, username, bio, links } = body;

    if (!name || !username || !bio || !links) {
      return Response.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    await connectDB();

    const session = await getServerSession(authOptions);

    if (!session) {
      return Response.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const email = session.user.email;

    const data = await user.findOne({
      email: email
    });

    if (!data) {
      return Response.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    const userID = data._id;

    const existingProfile = await profile.findOne({
      userId: userID
    });

    if (existingProfile) {
      existingProfile.name = name;
      existingProfile.username = username;
      existingProfile.bio = bio;
      existingProfile.links = links;

      await existingProfile.save();

      return Response.json(
        { message: "Profile updated successfully" },
        { status: 200 }
      );
    }

    const profiledata = await profile.create({
      userId: userID,
      name: name,
      username: username,
      bio: bio,
      links: links
    });

    return Response.json(
      {
        message: "Profile created successfully",
        profile: profiledata
      },
      { status: 201 }
    );

  } catch (error) {
    console.error(error);

    return Response.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET(request) {

  try {
    await connectDB();

    const url = new URL(request.url);
    const username = url.searchParams.get("username");

    if (username) {

      const paramsName = await profile.findOne({
        username: username
      })

      if (!paramsName) {
        return Response.json(
          { message: "Profile not found" },
          { status: 404 }
        )
      }

      return Response.json(
        { profile: paramsName },
        { status: 200 }
      )
    }

    else {
      const session = await getServerSession(authOptions);

      if (!session) {
        return Response.json(
          { message: "Unauthorized" },
          { status: 401 }
        );
      }

      const email = session.user.email
      const data = await user.findOne({
        email: email
      })

      if (!data) {
        return Response.json(
          { message: "User not found" },
          { status: 404 }
        );
      }

      const userID = data._id;
      const existingProfile = await profile.findOne({
        userId: userID
      });

      if (!existingProfile) {
        return Response.json(
          { message: "Profile not found" },
          { status: 404 }
        );
      }

      return Response.json(
        { profile: existingProfile },
        { status: 200 }
      );
    }
  }


  catch (error) {
  }

}