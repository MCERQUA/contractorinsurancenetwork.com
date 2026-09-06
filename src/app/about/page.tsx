import type { Metadata } from "next";
import { TOTAL, LIVE_COUNT } from "@/data/sites";

export const metadata: Metadata = {
  title: "About — Contractor Insurance Network",
  description:
    "Contractors Choice Agency built this contractor insurance network to connect contractors with the right specialty coverage. Founded 2005. Licensed all 50 states. NPN #8608479.",
  alternates: { canonical: "https://contractorinsurancenetwork.com/about" },
};

export default function AboutPage() {
  return (
    <main>
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <a href="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors mb-6">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to all niches
          </a>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">About Contractor Insurance Network</h1>
          <div className="mt-8 prose prose-slate max-w-none text-sm leading-relaxed space-y-6">
            <p className="text-base text-slate-700">
              <strong>contractorinsurancenetwork.com</strong> is a specialty sub-hub built by Contractors Choice Agency to help contractors find the right insurance coverage fast — organized by trade and niche.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 not-prose">
              {[
                { label: "Contractor niches", value: TOTAL.toString() },
                { label: "Live now with quotes", value: LIVE_COUNT.toString() },
                { label: "States licensed", value: "50" },
              ].map((stat) => (
                <div key={stat.label} className="bg-blue-50 border border-blue-100 rounded-xl p-5 text-center">
                  <p className="text-3xl font-black text-blue-600">{stat.value}</p>
                  <p className="text-xs text-slate-600 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <h2 className="text-xl font-bold text-slate-900 mt-8">Who we are</h2>
            <p className="text-slate-600">
              Contractors Choice Agency (CCA) is a specialty insurance agency founded in 2005 by Josh Cotner in Chandler, Arizona. We focus exclusively on specialty and niche contractor insurance — trades and industries that standard agencies overlook or miswrite.
            </p>
            <p className="text-slate-600">
              Over 20 years, we&rsquo;ve built deep expertise across contractor niches: roofing, concrete lifting, excavation, environmental remediation, framing, glazing, pipeline, and dozens more. This network exists because every contractor deserves insurance written by someone who understands their trade.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8">Part of the Specialty Insurance Network</h2>
            <p className="text-slate-600">
              This site is a focused sub-hub covering contractors and construction trades. For insurance across all specialty industries — trucking, spray foam, high-risk, equipment, and more — visit{" "}
              <a href="https://specialtyinsurance.com" className="text-blue-600 hover:underline">specialtyinsurance.com</a>, our full 282-niche directory.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8">How this directory works</h2>
            <p className="text-slate-600">
              Each card represents a contractor insurance niche we serve or are actively building a program for. Cards marked <strong>Get a quote</strong> link directly to a live site where you can request a quote immediately. Cards marked <strong>Coming soon</strong> represent niches we&rsquo;re preparing programs for — use the form below to get on the early list.
            </p>
            <p className="text-slate-600">
              All programs are backed by A-rated (A.M. Best) carriers. We write admitted and E&amp;S (excess and surplus) lines across all 50 states.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8">Contact</h2>
            <ul className="text-slate-600 space-y-1 not-prose list-none">
              <li><strong>Phone:</strong> <a href="tel:+18449675247" className="text-blue-600 hover:underline">844-967-5247</a></li>
              <li><strong>Email:</strong> <a href="mailto:josh@contractorschoiceagency.com" className="text-blue-600 hover:underline">josh@contractorschoiceagency.com</a></li>
              <li><strong>Address:</strong> 12220 E Riggs Road, Suite #104, Chandler, AZ 85249</li>
              <li><strong>NPN:</strong> #8608479</li>
              <li><strong>Founded:</strong> 2005</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section id="lead-form" className="bg-blue-600 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white">Need contractor coverage?</h2>
            <p className="mt-2 text-blue-100 text-sm">Tell us about your trade — we&rsquo;ll find the right market.</p>
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
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Describe your business *</label>
              <textarea name="business_type" required rows={3} placeholder="What contracting trade do you work in and what coverage do you need?" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 resize-none" />
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
