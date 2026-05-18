import { type PropsWithChildren } from "react";
import { ScrollViewStyleReset } from "expo-router/html";

const DESCRIPTION =
  "CAT Newspaper Extractor — daily MCQ practice from The Hindu, Business Line, Live Mint and Business Standard. High-difficulty CAT-level reading comprehension and critical reasoning questions, updated every day.";

const TITLE = "CAT Newspaper Extractor — Daily Prep Hub";

const KEYWORDS =
  "CAT exam preparation, CAT 2025, newspaper MCQs, The Hindu CAT, Business Line CAT, reading comprehension, critical reasoning, verbal ability, VARC, daily newspaper analysis";

export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {/* ── Primary SEO ── */}
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content={KEYWORDS} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="CAT Newspaper Extractor" />

        {/* ── Open Graph ── */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="CAT Newspaper Extractor" />

        {/* ── Twitter Card ── */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />

        {/* ── Theme / Mobile ── */}
        <meta name="theme-color" content="#0f172a" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="CAT Prep" />

        {/* ── Performance: preconnect to font origin ── */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        {/*
          Expo Router injects a global CSS reset that makes ScrollView behave
          correctly on web. Keep this here — do not remove it.
        */}
        <ScrollViewStyleReset />

        {/* ── Structured data (JSON-LD) ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "CAT Newspaper Extractor",
              description: DESCRIPTION,
              applicationCategory: "EducationApplication",
              operatingSystem: "Web, iOS, Android",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "INR",
              },
              audience: {
                "@type": "EducationalAudience",
                educationalRole: "student",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
