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
            action="/__forms.html"
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
          
        {/* complete contractor field set — forms-required-fields.json */}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Street address</label>
          <input type="text" name="street_address" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">City</label>
          <input type="text" name="city" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">State</label>
          <input type="text" name="state" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">ZIP code</label>
          <input type="text" name="zip" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Prior year gross sales</label>
          <input type="text" name="prior_year_gross_sales" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Prior year subcontractor expenses</label>
          <input type="text" name="prior_year_subcontractor_expenses" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Prior year employee count</label>
          <input type="number" name="prior_year_employee_count" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Prior year employee payroll</label>
          <input type="text" name="prior_year_employee_payroll" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Estimated gross sales (next 12 months)</label>
          <input type="text" name="estimated_gross_sales" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Estimated subcontractor expenses (next 12 months)</label>
          <input type="text" name="estimated_subcontractor_expenses" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Estimated employee count (year total)</label>
          <input type="number" name="estimated_employee_count" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Estimated employee annual payroll</label>
          <input type="text" name="estimated_employee_payroll" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Estimated material costs</label>
          <input type="text" name="estimated_material_costs" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Do your subcontractors have insurance?</label>
          <select name="subcontractors_have_insurance" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"><option value="">Select...</option><option value="Yes">Yes</option><option value="No">No</option></select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">What percent of your subcontractors have insurance?</label>
          <input type="number" name="percent_subcontractors_insured" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Do you need coverage for uninsured subcontractors?</label>
          <select name="coverage_for_uninsured_subcontractors" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"><option value="">Select...</option><option value="Yes">Yes</option><option value="No">No</option></select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Coverages requested (checkboxes)</label>
          <label className="inline-flex items-center gap-2 mr-4"><input type="checkbox" name="coverage_types" value="General liability" /><span>General liability</span></label>
          <label className="inline-flex items-center gap-2 mr-4"><input type="checkbox" name="coverage_types" value="Commercial auto" /><span>Commercial auto</span></label>
          <label className="inline-flex items-center gap-2 mr-4"><input type="checkbox" name="coverage_types" value="Workers compensation" /><span>Workers compensation</span></label>
          <label className="inline-flex items-center gap-2 mr-4"><input type="checkbox" name="coverage_types" value="Umbrella / excess" /><span>Umbrella / excess</span></label>
          <label className="inline-flex items-center gap-2 mr-4"><input type="checkbox" name="coverage_types" value="Pollution liability" /><span>Pollution liability</span></label>
          <label className="inline-flex items-center gap-2 mr-4"><input type="checkbox" name="coverage_types" value="Professional liability" /><span>Professional liability</span></label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Annual gross sales</label>
          <input type="text" name="annual_gross_sales" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Year business started</label>
          <input type="number" name="year_business_started" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Description of business</label>
          <textarea name="business_description" rows={3} className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Class code 1 (+ % of operations)</label>
          <input type="text" name="class_code_1" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Class code 2 (+ % of operations)</label>
          <input type="text" name="class_code_2" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Class code 3 (+ % of operations)</label>
          <input type="text" name="class_code_3" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Class code 4 (+ % of operations)</label>
          <input type="text" name="class_code_4" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Class code 5 (+ % of operations)</label>
          <input type="text" name="class_code_5" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Residential vs commercial split</label>
          <input type="text" name="residential_vs_commercial" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">New construction vs existing / remodel</label>
          <input type="text" name="new_vs_existing_construction" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">5 largest projects ever (description + dollar amount)</label>
          <textarea name="largest_projects" rows={3} className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Prior insurance carrier name</label>
          <input type="text" name="prior_carrier_name" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Prior policy number</label>
          <input type="text" name="prior_policy_number" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Prior policy expiration date</label>
          <input type="date" name="prior_policy_expiration" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Phone number</label>
          <input type="text" name="phone" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
        </div>
</form>
        </div>
      </section>
    </main>
  );
}
