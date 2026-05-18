/**
 * BUSINESS STANDARD — CAT Article Data
 * ─────────────────────────────────────────────────────────────────────────
 * HOW TO ADD NEW ARTICLES:
 *
 * 1. Copy one of the article objects below and paste it after the last one.
 * 2. Give it a unique `id` (use 301, 302, 303 … for Business Standard articles).
 * 3. Fill in: page, category, headline, subhead, body, and mcqs.
 * 4. Each MCQ must have: type, question, choices (array of 4), answer, explanation.
 * 5. The `answer` string must exactly match one of the strings in `choices`.
 * 6. Save the file — the app updates automatically.
 *
 * MCQ TYPES (use one of these for the `type` field):
 *   "Critical Reasoning" | "Inference" | "Strengthen" | "Weaken"
 *   "Vocabulary" | "Tone and Purpose" | "Main Idea" | "Counter Argument"
 * ─────────────────────────────────────────────────────────────────────────
 */

import type { Article } from "./articleData";

export const bsArticleData: Article[] = [
  // ── Add your Business Standard articles here ─────────────────────────────
  //
  // Example structure (copy, paste, and fill in your content):
  //
  // {
  //   id: 301,
  //   page: 1,
  //   category: "ECONOMY · POLICY",
  //   headline: "Your article headline here",
  //   subhead: "Brief descriptor or deck text from the newspaper",
  //   body: `Full article body text here.
  //
  // Second paragraph here.
  //
  // Third paragraph here.`,
  //   mcqs: [
  //     {
  //       type: "Critical Reasoning",
  //       question: "Your question here?",
  //       choices: [
  //         "Option A",
  //         "Option B",
  //         "Option C",
  //         "Option D",
  //       ],
  //       answer: "Option A",   // must exactly match one of the choices above
  //       explanation: "Why this answer is correct and why the traps fail.",
  //     },
  //   ],
  // },
  //
  // ────────────────────────────────────────────────────────────────────────
];
