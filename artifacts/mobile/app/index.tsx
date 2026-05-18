import React from "react";
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
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { articleData } from "@/constants/articleData";
import { blArticleData } from "@/constants/blArticleData";
import { lmArticleData } from "@/constants/lmArticleData";
import { bsArticleData } from "@/constants/bsArticleData";

const PAPERS = [
  {
    id: "hindu",
    route: "/hindu",
    name: "The Hindu",
    abbr: "TH",
    tagline: "National · Analysis · Governance",
    bg: "#1c3557",
    accent: "#f59e0b",
    data: articleData,
    difficulty: "Medium",
    diffIcon: "bar-chart-2" as const,
  },
  {
    id: "bl",
    route: "/businessline",
    name: "Business Line",
    abbr: "bl",
    tagline: "Finance · Markets · Economy",
    bg: "#0a2740",
    accent: "#e8a020",
    data: blArticleData,
    difficulty: "Hard",
    diffIcon: "zap" as const,
  },
  {
    id: "lm",
    route: "/livemint",
    name: "Live Mint",
    abbr: "LM",
    tagline: "Business · Startups · Tech",
    bg: "#14532d",
    accent: "#4ade80",
    data: lmArticleData,
    difficulty: "Medium",
    diffIcon: "bar-chart-2" as const,
  },
  {
    id: "bs",
    route: "/businessstandard",
    name: "Business Standard",
    abbr: "BS",
    tagline: "Policy · Corporate · Banking",
    bg: "#7f1d1d",
    accent: "#fca5a5",
    data: bsArticleData,
    difficulty: "Medium",
    diffIcon: "bar-chart-2" as const,
  },
] as const;

