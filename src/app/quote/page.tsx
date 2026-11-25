"use client";

import { QuoteForm, type LegacyQuestion } from "@/components/quote/QuoteForm";

const CONTRACTOR_TYPES = [
  "General contractor",
  "Specialty trade contractor",
  "Subcontractor",
  "Remodeling / renovation contractor",
  "Other",
];

const SERVICE_TYPES = ["Quote for new coverage", "Renewal / remarket", "Other"];
const YEARS_OPTIONS = ["Less than 1", "1-2", "3-5", "6-10", "11-20", "20+"];

// Pre-port field names with no canonical twin: still posted under their own names (optional).
const LEGACY: LegacyQuestion[] = [
  { name: "serviceType", label: "What do you need?", type: "select", options: SERVICE_TYPES },
  { name: "yearsInBusiness", label: "Years in business", type: "select", options: YEARS_OPTIONS },
  { name: "estimated_employee_count", label: "Estimated employees, next 12 months", type: "number" },
  { name: "estimated_employee_payroll", label: "Estimated employee payroll, next 12 months" },
  { name: "estimated_gross_sales", label: "Estimated gross sales, next 12 months" },
  { name: "estimated_material_costs", label: "Estimated material costs, next 12 months" },
  { name: "estimated_subcontractor_expenses", label: "Estimated subcontractor expenses, next 12 months" },
  { name: "percent_subcontractors_insured", label: "Percent of subcontractors insured", type: "number" },
  { name: "coverage_for_uninsured_subcontractors", label: "Need coverage for uninsured subcontractors?", type: "select", options: ["Yes", "No"] },
  { name: "prior_year_employee_count", label: "Employees, last year", type: "number" },
  { name: "prior_year_employee_payroll", label: "Employee payroll, last year" },
  { name: "annual_gross_sales", label: "Annual gross sales" },
  { name: "class_code_1", label: "Class code 1" },
  { name: "class_code_2", label: "Class code 2" },
  { name: "class_code_3", label: "Class code 3" },
  { name: "class_code_4", label: "Class code 4" },
  { name: "class_code_5", label: "Class code 5" },
  { name: "residential_vs_commercial", label: "Residential vs commercial split" },
  { name: "new_vs_existing_construction", label: "New construction vs existing / remodel" },
  { name: "largest_projects", label: "5 largest projects ever (description + dollar amount)", type: "textarea" },
];

// Pre-port names that mirror a canonical answer the shared form already asks: derived, never asked twice.
const deriveLegacy = (d: Record<string, string>): Record<string, string> => ({
  street_address: d.address ?? "",
  message: d.notes ?? "",
  business_description: d.businessDescription ?? "",
  year_business_started: d.yearBusinessStarted ?? "",
  prior_year_gross_sales: d.lastGrossSales ?? "",
  prior_year_subcontractor_expenses: d.lastSubcontractingCosts ?? "",
  subcontractors_have_insurance: d.subsCarryInsurance ?? "",
  coverage_types: d.coverageTypes ?? "",
  prior_carrier_name: d.currentCarrier ?? "",
  prior_policy_expiration: d.currentPolicyExpiration ?? "",
});

export default function QuotePage() {
  return (
    <section className="bg-blue-600 py-14">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-white">Get a contractor insurance quote</h1>
          <p className="mt-2 text-blue-100 text-sm">
            Tell us about your contracting business. We shop A-rated markets and come back with real quotes &mdash; no obligation.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-7 md:p-9">
          <QuoteForm
            formName="lead"
            tradeName="Contractor"
            endpoint="/__forms.html"
            options={{ yn: true, feinRequired: false }}
            tradeTypeOptions={CONTRACTOR_TYPES}
            defaults={{ coverageTypes: "General Liability" }}
            legacyQuestions={LEGACY}
            deriveLegacy={deriveLegacy}
          />
        </div>
      </div>
    </section>
  );
}
