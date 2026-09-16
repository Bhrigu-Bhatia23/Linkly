import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3ee] text-[#171717]">  

      {/* ================= HERO ================= */}
      <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-32 text-center">
        {/* Background decorations */}
        <div className="absolute left-[-120px] top-40 h-72 w-72 rounded-full bg-[#ffb4a8]/30 blur-3xl" />

        <div className="absolute right-[-100px] top-72 h-80 w-80 rounded-full bg-[#ffd6cf]/40 blur-3xl" />

        {/* Badge */}
        <div className="relative mb-7 rounded-full border border-black/10 bg-white px-5 py-2 text-sm font-medium shadow-sm">
          ✨ One link. Everything you are.
        </div>

        {/* Heading */}
        <h1 className="relative max-w-5xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          Your world,
          <span className="block text-[#ff5c5c]">
            all in one link.
          </span>
        </h1>

        {/* Description */}
        <p className="relative mt-7 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl">
          Create a beautiful page for everything you create, share and sell.
          Connect your audience to all your important links in one simple
          place.
        </p>

        {/* CTA */}
        <div className="relative mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/login"
            className="rounded-full bg-black px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#ff5c5c]"
          >
            Create your Linkly →
          </Link>

          <a
            href="#creators"
            className="rounded-full border border-black/10 bg-white px-8 py-4 font-semibold transition hover:-translate-y-1 hover:bg-gray-100"
          >
            Explore Linkly
          </a>
        </div>

        {/* ================= PROFILE PREVIEW ================= */}
        <div className="relative mt-20">
          {/* Glow */}
          <div className="absolute -inset-12 -z-10 rounded-[4rem] bg-[#ffb4a8]/40 blur-3xl" />

          {/* Floating card */}
          <div className="absolute -left-20 top-16 hidden rotate-[-8deg] rounded-2xl border border-black/10 bg-white p-4 shadow-xl lg:block">
            <p className="text-xs text-gray-400">Today</p>
            <p className="mt-1 text-xl font-black">12.4K</p>
            <p className="text-xs font-medium text-green-500">
              +18.4% clicks
            </p>
          </div>

          <div className="absolute -right-24 bottom-24 hidden rotate-[7deg] rounded-2xl border border-black/10 bg-white p-4 shadow-xl lg:block">
            <p className="text-xs text-gray-400">Your audience</p>
            <p className="mt-1 text-sm font-bold">
              Growing every day 🚀
            </p>
          </div>

          {/* Phone */}
          <div className="w-[320px] rounded-[2.5rem] border-8 border-[#171717] bg-white p-5 shadow-2xl sm:w-[360px]">
            {/* Profile */}
            <div className="flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ff5c5c] text-2xl font-bold text-white">
                B
              </div>

              <h2 className="mt-4 text-xl font-bold">
                Bhrigu Bhatia
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Developer • Creator • Student
              </p>
            </div>

            {/* Links */}
            <div className="mt-6 space-y-3">
              <LinkButton text="💻 GitHub" />
              <LinkButton text="💼 LinkedIn" />
              <LinkButton text="📸 Instagram" />
              <LinkButton text="▶️ YouTube" />
            </div>

            <div className="mt-6 text-xs font-medium text-gray-400">
              linkly
            </div>
          </div>
        </div>
      </section>

      {/* ================= SOCIAL PROOF ================= */}
      <section className="border-y border-black/5 bg-white/50 py-12">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
            Everything you need. One beautiful page.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-5 text-xl font-bold text-gray-400">
            <span>creators</span>
            <span>developers</span>
            <span>artists</span>
            <span>businesses</span>
            <span>students</span>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section
        id="how-it-works"
        className="mx-auto max-w-7xl px-6 py-28"
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ff5c5c]">
            Simple by design
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Three steps.
            <span className="block text-gray-400">
              One powerful page.
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Set up your personal corner of the internet in minutes.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <StepCard
            number="01"
            icon="✨"
            title="Create"
            description="Choose your username and start building your Linkly page in minutes."
          />

          <StepCard
            number="02"
            icon="🎨"
            title="Customize"
            description="Add your links, social profiles, products and make the page feel like you."
          />

          <StepCard
            number="03"
            icon="🚀"
            title="Share"
            description="Share one simple link everywhere and send your audience exactly where they need to go."
          />
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section
        id="features"
        className="bg-[#171717] px-6 py-28 text-white"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ff8b82]">
              Everything in one place
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
              More than just
              <span className="block text-[#ff8b82]">
                a link in your bio.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              Linkly gives you the tools to turn a single link into your
              personal home on the internet.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon="🔗"
              title="Unlimited links"
              description="Share everything that matters without cramming your bio."
            />

            <FeatureCard
              icon="🎨"
              title="Beautiful themes"
              description="Make your page match your personality, brand and style."
            />

            <FeatureCard
              icon="📊"
              title="Analytics"
              description="Understand what your audience clicks and what gets ignored."
            />

            <FeatureCard
              icon="💰"
              title="Sell anything"
              description="Share products, services, digital products and more."
            />
          </div>
        </div>
      </section>

      {/* ================= SHOWCASE ================= */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Text */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ff5c5c]">
              Your page. Your style.
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
              Make your
              <span className="block text-[#ff5c5c]">
                first impression count.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Your Linkly page should feel like you. Customize your profile,
              colors, buttons and content to create something your audience
              remembers.
            </p>

            <div className="mt-8 space-y-4">
              <CheckItem text="Personalized profile" />
              <CheckItem text="Custom colors and themes" />
              <CheckItem text="Social media integration" />
              <CheckItem text="Mobile-first design" />
            </div>

            <Link
              href="/login"
              className="mt-9 inline-block rounded-full bg-black px-7 py-3.5 font-semibold text-white transition hover:bg-[#ff5c5c]"
            >
              Build your page →
            </Link>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="absolute -inset-10 rounded-full bg-[#ffb4a8]/30 blur-3xl" />

            <div className="relative rounded-[2.5rem] border border-black/10 bg-white p-5 shadow-2xl">
              <div className="rounded-[2rem] bg-[#f7f3ee] p-8">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold">9:41</span>

                  <div className="flex gap-1">
                    <span>●</span>
                    <span>●</span>
                    <span>●</span>
                  </div>
                </div>

                <div className="mx-auto mt-10 max-w-sm text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#ff5c5c] text-3xl font-black text-white">
                    B
                  </div>

                  <h3 className="mt-5 text-2xl font-black">
                    Bhrigu Bhatia
                  </h3>

                  <p className="mt-2 text-gray-500">
                    Building things for the web 🚀
                  </p>

                  <div className="mt-7 space-y-3">
                    <ShowcaseButton text="My Portfolio ↗" />
                    <ShowcaseButton text="Latest Project 🚀" />
                    <ShowcaseButton text="GitHub 💻" />
                    <ShowcaseButton text="Instagram 📸" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CREATOR TYPES ================= */}
      <section
        id="creators"
        className="border-y border-black/5 bg-white/60 px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ff5c5c]">
              Made for everyone
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              One page.
              <span className="block text-gray-400">
                Infinite possibilities.
              </span>
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <CreatorCard
              emoji="🎥"
              title="Creators"
              description="Share videos, socials, sponsors and everything your audience loves."
            />

            <CreatorCard
              emoji="💻"
              title="Developers"
              description="Showcase your GitHub, portfolio, projects and professional work."
            />

            <CreatorCard
              emoji="🎨"
              title="Artists"
              description="Bring your work, commissions, socials and shop together."
            />

            <CreatorCard
              emoji="🏢"
              title="Businesses"
              description="Give customers one place to discover everything you offer."
            />
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2.5rem] bg-[#ff5c5c] px-8 py-14 text-center text-white sm:px-12">
          <h2 className="text-4xl font-black sm:text-5xl">
            Your audience is already waiting.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Give them one simple place to find everything you do.
          </p>

          <div className="mx-auto mt-12 grid max-w-3xl gap-8 sm:grid-cols-3">
            <Stat number="1" label="simple link" />
            <Stat number="∞" label="possibilities" />
            <Stat number="24/7" label="online presence" />
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="px-6 pb-28 pt-10">
        <div className="mx-auto max-w-5xl rounded-[3rem] border border-black/10 bg-white px-6 py-20 text-center shadow-sm sm:px-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#ffebe7] text-2xl">
            🔗
          </div>

          <h2 className="mt-7 text-4xl font-black tracking-tight sm:text-6xl">
            Everything you are.
            <span className="block text-[#ff5c5c]">
              One Linkly.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-gray-600">
            Create your page, share your world and give your audience one
            place to find you.
          </p>

          <Link
            href="/login"
            className="mt-9 inline-block rounded-full bg-black px-9 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#ff5c5c]"
          >
            Create your Linkly →
          </Link>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-black/10 bg-[#171717] px-6 py-14 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <Link
                href="/"
                className="text-2xl font-black tracking-tight"
              >
                link<span className="text-[#ff5c5c]">ly</span>
              </Link>

              <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
                One beautiful link for everything you create, share and sell.
              </p>
            </div>

            {/* Product */}
            <div>
              <h3 className="font-bold">Product</h3>

              <div className="mt-4 space-y-3 text-sm text-gray-400">
                <a href="/features" className="block hover:text-white">
                  Features
                </a>

                <a href="/how-it-works" className="block hover:text-white">
                  How it works
                </a>

                <a href="/explore" className="block hover:text-white">
                  Explore
                </a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-bold">Company</h3>

              <div className="mt-4 space-y-3 text-sm text-gray-400">
                <a href="/about" className="block hover:text-white">
                  About
                </a>

                <a href="/contact" className="block hover:text-white">
                  Contact
                </a>

                <a href="/privacy" className="block hover:text-white">
                  Privacy
                </a>
              </div>
            </div>

            {/* Account */}
            <div>
              <h3 className="font-bold">Your Linkly</h3>

              <div className="mt-4 space-y-3 text-sm text-gray-400">
                <Link href="/login" className="block hover:text-white">
                  Log in
                </Link>

                <Link href="/signup" className="block hover:text-white">
                  Create account
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-sm text-gray-500 sm:flex-row">
            <p>© 2026 Linkly. All rights reserved.</p>

            <p>Made with ❤️ for creators.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ========================================================= */
/* COMPONENTS */
/* ========================================================= */

function LinkButton({ text }) {
  return (
    <button className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm font-semibold transition hover:-translate-y-1 hover:bg-gray-100 hover:shadow-md">
      {text}
    </button>
  );
}

function StepCard({ number, icon, title, description }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <span className="text-4xl">{icon}</span>

        <span className="text-sm font-bold text-gray-300">
          {number}
        </span>
      </div>

      <h3 className="mt-8 text-2xl font-black">{title}</h3>

      <p className="mt-3 leading-7 text-gray-500">
        {description}
      </p>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-2 hover:bg-white/10">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff5c5c] text-xl">
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-bold">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-gray-400">
        {description}
      </p>
    </div>
  );
}

function CheckItem({ text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ff5c5c] text-xs font-bold text-white">
        ✓
      </div>

      <span className="font-medium">{text}</span>
    </div>
  );
}

function ShowcaseButton({ text }) {
  return (
    <button className="w-full rounded-2xl border border-black/10 bg-white px-5 py-4 text-sm font-bold shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      {text}
    </button>
  );
}

function CreatorCard({ emoji, title, description }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-7 transition hover:-translate-y-2 hover:shadow-xl">
      <div className="text-4xl">{emoji}</div>

      <h3 className="mt-6 text-xl font-black">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-gray-500">
        {description}
      </p>
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div>
      <div className="text-4xl font-black">{number}</div>

      <div className="mt-1 text-sm font-medium text-white/70">
        {label}
      </div>
    </div>
  );
}