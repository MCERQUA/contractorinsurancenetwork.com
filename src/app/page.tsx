import type { Metadata } from "next";
import { ContractorBrowser } from "@/components/ContractorBrowser";
import { SITES, SUBTYPES, TOTAL, LIVE_COUNT, getSubtypeStats } from "@/data/sites";

export const metadata: Metadata = {
  title: "Contractor Insurance Network — 62 Contractor Insurance Niches",
  description:
    "Browse 62 contractor and construction insurance niches — roofing, concrete, excavation, framing, environmental, specialty trades, and more. Contractors Choice Agency. Licensed all 50 states.",
  alternates: { canonical: "https://contractorinsurancenetwork.com" },
};

const subtypeStats = getSubtypeStats();

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">Contractors Choice Agency &middot; NPN #8608479</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Contractor Insurance for{" "}
              <span className="text-blue-500">62 Specialty Niches</span>
            </h1>
            <p className="mt-4 text-slate-600 text-base md:text-lg max-w-2xl leading-relaxed">
              From roofing and concrete to excavation, environmental, and specialty trades — find specialist coverage for your contracting niche. A-rated carriers. All 50 states. 15-minute quotes.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full font-medium">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                {LIVE_COUNT} niches live now
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full font-medium">
                {TOTAL} total contractor niches
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full font-medium">
                Licensed all 50 states
              </span>
            </div>
          </div>

          {/* Subtype quick-nav */}
          <div className="mt-8 flex flex-wrap gap-2">
            {SUBTYPES.map((st) => (
              <a
                key={st.slug}
                href={`/category/${st.slug}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-700 hover:border-blue-300 hover:text-blue-600 transition-colors"
              >
                {st.name}
                <span className="text-slate-400">{subtypeStats[st.slug]?.total ?? 0}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Directory browser */}
      <ContractorBrowser
        sites={SITES}
        subtypes={SUBTYPES}
        subtypeStats={subtypeStats}
        total={TOTAL}
        liveCount={LIVE_COUNT}
      />

      {/* Lead form */}
      <section id="lead-form" className="bg-blue-600 py-14 mt-4">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Don&rsquo;t see your trade?</h2>
            <p className="mt-2 text-blue-100 text-sm">
              Describe your contracting business below and we&rsquo;ll find the right coverage. We insure hundreds of contractor niches across all 50 states.
            </p>
          </div>
          <form
            name="lead"
            method="POST"
            action="/api/lead"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="bg-white rounded-2xl p-7 md:p-9 space-y-4"
          >
            <input type="hidden" name="form-name" value="lead" />
            <input name="bot-field" type="hidden" className="hidden" />

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Your name *</label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Jane Smith"
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Email *</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Describe your business and what coverage you need *</label>
              <textarea
                name="business_type"
                required
                rows={4}
                placeholder="We do roofing and storm restoration in Texas and need GL + contractors liability. About $1.2M revenue, 8 employees..."
                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors text-sm"
            >
              Find my coverage
            </button>
            <p className="text-center text-xs text-slate-400">No spam. We&rsquo;ll only contact you about your insurance needs.</p>
          </form>
        </div>
      </section>
    </main>
  );
}
