import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Create your page",
    description:
      "Sign up for Linkly and choose your unique username. Your Linkly page is ready to build.",
  },
  {
    number: "02",
    title: "Add your links",
    description:
      "Add your portfolio, latest project, GitHub, Instagram, LinkedIn, YouTube or any other link.",
  },
  {
    number: "03",
    title: "Share your Linkly",
    description:
      "Share one simple Linkly URL everywhere and let people discover everything you do.",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ee] text-[#171717]">

      {/* Background */}
      <div className="pointer-events-none fixed left-[-120px] top-40 h-80 w-80 rounded-full bg-[#ffb4a8]/30 blur-3xl" />

      <div className="pointer-events-none fixed bottom-[-100px] right-[-80px] h-80 w-80 rounded-full bg-[#ffd6cf]/40 blur-3xl" />

      {/* Hero */}
      <section className="px-6 pb-20 pt-32 text-center">

        <span className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold shadow-sm">
          Simple by design
        </span>

        <h1 className="mx-auto mt-7 max-w-4xl text-5xl font-black tracking-tight sm:text-6xl">
          From many links
          <span className="block text-[#ff5c5c]">
            to one.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Create your page, add everything you want people to see,
          and share one link with the world.
        </p>

      </section>

      {/* Steps */}
      <section className="mx-auto max-w-5xl px-6 pb-24">

        <div className="grid gap-6 md:grid-cols-3">

          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm"
            >

              <span className="text-sm font-black text-[#ff5c5c]">
                {step.number}
              </span>

              <h2 className="mt-5 text-2xl font-black">
                {step.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* Example */}
      <section className="px-6 pb-24">

        <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 rounded-[2.5rem] bg-white p-8 shadow-sm sm:p-12 md:flex-row">

          {/* Phone preview */}
          <div className="w-full max-w-xs rounded-[2.5rem] border-8 border-[#171717] bg-white p-5 shadow-2xl">

            <div className="text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#ff5c5c] text-xl font-black text-white">
                A
              </div>

              <h3 className="mt-4 font-bold">
                Alex Morgan
              </h3>

              <p className="mt-1 text-xs text-gray-400">
                Designer • Creator
              </p>

            </div>

            <div className="mt-6 space-y-3">

              {[
                "🚀 My Portfolio",
                "🔥 Latest Project",
                "💻 GitHub",
                "📸 Instagram",
              ].map((link) => (
                <div
                  key={link}
                  className="rounded-xl bg-gray-50 px-4 py-3 text-center text-sm font-semibold"
                >
                  {link}
                </div>
              ))}

            </div>

          </div>

          {/* Text */}
          <div>

            <span className="text-sm font-bold text-[#ff5c5c]">
              ONE LINK
            </span>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Everything your audience needs.
            </h2>

            <p className="mt-5 leading-7 text-gray-500">
              Your Linkly page becomes the single destination for your
              online presence. Instead of sending people different links,
              send them one.
            </p>

            <Link
              href="/signup"
              className="mt-7 inline-flex rounded-full bg-[#171717] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#ff5c5c]"
            >
              Build your page →
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}