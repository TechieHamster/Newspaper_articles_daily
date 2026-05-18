import React from "react";
import NewspaperScreen from "@/components/NewspaperScreen";
import { lmArticleData } from "@/constants/lmArticleData";
import type { Article } from "@/constants/articleData";

const THEME = { bg: "#14532d", accent: "#4ade80", light: "#f0fdf4" };

const CATEGORIES = [
  "Economy",
  "Markets",
  "Corporate",
  "Technology",
  "Policy",
  "Global",
];

const KEYWORDS: Record<string, string[]> = {
  Technology: ["tech", "ai", "digital", "startup", "fintech", "software"],
  Markets: ["market", "stock", "nifty", "sensex", "fund", "bond", "yield", "equity", "investor"],
  Corporate: ["company", "tata", "reliance", "infosys", "hdfc", "merger", "acquisition"],
  Global: ["us ", "china", "global", "trade", "tariff", "fed", "dollar"],
  Policy: ["rbi", "sebi", "government", "ministry", "policy", "regulation", "budget"],
};

function getCategory(article: Article): string {
  const h = article.headline.toLowerCase();
  for (const [cat, kws] of Object.entries(KEYWORDS)) {
    if (kws.some((k) => h.includes(k))) return cat;
  }
  return "Economy";
}

export default function LiveMintScreen() {
  return (
    <NewspaperScreen
      title="Live Mint"
      headerLabel="CAT NEWSPAPER EXTRACTOR"
      date="May 17, 2026"
      sourceKey="lm"
      articles={lmArticleData}
      theme={THEME}
      categories={CATEGORIES}
      getCategoryForArticle={getCategory}
      showDifficultyBadge={false}
    />
  );
}
