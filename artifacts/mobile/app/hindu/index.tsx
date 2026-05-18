import React from "react";
import NewspaperScreen from "@/components/NewspaperScreen";
import {
  articleData,
  categoryColors,
  defaultCategoryColor,
  type Article,
} from "@/constants/articleData";

const THEME = { bg: "#1c3557", accent: "#f59e0b", light: "#fefce8" };

const SHORT_LABELS: Record<string, string> = {
  "POLITY · GOVERNANCE": "Polity",
  "INTERNATIONAL · DIPLOMACY": "International",
  "ENVIRONMENT · SOCIETY": "Environment",
  "ECONOMY · POLICY": "Economy",
  "EDUCATION · REFORMS": "Education",
  "JUDICIARY · LAW": "Judiciary",
  "FAQ · EXPLAINER": "FAQ",
  "PROFILE · POLITICS": "Profile",
  "SCIENCE · RESEARCH": "Science",
};

const CATEGORIES = Object.values(SHORT_LABELS);

function getCategory(article: Article): string {
  return SHORT_LABELS[article.category] ?? article.category;
}

export default function HinduScreen() {
  return (
    <NewspaperScreen
      title="The Hindu"
      headerLabel="CAT NEWSPAPER EXTRACTOR"
      date="May 17, 2026"
      sourceKey="th"
      articles={articleData}
      theme={THEME}
      categories={CATEGORIES}
      getCategoryForArticle={getCategory}
      showDifficultyBadge={false}
    />
  );
}