export default function HubScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const topPad =
    Platform.OS === "web" ? Math.max(insets.top, 67) : insets.top;
  const totalArticles = PAPERS.reduce((n, p) => n + p.data.length, 0);
  const totalMCQs = PAPERS.reduce(
    (n, p) => n + p.data.reduce((m, a) => m + a.mcqs.length, 0),
    0
  );

  return (
    <View style={[s.root]}>
      <StatusBar barStyle="light-content" />

      {/* ── Top strip ── */}
      <View style={[s.topStrip, { paddingTop: topPad + 14 }]}>
        <View>
          <Text style={s.stripLabel}>CAT NEWSPAPER EXTRACTOR</Text>
          <Text style={s.stripTitle}>Daily Prep Hub</Text>
          <Text style={s.stripDate}>May 17, 2026</Text>
        </View>
        <View style={s.stripStats}>
          <View style={s.globalPill}>
            <Text style={s.globalPillNum}>{totalArticles}</Text>
            <Text style={s.globalPillLbl}>articles</Text>
          </View>
          <View style={s.globalPill}>
            <Text style={s.globalPillNum}>{totalMCQs}</Text>
            <Text style={s.globalPillLbl}>MCQs</Text>
          </View>
        </View>
      </View>

      {/* ── Newspaper cards ── */}
      <ScrollView
        contentContainerStyle={[
          s.scroll,
          {
            paddingBottom:
              insets.bottom + (Platform.OS === "web" ? 40 : 20),
          },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={s.sectionLabel}>SELECT A NEWSPAPER</Text>

        {PAPERS.map((paper) => {
          const articles = paper.data.length;
          const mcqs = paper.data.reduce(
            (n, a) => n + a.mcqs.length,
            0
          );
          return (
            <Pressable
              key={paper.id}
              onPress={() => router.push(paper.route)}
              style={({ pressed }) => [
                s.card,
                {
                  backgroundColor: paper.bg,
                  borderColor: `${paper.accent}44`,
                  opacity: pressed ? 0.93 : 1,
                  transform: [{ scale: pressed ? 0.985 : 1 }],
                },
              ]}
            >
              {/* Decorative circle */}
              <View
                style={[
                  s.cardCircle,
                  { backgroundColor: `${paper.accent}12` },
                ]}
              />

              <View style={s.cardMain}>
                <View style={s.cardTop}>
                  {/* Abbr logo */}
                  <View
                    style={[
                      s.abbrBox,
                      { backgroundColor: `${paper.accent}22` },
                    ]}
                  >
                    <Text
                      style={[s.abbr, { color: paper.accent }]}
                      adjustsFontSizeToFit
                      numberOfLines={1}
                    >
                      {paper.abbr}
                    </Text>
                  </View>

                  {/* Name + tagline */}
                  <View style={s.nameCol}>
                    <Text style={s.name}>{paper.name}</Text>
                    <Text style={s.tagline}>{paper.tagline}</Text>
                  </View>

                  <Feather
                    name="arrow-right"
                    size={20}
                    color="rgba(255,255,255,0.4)"
                  />
                </View>

                {/* Stats row */}
                <View style={s.statsRow}>
                  <StatBadge
                    icon="file-text"
                    value={articles}
                    label={articles === 1 ? "article" : "articles"}
                    accent={paper.accent}
                    empty={articles === 0}
                  />
                  <StatBadge
                    icon="check-circle"
                    value={mcqs}
                    label={mcqs === 1 ? "MCQ" : "MCQs"}
                    accent={paper.accent}
                    empty={mcqs === 0}
                  />
                  <DiffBadge
                    icon={paper.diffIcon}
                    label={paper.difficulty}
                    accent={paper.accent}
                  />
                  {articles === 0 && (
                    <View style={[s.emptyBadge, { borderColor: `${paper.accent}44` }]}>
                      <Feather name="plus-circle" size={10} color="rgba(255,255,255,0.5)" />
                      <Text style={s.emptyBadgeText}>Add articles</Text>
                    </View>
                  )}
                </View>
              </View>
            </Pressable>
          );
        })}

        {/* ── How to add articles ── */}
        <View style={s.howToCard}>
          <View style={s.howToHeader}>
            <Feather name="edit-3" size={16} color="#64748b" />
            <Text style={s.howToTitle}>How to add articles</Text>
          </View>
          <Text style={s.howToBody}>
            Each newspaper's articles live in a dedicated file under{" "}
            <Text style={s.mono}>constants/</Text>:
          </Text>
          {[
            { file: "articleData.ts", paper: "The Hindu" },
            { file: "blArticleData.ts", paper: "Business Line" },
            { file: "lmArticleData.ts", paper: "Live Mint" },
            { file: "bsArticleData.ts", paper: "Business Standard" },
          ].map((item) => (
            <View key={item.file} style={s.howToRow}>
              <View style={s.howToDot} />
              <Text style={s.howToFile}>{item.file}</Text>
              <Text style={s.howToPaper}> → {item.paper}</Text>
            </View>
          ))}
          <Text style={s.howToFooter}>
            Open the file in Replit, copy the example template at the top,
            fill in the article content and MCQs, then save. The app
            updates instantly.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

function StatBadge({
  icon,
  value,
  label,
  accent,
  empty,
}: {
  icon: React.ComponentProps<typeof Feather>["name"];
  value: number;
  label: string;
  accent: string;
  empty: boolean;
}) {
  return (
    <View
      style={[
        s.statBadge,
        { backgroundColor: empty ? "rgba(255,255,255,0.06)" : `${accent}20` },
      ]}
    >
      <Feather
        name={icon}
        size={11}
        color={empty ? "rgba(255,255,255,0.3)" : accent}
      />
      <Text
        style={[
          s.statBadgeText,
          { color: empty ? "rgba(255,255,255,0.35)" : accent },
        ]}
      >
        {value} {label}
      </Text>
    </View>
  );
}

function DiffBadge({
  icon,
  label,
  accent,
}: {
  icon: React.ComponentProps<typeof Feather>["name"];
  label: string;
  accent: string;
}) {
  return (
    <View style={[s.statBadge, { backgroundColor: `${accent}18` }]}>
      <Feather name={icon} size={11} color={accent} />
      <Text style={[s.statBadgeText, { color: accent }]}>{label}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#f1f5f9" },
  topStrip: {
    backgroundColor: "#0f172a",
    paddingHorizontal: 20,
    paddingBottom: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  stripLabel: {
    fontSize: 9,
    letterSpacing: 2,
    color: "rgba(255,255,255,0.4)",
    fontFamily: "Inter_600SemiBold",
    marginBottom: 2,
  },
  stripTitle: {
    fontSize: 26,
    fontFamily: "Inter_700Bold",
    color: "#ffffff",
    lineHeight: 30,
  },
  stripDate: {
    fontSize: 12,
    color: "rgba(255,255,255,0.45)",
    fontFamily: "Inter_400Regular",
    marginTop: 2,
  },
  stripStats: { flexDirection: "row", gap: 8, alignItems: "flex-end" },
  globalPill: {
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignItems: "center",
  },
  globalPillNum: {
    fontSize: 16,
    fontFamily: "Inter_700Bold",
    color: "#ffffff",
  },
  globalPillLbl: {
    fontSize: 9,
    color: "rgba(255,255,255,0.45)",
    fontFamily: "Inter_400Regular",
  },
  scroll: { padding: 14, gap: 10 },
  sectionLabel: {
    fontSize: 10,
    letterSpacing: 2,
    color: "#94a3b8",
    fontFamily: "Inter_700Bold",
    marginBottom: 4,
    marginLeft: 2,
  },
  card: {
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 5,
    position: "relative",
  },
  cardCircle: {
    position: "absolute",
    width: 140,
    height: 140,
    borderRadius: 70,
    top: -40,
    right: -30,
  },
  cardMain: { padding: 18 },
  cardTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 14,
  },
  abbrBox: {
    width: 52,
    height: 52,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  abbr: {
    fontSize: 20,
    fontFamily: "Inter_700Bold",
    letterSpacing: -0.5,
  },
  nameCol: { flex: 1 },
  name: {
    fontSize: 18,
    fontFamily: "Inter_700Bold",
    color: "#ffffff",
    marginBottom: 2,
  },
  tagline: {
    fontSize: 12,
    color: "rgba(255,255,255,0.5)",
    fontFamily: "Inter_400Regular",
  },
  statsRow: {
    flexDirection: "row",
    gap: 7,
    flexWrap: "wrap",
  },
  statBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderRadius: 8,
    paddingHorizontal: 9,
    paddingVertical: 5,
  },
  statBadgeText: {
    fontSize: 11,
    fontFamily: "Inter_600SemiBold",
  },
  emptyBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    borderRadius: 8,
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderWidth: 1,
    borderStyle: "dashed",
  },
  emptyBadgeText: {
    fontSize: 11,
    color: "rgba(255,255,255,0.4)",
    fontFamily: "Inter_400Regular",
  },
  howToCard: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 18,
    marginTop: 4,
    gap: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  howToHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 2,
  },
  howToTitle: {
    fontSize: 15,
    fontFamily: "Inter_700Bold",
    color: "#0f172a",
  },
  howToBody: {
    fontSize: 13,
    fontFamily: "Inter_400Regular",
    color: "#64748b",
    lineHeight: 20,
  },
  mono: {
    fontFamily: "Inter_600SemiBold",
    color: "#0f172a",
    fontSize: 12,
  },
  howToRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  howToDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#cbd5e1",
  },
  howToFile: {
    fontSize: 12,
    fontFamily: "Inter_600SemiBold",
    color: "#0f172a",
  },
  howToPaper: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    color: "#64748b",
  },
  howToFooter: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    color: "#94a3b8",
    lineHeight: 18,
    marginTop: 4,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#f1f5f9",
  },
});
