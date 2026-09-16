"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { toast } from "react-toastify";

export default function Navbar() {
  const { data: session } = useSession();

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
    <nav className="fixed left-1/2 top-5 z-50 w-[94%] max-w-6xl -translate-x-1/2">
      <div className="flex items-center justify-between rounded-full border border-black/10 bg-white/85 px-3 py-3 shadow-lg shadow-black/5 backdrop-blur-xl sm:px-5">

        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ff5c5c] text-base font-black text-white shadow-sm">
            L
          </div>

          <span className="hidden text-xl font-black tracking-tight text-[#171717] sm:block">
            link<span className="text-[#ff5c5c]">ly</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden flex-1 items-center justify-center gap-1 md:flex">

          <Link
            href="/features"
            className="rounded-full px-4 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-[#fff1ee] hover:text-[#ff5c5c]"
          >
            Features
          </Link>

          <Link
            href="/how-it-works"
            className="rounded-full px-4 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-[#fff1ee] hover:text-[#ff5c5c]"
          >
            How it works
          </Link>

        </div>

        {/* Actions */}
        <div className="flex min-w-0 items-center gap-1 sm:gap-2">

          {/* Explore */}
          <Link
            href="/explore"
            className="rounded-full px-2.5 py-2.5 text-xs font-medium text-gray-600 transition hover:bg-[#fff1ee] hover:text-[#ff5c5c] sm:px-4 sm:text-sm"
          >
            Explore
          </Link>

          {session?.user?.username ? (
            <>
              {/* Profile */}
              <Link
                href={`/${session.user.username}`}
                className="rounded-full px-2.5 py-2.5 text-xs font-medium text-gray-600 transition hover:bg-[#fff1ee] hover:text-[#ff5c5c] sm:px-4 sm:text-sm"
              >
                Profile
              </Link>

              {/* User */}
              <div className="hidden items-center gap-2 lg:flex">

                <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-gray-100">

                  {session.user?.image ? (
                    <img
                      src={session.user.image}
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="font-bold text-[#ff5c5c]">
                      {session.user?.name?.[0]?.toUpperCase() || "U"}
                    </span>
                  )}

                </div>

                <span className="max-w-[120px] truncate text-sm font-semibold text-[#171717]">
                  {session.user?.name || "User"}
                </span>

              </div>

              {/* Generate */}
              <Link
                href="/generate"
                className="rounded-full bg-[#171717] px-3 py-2.5 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#ff5c5c] hover:shadow-md sm:px-5 sm:text-sm"
              >
                Generate
              </Link>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="cursor-pointer rounded-full px-2.5 py-2.5 text-xs font-semibold text-[#171717] transition hover:bg-gray-100 sm:px-4 sm:text-sm"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              {/* Login */}
              <Link
                href="/login"
                className="rounded-full px-2.5 py-2.5 text-xs font-semibold text-[#171717] transition hover:bg-gray-100 sm:px-4 sm:text-sm"
              >
                Log in
              </Link>

              {/* Get Started */}
              <Link
                href="/signup"
                className="rounded-full bg-[#171717] px-3 py-2.5 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#ff5c5c] hover:shadow-md sm:px-5 sm:text-sm"
              >
                Get started
              </Link>
            </>
          )}

        </div>
      </div>
    </nav>
  );
}

