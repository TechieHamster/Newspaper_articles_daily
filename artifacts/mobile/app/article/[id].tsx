import React, { useMemo, useState, useCallback, useEffect } from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import {
  articleData,
  categoryColors,
  defaultCategoryColor,
  type MCQ,
} from "@/constants/articleData";
import { blArticleData } from "@/constants/blArticleData";
import { lmArticleData } from "@/constants/lmArticleData";
import { bsArticleData } from "@/constants/bsArticleData";
import { useArticleProgress } from "@/hooks/useArticleProgress";

// ── Per-source colour overrides ──────────────────────────────────────────
const SOURCE_THEMES: Record<string, { bg: string; accent: string; light: string }> = {
  bl: { bg: "#0a2740", accent: "#e8a020", light: "#fdf6e8" },
  lm: { bg: "#14532d", accent: "#4ade80", light: "#f0fdf4" },
  bs: { bg: "#7f1d1d", accent: "#fca5a5", light: "#fff1f2" },
  th: { bg: "#1c3557", accent: "#f59e0b", light: "#fefce8" },
};

function hashString(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(a: number) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffleWithSeed<T>(arr: T[], seed: number): T[] {
  const out = [...arr];
  const rand = mulberry32(seed);
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function splitParagraphs(text: string): string[] {
  return text
    .trim()
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

const MCQ_TYPE_ICONS: Record<string, string> = {
  "Main Idea": "target",
  "Counter Argument": "shield",
  Tone: "feather",
  "Tone and Purpose": "feather",
  Inference: "zap",
  Vocabulary: "book",
  "Critical Reasoning": "cpu",
  Strengthen: "trending-up",
  Weaken: "trending-down",
};

export default function ArticleScreen() {
  const { id, source } = useLocalSearchParams<{ id: string; source?: string }>();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const src = source ?? "th";

  const article = useMemo(() => {
    switch (src) {
      case "bl": return blArticleData.find((a) => String(a.id) === id);
      case "lm": return lmArticleData.find((a) => String(a.id) === id);
      case "bs": return bsArticleData.find((a) => String(a.id) === id);
      default:   return articleData.find((a) => String(a.id) === id);
    }
  }, [id, src]);

  const { markDone, completed } = useArticleProgress();
  const completionKey = `${src}:${id}`;
  const wasAlreadyDone = completed.has(completionKey);

  const [revealed, setRevealed] = useState<Record<number, string>>({});
  const [showBody, setShowBody] = useState(true);

  const c = useMemo(() => {
    if (src !== "th") return SOURCE_THEMES[src] ?? SOURCE_THEMES.th;
    return article
      ? (categoryColors[article.category] ?? defaultCategoryColor)
      : defaultCategoryColor;
  }, [src, article]);

  const answerSets = useMemo(() => {
    if (!article) return [];
    return article.mcqs.map((mcq, idx) => {
      const seed = hashString(`${article.id}-${idx}-${mcq.question}`);
      return shuffleWithSeed(mcq.choices, seed);
    });
  }, [article]);

  const pickAnswer = useCallback(
    (qIdx: number, choice: string) => {
      if (revealed[qIdx] !== undefined) return;
      setRevealed((prev) => ({ ...prev, [qIdx]: choice }));
      if (Platform.OS !== "web") {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }
    },
    [revealed]
  );

  const score = useMemo(() => {
    if (!article) return { correct: 0, total: 0 };
    let correct = 0;
    article.mcqs.forEach((mcq, idx) => {
      if (revealed[idx] === mcq.answer) correct++;
    });
    return { correct, total: article.mcqs.length };
  }, [revealed, article]);

  // Derived early so useEffect can reference it
  const answeredCountEarly = Object.keys(revealed).length;
  const allAnsweredEarly = article
    ? answeredCountEarly === article.mcqs.length && article.mcqs.length > 0
    : false;

  // Mark article as done the first time all MCQs are answered
  useEffect(() => {
    if (allAnsweredEarly && article) {
      markDone(completionKey);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allAnsweredEarly]);

  const topPad =
    Platform.OS === "web" ? Math.max(insets.top, 67) : insets.top;

  if (!article) {
    return (
      <View style={[styles.root, { backgroundColor: "#f4f6f9" }]}>
        <View
          style={[
            styles.navBar,
            { paddingTop: topPad + 10, backgroundColor: "#1c3557" },
          ]}
        >
          <Pressable onPress={() => router.back()} style={styles.backBtn}>
            <Feather name="arrow-left" size={22} color="#fff" />
          </Pressable>
        </View>
        <View style={styles.notFound}>
          <Text style={{ color: "#64748b", fontFamily: "Inter_400Regular" }}>
            Article not found
          </Text>
        </View>
      </View>
    );
  }

  const answeredCount = Object.keys(revealed).length;
  const allAnswered = answeredCount === article.mcqs.length;

  return (
    <View style={[styles.root, { backgroundColor: "#f4f6f9" }]}>
      <StatusBar barStyle="light-content" />

      {/* ── Sticky header ── */}
      <View
        style={[
          styles.navBar,
          { paddingTop: topPad + 10, backgroundColor: c.bg },
        ]}
      >
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Feather name="arrow-left" size={22} color="#fff" />
        </Pressable>
        <View style={styles.navMid}>
          <Text style={styles.navCategory} numberOfLines={1}>
            {article.category}
          </Text>
          <Text style={styles.navPage}>Page {article.page}</Text>
        </View>
        {allAnswered && (
          <View
            style={[styles.scorePill, { backgroundColor: "rgba(255,255,255,0.15)" }]}
          >
            <Text style={styles.scoreText}>
              {score.correct}/{score.total}
            </Text>
          </View>
        )}
      </View>

      <ScrollView
        contentContainerStyle={[
          styles.scroll,
          { paddingBottom: insets.bottom + (Platform.OS === "web" ? 50 : 24) },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Hero banner ── */}
        <View style={[styles.hero, { backgroundColor: c.bg }]}>
          <Text style={styles.heroHeadline}>{article.headline}</Text>
          <Text style={styles.heroSubhead}>{article.subhead}</Text>
        </View>

        {/* ── Body toggle ── */}
        <Pressable
          style={[styles.sectionToggle, { backgroundColor: c.light }]}
          onPress={() => setShowBody((v) => !v)}
        >
          <Text style={[styles.sectionToggleLabel, { color: c.bg }]}>
            Article Body
          </Text>
          <Feather
            name={showBody ? "chevron-up" : "chevron-down"}
            size={18}
            color={c.accent}
          />
        </Pressable>

        {showBody && (
          <View style={styles.bodyWrap}>
            {splitParagraphs(article.body).map((para, idx) => (
              <Text key={idx} style={styles.bodyPara}>
                {para}
              </Text>
            ))}
          </View>
        )}

        {/* ── Completion banner ── */}
        {allAnswered && (
          <View
            style={[
              styles.completionBanner,
              { backgroundColor: score.correct === score.total ? "#dcfce7" : c.light },
            ]}
          >
            <Feather
              name="check-circle"
              size={20}
              color={score.correct === score.total ? "#16a34a" : c.accent}
            />
            <View style={{ flex: 1 }}>
              <Text
                style={[
                  styles.completionTitle,
                  { color: score.correct === score.total ? "#15803d" : c.bg },
                ]}
              >
                {wasAlreadyDone ? "Already completed" : "Article completed!"}
              </Text>
              <Text style={styles.completionSub}>
                Score: {score.correct}/{score.total} correct
              </Text>
            </View>
          </View>
        )}

        {/* ── MCQ section header ── */}
        <View style={styles.mcqHeader}>
          <Text style={styles.mcqHeaderTitle}>Practice MCQs</Text>
          <Text style={styles.mcqHeaderSub}>
            {answeredCount}/{article.mcqs.length} answered
            {allAnswered ? ` · ${score.correct} correct` : ""}
          </Text>
        </View>

        {/* ── MCQs ── */}
        {article.mcqs.map((mcq, qIdx) => (
          <MCQCard
            key={qIdx}
            mcq={mcq}
            qIdx={qIdx}
            choices={answerSets[qIdx] ?? mcq.choices}
            picked={revealed[qIdx]}
            onPick={pickAnswer}
            accentColor={c.accent}
            bgColor={c.light}
          />
        ))}
      </ScrollView>
    </View>
  );
}

function MCQCard({
  mcq,
  qIdx,
  choices,
  picked,
  onPick,
  accentColor,
  bgColor,
}: {
  mcq: MCQ;
  qIdx: number;
  choices: string[];
  picked: string | undefined;
  onPick: (idx: number, choice: string) => void;
  accentColor: string;
  bgColor: string;
}) {
  const isRevealed = picked !== undefined;
  const isCorrect = picked === mcq.answer;
  const iconName = (MCQ_TYPE_ICONS[mcq.type] as any) ?? "help-circle";

  return (
    <View style={styles.mcqCard}>
      <View style={styles.mcqTypeRow}>
        <Feather name={iconName} size={13} color={accentColor} />
        <Text style={[styles.mcqType, { color: accentColor }]}>
          {mcq.type.toUpperCase()}
        </Text>
        {isRevealed && (
          <View
            style={[
              styles.resultBadge,
              { backgroundColor: isCorrect ? "#dcfce7" : "#fee2e2" },
            ]}
          >
            <Text
              style={[
                styles.resultBadgeText,
                { color: isCorrect ? "#166534" : "#991b1b" },
              ]}
            >
              {isCorrect ? "Correct" : "Wrong"}
            </Text>
          </View>
        )}
      </View>

      <Text style={styles.mcqQuestion}>{mcq.question}</Text>

      <View style={styles.choicesWrap}>
        {choices.map((choice) => {
          const isActive = picked === choice;
          const showCorrect = isRevealed && choice === mcq.answer;
          let bg = "#f8fafc";
          let border = "#e2e8f0";
          let textColor = "#0d1117";

          if (showCorrect) {
            bg = "#dcfce7"; border = "#86efac"; textColor = "#166534";
          } else if (isActive && !isCorrect) {
            bg = "#fee2e2"; border = "#fca5a5"; textColor = "#991b1b";
          } else if (isActive && isCorrect) {
            bg = "#dcfce7"; border = "#86efac"; textColor = "#166534";
          }

          return (
            <Pressable
              key={choice}
              onPress={() => onPick(qIdx, choice)}
              disabled={isRevealed}
              style={[styles.choiceBtn, { backgroundColor: bg, borderColor: border }]}
            >
              {showCorrect && (
                <Feather name="check" size={14} color="#166534" style={styles.choiceIcon} />
              )}
              {isActive && !isCorrect && (
                <Feather name="x" size={14} color="#991b1b" style={styles.choiceIcon} />
              )}
              <Text style={[styles.choiceText, { color: textColor }]}>{choice}</Text>
            </Pressable>
          );
        })}
      </View>

      {isRevealed && (
        <View style={[styles.explanationBox, { backgroundColor: bgColor }]}>
          <Text style={styles.explainLabel}>Correct Answer</Text>
          <Text style={styles.explainAnswer}>{mcq.answer}</Text>
          <Text style={styles.explainWhyLabel}>Why this works</Text>
          <Text style={styles.explainWhy}>{mcq.explanation}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  navBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 14,
    gap: 10,
  },
  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(255,255,255,0.15)",
    alignItems: "center",
    justifyContent: "center",
  },
  navMid: { flex: 1 },
  navCategory: {
    fontSize: 11,
    fontFamily: "Inter_700Bold",
    color: "rgba(255,255,255,0.75)",
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  navPage: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    color: "rgba(255,255,255,0.55)",
    marginTop: 1,
  },
  scorePill: { borderRadius: 12, paddingHorizontal: 12, paddingVertical: 5 },
  scoreText: { fontSize: 14, fontFamily: "Inter_700Bold", color: "#ffffff" },
  scroll: { paddingTop: 0 },
  hero: { padding: 20, paddingBottom: 24 },
  heroHeadline: {
    fontSize: 22,
    fontFamily: "Inter_700Bold",
    color: "#ffffff",
    lineHeight: 30,
    marginBottom: 10,
  },
  heroSubhead: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    color: "rgba(255,255,255,0.78)",
    lineHeight: 20,
  },
  sectionToggle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 12,
    marginTop: 12,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  sectionToggleLabel: { fontSize: 14, fontFamily: "Inter_700Bold", letterSpacing: 0.3 },
  bodyWrap: {
    marginHorizontal: 12,
    marginTop: 2,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    gap: 12,
  },
  bodyPara: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    color: "#1e293b",
    lineHeight: 22,
  },
  mcqHeader: {
    marginHorizontal: 12,
    marginTop: 16,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "baseline",
    gap: 10,
  },
  mcqHeaderTitle: { fontSize: 18, fontFamily: "Inter_700Bold", color: "#0d1117" },
  mcqHeaderSub: { fontSize: 13, fontFamily: "Inter_400Regular", color: "#64748b" },
  mcqCard: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    marginHorizontal: 12,
    marginBottom: 10,
    padding: 16,
    shadowColor: "#1c3557",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  mcqTypeRow: { flexDirection: "row", alignItems: "center", gap: 6, marginBottom: 8 },
  mcqType: { fontSize: 10, fontFamily: "Inter_700Bold", letterSpacing: 1.2, flex: 1 },
  resultBadge: { borderRadius: 8, paddingHorizontal: 10, paddingVertical: 3 },
  resultBadgeText: { fontSize: 11, fontFamily: "Inter_700Bold" },
  mcqQuestion: {
    fontSize: 15,
    fontFamily: "Inter_600SemiBold",
    color: "#0d1117",
    lineHeight: 22,
    marginBottom: 12,
  },
  choicesWrap: { gap: 8 },
  choiceBtn: {
    borderWidth: 1.5,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 11,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  choiceIcon: { marginTop: 1, flexShrink: 0 },
  choiceText: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    lineHeight: 20,
    flex: 1,
  },
  explanationBox: { borderRadius: 12, padding: 14, marginTop: 12, gap: 4 },
  explainLabel: {
    fontSize: 11,
    fontFamily: "Inter_700Bold",
    color: "#475569",
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },
  explainAnswer: {
    fontSize: 13,
    fontFamily: "Inter_600SemiBold",
    color: "#0d1117",
    lineHeight: 19,
    marginBottom: 6,
  },
  explainWhyLabel: {
    fontSize: 11,
    fontFamily: "Inter_700Bold",
    color: "#475569",
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },
  explainWhy: {
    fontSize: 13,
    fontFamily: "Inter_400Regular",
    color: "#334155",
    lineHeight: 19,
  },
  notFound: { flex: 1, alignItems: "center", justifyContent: "center" },
  completionBanner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginHorizontal: 12,
    marginTop: 14,
    marginBottom: 2,
    borderRadius: 14,
    padding: 14,
  },
  completionTitle: {
    fontSize: 15,
    fontFamily: "Inter_700Bold",
    marginBottom: 2,
  },
  completionSub: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    color: "#475569",
  },
});
