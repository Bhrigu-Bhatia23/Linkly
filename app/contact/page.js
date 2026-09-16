export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ee] text-[#171717]">

      {/* Background decorations */}
      <div className="pointer-events-none fixed left-[-120px] top-40 h-80 w-80 rounded-full bg-[#ffb4a8]/30 blur-3xl" />

      <div className="pointer-events-none fixed bottom-[-120px] right-[-100px] h-96 w-96 rounded-full bg-[#ffd6cf]/40 blur-3xl" />

      {/* Hero */}
      <section className="relative mx-auto max-w-4xl px-6 pb-12 pt-32 text-center">

        <span className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold shadow-sm">
          Get in touch
        </span>

        <h1 className="mt-7 text-5xl font-black tracking-tight sm:text-6xl">
          We'd love to
          <span className="block text-[#ff5c5c]">
            hear from you.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Have a question, suggestion or something you'd like to tell us?
          Send us a message.
        </p>

      </section>

      {/* Contact */}
      <section className="mx-auto max-w-5xl px-6 pb-24">

        <div className="grid gap-6 md:grid-cols-5">

          {/* Info */}
          <div className="rounded-[2.5rem] bg-[#171717] p-8 text-white md:col-span-2 sm:p-10">

            <span className="text-sm font-bold text-[#ff5c5c]">
              CONTACT
            </span>

            <h2 className="mt-5 text-3xl font-black">
              Let's talk.
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-400">
              Whether you found a bug, have an idea for Linkly or simply
              want to say hello, we're always happy to hear from you.
            </p>

            <div className="mt-10 space-y-5">

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Email
                </p>

                <p className="mt-1 text-sm">
                  hello@linkly.com
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Support
                </p>

                <p className="mt-1 text-sm">
                  support@linkly.com
                </p>
              </div>

            </div>

          </div>

          {/* Form */}
          <div className="rounded-[2.5rem] border border-black/10 bg-white p-8 shadow-sm md:col-span-3 sm:p-10">

            <form className="space-y-5">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#ff5c5c] focus:bg-white focus:ring-4 focus:ring-[#ff5c5c]/10"
                />
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
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#ff5c5c] focus:bg-white focus:ring-4 focus:ring-[#ff5c5c]/10"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  placeholder="How can we help?"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#ff5c5c] focus:bg-white focus:ring-4 focus:ring-[#ff5c5c]/10"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell us what's on your mind..."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#ff5c5c] focus:bg-white focus:ring-4 focus:ring-[#ff5c5c]/10"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-xl bg-[#171717] px-5 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#ff5c5c] hover:shadow-lg"
              >
                Send message →
              </button>

            </form>

          </div>

        </div>

      </section>

    </main>
  );
}