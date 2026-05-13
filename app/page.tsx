export default function Page() {
  const faqs = [
    {
      q: 'Which regulations does this check against?',
      a: 'We audit against FTC Click-to-Cancel rules, California Automatic Renewal Law (ARL), New York subscription law, and key provisions from other US states with active enforcement.'
    },
    {
      q: 'How does the automated audit work?',
      a: 'Submit your cancellation URL and we simulate a user journey, checking for dark patterns, hidden steps, missing disclosures, and required confirmation flows — then score each requirement.'
    },
    {
      q: 'Do I need technical access to my platform?',
      a: 'No. Just provide the public-facing cancellation URL. Our crawler handles the rest and delivers a PDF-ready compliance report within minutes.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold bg-[#161b22] border border-[#30363d] text-[#58a6ff] uppercase tracking-widest">
          Legal Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Is Your Cancellation Flow<br />
          <span className="text-[#58a6ff]">Actually Legal?</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Audit your SaaS cancellation flow against FTC Click-to-Cancel rules and state laws.
          Get a compliance score, identify gaps, and receive specific fixes — before regulators do.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block px-8 py-4 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-lg hover:bg-[#79b8ff] transition-colors"
        >
          Start Compliance Audit — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No contracts. Instant access.</p>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-[#8b949e]">
          <span className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> FTC Click-to-Cancel</span>
          <span className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> California ARL</span>
          <span className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> NY Subscription Law</span>
          <span className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> Dark Pattern Detection</span>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { step: '1', title: 'Submit URL', desc: 'Paste your cancellation page URL into the dashboard.' },
            { step: '2', title: 'Automated Audit', desc: 'We crawl and test your flow against 40+ compliance rules.' },
            { step: '3', title: 'Get Your Report', desc: 'Receive a scored report with prioritized, actionable fixes.' }
          ].map(({ step, title, desc }) => (
            <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-[#58a6ff] font-extrabold text-2xl mb-2">{step}</div>
              <div className="font-semibold text-white mb-1">{title}</div>
              <div className="text-sm text-[#8b949e]">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$15<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stay compliant</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited cancellation flow audits',
              'FTC + multi-state rule checks',
              'Dark pattern detection',
              'Compliance score & gap report',
              'Actionable fix recommendations',
              'PDF export for legal teams'
            ].map(item => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] font-bold mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-8">
        &copy; {new Date().getFullYear()} Cancellation Compliance Checker. Not legal advice.
      </footer>
    </main>
  )
}
