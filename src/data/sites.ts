export interface SiteEntry {
  domain: string;
  name: string;
  descriptor: string;
  live: boolean;
  url: string;
  quote_url: string | null;
  subtype: string;
}

export interface SubtypeMeta {
  slug: string;
  name: string;
  description: string;
}

export const SUBTYPES: SubtypeMeta[] = [
  { slug: "roofing", name: "Roofing", description: "Insurance for roofing contractors, storm restoration, and fireproofing specialists" },
  { slug: "concrete", name: "Concrete & Foundation", description: "Insurance for concrete lifting, concrete repair, slab jacking, and foundation contractors" },
  { slug: "environmental", name: "Environmental & Pollution", description: "Contractor pollution liability and environmental remediation insurance" },
  { slug: "framing", name: "Framing & Lumber", description: "Insurance for framing contractors, gluelam manufacturers, truss builders, and lumber operations" },
  { slug: "excavation", name: "Excavation & Grading", description: "Insurance for excavation, grading, and directional boring contractors" },
  { slug: "roads", name: "Roads & Site Work", description: "Insurance for road contractors, traffic control, sealcoating, sandblasting, and debris removal" },
  { slug: "remodeling", name: "Remodeling & Renovation", description: "Insurance for commercial and residential remodeling and renovation contractors" },
  { slug: "specialty-trades", name: "Specialty Trades", description: "Insurance for glazing, pipeline, waterproofing, metal erection, and coating contractors" },
  { slug: "solar-energy", name: "Solar & Energy", description: "Insurance for solar installation contractors and energy contractors" },
  { slug: "industrial", name: "Industrial & Commercial", description: "Insurance for industrial contractors, construction trades, and building material dealers" },
  { slug: "general", name: "General Contractor", description: "General contractor liability insurance covering all construction trades and project types" },
];

export const SUBTYPE_MAP: Record<string, SubtypeMeta> = Object.fromEntries(
  SUBTYPES.map((st) => [st.slug, st])
);

