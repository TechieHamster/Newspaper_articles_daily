import React from "react";
import NewspaperScreen from "@/components/NewspaperScreen";
import { bsArticleData } from "@/constants/bsArticleData";
import type { Article } from "@/constants/articleData";

const THEME = { bg: "#7f1d1d", accent: "#fca5a5", light: "#fff1f2" };

const CATEGORIES = [
  "Economy",
  "Markets",
  "Corporate",
  "Policy",
  "Global",
  "Banking",
];

const KEYWORDS: Record<string, string[]> = {
  Banking: ["bank", "rbi", "nbfc", "lending", "credit", "loan"],
  Markets: ["market", "stock", "nifty", "sensex", "fund", "bond", "yield", "equity", "investor"],
  Corporate: ["company", "tata", "reliance", "infosys", "hdfc", "merger", "acquisition"],
  Global: ["us ", "china", "global", "trade", "tariff", "fed", "dollar"],
  Policy: ["sebi", "government", "ministry", "policy", "regulation", "budget", "rbi"],
};

function getCategory(article: Article): string {
  const h = article.headline.toLowerCase();
  for (const [cat, kws] of Object.entries(KEYWORDS)) {
    if (kws.some((k) => h.includes(k))) return cat;
  }
  return "Economy";
}

export default function BusinessStandardScreen() {
  return (
    <NewspaperScreen
      title="Business Standard"
      headerLabel="CAT NEWSPAPER EXTRACTOR"
      date="May 17, 2026"
      sourceKey="bs"
      articles={bsArticleData}
      theme={THEME}
      categories={CATEGORIES}
      getCategoryForArticle={getCategory}
      showDifficultyBadge={false}
    />
  );
}
