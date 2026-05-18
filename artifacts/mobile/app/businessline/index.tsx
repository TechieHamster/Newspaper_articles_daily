import React from "react";
import NewspaperScreen from "@/components/NewspaperScreen";
import { blArticleData } from "@/constants/blArticleData";
import type { Article } from "@/constants/articleData";

const THEME = { bg: "#0a2740", accent: "#e8a020", light: "#fdf6e8" };

const CATEGORIES = ["Markets", "Economy", "Corporate", "Technology", "Commodities"];

const KEYWORD_MAP: Record<string, string[]> = {
  Technology: ["tcs", "ai system", "software", "tech"],
  Corporate: ["vodafone", "srf", "aditya birla", "tata "],
  Economy: ["bop", "fdi", "rupee", "gdp", "balance of payments", "import", "lpg", "gulf"],
  Markets: ["federal reserve", "bond", "yield", "fund", "contra", "nifty", "gold vs", "equities"],
  Commodities: ["lpg", "crude", "silver", "bullion", "commodity"],
};

function getCategory(article: Article): string {
  const h = article.headline.toLowerCase();
  const b = article.body.toLowerCase().slice(0, 200);
  for (const [cat, kws] of Object.entries(KEYWORD_MAP)) {
    if (kws.some((k) => h.includes(k) || b.includes(k))) return cat;
  }
  return "Economy";
}

export default function BusinessLineScreen() {
  return (
    <NewspaperScreen
      title="Business Line"
      headerLabel="CAT NEWSPAPER EXTRACTOR"
      date="May 17, 2026"
      sourceKey="bl"
      articles={blArticleData}
      theme={THEME}
      categories={CATEGORIES}
      getCategoryForArticle={getCategory}
      showDifficultyBadge
    />
  );
}
