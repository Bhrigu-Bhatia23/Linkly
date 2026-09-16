"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function ProfilePage({ params }) {
  const { data: session } = useSession();

  const [username, setUsername] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadProfile() {
      const newparams = await params;
      const username = newparams.username;

      setUsername(username);

      const response = await fetch(
        `/api/profile?username=${username}`
      );

      const profileData = await response.json();

      console.log("Session:", session);
      console.log("Profile:", profileData);

      setData(profileData);
    }

    loadProfile();
  }, [params, session]);

  if (!data) {
    return null;
  }

  if (!data.profile) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f7f3ee] px-6 text-[#171717]">
        <div className="w-full max-w-md rounded-3xl border border-black/10 bg-white p-10 text-center shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-black text-2xl font-black text-white">
            !
          </div>

          <h1 className="mt-6 text-2xl font-black">
            Profile not found
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            The profile you're looking for doesn't exist or may have been removed.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f3ee] px-6 py-16 text-[#171717]">

      <section className="relative mt-10 mx-auto w-full max-w-xl">

        <div className="text-center">

          {/* Avatar */}
          <div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-[#ff5c5c] text-3xl font-black text-white shadow-lg">

            {session?.user?.image ? (
              <img
                src={session.user.image}
                alt={session.user.name || "Profile"}
                className="h-full w-full object-cover"
              />
            ) : (
              <span>
                {data.profile.name?.charAt(0).toUpperCase() || "L"}
              </span>
            )}

          </div>

          <h1 className="mt-5 text-3xl font-black tracking-tight">
            {data.profile.name}
          </h1>

          <p className="mt-1 text-sm font-medium text-gray-400">
            @{data.profile.username}
          </p>

          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-500">
            {data.profile.bio}
          </p>

        </div>

        <div className="mt-10 space-y-4">
          {data.profile.links.map((link) => (
            <a
              key={link._id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center rounded-2xl border border-black/10 bg-white px-6 py-4 text-sm font-bold shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              {link.title}
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <span className="text-sm font-black tracking-tight text-gray-300">
            linkly
          </span>
        </div>

      </section>
    </main>
  );
}