"use client";

import { useState, useMemo } from "react";
import type { SiteEntry, SubtypeMeta } from "@/data/sites";

function NicheCard({ site }: { site: SiteEntry }) {
  const isLive = site.live && site.quote_url;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col gap-3 hover:border-blue-300 hover:shadow-sm transition-all">
      <div className="min-w-0">
        <p className="font-bold text-slate-900 text-sm leading-tight truncate">{site.name}</p>
        <p className="text-xs text-slate-400 mt-0.5 truncate">{site.domain}</p>
      </div>

      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed flex-grow">{site.descriptor}</p>

      <div>
        {isLive ? (
          <a
            href={site.quote_url!}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            Get a quote
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        ) : (
          <span className="inline-flex items-center text-xs font-semibold text-slate-400 bg-slate-50 border border-slate-200 rounded-full px-3 py-1">
            Coming soon
          </span>
        )}
      </div>
    </div>
  );
}

interface Props {
  sites: SiteEntry[];
  subtypes: SubtypeMeta[];
  subtypeStats: Record<string, { total: number; live: number }>;
  total: number;
  liveCount: number;
}

export function ContractorBrowser({ sites, subtypes, subtypeStats, total, liveCount }: Props) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    return sites.filter(
      (s) =>
        s.domain.toLowerCase().includes(q) ||
        s.name.toLowerCase().includes(q) ||
        s.descriptor.toLowerCase().includes(q) ||
        s.subtype.toLowerCase().includes(q)
    );
  }, [query, sites]);

  const bySub = useMemo(() => {
    const map: Record<string, SiteEntry[]> = {};
    for (const s of sites) {
      if (!map[s.subtype]) map[s.subtype] = [];
      map[s.subtype].push(s);
    }
    return map;
  }, [sites]);

  return (
    <>
      {/* Search bar */}
      <div className="sticky top-14 z-30 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="relative max-w-xl">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 111 11a6 6 0 0116 0z" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Search ${total} contractor insurance niches...`}
              className="w-full pl-10 pr-10 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 bg-slate-50"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                aria-label="Clear search"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          {query && (
            <p className="text-xs text-slate-500 mt-1.5">
              {filtered?.length ?? 0} result{filtered?.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
            </p>
          )}
        </div>
      </div>

      {/* Results */}
      {filtered !== null ? (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {filtered.length === 0 ? (
            <p className="text-slate-500 text-center py-16">No niches match &ldquo;{query}&rdquo;. Try a broader search term.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((s) => <NicheCard key={s.domain} site={s} />)}
            </div>
          )}
        </section>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
          {subtypes.map((st) => {
            const catSites = bySub[st.slug] ?? [];
            if (catSites.length === 0) return null;
            const stats = subtypeStats[st.slug];
            return (
              <section key={st.slug} id={st.slug}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">{st.name}</h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {stats?.live ?? 0} live &middot; {stats?.total ?? catSites.length} total
                    </p>
                  </div>
                  <a href={`/category/${st.slug}`} className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1">
                    View all
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {catSites.map((s) => <NicheCard key={s.domain} site={s} />)}
                </div>
              </section>
            );
          })}
        </div>
      )}
    </>
  );
}
