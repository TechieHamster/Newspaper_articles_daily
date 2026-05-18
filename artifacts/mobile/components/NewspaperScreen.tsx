import React, { useMemo, useState } from "react";
import {
  FlatList,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import type { Article } from "@/constants/articleData";
import { useArticleProgress } from "@/hooks/useArticleProgress";

export interface NewspaperTheme {
  bg: string;
  accent: string;
  light: string;
}

export interface NewspaperScreenProps {
  /** Short display title shown large (e.g. "The Hindu") */
  title: string;
  /** Tiny label above the title (e.g. "CAT NEWSPAPER EXTRACTOR") */
  headerLabel: string;
  /** Date line */
  date: string;
  /** Source key passed to /article/[id]?source=XX */
  sourceKey: string;
  articles: Article[];
  theme: NewspaperTheme;
  categories: string[];
  getCategoryForArticle: (article: Article) => string;
  /** If true, show a difficulty badge ("HIGH DIFFICULTY") */
  showDifficultyBadge?: boolean;
}

export default function NewspaperScreen({
  title,
  headerLabel,
  date,
  sourceKey,
  articles,
  theme,
  categories,
  getCategoryForArticle,
  showDifficultyBadge = false,
}: NewspaperScreenProps) {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { completed } = useArticleProgress();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const allCategories = ["All", ...categories];

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return articles.filter((a) => {
      const cat = getCategoryForArticle(a);
      const matchCat = activeCategory === "All" || cat === activeCategory;
      const matchQ =
        !q ||
        a.headline.toLowerCase().includes(q) ||
        a.subhead.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [search, activeCategory, articles, getCategoryForArticle]);

  const totalMCQs = useMemo(
    () => articles.reduce((n, a) => n + a.mcqs.length, 0),
    [articles]
  );

  const doneCount = useMemo(
    () => articles.filter((a) => completed.has(`${sourceKey}:${a.id}`)).length,
    [articles, completed, sourceKey]
  );

  const topPad =
    Platform.OS === "web" ? Math.max(insets.top, 67) : insets.top;

  return (
    <View style={[s.root, { backgroundColor: "#f4f6f9" }]}>
      <StatusBar barStyle="light-content" />

      {/* ── Header ── */}
      <View
        style={[s.header, { paddingTop: topPad + 16, backgroundColor: theme.bg }]}
      >
        <View style={s.headerTop}>
          <Pressable onPress={() => router.back()} style={s.backBtn}>
            <Feather name="arrow-left" size={20} color="rgba(255,255,255,0.75)" />
          </Pressable>
          <View style={s.headerTitles}>
            <Text style={s.headerLabel}>{headerLabel}</Text>
            <Text style={s.headerTitle} numberOfLines={1} adjustsFontSizeToFit>
              {title}
            </Text>
            <Text style={s.headerDate}>{date}</Text>
          </View>
          <View style={s.statsCol}>
            <StatPill
              value={articles.length}
              label="articles"
              accent={theme.accent}
            />
            <StatPill
              value={totalMCQs}
              label="MCQs"
              accent={theme.accent}
            />
            {articles.length > 0 && (
              <StatPill
                value={doneCount}
                label="done"
                accent="#4ade80"
              />
            )}
          </View>
        </View>

        {showDifficultyBadge && (
          <View
            style={[
              s.diffBadge,
              {
                borderColor: `${theme.accent}44`,
                backgroundColor: `${theme.accent}18`,
              },
            ]}
          >
            <Feather name="zap" size={12} color={theme.accent} />
            <Text style={[s.diffText, { color: theme.accent }]}>
              HIGH DIFFICULTY · CAT-LEVEL REASONING
            </Text>
          </View>
        )}

        {/* Search */}
        <View style={s.searchWrap}>
          <Feather
            name="search"
            size={15}
            color="#94a3b8"
            style={{ marginRight: 8 }}
          />
          <TextInput
            style={s.searchInput}
            placeholder="Search articles..."
            placeholderTextColor="#94a3b8"
            value={search}
            onChangeText={setSearch}
            clearButtonMode="while-editing"
          />
          {search.length > 0 && Platform.OS !== "ios" && (
            <Pressable onPress={() => setSearch("")}>
              <Feather name="x" size={14} color="#94a3b8" />
            </Pressable>
          )}
        </View>

        {/* Category chips */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={s.chips}
        >
          {allCategories.map((cat) => {
            const isActive = cat === activeCategory;
            return (
              <Pressable
                key={cat}
                onPress={() => setActiveCategory(cat)}
                style={[
                  s.chip,
                  {
                    backgroundColor: isActive
                      ? theme.accent
                      : "rgba(255,255,255,0.1)",
                    borderColor: isActive
                      ? theme.accent
                      : "rgba(255,255,255,0.2)",
                  },
                ]}
              >
                <Text
                  style={[
                    s.chipText,
                    {
                      color: isActive
                        ? "#fff"
                        : "rgba(255,255,255,0.75)",
                    },
                  ]}
                >
                  {cat}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>

      {/* ── List ── */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => `${sourceKey}-${item.id}`}
        contentContainerStyle={[
          s.list,
          {
            paddingBottom:
              insets.bottom + (Platform.OS === "web" ? 40 : 16),
          },
        ]}
        ListEmptyComponent={
          articles.length === 0 ? (
            <EmptySetup theme={theme} sourceKey={sourceKey} />
          ) : (
            <View style={s.emptySearch}>
              <Feather name="search" size={32} color="#94a3b8" />
              <Text style={s.emptySearchText}>No articles found</Text>
            </View>
          )
        }
        renderItem={({ item }) => (
          <ArticleCard
            article={item}
            category={getCategoryForArticle(item)}
            theme={theme}
            showDifficulty={showDifficultyBadge}
            isCompleted={completed.has(`${sourceKey}:${item.id}`)}
            onPress={() =>
              router.push(`/article/${item.id}?source=${sourceKey}`)
            }
          />
        )}
      />
    </View>
  );
}

function ArticleCard({
  article,
  category,
  theme,
  showDifficulty,
  isCompleted,
  onPress,
}: {
  article: Article;
  category: string;
  theme: NewspaperTheme;
  showDifficulty: boolean;
  isCompleted: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        s.card,
        isCompleted && s.cardDone,
        {
          opacity: pressed ? 0.92 : 1,
          transform: [{ scale: pressed ? 0.985 : 1 }],
        },
      ]}
    >
      <View
        style={[
          s.cardAccent,
          { backgroundColor: isCompleted ? "#4ade80" : theme.accent },
        ]}
      />
      <View style={s.cardContent}>
        <View style={s.cardMeta}>
          <View style={[s.catBadge, { backgroundColor: theme.bg }]}>
            <Text style={s.catBadgeText}>{category.toUpperCase()}</Text>
          </View>
          <Text style={s.pageText}>pg {article.page}</Text>
          {showDifficulty && !isCompleted && (
            <View
              style={[
                s.diffRow,
                { backgroundColor: `${theme.accent}18` },
              ]}
            >
              <Feather name="zap" size={10} color={theme.accent} />
              <Text style={[s.diffRowText, { color: theme.accent }]}>
                Hard
              </Text>
            </View>
          )}
          {isCompleted && (
            <View style={s.doneBadge}>
              <Feather name="check-circle" size={10} color="#16a34a" />
              <Text style={s.doneBadgeText}>Done</Text>
            </View>
          )}
          <View style={s.mcqMeta}>
            <Feather
              name="check-circle"
              size={11}
              color={isCompleted ? "#4ade80" : "#94a3b8"}
            />
            <Text style={[s.mcqText, isCompleted && { color: "#16a34a" }]}>
              {article.mcqs.length} MCQs
            </Text>
          </View>
        </View>

        <Text
          style={[s.headline, isCompleted && { color: "#374151" }]}
          numberOfLines={2}
        >
          {article.headline}
        </Text>
        <Text style={s.subhead} numberOfLines={2}>
          {article.subhead}
        </Text>

        <View style={s.footer}>
          <Text style={[s.readBtn, { color: isCompleted ? "#16a34a" : theme.accent }]}>
            {isCompleted ? "Review again" : "Read & Quiz"}
          </Text>
          <Feather
            name="arrow-right"
            size={14}
            color={isCompleted ? "#16a34a" : theme.accent}
          />
        </View>
      </View>
    </Pressable>
  );
}

function StatPill({
  value,
  label,
  accent,
}: {
  value: number;
  label: string;
  accent: string;
}) {
  return (
    <View
      style={[
        s.statPill,
        { backgroundColor: `${accent}28` },
      ]}
    >
      <Text style={[s.statValue, { color: accent }]}>{value}</Text>
      <Text style={[s.statLabel, { color: `${accent}aa` }]}>{label}</Text>
    </View>
  );
}

function EmptySetup({
  theme,
  sourceKey,
}: {
  theme: NewspaperTheme;
  sourceKey: string;
}) {
  const fileMap: Record<string, string> = {
    th: "constants/articleData.ts",
    bl: "constants/blArticleData.ts",
    lm: "constants/lmArticleData.ts",
    bs: "constants/bsArticleData.ts",
  };
  const fileName = fileMap[sourceKey] ?? "constants/articleData.ts";

  return (
    <View style={s.emptySetup}>
      <View
        style={[s.emptyIcon, { backgroundColor: `${theme.accent}15` }]}
      >
        <Feather name="file-plus" size={32} color={theme.accent} />
      </View>
      <Text style={s.emptyTitle}>No articles yet</Text>
      <Text style={s.emptyBody}>
        Open{" "}
        <Text style={[s.emptyCode, { color: theme.accent }]}>
          {fileName}
        </Text>{" "}
        in Replit and add articles to the array. Each article needs an{" "}
        <Text style={s.emptyCode}>id</Text>,{" "}
        <Text style={s.emptyCode}>headline</Text>,{" "}
        <Text style={s.emptyCode}>body</Text>, and{" "}
        <Text style={s.emptyCode}>mcqs</Text>. The file includes a
        copy-paste template at the top.
      </Text>
    </View>
  );
}

const s = StyleSheet.create({
  root: { flex: 1 },
  header: { paddingHorizontal: 16, paddingBottom: 12 },
  headerTop: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    marginBottom: 10,
  },
  backBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "rgba(255,255,255,0.1)",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 6,
    flexShrink: 0,
  },
  headerTitles: { flex: 1 },
  headerLabel: {
    fontSize: 9,
    letterSpacing: 1.8,
    color: "rgba(255,255,255,0.55)",
    fontFamily: "Inter_600SemiBold",
  },
  headerTitle: {
    fontSize: 30,
    fontFamily: "Inter_700Bold",
    color: "#ffffff",
    lineHeight: 36,
  },
  headerDate: {
    fontSize: 12,
    color: "rgba(255,255,255,0.55)",
    fontFamily: "Inter_400Regular",
  },
  statsCol: { gap: 6, alignItems: "flex-end", flexShrink: 0 },
  statPill: {
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: "center",
    minWidth: 50,
  },
  statValue: { fontSize: 15, fontFamily: "Inter_700Bold" },
  statLabel: { fontSize: 9, fontFamily: "Inter_400Regular" },
  diffBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    alignSelf: "flex-start",
    marginBottom: 12,
    borderWidth: 1,
  },
  diffText: {
    fontSize: 10,
    fontFamily: "Inter_700Bold",
    letterSpacing: 0.8,
  },
  searchWrap: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 10,
    height: 40,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#ffffff",
    fontFamily: "Inter_400Regular",
    height: 40,
  },
  chips: { flexDirection: "row", gap: 8, paddingRight: 8 },
  chip: { borderRadius: 20, borderWidth: 1, paddingHorizontal: 13, paddingVertical: 5 },
  chipText: { fontSize: 11, fontFamily: "Inter_600SemiBold", letterSpacing: 0.2 },
  list: { padding: 12, gap: 10 },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    flexDirection: "row",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 3,
  },
  cardDone: {
    backgroundColor: "#f0fdf4",
    shadowOpacity: 0.04,
  },
  doneBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
    backgroundColor: "#dcfce7",
  },
  doneBadgeText: {
    fontSize: 9,
    fontFamily: "Inter_700Bold",
    color: "#16a34a",
  },
  cardAccent: { width: 4 },
  cardContent: { flex: 1, padding: 14 },
  cardMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    marginBottom: 8,
    flexWrap: "nowrap",
  },
  catBadge: { borderRadius: 6, paddingHorizontal: 8, paddingVertical: 3 },
  catBadgeText: {
    fontSize: 9,
    fontFamily: "Inter_700Bold",
    color: "#ffffff",
    letterSpacing: 0.6,
  },
  pageText: { fontSize: 11, color: "#94a3b8", fontFamily: "Inter_500Medium" },
  diffRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  diffRowText: { fontSize: 9, fontFamily: "Inter_700Bold" },
  mcqMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    marginLeft: "auto" as any,
  },
  mcqText: { fontSize: 11, color: "#94a3b8", fontFamily: "Inter_400Regular" },
  headline: {
    fontSize: 15,
    fontFamily: "Inter_700Bold",
    color: "#0d1117",
    lineHeight: 21,
    marginBottom: 5,
  },
  subhead: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    color: "#64748b",
    lineHeight: 17,
    marginBottom: 10,
  },
  footer: { flexDirection: "row", alignItems: "center", gap: 4 },
  readBtn: { fontSize: 13, fontFamily: "Inter_600SemiBold" },
  emptySearch: {
    alignItems: "center",
    paddingTop: 60,
    gap: 10,
  },
  emptySearchText: {
    fontSize: 14,
    color: "#94a3b8",
    fontFamily: "Inter_400Regular",
  },
  emptySetup: {
    margin: 16,
    padding: 24,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    alignItems: "center",
    gap: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  emptyIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  emptyTitle: {
    fontSize: 18,
    fontFamily: "Inter_700Bold",
    color: "#0d1117",
  },
  emptyBody: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    color: "#64748b",
    lineHeight: 21,
    textAlign: "center",
  },
  emptyCode: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 13,
  },
});
