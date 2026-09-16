import Link from "next/link";

const features = [
  {
    icon: "🔗",
    title: "All your links",
    description:
      "Bring your portfolio, social profiles, projects and everything important together in one simple page.",
  },
  {
    icon: "🚀",
    title: "Showcase your work",
    description:
      "Highlight your latest project, portfolio or anything you want your audience to discover.",
  },
  {
    icon: "🎨",
    title: "Make it yours",
    description:
      "Create a page that matches your style with clean layouts, colors and beautiful buttons.",
  },
  {
    icon: "📱",
    title: "Built for every screen",
    description:
      "Your Linkly page looks great whether someone opens it on a phone, tablet or desktop.",
  },
  {
    icon: "🌐",
    title: "One link to share",
    description:
      "Instead of sharing multiple URLs, share one Linkly page that connects everything.",
  },
  {
    icon: "✨",
    title: "Simple to manage",
    description:
      "Add, remove and update your links whenever you want from your Linkly dashboard.",
  },
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ee] text-[#171717]">

      {/* Background decoration */}
      <div className="pointer-events-none fixed left-[-120px] top-40 h-80 w-80 rounded-full bg-[#ffb4a8]/30 blur-3xl" />

      <div className="pointer-events-none fixed bottom-[-120px] right-[-100px] h-96 w-96 rounded-full bg-[#ffd6cf]/40 blur-3xl" />

      {/* Hero */}
      <section className="relative mt-20 mx-auto max-w-5xl px-6 pb-16 pt-20 text-center">

        <span className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold shadow-sm">
          Everything in one place
        </span>

        <h1 className="mx-auto mt-7 max-w-4xl text-5xl font-black tracking-tight sm:text-6xl">
          Everything you want to share.
          <span className="block text-[#ff5c5c]">
            One simple page.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Linkly gives you one beautiful place to share your portfolio,
          projects, social profiles and anything else your audience needs.
        </p>
      </section>

      {/* Features */}
      <section className="relative mx-auto max-w-6xl px-6 pb-24">

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff1ee] text-xl">
                {feature.icon}
              </div>

              <h2 className="mt-6 text-xl font-bold">
                {feature.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-[#171717] px-8 py-14 text-center text-white sm:px-12">

          <h2 className="text-3xl font-black sm:text-4xl">
            Ready to build your page?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Bring your links, projects and social profiles together with
            Linkly.
          </p>

          <Link
            href="/signup"
            className="mt-8 inline-flex rounded-full bg-[#ff5c5c] px-7 py-3.5 text-sm font-bold text-white transition hover:scale-105"
          >
            Create your Linkly →
          </Link>

        </div>
      </section>

    </main>
  );
}