export const SITES: SiteEntry[] = [
  // Roofing
  { domain: "roofinginsurance.com", name: "Roofing Insurance", descriptor: "Roofing Insurance — fast quotes for licensed roofing contractors", live: true, url: "https://roofinginsurance.com", quote_url: "https://roofinginsurance.com/#quote", subtype: "roofing" },
  { domain: "fireproofinginsurance.com", name: "Fireproofing Insurance", descriptor: "Fireproofing Insurance — fast quotes for licensed contractors", live: true, url: "https://fireproofinginsurance.com", quote_url: "https://fireproofinginsurance.com/#quote", subtype: "roofing" },
  { domain: "stormrestorationinsurance.com", name: "Storm Restoration Insurance", descriptor: "Storm Restoration Insurance — fast quotes for licensed contractors", live: true, url: "https://stormrestorationinsurance.com", quote_url: "https://stormrestorationinsurance.com/#quote", subtype: "roofing" },
  { domain: "dampproofinginsurance.com", name: "Dampproofing Insurance", descriptor: "Dampproofing Insurance — fast quotes for licensed contractors", live: false, url: "https://dampproofinginsurance.com", quote_url: null, subtype: "roofing" },
  { domain: "roofinginsuranceagency.com", name: "Roofing Insurance Agency", descriptor: "Roofing Insurance Agency — fast quotes for licensed contractors", live: false, url: "https://roofinginsuranceagency.com", quote_url: null, subtype: "roofing" },
  { domain: "roofingrepairinsurance.com", name: "Roofing Repair Insurance", descriptor: "Roofing Repair Insurance — fast quotes for licensed contractors", live: false, url: "https://roofingrepairinsurance.com", quote_url: null, subtype: "roofing" },

  // Concrete & Foundation
  { domain: "concreteliftinginsurance.com", name: "Concrete Lifting Insurance", descriptor: "Concrete Lifting Insurance — fast quotes for licensed contractors", live: true, url: "https://concreteliftinginsurance.com", quote_url: "https://concreteliftinginsurance.com/#quote", subtype: "concrete" },
  { domain: "concreterepairinsurance.com", name: "Concrete Repair Insurance", descriptor: "Concrete Repair Insurance — fast quotes for licensed contractors", live: true, url: "https://concreterepairinsurance.com", quote_url: "https://concreterepairinsurance.com/#quote", subtype: "concrete" },
  { domain: "slabjackinginsurance.com", name: "Slab Jacking Insurance", descriptor: "Slab Jacking Insurance — fast quotes for licensed contractors", live: true, url: "https://slabjackinginsurance.com", quote_url: "https://slabjackinginsurance.com/#quote", subtype: "concrete" },
  { domain: "foundationrepairinsurance.com", name: "Foundation Repair Insurance", descriptor: "Foundation Repair Insurance — fast quotes for licensed contractors", live: true, url: "https://foundationrepairinsurance.com", quote_url: "https://foundationrepairinsurance.com/#quote", subtype: "concrete" },

  // Environmental & Pollution
  { domain: "environmentalcontractorsinsurance.com", name: "Environmental Contractors Insurance", descriptor: "Environmental Contractors Insurance — fast quotes for licensed contractors", live: true, url: "https://environmentalcontractorsinsurance.com", quote_url: "https://environmentalcontractorsinsurance.com/#quote", subtype: "environmental" },
  { domain: "constructionpollutioninsurance.com", name: "Construction Pollution Insurance", descriptor: "Construction Pollution Insurance — fast quotes for licensed contractors", live: true, url: "https://constructionpollutioninsurance.com", quote_url: "https://constructionpollutioninsurance.com/#quote", subtype: "environmental" },
  { domain: "debrisremovalinsurance.com", name: "Debris Removal Insurance", descriptor: "Debris Removal Insurance — fast quotes for licensed contractors", live: true, url: "https://debrisremovalinsurance.com", quote_url: "https://debrisremovalinsurance.com/#quote", subtype: "environmental" },
  { domain: "constructionpollutionliabilityinsurance.com", name: "Construction Pollution Liability Insurance", descriptor: "Construction Pollution Liability Insurance — fast quotes for licensed contractors", live: false, url: "https://constructionpollutionliabilityinsurance.com", quote_url: null, subtype: "environmental" },
  { domain: "contractorspollutionliabilityinsurance.com", name: "Contractors Pollution Liability Insurance", descriptor: "Contractors Pollution Liability Insurance — fast quotes for licensed contractors", live: false, url: "https://contractorspollutionliabilityinsurance.com", quote_url: null, subtype: "environmental" },

  // Framing & Lumber
  { domain: "framinginsurance.com", name: "Framing Insurance", descriptor: "Framing Insurance — fast quotes for licensed framing contractors", live: true, url: "https://framinginsurance.com", quote_url: "https://framinginsurance.com/#quote", subtype: "framing" },
  { domain: "gluelaminsurance.com", name: "Glulam Insurance", descriptor: "Glulam Insurance — fast quotes for licensed contractors", live: true, url: "https://gluelaminsurance.com", quote_url: "https://gluelaminsurance.com/#quote", subtype: "framing" },
  { domain: "gluelammanufacturerinsurance.com", name: "Glulam Manufacturer Insurance", descriptor: "Glulam Manufacturer Insurance — fast quotes for licensed contractors", live: true, url: "https://gluelammanufacturerinsurance.com", quote_url: "https://gluelammanufacturerinsurance.com/#quote", subtype: "framing" },
  { domain: "trussmanufacturerinsurance.com", name: "Truss Manufacturer Insurance", descriptor: "Truss Manufacturer Insurance — fast quotes for licensed contractors", live: true, url: "https://trussmanufacturerinsurance.com", quote_url: "https://trussmanufacturerinsurance.com/#quote", subtype: "framing" },
  { domain: "lumberjackinsurance.com", name: "Lumberjack Insurance", descriptor: "Lumberjack Insurance — fast quotes for licensed contractors", live: true, url: "https://lumberjackinsurance.com", quote_url: "https://lumberjackinsurance.com/#quote", subtype: "framing" },
  { domain: "framingcontractorinsurance.com", name: "Framing Contractor Insurance", descriptor: "Framing Contractor Insurance — fast quotes for licensed contractors", live: false, url: "https://framingcontractorinsurance.com", quote_url: null, subtype: "framing" },

  // Excavation & Grading
  { domain: "excavationcontractorinsurance.com", name: "Excavation Contractor Insurance", descriptor: "Excavation Contractor Insurance — fast quotes for licensed contractors", live: true, url: "https://excavationcontractorinsurance.com", quote_url: "https://excavationcontractorinsurance.com/#quote", subtype: "excavation" },
  { domain: "gradinginsurance.com", name: "Grading Insurance", descriptor: "Grading Insurance — fast quotes for licensed contractors", live: true, url: "https://gradinginsurance.com", quote_url: "https://gradinginsurance.com/#quote", subtype: "excavation" },
  { domain: "directionalboringinsurance.com", name: "Directional Boring Insurance", descriptor: "Directional Boring Insurance — fast quotes for licensed contractors", live: true, url: "https://directionalboringinsurance.com", quote_url: "https://directionalboringinsurance.com/#quote", subtype: "excavation" },

  // Roads & Site Work
  { domain: "roadcontractorsinsurance.com", name: "Road Contractors Insurance", descriptor: "Road Contractors Insurance — fast quotes for licensed contractors", live: true, url: "https://roadcontractorsinsurance.com", quote_url: "https://roadcontractorsinsurance.com/#quote", subtype: "roads" },
  { domain: "trafficcontrolinsurance.com", name: "Traffic Control Insurance", descriptor: "Traffic Control Insurance — fast quotes for licensed contractors", live: true, url: "https://trafficcontrolinsurance.com", quote_url: "https://trafficcontrolinsurance.com/#quote", subtype: "roads" },
  { domain: "rolloffdumpsterinsurance.com", name: "Roll-Off Dumpster Insurance", descriptor: "Roll-Off Dumpster Insurance — fast quotes for licensed contractors", live: true, url: "https://rolloffdumpsterinsurance.com", quote_url: "https://rolloffdumpsterinsurance.com/#quote", subtype: "roads" },
  { domain: "sealcoatinginsurance.com", name: "Sealcoating Insurance", descriptor: "Sealcoating Insurance — fast quotes for licensed contractors", live: false, url: "https://sealcoatinginsurance.com", quote_url: null, subtype: "roads" },
  { domain: "sandblastinginsurance.com", name: "Sandblasting Insurance", descriptor: "Sandblasting Insurance — fast quotes for licensed contractors", live: false, url: "https://sandblastinginsurance.com", quote_url: null, subtype: "roads" },

  // Remodeling & Renovation
  { domain: "commercialremodelinginsurance.com", name: "Commercial Remodeling Insurance", descriptor: "Commercial Remodeling Insurance — fast quotes for licensed contractors", live: true, url: "https://commercialremodelinginsurance.com", quote_url: "https://commercialremodelinginsurance.com/#quote", subtype: "remodeling" },
  { domain: "residentialremodelerinsurance.com", name: "Residential Remodeler Insurance", descriptor: "Residential Remodeler Insurance — fast quotes for licensed contractors", live: false, url: "https://residentialremodelerinsurance.com", quote_url: null, subtype: "remodeling" },
  { domain: "residentialremodelinginsurance.com", name: "Residential Remodeling Insurance", descriptor: "Residential Remodeling Insurance — fast quotes for licensed contractors", live: false, url: "https://residentialremodelinginsurance.com", quote_url: null, subtype: "remodeling" },
  { domain: "tracthomecontractorinsurance.com", name: "Tract Home Contractor Insurance", descriptor: "Tract Home Contractor Insurance — fast quotes for licensed contractors", live: false, url: "https://tracthomecontractorinsurance.com", quote_url: null, subtype: "remodeling" },
  { domain: "tracthomecontractorsinsurance.com", name: "Tract Home Contractors Insurance", descriptor: "Tract Home Contractors Insurance — fast quotes for licensed contractors", live: false, url: "https://tracthomecontractorsinsurance.com", quote_url: null, subtype: "remodeling" },

  // Specialty Trades
  { domain: "glazinginsurance.com", name: "Glazing Insurance", descriptor: "Glazing Insurance — fast quotes for licensed glazing contractors", live: true, url: "https://glazinginsurance.com", quote_url: "https://glazinginsurance.com/#quote", subtype: "specialty-trades" },
  { domain: "pipelinerinsurance.com", name: "Pipeliner Insurance", descriptor: "Pipeliner Insurance — fast quotes for licensed contractors", live: true, url: "https://pipelinerinsurance.com", quote_url: "https://pipelinerinsurance.com/#quote", subtype: "specialty-trades" },
  { domain: "waterproofinginsurance.com", name: "Waterproofing Insurance", descriptor: "Waterproofing Insurance — fast quotes for licensed contractors", live: true, url: "https://waterproofinginsurance.com", quote_url: "https://waterproofinginsurance.com/#quote", subtype: "specialty-trades" },
  { domain: "pipelinersinsurance.com", name: "Pipeliners Insurance", descriptor: "Pipeliners Insurance — fast quotes for licensed contractors", live: false, url: "https://pipelinersinsurance.com", quote_url: null, subtype: "specialty-trades" },
  { domain: "metalerectioninsurance.com", name: "Metal Erection Insurance", descriptor: "Metal Erection Insurance — fast quotes for licensed contractors", live: false, url: "https://metalerectioninsurance.com", quote_url: null, subtype: "specialty-trades" },
  { domain: "oilfieldweldinginsurance.com", name: "Oilfield Welding Insurance", descriptor: "Oilfield Welding Insurance — fast quotes for licensed contractors", live: false, url: "https://oilfieldweldinginsurance.com", quote_url: null, subtype: "specialty-trades" },
  { domain: "polyureainsurance.com", name: "Polyurea Insurance", descriptor: "Polyurea Insurance — fast quotes for licensed contractors", live: false, url: "https://polyureainsurance.com", quote_url: null, subtype: "specialty-trades" },

  // Solar & Energy
  { domain: "solarcontractorinsurance.com", name: "Solar Contractor Insurance", descriptor: "Solar Contractor Insurance — fast quotes for licensed contractors", live: false, url: "https://solarcontractorinsurance.com", quote_url: null, subtype: "solar-energy" },
  { domain: "solarcontractorsinsurance.com", name: "Solar Contractors Insurance", descriptor: "Solar Contractors Insurance — fast quotes for licensed contractors", live: false, url: "https://solarcontractorsinsurance.com", quote_url: null, subtype: "solar-energy" },
  { domain: "energycontractorinsurance.com", name: "Energy Contractor Insurance", descriptor: "Energy Contractor Insurance — fast quotes for licensed contractors", live: false, url: "https://energycontractorinsurance.com", quote_url: null, subtype: "solar-energy" },

  // Industrial & Commercial
  { domain: "buildingmaterialdealerinsurance.com", name: "Building Material Dealer Insurance", descriptor: "Building Material Dealer Insurance — fast quotes for licensed contractors", live: true, url: "https://buildingmaterialdealerinsurance.com", quote_url: "https://buildingmaterialdealerinsurance.com/#quote", subtype: "industrial" },
  { domain: "constructiontradesinsurance.com", name: "Construction Trades Insurance", descriptor: "Construction Trades Insurance — fast quotes for licensed contractors", live: true, url: "https://constructiontradesinsurance.com", quote_url: "https://constructiontradesinsurance.com/#quote", subtype: "industrial" },
  { domain: "industrialcontractorinsurance.com", name: "Industrial Contractor Insurance", descriptor: "Industrial Contractor Insurance — fast quotes for licensed contractors", live: false, url: "https://industrialcontractorinsurance.com", quote_url: null, subtype: "industrial" },
  { domain: "industrialcontractorsinsurance.com", name: "Industrial Contractors Insurance", descriptor: "Industrial Contractors Insurance — fast quotes for licensed contractors", live: false, url: "https://industrialcontractorsinsurance.com", quote_url: null, subtype: "industrial" },
  { domain: "papercontractorsinsurance.com", name: "Paper Contractors Insurance", descriptor: "Paper Contractors Insurance — fast quotes for licensed contractors", live: false, url: "https://papercontractorsinsurance.com", quote_url: null, subtype: "industrial" },

  // General Contractor
  { domain: "buycontractorinsurance.com", name: "Buy Contractor Insurance", descriptor: "Buy Contractor Insurance — fast quotes for licensed contractors", live: true, url: "https://buycontractorinsurance.com", quote_url: "https://buycontractorinsurance.com/#quote", subtype: "general" },
  { domain: "contractorinsurance.io", name: "Contractor Insurance", descriptor: "Contractor Insurance — fast quotes for licensed contractors", live: false, url: "https://contractorinsurance.io", quote_url: null, subtype: "general" },
  { domain: "contractorinsurance.ninja", name: "Contractor Insurance Ninja", descriptor: "Contractor Insurance Ninja — fast quotes for licensed contractors", live: false, url: "https://contractorinsurance.ninja", quote_url: null, subtype: "general" },
  { domain: "contractorinsurancediva.com", name: "Contractor Insurance Diva", descriptor: "Contractor Insurance Diva — fast quotes for licensed contractors", live: false, url: "https://contractorinsurancediva.com", quote_url: null, subtype: "general" },
  { domain: "contractorinsuranceinfo.com", name: "Contractor Insurance Info", descriptor: "Contractor Insurance Info — fast quotes for licensed contractors", live: false, url: "https://contractorinsuranceinfo.com", quote_url: null, subtype: "general" },
  { domain: "contractorinsurancenetwork.com", name: "Contractor Insurance Network", descriptor: "Contractor Insurance Network — your hub for contractor insurance niches", live: false, url: "https://contractorinsurancenetwork.com", quote_url: null, subtype: "general" },
  { domain: "contractorinsuranceschool.com", name: "Contractor Insurance School", descriptor: "Contractor Insurance School — fast quotes for licensed contractors", live: false, url: "https://contractorinsuranceschool.com", quote_url: null, subtype: "general" },
  { domain: "contractorsprofessionalliabilityinsurance.com", name: "Contractors Professional Liability Insurance", descriptor: "Contractors Professional Liability Insurance — fast quotes for licensed contractors", live: false, url: "https://contractorsprofessionalliabilityinsurance.com", quote_url: null, subtype: "general" },
  { domain: "projectspecificcontractorinsurance.com", name: "Project-Specific Contractor Insurance", descriptor: "Project-Specific Contractor Insurance — fast quotes for licensed contractors", live: false, url: "https://projectspecificcontractorinsurance.com", quote_url: null, subtype: "general" },
  { domain: "projectspecificcontractorsinsurance.com", name: "Project-Specific Contractors Insurance", descriptor: "Project-Specific Contractors Insurance — fast quotes for licensed contractors", live: false, url: "https://projectspecificcontractorsinsurance.com", quote_url: null, subtype: "general" },
  { domain: "coloradocontractorinsurance.co", name: "Colorado Contractor Insurance", descriptor: "Colorado Contractor Insurance — fast quotes for licensed contractors", live: false, url: "https://coloradocontractorinsurance.co", quote_url: null, subtype: "general" },
  { domain: "internationalcontractorsinsurance.com", name: "International Contractors Insurance", descriptor: "International Contractors Insurance — fast quotes for licensed contractors", live: false, url: "https://internationalcontractorsinsurance.com", quote_url: null, subtype: "general" },
  { domain: "internationalcontractorsinsurancecompanyinc.com", name: "International Contractors Insurance Company Inc", descriptor: "International Contractors Insurance Company Inc — fast quotes for licensed contractors", live: false, url: "https://internationalcontractorsinsurancecompanyinc.com", quote_url: null, subtype: "general" },
];

export const TOTAL = SITES.length;
export const LIVE_COUNT = SITES.filter((s) => s.live && s.quote_url).length;

export function getSubtypeStats(): Record<string, { total: number; live: number }> {
  const stats: Record<string, { total: number; live: number }> = {};
  for (const site of SITES) {
    if (!stats[site.subtype]) stats[site.subtype] = { total: 0, live: 0 };
    stats[site.subtype].total++;
    if (site.live && site.quote_url) stats[site.subtype].live++;
  }
  return stats;
}

export function getSitesBySubtype(slug: string): SiteEntry[] {
  return SITES.filter((s) => s.subtype === slug);
}
