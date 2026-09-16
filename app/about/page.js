import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ee] text-[#171717]">

      {/* Background decorations */}
      <div className="pointer-events-none fixed left-[-120px] top-40 h-80 w-80 rounded-full bg-[#ffb4a8]/30 blur-3xl" />

      <div className="pointer-events-none fixed bottom-[-120px] right-[-100px] h-96 w-96 rounded-full bg-[#ffd6cf]/40 blur-3xl" />

      {/* Hero */}
      <section className="relative mx-auto max-w-4xl px-6 pb-16 pt-32 text-center">

        <span className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold shadow-sm">
          About Linkly
        </span>

        <h1 className="mt-7 text-5xl font-black tracking-tight sm:text-6xl">
          One link.
          <span className="block text-[#ff5c5c]">
            Everything you are.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Linkly is a simple way to bring your online world together.
          Your portfolio, projects, social profiles and everything else
          you want people to discover — all in one place.
        </p>

      </section>

      {/* Story */}
      <section className="mx-auto max-w-5xl px-6 pb-20">

        <div className="rounded-[2.5rem] border border-black/10 bg-white p-8 shadow-sm sm:p-12">

          <span className="text-sm font-bold text-[#ff5c5c]">
            WHY LINKLY?
          </span>

          <h2 className="mt-4 text-3xl font-black">
            The internet is full of links.
            Sharing them shouldn't be complicated.
          </h2>

          <div className="mt-6 space-y-5 text-gray-600 leading-7">

            <p>
              Your portfolio might be on one website, your projects on
              GitHub, your photos on Instagram and your videos on YouTube.
              Sharing all of those separately can get messy.
            </p>

            <p>
              Linkly brings everything together into one clean,
              personalized page that you can share anywhere.
            </p>

            <p>
              Whether you're a developer, designer, student, creator or
              simply someone who wants a better place to share their
              links, Linkly is built to keep things simple.
            </p>

          </div>

        </div>

      </section>

      {/* Values */}
      <section className="mx-auto max-w-5xl px-6 pb-24">

        <h2 className="text-center text-3xl font-black">
          What we believe
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">

          <div className="rounded-[2rem] border border-black/10 bg-white p-7">
            <div className="text-2xl">✨</div>

            <h3 className="mt-5 text-xl font-bold">
              Keep it simple
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Your online presence shouldn't require a complicated setup.
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white p-7">
            <div className="text-2xl">🎨</div>

            <h3 className="mt-5 text-xl font-bold">
              Make it yours
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Your page should feel like you, not like everyone else's.
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white p-7">
            <div className="text-2xl">🚀</div>

            <h3 className="mt-5 text-xl font-bold">
              Share freely
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              One link should be enough to connect people to your world.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="px-6 pb-24">

        <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-[#171717] px-8 py-14 text-center text-white sm:px-12">

          <h2 className="text-3xl font-black sm:text-4xl">
            Build your world with Linkly.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Create your page and put everything you are in one place.
          </p>

          <Link
            href="/signup"
            className="mt-8 inline-flex rounded-full bg-[#ff5c5c] px-7 py-3.5 text-sm font-bold text-white transition hover:scale-105"
          >
            Get started →
          </Link>

        </div>

      </section>

    </main>
  );
}