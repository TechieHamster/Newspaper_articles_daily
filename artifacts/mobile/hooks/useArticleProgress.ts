import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "@catprep/completed_v1";

interface ArticleProgress {
  completed: Set<string>;
  markDone: (key: string) => void;
  loaded: boolean;
}

export function useArticleProgress(): ArticleProgress {
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((raw) => {
        if (raw) {
          try {
            const arr = JSON.parse(raw) as string[];
            setCompleted(new Set(arr));
          } catch {
            // ignore parse errors — start fresh
          }
        }
      })
      .finally(() => setLoaded(true));
  }, []);

  const markDone = useCallback((key: string) => {
    setCompleted((prev) => {
      if (prev.has(key)) return prev;
      const next = new Set(prev);
      next.add(key);
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify([...next])).catch(
        () => {}
      );
      return next;
    });
  }, []);

  return { completed, markDone, loaded };
}
