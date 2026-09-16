"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

export default function LoginPage() {
  const { data: session } = useSession();

  const router = useRouter();
  const searchParams = useSearchParams();

  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const googleLogin = searchParams.get("google");

    if (googleLogin === "success") {
      toast.success("Logged in with Google successfully!");

      router.replace("/login");
    }

    if (googleLogin === "error") {
      toast.error("Google login failed. Please try again.");

      router.replace("/login");
    }
  }, [searchParams, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setformdata({
      ...formdata,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: formdata.email,
        password: formdata.password,
      });

      if (result?.error) {
        toast.error("Invalid email or password.");
        return;
      }

      if (result?.ok) {
        toast.success("Logged in successfully!");

        setformdata({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut({
        redirect: false,
      });

      toast.success("Logged out successfully!");
    } catch (error) {
      toast.error("Logout failed. Please try again.");
    }
  };

  const handleGoogleLogin = () => {
    signIn("google", {
      callbackUrl: "/login?google=success",
    });
  };

  return (
    <main className="min-h-screen bg-[#f7f3ee] text-[#171717]">

      {/* Background decoration */}
      <div className="pointer-events-none fixed left-[-120px] top-20 h-80 w-80 rounded-full bg-[#ffb4a8]/30 blur-3xl" />

      <div className="pointer-events-none fixed bottom-[-120px] right-[-80px] h-80 w-80 rounded-full bg-[#ffd6cf]/40 blur-3xl" />

      {/* Login section */}
      <section className="relative mt-20 flex min-h-[calc(100vh-80px)] items-center justify-center px-6 py-12">

        <div className="w-full max-w-md">

          {/* Heading */}
          <div className="text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff5c5c] text-xl font-black text-white shadow-lg shadow-[#ff5c5c]/20">
              {session?.user?.username ? session.user.username.charAt(0).toUpperCase() : "L"}
            </div>

            <h1 className="mt-7 text-4xl font-black tracking-tight">
              Welcome back.
            </h1>

            <p className="mt-3 text-gray-500">
              Log in to manage your Linkly page.
            </p>

          </div>

          {/* Card */}
          <div className="mt-9 rounded-[2rem] border border-black/10 bg-white p-7 shadow-xl shadow-black/5 sm:p-8">

            {/* Google */}
            {session ? (
              <button
                onClick={handleLogout}
                type="button"
                className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3.5 text-sm font-semibold transition hover:bg-gray-50"
              >
                <span className="text-lg font-bold">
                  G
                </span>

                Sign out
              </button>
            ) : (
              <button
                onClick={handleGoogleLogin}
                type="button"
                className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3.5 text-sm font-semibold transition hover:bg-gray-50"
              >
                <span className="text-lg font-bold">
                  G
                </span>

                Continue with Google
              </button>
            )}

            {/* Divider */}
            <div className="my-7 flex items-center gap-4">

              <div className="h-px flex-1 bg-gray-200" />

              <span className="text-xs font-medium text-gray-400">
                OR
              </span>

              <div className="h-px flex-1 bg-gray-200" />

            </div>

            {/* Email */}
            <div>

              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold"
              >
                Email
              </label>

              <input
                onChange={handleChange}
                name="email"
                value={formdata.email}
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#ff5c5c] focus:bg-white focus:ring-4 focus:ring-[#ff5c5c]/10"
              />

            </div>

            {/* Password */}
            <div className="mt-5">

              <div className="mb-2 flex items-center justify-between">

                <label
                  htmlFor="password"
                  className="text-sm font-semibold"
                >
                  Password
                </label>

                <Link
                  href="/forgot-password"
                  className="text-xs font-semibold text-[#ff5c5c] hover:underline"
                >
                  Forgot password?
                </Link>

              </div>

              <input
                onChange={handleChange}
                name="password"
                value={formdata.password}
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#ff5c5c] focus:bg-white focus:ring-4 focus:ring-[#ff5c5c]/10"
              />

            </div>

            {/* Login */}
            <button
              onClick={handleSubmit}
              type="button"
              className="mt-7 w-full cursor-pointer rounded-xl bg-[#171717] px-5 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#ff5c5c] hover:shadow-lg"
            >
              Log in
            </button>

            {/* Signup */}
            <p className="mt-6 text-center text-sm text-gray-500">

              Don't have a Linkly account?{" "}

              <Link
                href="/signup"
                className="font-bold text-[#ff5c5c] hover:underline"
              >
                Create one
              </Link>

            </p>

          </div>

          {/* Bottom text */}
          <p className="mt-7 text-center text-xs leading-5 text-gray-400">

            By continuing, you agree to Linkly's{" "}

            <Link
              href="#"
              className="underline hover:text-gray-600"
            >
              Terms
            </Link>{" "}

            and{" "}

            <Link
              href="#"
              className="underline hover:text-gray-600"
            >
              Privacy Policy
            </Link>

            .

          </p>

        </div>

      </section>

    </main>
  );
}