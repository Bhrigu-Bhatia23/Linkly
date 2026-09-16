"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";

export default function SignupPage() {
  const { data: session } = useSession();

  const router = useRouter();
  const searchParams = useSearchParams();

  const [formData, setformData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  // Google signup result
  useEffect(() => {
    const googleSignup = searchParams.get("google");

    if (googleSignup === "success") {
      toast.success("Account created with Google successfully!");

      router.replace("/signup");
    }

    if (googleSignup === "error") {
      toast.error("Google signup failed. Please try again.");

      router.replace("/signup");
    }
  }, [searchParams, router]);

  const handleChange = (e) => {
    const data = e.target.name;
    const value = e.target.value;

    setformData({
      ...formData,
      [data]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || "Registration failed.");
        return;
      }

      toast.success("Account created successfully!");

      setformData({
        name: "",
        email: "",
        username: "",
        password: "",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleGoogleSignup = () => {
    signIn("google", {
      callbackUrl: "/signup?google=success",
    });
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

  return (
    <main className="min-h-screen bg-[#f7f3ee] text-[#171717]">

      {/* Background decorations */}
      <div className="pointer-events-none fixed left-[-120px] top-20 h-80 w-80 rounded-full bg-[#ffb4a8]/30 blur-3xl" />

      <div className="pointer-events-none fixed bottom-[-120px] right-[-80px] h-80 w-80 rounded-full bg-[#ffd6cf]/40 blur-3xl" />

      {/* Signup */}
      <section className="relative flex items-center justify-center px-6 py-12">

        <div className="w-full max-w-md">

          {/* Heading */}
          <div className="mt-20 text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff5c5c] text-xl font-black text-white shadow-lg shadow-[#ff5c5c]/20">
              {session?.user?.username ? session.user.username.charAt(0).toUpperCase() : "L"}
            </div>

            <h1 className="mt-7 text-4xl font-black tracking-tight">
              Create your Linkly.
            </h1>

            <p className="mt-3 text-gray-500">
              Your world starts with one link.
            </p>

          </div>

          {/* Card */}
          <div className="mt-9 rounded-[2rem] border border-black/10 bg-white p-7 shadow-xl shadow-black/5 sm:p-8">

            {/* Google */}
            {session ? (
              <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5">

                <div className="flex items-center gap-3">

                  {/* Profile image */}
                  <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-white">

                    {session.user?.image ? (
                      <img
                        src={session.user.image}
                        alt="Profile"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="font-bold text-[#ff5c5c]">
                        {session.user?.name?.[0] || "G"}
                      </span>
                    )}

                  </div>

                  {/* User information */}
                  <div className="min-w-0 text-left">

                    <p className="truncate text-sm font-semibold">
                      {session.user?.name}
                    </p>

                    <p className="truncate text-xs text-gray-400">
                      {session.user?.email}
                    </p>

                  </div>

                </div>

                {/* Sign out */}
                <button
                  onClick={handleLogout}
                  type="button"
                  className="ml-3 shrink-0 cursor-pointer text-xs font-semibold text-[#ff5c5c] hover:underline"
                >
                  Sign out
                </button>

              </div>
            ) : (
              <button
                onClick={handleGoogleSignup}
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

            {/* Name */}
            <div>

              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold"
              >
                Name
              </label>

              <input
                onChange={handleChange}
                name="name"
                value={formData.name}
                id="name"
                type="text"
                placeholder="Bhrigu Bhatia"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#ff5c5c] focus:bg-white focus:ring-4 focus:ring-[#ff5c5c]/10"
              />

            </div>

            {/* Email */}
            <div className="mt-5">

              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold"
              >
                Email
              </label>

              <input
                onChange={handleChange}
                name="email"
                value={formData.email}
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#ff5c5c] focus:bg-white focus:ring-4 focus:ring-[#ff5c5c]/10"
              />

            </div>

            {/* Username */}
            <div className="mt-5">

              <label
                htmlFor="username"
                className="mb-2 block text-sm font-semibold"
              >
                Username
              </label>

              <div className="flex overflow-hidden rounded-xl border border-gray-200 bg-gray-50 transition focus-within:border-[#ff5c5c] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#ff5c5c]/10">

                <span className="flex items-center border-r border-gray-200 px-3 text-sm text-gray-400">
                  linkly.to/
                </span>

                <input
                  onChange={handleChange}
                  name="username"
                  value={formData.username}
                  id="username"
                  type="text"
                  placeholder="bhrigu"
                  className="min-w-0 flex-1 bg-transparent px-3 py-3.5 text-sm outline-none placeholder:text-gray-400"
                />

              </div>

            </div>

            {/* Password */}
            <div className="mt-5">

              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold"
              >
                Password
              </label>

              <input
                onChange={handleChange}
                name="password"
                value={formData.password}
                id="password"
                type="password"
                placeholder="Create a password"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#ff5c5c] focus:bg-white focus:ring-4 focus:ring-[#ff5c5c]/10"
              />

            </div>

            {/* Create account */}
            <button
              onClick={handleSubmit}
              type="button"
              className="mt-7 w-full cursor-pointer rounded-xl bg-[#171717] px-5 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#ff5c5c] hover:shadow-lg"
            >
              Create account
            </button>

            {/* Login */}
            <p className="mt-6 text-center text-sm text-gray-500">

              Already have an account?{" "}

              <Link
                href="/login"
                className="font-bold text-[#ff5c5c] hover:underline"
              >
                Log in
              </Link>

            </p>

          </div>

          {/* Terms */}
          <p className="mt-7 text-center text-xs leading-5 text-gray-400">

            By creating an account, you agree to Linkly's{" "}

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