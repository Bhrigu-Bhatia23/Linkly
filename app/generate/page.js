"use client";

import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "next-auth/react";

export default function GeneratePage() {
  const { data: session } = useSession();
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [username, setUsername] = useState("");

  const [links, setLinks] = useState([
    {
      title: "",
      url: "",
    },
  ]);

  useEffect(() => {
    async function getProfile() {
      try {
        const response = await fetch("/api/profile");
        const data = await response.json();

        if (!response.ok) {
          toast.error("Failed to load your profile.");
          return;
        }

        setName(data.profile.name);
        setUsername(data.profile.username);
        setBio(data.profile.bio);
        setLinks(data.profile.links);
      } catch (error) {
        toast.error("Something went wrong while loading your profile.");
      }
    }

    getProfile();
  }, []);

  function addLink() {
    setLinks([...links, { title: "", url: "" }]);
  }

  function removeLink(index) {
    const updatedLinks = links.filter((_, i) => i !== index);
    setLinks(updatedLinks);

    async function updateProfile() {
      try {
        const response = await fetch("/api/profile", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            username,
            bio,
            links: updatedLinks,
          }),
        });

        if (!response.ok) {
          toast.error("Failed to remove the link.");
        }
      } catch (error) {
        toast.error("Something went wrong.");
      }
    }

    updateProfile();
  }

  function updateLink(index, field, value) {
    const updatedLinks = [...links];

    updatedLinks[index][field] = value;

    setLinks(updatedLinks);
  }

  const handleSubmit = async () => {
    console.log("FRONTEND:", {
      name,
      username,
      bio,
      links,
    });

    try {
      const response = await fetch("/api/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          bio,
          username,
          links,
        }),
      });

      if (response.ok) {
        toast.success("Your Linkly page has been saved!");

        const data = await response.json();

        setLinks([
          {
            title: "",
            url: "",
          },
        ]);

        setName("");
        setBio("");
        setUsername("");
      } else {
        toast.error("Failed to save your Linkly page.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <main className="min-h-screen bg-[#f7f3ee] px-6 pb-20 pt-32 text-[#171717]">

        {/* Background decorations */}
        <div className="pointer-events-none fixed left-[-120px] top-32 h-80 w-80 rounded-full bg-[#ffb4a8]/30 blur-3xl" />

        <div className="pointer-events-none fixed bottom-[-120px] right-[-100px] h-96 w-96 rounded-full bg-[#ffd6cf]/40 blur-3xl" />

        {/* Header */}
        <section className="relative mx-auto max-w-5xl text-center">

          <span className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold shadow-sm">
            Create your page
          </span>

          <h1 className="mt-7 text-4xl font-black tracking-tight sm:text-5xl">
            Build your
            <span className="text-[#ff5c5c]"> Linkly.</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-gray-500">
            Add your details and links. We'll turn them into one beautiful
            page you can share anywhere.
          </p>

        </section>

        {/* Main content */}
        <section className="relative mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-[1fr_360px]">

          {/* LEFT - Form */}
          <div className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-sm sm:p-8">

            {/* Profile */}
            <div>
              <h2 className="text-xl font-black">
                Your profile
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Tell people who you are.
              </p>
            </div>

            {/* Profile picture */}
            <div className="mt-7 flex items-center gap-5">

              <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-[#ff5c5c] text-2xl font-black text-white">
                {session?.user?.image ? (
                  <img
                    src={session.user.image}
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span>
                    {name ? name.charAt(0).toUpperCase() : "L"}
                  </span>
                )}
              </div>

              {/* <div>
                <button
                  type="button"
                  className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold transition hover:bg-gray-50"
                >
                  Add photo
                </button>

                <p className="mt-2 text-xs text-gray-400">
                  JPG, PNG up to 5MB
                </p>
              </div> */}

            </div>

            {/* Name */}
            <div className="mt-7">

              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold"
              >
                Name
              </label>

              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Bhrigu Bhatia"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#ff5c5c] focus:bg-white focus:ring-4 focus:ring-[#ff5c5c]/10"
              />

            </div>

            {/* Bio */}
            <div className="mt-5">

              <label
                htmlFor="bio"
                className="mb-2 block text-sm font-semibold"
              >
                Bio
              </label>

              <textarea
                id="bio"
                rows="3"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Developer • Creator • Student"
                className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#ff5c5c] focus:bg-white focus:ring-4 focus:ring-[#ff5c5c]/10"
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
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="bhrigu"
                  className="min-w-0 flex-1 bg-transparent px-3 py-3.5 text-sm outline-none placeholder:text-gray-400"
                />

              </div>

            </div>

            {/* Links */}
            <div className="mt-10">

              <div className="flex items-center justify-between">

                <div>
                  <h2 className="text-xl font-black">
                    Your links
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Add the places you want people to discover.
                  </p>
                </div>

              </div>

              {/* Link inputs */}
              <div className="mt-6 space-y-4">

                {links.map((link, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-gray-200 bg-gray-50 p-4"
                  >

                    <div className="flex items-center justify-between">

                      <span className="text-xs font-bold text-gray-400">
                        LINK {index + 1}
                      </span>

                      {links.length >= 1 && (
                        <button
                          type="button"
                          onClick={() => removeLink(index)}
                          className="cursor-pointer text-xs font-semibold text-gray-400 transition hover:text-red-500"
                        >
                          Remove
                        </button>
                      )}

                    </div>

                    <input
                      type="text"
                      value={link.title}
                      onChange={(e) =>
                        updateLink(index, "title", e.target.value)
                      }
                      placeholder="Link title"
                      className="mt-3 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#ff5c5c]"
                    />

                    <input
                      type="url"
                      value={link.url}
                      onChange={(e) =>
                        updateLink(index, "url", e.target.value)
                      }
                      placeholder="https://example.com"
                      className="mt-3 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#ff5c5c]"
                    />

                  </div>
                ))}

              </div>

              {/* Add link */}
              <button
                type="button"
                onClick={addLink}
                className="mt-5 w-full cursor-pointer rounded-xl border border-dashed border-gray-300 bg-white px-5 py-3.5 text-sm font-semibold text-gray-600 transition hover:border-[#ff5c5c] hover:bg-[#fff8f6] hover:text-[#ff5c5c]"
              >
                + Add another link
              </button>

            </div>

            {/* Generate */}
            <button
              onClick={handleSubmit}
              type="button"
              className="mt-8 w-full cursor-pointer rounded-xl bg-[#171717] px-5 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#ff5c5c] hover:shadow-lg"
            >
              Generate my Linkly →
            </button>

          </div>

          {/* RIGHT - Preview */}
          <div className="lg:sticky lg:top-28 lg:h-fit">

            <div className="mb-4 flex items-center justify-between">

              <div>
                <h2 className="font-black">
                  Live preview
                </h2>

                <p className="text-xs text-gray-400">
                  This is how your page will look.
                </p>
              </div>

              <span className="rounded-full bg-[#fff1ee] px-3 py-1 text-xs font-semibold text-[#ff5c5c]">
                Preview
              </span>

            </div>

            {/* Phone */}
            <div className="mx-auto w-full max-w-[350px] rounded-[2.5rem] border-8 border-[#171717] bg-white p-6 shadow-2xl">

              {/* Profile */}
              <div className="text-center">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#ff5c5c] text-2xl font-black text-white">
                  {session?.user?.name?.charAt(0).toUpperCase() || "L"}

                </div>

                <h3 className="mt-4 text-xl font-black">
                  {name || "Your Name"}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {bio || "Your bio goes here"}
                </p>

              </div>

              {/* Preview links */}
              <div className="mt-7 space-y-3">

                {links.map((link, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-center text-sm font-semibold transition hover:bg-gray-100"
                  >
                    {link.title || `Your Link ${index + 1}`}
                  </div>
                ))}

              </div>

              {/* Branding */}
              <div className="mt-7 text-center text-xs font-bold text-gray-300">
                linkly
              </div>

            </div>

          </div>

        </section>

      </main>

      {/* Toast notifications */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
        toastStyle={{
          borderRadius: "14px",
          border: "1px solid rgba(0,0,0,0.08)",
          background: "#ffffff",
          color: "#171717",
          fontWeight: "600",
        }}
      />
    </>
  );
}