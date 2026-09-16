export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ee] text-[#171717]">

      {/* Background decorations */}
      <div className="pointer-events-none fixed left-[-120px] top-40 h-80 w-80 rounded-full bg-[#ffb4a8]/30 blur-3xl" />

      <div className="pointer-events-none fixed bottom-[-120px] right-[-100px] h-96 w-96 rounded-full bg-[#ffd6cf]/40 blur-3xl" />

      {/* Header */}
      <section className="mx-auto max-w-4xl px-6 pb-12 pt-32">

        <span className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold shadow-sm">
          Legal
        </span>

        <h1 className="mt-7 text-5xl font-black tracking-tight sm:text-6xl">
          Privacy
          <span className="text-[#ff5c5c]"> Policy.</span>
        </h1>

        <p className="mt-5 text-sm text-gray-500">
          Last updated: August 2026
        </p>

      </section>

      {/* Policy */}
      <section className="mx-auto max-w-4xl px-6 pb-24">

        <div className="rounded-[2.5rem] border border-black/10 bg-white p-8 shadow-sm sm:p-12">

          {/* Introduction */}
          <div>
            <h2 className="text-2xl font-black">
              1. Introduction
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Welcome to Linkly. We respect your privacy and want you to
              understand how information is handled when you use our
              service.
            </p>
          </div>

          {/* Information */}
          <div className="mt-10">
            <h2 className="text-2xl font-black">
              2. Information we collect
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              When you create an account, Linkly may collect information
              such as your name, email address, username and information
              you choose to add to your Linkly page.
            </p>
          </div>

          {/* How we use it */}
          <div className="mt-10">
            <h2 className="text-2xl font-black">
              3. How we use your information
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              We use the information you provide to create and operate
              your Linkly account, provide the service, maintain your
              page and communicate with you when necessary.
            </p>
          </div>

          {/* Public information */}
          <div className="mt-10">
            <h2 className="text-2xl font-black">
              4. Public information
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Information you intentionally add to your public Linkly
              page may be visible to anyone who visits your page. You
              should avoid adding information that you do not want to
              make publicly accessible.
            </p>
          </div>

          {/* Security */}
          <div className="mt-10">
            <h2 className="text-2xl font-black">
              5. Data security
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              We take reasonable steps to protect the information
              associated with your account. However, no online service
              can guarantee complete security.
            </p>
          </div>

          {/* Third parties */}
          <div className="mt-10">
            <h2 className="text-2xl font-black">
              6. Third-party services
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Linkly may use third-party services to provide features
              such as authentication, hosting, databases or analytics.
              Those services may process information according to their
              own privacy policies.
            </p>
          </div>

          {/* Your choices */}
          <div className="mt-10">
            <h2 className="text-2xl font-black">
              7. Your choices
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              You can manage the information displayed on your Linkly
              page through your account. If you have questions about
              your personal information, you can contact us.
            </p>
          </div>

          {/* Changes */}
          <div className="mt-10">
            <h2 className="text-2xl font-black">
              8. Changes to this policy
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              We may update this Privacy Policy as Linkly develops.
              When changes are made, the updated version will be
              published on this page.
            </p>
          </div>

          {/* Contact */}
          <div className="mt-10 rounded-2xl bg-[#fff1ee] p-6">

            <h2 className="font-black">
              Questions about privacy?
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              If you have any questions about this Privacy Policy,
              please contact us.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}