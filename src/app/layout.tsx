import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Contractor Insurance Network — 62 Contractor Insurance Niches",
    template: "%s | Contractor Insurance Network",
  },
  description:
    "Find specialist insurance for 62 contractor and construction niches — roofing, concrete, excavation, framing, environmental, and more. Contractors Choice Agency. Licensed all 50 states.",
  metadataBase: new URL("https://contractorinsurancenetwork.com"),
  openGraph: {
    siteName: "Contractor Insurance Network",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50">
        {/* Network banner */}
        <div className="bg-blue-50 border-b border-blue-100 text-center py-2 px-4 text-xs text-blue-700">
          Part of the Specialty Insurance Network &mdash;{" "}
          <a href="https://specialtyinsurance.com" className="font-semibold underline hover:text-blue-900 transition-colors">
            browse all niches at specialtyinsurance.com
          </a>
        </div>

        <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14">
              <a href="/" className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-blue-500 flex items-center justify-center text-white text-sm font-black">C</span>
                <span className="font-bold text-slate-900 text-sm leading-tight">Contractor<br /><span className="font-normal text-slate-500">Insurance Network</span></span>
              </a>
              <nav className="hidden sm:flex items-center gap-6 text-sm">
                <a href="/" className="text-slate-600 hover:text-blue-600 transition-colors">All Niches</a>
                <a href="/about" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
                <a href="#lead-form" className="btn-primary text-xs px-4 py-2">Get Coverage</a>
              </nav>
            </div>
          </div>
        </header>

        {children}

        <footer className="bg-slate-900 text-slate-400 py-10 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-3 gap-8 text-sm">
              <div>
                <p className="text-white font-semibold mb-2">Contractor Insurance Network</p>
                <p>62 contractor insurance niches — a division of Contractors Choice Agency. Licensed all 50 states. NPN #8608479.</p>
              </div>
              <div>
                <p className="text-white font-semibold mb-2">Contact</p>
                <p>844-967-5247</p>
                <p>josh@contractorschoiceagency.com</p>
                <p>12220 E Riggs Road, Suite #105<br />Chandler, AZ 85249</p>
              </div>
              <div>
                <p className="text-white font-semibold mb-2">Contractor Niches</p>
                <ul className="space-y-1">
                  <li><a href="/category/roofing" className="hover:text-white transition-colors">Roofing</a></li>
                  <li><a href="/category/concrete" className="hover:text-white transition-colors">Concrete &amp; Foundation</a></li>
                  <li><a href="/category/excavation" className="hover:text-white transition-colors">Excavation &amp; Grading</a></li>
                  <li><a href="/category/framing" className="hover:text-white transition-colors">Framing &amp; Lumber</a></li>
                  <li><a href="/category/environmental" className="hover:text-white transition-colors">Environmental &amp; Pollution</a></li>
                  <li><a href="/category/specialty-trades" className="hover:text-white transition-colors">Specialty Trades</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-800 text-xs">
              <p>© 2026 Contractors Choice Agency, LLC. All rights reserved. Founded 2005.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
