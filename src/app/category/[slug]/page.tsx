import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContractorBrowser } from "@/components/ContractorBrowser";
import { SUBTYPES, SUBTYPE_MAP, getSitesBySubtype, getSubtypeStats } from "@/data/sites";

export function generateStaticParams() {
  return SUBTYPES.map((st) => ({ slug: st.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const st = SUBTYPE_MAP[slug];
  if (!st) return {};
  const sites = getSitesBySubtype(slug);
  const liveCount = sites.filter((s) => s.live && s.quote_url).length;
  return {
    title: `${st.name} Contractor Insurance — ${sites.length} Specialty Niches`,
    description: `Browse ${sites.length} ${st.name.toLowerCase()} contractor insurance niches. ${liveCount} live with immediate quotes. Contractors Choice Agency — all 50 states.`,
    alternates: { canonical: `https://contractorinsurancenetwork.com/category/${slug}` },
  };
}

const subtypeStats = getSubtypeStats();

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const st = SUBTYPE_MAP[slug];
  if (!st) notFound();

  const sites = getSitesBySubtype(slug);
  const liveCount = sites.filter((s) => s.live && s.quote_url).length;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://contractorinsurancenetwork.com" },
      { "@type": "ListItem", position: 2, name: st.name, item: `https://contractorinsurancenetwork.com/category/${slug}` },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <a href="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors mb-5">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            All contractor niches
          </a>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">{st.name} Insurance</h1>
          <p className="mt-2 text-slate-500 text-sm">
            {liveCount} live &middot; {sites.length} total niches
          </p>
          <p className="mt-3 text-slate-600 text-sm max-w-2xl">
            {st.description}. A-rated carriers, licensed all 50 states. Contractors Choice Agency — NPN #8608479.
          </p>
        </div>
      </section>

      <ContractorBrowser
        sites={sites}
        subtypes={[st]}
        subtypeStats={subtypeStats}
        total={sites.length}
        liveCount={liveCount}
      />

      {/* Lead form */}
      <section id="lead-form" className="bg-blue-600 py-14 mt-4">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white">Need coverage for your {st.name.toLowerCase()} business?</h2>
            <p className="mt-2 text-blue-100 text-sm">15-minute quotes. A-rated markets. All 50 states.</p>
          </div>
          <form
            name="lead"
            method="POST"
            action="/api/lead"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="bg-white rounded-2xl p-7 space-y-4"
          >
            <input type="hidden" name="form-name" value="lead" />
            <input type="hidden" name="category" value={st.name} />
            <input name="bot-field" type="hidden" className="hidden" />
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Your name *</label>
                <input name="name" type="text" required placeholder="Jane Smith" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Email *</label>
                <input name="email" type="email" required placeholder="you@company.com" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Describe your business and coverage needs *</label>
              <textarea name="business_type" required rows={3} placeholder={`Tell us about your ${st.name.toLowerCase()} business and what coverage you need...`} className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 resize-none" />
            </div>
            <button type="submit" className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors text-sm">
              Find my coverage
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
