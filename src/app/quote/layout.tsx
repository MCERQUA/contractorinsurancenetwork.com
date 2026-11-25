import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Contractor Insurance Quote",
  description:
    "Request a commercial contractor insurance quote. Contractors Choice Agency shops A-rated markets for general liability, contractors pollution and more.",
  alternates: { canonical: "/quote" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
