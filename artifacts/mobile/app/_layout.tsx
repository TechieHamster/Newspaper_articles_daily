import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { Platform } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ErrorBoundary } from "@/components/ErrorBoundary";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // On native the splash screen hides the app until fonts are ready.
  // On web there is no splash screen, so we render immediately with
  // system fonts to avoid a blank page that hurts LCP / Lighthouse score.
  if (Platform.OS !== "web" && !fontsLoaded && !fontError) return null;

  return (
    <SafeAreaProvider>
      <ErrorBoundary>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen
              name="hindu/index"
              options={{ presentation: "card", animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="businessline/index"
              options={{ presentation: "card", animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="livemint/index"
              options={{ presentation: "card", animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="businessstandard/index"
              options={{ presentation: "card", animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="article/[id]"
              options={{ presentation: "card", animation: "slide_from_right" }}
            />
          </Stack>
        </GestureHandlerRootView>
      </ErrorBoundary>
    </SafeAreaProvider>
  );
}
