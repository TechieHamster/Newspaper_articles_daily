import type { Article } from "./articleData";

export const blArticleData: Article[] = [
  {
    id: 101,
    page: 1,
    category: "BL · BUSINESS",
    headline: "Not just gold, love for equities too adds to BoP stress",
    subhead:
      "'Asset arbitrage' is a factor as FDI repatriations and FII selling add fuel to the fire on India's balance of payments.",
    body: `When it rains, it pours. That seems to be the challenge India is facing on the balance of payments (BoP) front. While the situation remains manageable given the economy's inherent strengths and India's historical resilience, the pressures building on the BoP suggest that solutions may need to go beyond curbing gold imports and crude oil consumption, especially if the US/Israel-Iran conflict persists and its economic fallout proves prolonged.

Yes, gold imports have risen sharply over the last five years, from 1.3 per cent of GDP in FY21 to around 2 per cent in FY26. Oil imports, too, have increased from 3 per cent to over 4.5 per cent of GDP. But India has faced similar — and even higher — oil-import burdens in the past, without comparable currency stress. In FY22, oil imports were close to 5 per cent of GDP, yet the rupee weakened only 3.7 per cent against the dollar, compared with the 11 per cent decline in FY26. Similarly, in FY19, when crude imports were around 5 per cent of GDP, the rupee fell about 6 per cent, far less severe than now.

The 11 per cent decline in FY26 marks the rupee's steepest fall since FY14. But unlike FY14, when forex reserves covered only about seven months of imports, India now has reserves equivalent to over 8 months of import cover. Compared with five years ago, India's BoP position has deteriorated from a surplus of 3.3 per cent of GDP to a deficit of 1.33 per cent, based on FY26 BoP estimates by SBI Research.

A closer look suggests the biggest structural shifts lie beyond gold and petroleum imports. Since March 2021, the rupee has depreciated 31 per cent. While incremental gold imports contributed about 0.7 percentage points of GDP to the worsening BoP, far bigger changes have emerged in capital flows. Net FDI flows have fallen from a positive 1.6 per cent of GDP in FY21 to near-flat levels now. Importantly, the decline is not due to weaker FDI inflows, which have remained between 2-3 per cent of GDP, but because of rising repatriation of capital out of India. FDI repatriations have increased from 1 per cent of GDP in FY21 to 1.6 per cent in FY26. In six of the previous 10 fiscals, repatriations remained below 1 per cent of GDP. Except for FY21, however, they have stayed above that mark for the last three years, dragging down net FDI flows.

Net FPI equity flows have also weakened sharply, moving from a positive 1.4 per cent of GDP in FY21 to a negative 0.5 per cent in FY26. While FPI outflows were similarly negative in FY22 (-0.6 per cent), net FDI inflows at that time still stood at 1.2 per cent of GDP, compared with almost negligible levels now. This is the core challenge confronting policy-makers. A spike in gold or oil imports can be managed in isolation. A temporary export slowdown due to tariff wars is also manageable. But when all of these occur simultaneously — alongside elevated FDI repatriations, IPO-related exits and sustained FPI outflows — the pressure becomes far more serious. It is effectively a battle on multiple fronts.

In February 2024, when Whirlpool Corporation sold a 24 per cent stake in its Indian subsidiary, its CEO remarked: "When you have a business trading at 50 times multiple when your own company trades a lot lower, it's an asset arbitrage." That example reflects a broader trend. Indian equities continue to trade at substantial premiums to global peers, even in sectors where growth differentials are limited. Large Indian IT services firms, for instance, still command significant valuation premiums over global bellwethers such as Accenture, despite comparable growth prospects.

Relative to global markets, Indian equities appear expensive, regardless of the debate around whether valuations are justified on an absolute basis. The S&P 500 is expected to deliver earnings growth of about 25 per cent in CY26 and trades at roughly 22 times forward earnings. By contrast, the Nifty 500 is projected to post earnings growth of only around 8 per cent, yet trades at similar valuations. On a trailing basis, the median P/E ratio for S&P 500 companies is 24x, with 64 per cent of firms trading below 30x earnings. For the Nifty 500, the median P/E is significantly higher at 34x, while only 40 per cent of companies trade below 30x.

Compounding the issue is the rise in global bond yields, which has reduced the relative attractiveness of Indian equities. The earnings yield of the Nifty 50 relative to 10-year bond yields in major economies has been steadily compressing, making Indian equities less attractive compared with risk-free assets and global AI-linked investment opportunities. In the process, the country is not only importing gold, but also importing ownership of Indian equities from foreigners at expensive valuations.`,
    mcqs: [
      {
        type: "Critical Reasoning",
        question:
          "The author argues that India's BoP stress in FY26 is categorically different from earlier episodes of high oil imports. Which of the following, if true, would most directly undermine this argument?",
        choices: [
          "FDI repatriation rates in FY14 were as high as those in FY26, yet the rupee stabilised quickly after a brief 12% fall.",
          "The 2022-23 period saw comparable FPI outflows without triggering the same magnitude of currency depreciation.",
          "India's forex reserves in FY14 covered fewer months of imports than they do today, yet the rupee fell less than in FY26.",
          "Gold imports as a share of GDP were higher in FY19 than in FY26.",
        ],
        answer:
          "FDI repatriation rates in FY14 were as high as those in FY26, yet the rupee stabilised quickly after a brief 12% fall.",
        explanation:
          "The author's core argument is that the simultaneous convergence of FDI repatriations, FPI outflows and import pressures is structurally new. If FDI repatriation rates were equally high in FY14 without comparable damage, the claim that repatriation-driven capital outflows are the 'new' structural factor would be directly undermined. Option B is a close trap — comparable FPI outflows without currency damage would only partly challenge the argument, not its structural core.",
      },
      {
        type: "Inference",
        question:
          "The Whirlpool CEO's remark — 'it's an asset arbitrage' — is used in the passage to support which of the following inferences?",
        choices: [
          "Foreign multinationals are rationally selling Indian subsidiaries at premium valuations to fund their own undervalued global operations, creating capital outflows that worsen India's BoP.",
          "Indian regulators should impose restrictions on foreign companies selling stakes in their Indian subsidiaries.",
          "The gap in P/E ratios between Indian and global markets reflects irrational exuberance among domestic retail investors.",
          "FPI outflows and FDI repatriations are both driven primarily by sector-specific valuation gaps in IT and consumer goods.",
        ],
        answer:
          "Foreign multinationals are rationally selling Indian subsidiaries at premium valuations to fund their own undervalued global operations, creating capital outflows that worsen India's BoP.",
        explanation:
          "The passage uses the Whirlpool example to show that premium Indian valuations incentivise foreign parents to monetise stakes here. This is the structural logic behind rising FDI repatriations — not a regulatory failure or sectoral quirk. Option C is a trap: the passage attributes the premium to investor confidence and favourable taxation, not irrationality.",
      },
      {
        type: "Strengthen",
        question:
          "Which of the following data points would most strengthen the author's central claim that India's BoP problem is now structurally driven by capital-account deterioration rather than the current account?",
        choices: [
          "Between FY21 and FY26, India's current account deficit as a proportion of GDP widened by less than 1 percentage point, while net capital inflows turned negative.",
          "Gold imports as a share of GDP rose faster than oil imports in the same period.",
          "The rupee's nominal effective exchange rate depreciated more sharply than the real effective exchange rate between FY21 and FY26.",
          "India's merchandise export growth outpaced import growth in four of the last five fiscal years.",
        ],
        answer:
          "Between FY21 and FY26, India's current account deficit as a proportion of GDP widened by less than 1 percentage point, while net capital inflows turned negative.",
        explanation:
          "The author's core thesis is that the real BoP pressure in FY26 does not originate in the current account (gold, oil) but in the capital account (FDI repatriations, FPI outflows). A small current account deterioration alongside a dramatic capital account reversal would most directly validate this structural shift. Option C is a sophisticated trap — NEER/REER divergence would suggest competitiveness effects, not capital flow drivers.",
      },
    ],
  },
  {
    id: 102,
    page: 3,
    category: "BL · BUSINESS",
    headline: "Federal Reserve and the story of gold vs equities",
    subhead:
      "As Kevin Warsh takes over as US Fed Chair, history shows that a delayed or inadequate response to inflation proves costly for equities and lucrative for gold.",
    body: `An epochal change of guard was triggered in motion last week with Kevin Warsh getting Senate confirmation of his appointment as the next Chairman of the US Fed's Board of Governors and Jerome Powell stepping down. As the most influential central bank in the world, the actions of the US Fed have had anywhere between moderate to significant impact on investors across the world. As Powell hands over the baton after eight years at the helm, Warsh takes charge at one of the most tumultuous times in US Fed's history, with the added pressure of a President constantly trying to influence the Fed's independence.

Warsh has his work cut out, especially on the inflation front. The PCE (personal consumption expenditure) price index, which the Fed targets to keep under 2 per cent, has now remained above the target level for 61 months straight — the longest since such targeting was started in 2012. It has recently crept substantially to 3.5 per cent in March — the index's latest reading, from 2.8 per cent in February. Higher energy prices are starting to show up in the inflation print. Long-term yields have gone up by about 100 bps since September 2024 despite a 175-bps cut in the Fed Funds Rate (FFR) in the same period. On Powell's last day in office, US 10-year yields spiked a considerable 12 bps.

In Powell's term which spanned eight years (two terms of four years each), gold has outperformed equities. While a 13-per cent CAGR for equities is no bad thing, gold has beaten equities by a comfortable margin with a CAGR of 16 per cent. This puts Powell in the bottom half of the table of Fed Chairs in the last five decades under whose term gold outperformed equities.

Occupying the bottom half alongside Powell is Arthur Burns, under whose term gold trounced equities. When he assumed office in February 1970, inflation (PCE price index) was as high as 5 per cent, driven up primarily by expansive spending on the war in Vietnam and social welfare programmes funded by government debt. The FFR was also commensurately high at 9.75 per cent (positive real returns). Inflation did cool to about 3 per cent. However, ahead of the Presidential election in 1972, the Fed apparently succumbed to political pressure from the incumbent Nixon administration, thereby prematurely lowering the FFR to as low as 3.5 per cent by February 1971. An artificial short-term boom, consequently, handed Nixon a win but not so much for the US economy. Inflation soared to a peak of around 12 per cent by 1974-end, coupled with the 1973 oil shock, giving rise to a cost-of-living crisis.

Burns believed the inflation was caused by transient supply-side concerns and it did not have a lot to do with monetary policy or extravagant government spending. He even disregarded 'volatile' food and fuel from the inflation basket and only targeted the other constituents (core inflation) — thus getting back to pumping liquidity and lowering the FFR to around 5 per cent by 1976-end. Inflation also declined to an equivalent 5 per cent by then. But Burns did not realise it was only artificial and that inflation would come back with a vengeance. William Miller took charge as the next Fed Chair as Burns' term expired. He, too, had similar beliefs to Burns on inflation and continued to have a dovish stance. Inflation, which had settled at around 6 per cent when he assumed office, quickly spiralled out of control towards 9 per cent by July 1979.

When Volcker took charge, he pulled a masterstroke. Shortly after assuming office, he cranked the FFR to an unprecedented 20 per cent by March 1980 and shocked the markets. This while inflation was still around the 12 per cent mark, driving massive real returns. More than the numbers, it restored faith in the Fed that inflation will be defeated. The perception mattered. However, this meant the economy underwent couple of recessions — a short one in 1980 and a longer one in 1981-82. These were bitter pills for the economy to swallow to correct the monetary excesses infused over a decade-and-a-half. By early 1982, inflation had cooled rapidly to around 5.5 per cent and then it went on a gradual decline to 3.3 per cent when Volcker's second term expired.

Warsh is about to take over when the world is going through tumultuous times. History suggests that a delayed or inadequate response to inflation can prove costly for equities. The recent rise in bond yields reflects the market's scepticism over the Fed's ability to keep inflation expectations anchored. Warsh, therefore, has a rough road ahead to navigate. The key questions now are whether the Fed will remain independent, will prices rise, whether inflation will be managed effectively, and which asset classes will fare best over the medium term.`,
    mcqs: [
      {
        type: "Critical Reasoning",
        question:
          "The author draws a historical parallel between Arthur Burns and Jerome Powell to make a claim about the current transition to Kevin Warsh. Which of the following best describes the logical structure of this argument and its most significant weakness?",
        choices: [
          "The argument uses historical precedent to predict that Warsh will face inflationary conditions similar to Burns' era; its weakness is that Burns' inflation was supply-driven while Warsh's challenge is primarily demand-side.",
          "The argument infers from past Fed Chair tenures that gold outperforms equities when inflation responses are delayed; its weakness is that correlation between Fed Chair performance and gold/equity returns does not establish a causal mechanism.",
          "The argument identifies political interference as the proximate cause of inflation under Burns; its weakness is that Powell also faced political pressure but managed equities to a 13% CAGR.",
          "The argument suggests Warsh must raise rates aggressively like Volcker; its weakness is that the current US debt-to-GDP ratio makes a 20% FFR politically and economically infeasible.",
        ],
        answer:
          "The argument infers from past Fed Chair tenures that gold outperforms equities when inflation responses are delayed; its weakness is that correlation between Fed Chair performance and gold/equity returns does not establish a causal mechanism.",
        explanation:
          "The passage's logical structure is inductive — it uses a pattern of Fed Chair tenures to project future asset class performance. The weakest link is that correlation between delayed inflation responses and gold outperformance during specific tenures does not prove that Warsh's actions will reproduce the same outcomes. Option A is a trap: it misstates the supply vs demand distinction and projects a specific mechanism not fully supported by the text.",
      },
      {
        type: "Inference",
        question:
          "The passage states that Volcker's FFR hike 'restored faith in the Fed that inflation will be defeated. The perception mattered.' What does this most logically imply about the author's view of Warsh's primary challenge?",
        choices: [
          "Warsh must raise the FFR above the inflation rate as quickly as possible, since speed of response is the historically validated solution to inflationary spirals.",
          "Managing inflation expectations and the credibility of the Fed's commitment may matter as much as the specific rate decisions Warsh makes.",
          "Warsh's political independence from the current President is a precondition for any successful inflation response, since the Burns-Nixon parallel shows political pressure always leads to policy failure.",
          "The bond market's scepticism about inflation control can be resolved only by a decisive FFR hike in Warsh's first FOMC meeting.",
        ],
        answer:
          "Managing inflation expectations and the credibility of the Fed's commitment may matter as much as the specific rate decisions Warsh makes.",
        explanation:
          "The passage explicitly singles out Volcker's restoration of 'faith' and the perception of credibility as a key factor — beyond the numerical rate decision. The author then uses this to say Warsh's challenge is anchoring expectations. Option A is a trap — it over-specifies the 'speed' condition, which the passage does not foreground; it emphasises conviction over tempo.",
      },
      {
        type: "Tone and Purpose",
        question:
          "The author's use of the phrase 'How about that for a send off!' (referring to the 12-bps spike on Powell's last day) is best understood as:",
        choices: [
          "Sarcastic commentary implying that Powell's legacy is permanently damaged by a single day's market reaction.",
          "Wry acknowledgement that the bond market's immediate response on Powell's departure day underscored the scale of the inflation credibility problem he is leaving behind.",
          "Celebratory irony suggesting that the yield spike vindicated those who criticised Powell's rate-cut decisions.",
          "Neutral reportage using colloquial phrasing to make the text more accessible to a general readership.",
        ],
        answer:
          "Wry acknowledgement that the bond market's immediate response on Powell's departure day underscored the scale of the inflation credibility problem he is leaving behind.",
        explanation:
          "The phrase comes immediately after noting that 10-year yields spiked 12 bps on Powell's last day despite 175 bps in rate cuts. The tone is dry/ironic — the market's parting 'gift' signals unfinished business on inflation. Option C is a trap: the passage does not endorse critics of Powell; it presents the yield move as evidence of a structural problem, not a verdict on a policy decision.",
      },
    ],
  },
  {
    id: 103,
    page: 2,
    category: "BL · BUSINESS",
    headline: "Where to fish for higher returns in a rising bond yields scenario",
    subhead:
      "Bond yields in several pockets have shot up even as the MPC is on pause. Here is how investors can capitalise on this — from SDLs to FRSBs to corporate bonds.",
    body: `With the oil shock beginning to make itself felt, returning inflation looks set to take the shine out of both gold and equities. The recent spike in India's Wholesale Price Index to 8 per cent plus suggests that corporate earnings, after a robust Q4 FY26, can take a breather over the next few months as companies try to pass on pinching input costs to consumers.

Global gold prices tend to be inversely correlated to treasury (government bond) yields. As US inflation rears its head and developed market bonds see a rise in yields, investors may make a beeline for treasuries instead of gold. However, in investing, whenever opportunities in some asset classes recede, they crop up in others. Today, bonds are turning more attractive for investors, with rising inflation expectations and the renewed possibility of policy rate hikes.

India's Monetary Policy Committee (MPC) has slashed repo rates by 125 basis points through 2025 and is now sitting on the pause button. But with bond markets responding to the recent oil shock, bond yields in many sections of the market are already ruling at levels that prevailed before these rate cuts. The yield on the 10-year government security (G-Sec), the benchmark for the bond market, bottomed out at 5.9 per cent in May 2025 and has since climbed to 7.1 per cent now. These are levels that prevailed in 2025 before repo rate cuts began.

State Development Loans (SDLs) present a high-yield opportunity. Historically, SDLs have usually traded at a 30-40 basis point spread over G-Secs of similar tenure. Since the beginning of 2026, however, SDLs are offering attractive yields because the SDL spread has widened to 70-80 basis points. State governments in India have become more prodigious borrowers than the Centre, leading to the market demanding higher yields from them. Effectively, investors can earn yields as high as 7.6-7.8 per cent by investing in State government bonds, against around 7 per cent from comparable Central G-Secs. SDLs still offer near-sovereign safety because the servicing of these loans is managed by the RBI through an escrow mechanism. There is no past case of a State government in India defaulting on, or delaying a SDL payout. The latest SDL auction on May 8 offered bonds with maturity dates ranging from 2032 to 2056 and yields ranging from 7.5 per cent to 7.9 per cent.

When the economic outlook tells you that rates can only flat-line or go up, floating rate bonds make plenty of sense. The Government of India's Floating Rate Savings Bonds (FRSBs) meant for retail investors are the only practical option for investors looking to ride the rate cycle through floating rates. These bonds peg their interest rate to a 35-basis point spread over the prevailing interest rate on the NSC. FRSBs have offered an island of high rates to investors across rate cycles, because when policy rates fall, the government tends to shield NSC from deep cuts. When rates rise, NSC rates tend to rise. They are also fixed 25 basis points above the five-year G-Sec yield. The current floating rate on FRSBs is 8.05 per cent per annum.

Apart from SDLs, corporate bonds have also seen their spreads over G-Secs widen sharply in the past year, presenting opportunities for bond investors. While yields on short-term corporate bonds (up to one year) are 40-50 basis points below 2025 levels, yields on bonds with three-year-plus maturity are back to levels that prevailed before the rate cuts started. Currently, AAA-rated corporate bonds offer yields of about 7.4-7.5 per cent for three-year tenures. Those rated at AA offer 8 per cent for the same tenure. Within corporate bonds, NBFC bonds offer an island of higher returns. However, as online bond platforms tend to aggressively promote lower-rated bonds with high yields, it is important to keep off bonds with default risks. The higher the yield compared to G-Secs (which trade at 6.2-7 per cent), the greater your risk of losing your principal.`,
    mcqs: [
      {
        type: "Critical Reasoning",
        question:
          "The author recommends FRSBs as the 'only practical option' for floating-rate exposure. Which of the following, if true, would most directly challenge this recommendation?",
        choices: [
          "Most floating rate debt mutual funds use derivative swaps to simulate floating returns, making them imperfect proxies but still more liquid than FRSBs.",
          "The NSC interest rate formula has historically lagged the repo rate cycle by two to three quarters, causing FRSB payouts to underperform during rapid rate-hike phases.",
          "NBFC bonds with AA ratings currently yield 8.5 per cent, which is higher than the current FRSB rate of 8.05 per cent.",
          "FRSBs have a seven-year lock-in that prevents investors from switching to higher-yielding instruments if rates rise faster than expected.",
        ],
        answer:
          "The NSC interest rate formula has historically lagged the repo rate cycle by two to three quarters, causing FRSB payouts to underperform during rapid rate-hike phases.",
        explanation:
          "Since FRSBs are pegged to the NSC rate (which itself is reset periodically), a structural lag between policy rate increases and NSC adjustments would mean FRSBs fail to track rate rises promptly — directly undermining the author's claim that they are the best vehicle for riding a rate-hike cycle. Option D is a trap: the lock-in is a risk, but the author already acknowledges it; the question asks for a challenge to the recommendation specifically as a floating-rate instrument.",
      },
      {
        type: "Inference",
        question:
          "The passage notes that despite a 175-bps cut in the Fed Funds Rate since September 2024, long-term yields have gone up by about 100 bps in the same period. What does this most directly imply for Indian bond investors?",
        choices: [
          "Indian investors should avoid long-duration G-Secs entirely, since rising global yields will keep pushing Indian bond prices lower.",
          "The bond market is pricing in future rate hikes at a faster pace than the MPC is currently signalling, making medium-duration bonds relatively more attractive than short-term instruments.",
          "The inverse relationship between central bank rate cuts and market yields suggests that bond markets are anticipating sustained inflation, making the current elevated yields an entry opportunity rather than a signal to stay out.",
          "Since SDL spreads have widened alongside rising G-Sec yields, any further yield compression in G-Secs will necessarily narrow SDL spreads, eroding the advantage the author describes.",
        ],
        answer:
          "The bond market is pricing in future rate hikes at a faster pace than the MPC is currently signalling, making medium-duration bonds relatively more attractive than short-term instruments.",
        explanation:
          "The passage's central logic is that bond markets are running ahead of policy — yields have already risen to pre-cut levels even though the MPC is only on 'pause'. This implies medium-duration instruments (where you lock in current elevated yields before actual hikes occur) are the sweet spot. Option C sounds correct but conflates the US Fed context with the Indian market; the passage treats the global yield rise as a risk signal rather than an explicit entry call for all durations.",
      },
      {
        type: "Vocabulary",
        question:
          "In the context of the passage, the phrase 'an island of higher returns' (used to describe NBFC bonds and FRSBs) most closely implies:",
        choices: [
          "A niche segment that consistently offers above-average yields across all market conditions, making it structurally superior to other fixed-income instruments.",
          "A pocket of relatively elevated returns within a broader environment of compressed yields, accessible to investors who are willing to accept specific accompanying constraints.",
          "An isolated, illiquid market segment where pricing is not efficiently connected to the broader bond market.",
          "A term used by regulators to identify high-risk bond categories that require special investor disclosures.",
        ],
        answer:
          "A pocket of relatively elevated returns within a broader environment of compressed yields, accessible to investors who are willing to accept specific accompanying constraints.",
        explanation:
          "The author uses 'island' metaphorically — FRSBs and NBFC bonds stand out in a compressed-yield landscape, but each comes with trade-offs (lock-in for FRSBs, credit risk for NBFCs). The phrase signals bounded opportunity, not universal superiority. Option A is a trap: 'across all market conditions' over-generalises the claim; the passage is clear that these advantages are context-dependent.",
      },
    ],
  },
  {
    id: 104,
    page: 4,
    category: "BL · BUSINESS",
    headline: "Buying what markets ignore: a guide to contra funds",
    subhead:
      "Motilal Oswal's entry into the contra fund category brings the total to four schemes. A look at how each fund hunts for out-of-favour stocks and what investors should expect.",
    body: `Motilal Oswal Mutual Fund has entered the contra fund category with an NFO in May, adding to a relatively under-populated segment that currently houses only three schemes: SBI Contra, Invesco India Contra and Kotak Contra Fund. The launch comes at a time when the category, though small, has quietly built a track record that merits closer scrutiny. The key question is whether these funds have consistently outperformed broader benchmarks over the long term, and how their stock-picking frameworks differ.

Contra funds invest in stocks or sectors that are currently out of favour and ignored by the market, betting on a turnaround in sentiment and business performance. In contrast, value funds focus on stocks trading below their intrinsic or fundamental value, irrespective of market popularity. While value investors may still buy popular companies if valuations are attractive, contra investors generally avoid crowded trades and prefer neglected opportunities linked to market inefficiencies. The category's limited size can be traced to SEBI's 2017 classification norms, which required fund houses to offer either a value fund or a contra fund, but not both. Consequently, AMCs largely gravitated towards value strategies, leading to over 40 such schemes across active and passive categories. However, a regulatory shift in February 2026 now permits AMCs to operate both categories, subject to portfolio overlap remaining below 50 per cent.

Despite its small universe, the contra category has delivered competitive returns. Over the last 10 years, five-year rolling returns averaged about 19 per cent CAGR, outperforming the Nifty 50 TRI (15 per cent) and Nifty 500 TRI (17 per cent). Flexi-cap funds, often considered a comparable diversified category, delivered around 16 per cent. Within the segment, SBI Contra has been the standout performer, generating 22 per cent CAGR on this measure, followed by Kotak Contra and Invesco India Contra at 18 per cent and 17 per cent, respectively.

Each fund house deploys a distinct framework to identify contrarian opportunities. SBI Contra adopts a three-bucket approach: turnaround, cyclical and value. Turnaround ideas focus on companies facing temporary operational or financial stress but with identifiable triggers such as management change or restructuring. The cyclical bucket tracks sectors nearing the bottom of their cycles, using indicators such as capacity utilisation and pricing power. The value segment targets overlooked businesses trading at significant discounts to long-term potential.

Kotak Contra builds a contrarian universe from its research coverage of over 550 stocks. Eligibility is based on five predefined filters: underperformance versus the NSE 500 index, trading below long-term average valuations, lower valuation multiples relative to sector peers, sectoral underperformance versus the benchmark, or trading below the 200-day moving average. From this universe, the fund applies its BMV framework (business, management and valuation) to identify fundamentally-strong companies with re-rating potential. The final portfolio usually consists of 50-60 stocks.

Invesco India Contra focuses on four categories of opportunities: companies in a turnaround phase, stocks trading below fundamental value, businesses benefiting from cyclical upturns and growth companies available at attractive valuations. It actively takes overweight and underweight sector calls against the benchmark based on valuation opportunities and sector rotation trends.

The new Motilal Oswal Contra Fund plans to follow a "contra growth" strategy, differentiating itself from existing contra schemes that largely adopt a value-oriented approach while identifying contrarian opportunities. It will primarily use the PEG (price/earnings-to-growth) framework targeting a portfolio PEG ratio of around 1.2 and focusing on companies with strong profit-growth visibility over the next two-three years. Key quality filters include operating cash flow-to-net worth, strong profit-to-cash-flow conversion and return ratios. The portfolio will remain concentrated with 25-30 high-conviction stocks.

Contra investing is inherently timing-sensitive. Even well-founded ideas may remain out of favour for extended periods, leading to interim underperformance and testing investor patience. Another major risk is "value traps", where beaten-down stocks fail to recover due to structural issues. Further, contra funds can lag during momentum-driven bull markets, as their portfolios are skewed towards under-owned or temporarily weak segments. Not every stock in a contra fund portfolio necessarily represents a contrarian opportunity, as several holdings overlap with other diversified equity funds. Contra funds suit patient, risk-tolerant investors with an investment horizon of more than five years.`,
    mcqs: [
      {
        type: "Critical Reasoning",
        question:
          "The passage states that SEBI's 2017 norms caused AMCs to gravitate towards value funds, resulting in over 40 value schemes versus only three contra funds. A regulatory shift in February 2026 now permits both. Which of the following would most weaken the prediction that this shift will lead to a significant increase in contra fund launches?",
        choices: [
          "Most AMC research teams are already optimised to evaluate value metrics such as P/B and P/E ratios, and retraining them to identify structurally neglected stocks requires multi-year organisational change.",
          "The regulatory change merely lifts a prohibition; AMCs will only launch contra funds if they can demonstrate a sufficiently differentiated investment philosophy to attract investor capital away from existing value funds.",
          "Historical data shows that contra funds have outperformed value funds over five- and ten-year rolling periods, which should incentivise AMCs to launch more contra products.",
          "SEBI's 50 per cent portfolio overlap restriction will create compliance costs that make it economically unattractive to run both a value and a contra fund simultaneously.",
        ],
        answer:
          "The regulatory change merely lifts a prohibition; AMCs will only launch contra funds if they can demonstrate a sufficiently differentiated investment philosophy to attract investor capital away from existing value funds.",
        explanation:
          "The prediction that the regulatory shift will increase contra fund launches assumes that supply-side permission is the binding constraint. Option B challenges this by pointing out the demand-side constraint: AMCs need investor interest and differentiation, not just regulatory permission. Option D is a close trap — compliance cost is a real friction, but the passage already notes Motilal Oswal launched under the new norms, suggesting this is surmountable.",
      },
      {
        type: "Inference",
        question:
          "The passage contrasts Motilal Oswal's 'contra growth' PEG-based approach with the existing funds' 'value-oriented' approaches. Which of the following best captures the implicit risk this distinction creates for contra fund category classification?",
        choices: [
          "A PEG-based framework targeting profit-growth visibility may result in Motilal Oswal's portfolio overlapping significantly with growth-oriented flexi-cap funds, blurring the contra fund category's identity.",
          "Using PEG ratios rather than P/E ratios will make performance attribution harder, reducing transparency for investors comparing contra funds.",
          "Motilal Oswal's concentrated 25-30 stock portfolio creates higher idiosyncratic risk than the 50-60 stock portfolios of Kotak Contra, which could deter risk-averse contra investors.",
          "The PEG framework implicitly requires earnings forecasts, which are inherently unreliable in volatile market conditions characterised by geopolitical disruption.",
        ],
        answer:
          "A PEG-based framework targeting profit-growth visibility may result in Motilal Oswal's portfolio overlapping significantly with growth-oriented flexi-cap funds, blurring the contra fund category's identity.",
        explanation:
          "The passage defines contra investing as targeting out-of-favour, neglected stocks. A 'contra growth' strategy using PEG and profit-growth visibility sounds more like a quality-growth framework, potentially overlapping with flexi-cap growth mandates. The passage itself acknowledges that 'not every stock in a contra fund necessarily represents a contrarian opportunity' — the Motilal Oswal approach stretches this tension further.",
      },
      {
        type: "Strengthen",
        question:
          "The passage claims that contra funds are 'suited as a satellite allocation within a diversified portfolio.' Which of the following pieces of evidence would most strengthen this specific claim?",
        choices: [
          "Contra fund returns show low correlation with large-cap index returns during periods when momentum-driven bull markets push the Nifty 50 to new highs.",
          "SBI Contra's 22% CAGR over rolling five-year periods exceeds the Nifty 500 TRI by 5 percentage points, demonstrating alpha generation even over long holding periods.",
          "Contra funds hold stocks that are not held by most actively-managed flexi-cap funds, meaning adding contra exposure does not increase concentration risk in a diversified portfolio.",
          "Contra funds underperform during bull markets but recover sharply in corrections, providing a natural hedge against downside risk in a diversified equity portfolio.",
        ],
        answer:
          "Contra fund returns show low correlation with large-cap index returns during periods when momentum-driven bull markets push the Nifty 50 to new highs.",
        explanation:
          "A 'satellite allocation' is justified when the satellite adds something the core portfolio lacks — primarily diversification through low correlation, not just higher returns. Low correlation with large-cap indices means adding contra funds reduces overall portfolio volatility, which is the precise rationale for a satellite allocation. Option B is a trap: high absolute returns are a reason to hold the fund as a core allocation, not necessarily a satellite.",
      },
    ],
  },
  {
    id: 105,
    page: 1,
    category: "BL · BUSINESS",
    headline: "TCS to build industry-specific AI systems with 5-layer stack",
    subhead:
      "CEO K Krithivasan outlines an 'Enterprise Intelligence Integrator' strategy in the company's FY25-26 annual report, targeting a unified AI operating system for enterprises.",
    body: `Tata Consultancy Services plans to build and manage a unified control plane, or an "AI Operating System", across its full AI stack to deliver industry-specific AI systems, wrote CEO K Krithivasan in the company's FY25-26 annual report.

"Many enterprises have tools and models, but not the standardised control and context needed to run agentic systems safely in day-to-day operations," he said. "This is where TCS is positioning itself as an Enterprise Intelligence Integrator — modernising software stacks, embedding AI agents into operations, and governing data and security at scale to deliver measurable outcomes."

TCS is building its AI services across five layers. The foundational layer provides the compute and infrastructure backbone for AI, including high-performance GPUs, specialised chips, scalable data centres, edge devices and cloud platforms. The company's HyperVault and SovereignCloud initiatives are part of this layer. The second layer focusses on converting large language models (LLMs), small language models (SLMs) and industry-trained frameworks into actionable intelligence. The third layer provides platforms and tools to build, deploy and govern AI solutions. The fourth layer embeds AI into core business workflows through intelligent enterprise applications, while the fifth connects AI systems to real-world outcomes using robotics, edge AI, conversational and visual interfaces, and decision intelligence integrated into operations.

TCS Chairman N Chandrasekaran outlined four focus areas for the company's Enterprise Intelligence Integrator strategy: building an AI operating system for industries, developing India's first AI-focussed data centre with rack density above 160 KW, strengthening its Infrastructure-to-Intelligence offerings through partnerships, and creating secure, resilient and sovereign AI infrastructure.

"GenAI and agentic AI are entering a new phase of growth. AI will not just be a layer, but the operating foundation," Chandrasekaran said.

Commenting on TCS' AI Operating System ambitions, Sanchit Vir Gogia, Co-Founder and Chief Analyst at Greyhound Research, cautioned enterprises against getting "carried away by the poetry of the report". TCS reported annualised revenues of $2.3 billion from AI services and $11.5 billion from new-age services, including cloud, data, enterprise solutions and cybersecurity. Alongside acquisitions such as Coastal Cloud for $700 million and ListEngage for $72.8 million, the company said it plans to expand next-generation capabilities through further inorganic growth initiatives.`,
    mcqs: [
      {
        type: "Critical Reasoning",
        question:
          "The analyst from Greyhound Research cautions enterprises against being 'carried away by the poetry of the report'. In the context of the article, this remark most directly challenges which specific claim made by TCS?",
        choices: [
          "The claim that TCS has already secured $2.3 billion in AI revenues, which may reflect bundled services rather than discrete AI deployments.",
          "The assertion that TCS can function as an 'Enterprise Intelligence Integrator' — governing AI standardisation and control across enterprises — given that most large enterprises already have entrenched, heterogeneous AI vendor ecosystems.",
          "The projection that GenAI will become the 'operating foundation' of enterprises, since most companies are still in the pilot stage of agentic AI deployment.",
          "The characterisation of TCS's infrastructure layer as sovereign and resilient, which is an unverifiable marketing claim without independent audits.",
        ],
        answer:
          "The assertion that TCS can function as an 'Enterprise Intelligence Integrator' — governing AI standardisation and control across enterprises — given that most large enterprises already have entrenched, heterogeneous AI vendor ecosystems.",
        explanation:
          "The 'poetry of the report' caution directly follows TCS's CEO positioning the company as the single locus of AI integration for enterprises. The analyst's implicit challenge is: the aspiration sounds compelling, but the on-the-ground reality of fragmented enterprise AI landscapes makes a single-vendor 'operating system' an appealing but difficult-to-execute proposition. Option A is a trap — questioning revenue reporting methodology is not the natural referent of 'poetry', which targets conceptual ambition rather than historical financials.",
      },
      {
        type: "Inference",
        question:
          "TCS describes its HyperVault and SovereignCloud as part of the 'foundational layer' of its AI stack. Based on the passage, what is the most likely strategic reason for naming these at the foundational layer rather than placing them in one of the higher service layers?",
        choices: [
          "To signal to government clients and regulated industries that data sovereignty and security are built into the infrastructure base, rather than added as an afterthought at the application layer.",
          "Because GPU compute and cloud infrastructure require proprietary hardware that TCS controls, giving it a cost advantage over competitors who rely on hyperscaler clouds.",
          "To differentiate TCS from IT services competitors who offer only application-layer AI solutions and lack hardware infrastructure.",
          "Because foundational layer products generate recurring revenue at higher margins than professional services engagements at higher layers.",
        ],
        answer:
          "To signal to government clients and regulated industries that data sovereignty and security are built into the infrastructure base, rather than added as an afterthought at the application layer.",
        explanation:
          "The passage explicitly links HyperVault and SovereignCloud to the goal of creating 'secure, resilient and sovereign AI infrastructure'. Placing sovereignty at the foundational layer is a positioning signal — it tells regulated enterprise clients (banks, government, defence) that compliance is a base-layer property, not a layer-five bolt-on. Option C is a close trap but focuses on competitor differentiation in general rather than the specific governance and compliance message the naming choice communicates.",
      },
      {
        type: "Strengthen",
        question:
          "The passage implies that TCS is positioning the 'AI Operating System' as a cross-industry platform. Which of the following developments would most strengthen TCS's claim that this is a viable and distinctive business strategy?",
        choices: [
          "A marquee win with a global bank where TCS's AI OS standardised 12 different AI vendors' models into a single governed control plane, reducing AI deployment time by 60 per cent.",
          "An increase in TCS's total AI revenues from $2.3 billion to $3.5 billion in the next fiscal year, driven by new client wins across North America.",
          "A partnership with NVIDIA to deploy next-generation H200 GPUs at TCS's planned 160 KW rack-density data centre before any other Indian IT company.",
          "TCS receiving a government contract to build India's national AI infrastructure, validating the sovereign AI positioning of the HyperVault layer.",
        ],
        answer:
          "A marquee win with a global bank where TCS's AI OS standardised 12 different AI vendors' models into a single governed control plane, reducing AI deployment time by 60 per cent.",
        explanation:
          "The 'Enterprise Intelligence Integrator' thesis rests on TCS's ability to solve the fragmentation problem across multiple AI tools within a single enterprise. A demonstrated case study that proves standardised control reduces complexity and time-to-deployment is the strongest possible validation of the strategy — it shows the concept working in the real world. Option B strengthens revenue metrics but not the distinctive 'AI OS as control plane' claim specifically.",
      },
    ],
  },
  {
    id: 106,
    page: 1,
    category: "BL · BUSINESS",
    headline: "Gulf war cuts India's LPG imports by 4.3 lakh barrels/day",
    subhead:
      "Closure of the Strait of Hormuz triggered an unprecedented energy shock; India's LPG storage covers only 10 days of consumption, leaving commercial users severely exposed.",
    body: `The closure of the Strait of Hormuz, through which India gets nearly two-thirds of its LPG imports, sharply disrupted supplies of the cooking fuel, with imports falling by about 430,000 barrels per day (b/d) or 430 kb/d in March-April.

The International Energy Agency, in its latest commentary on the impact of the West Asia conflict on liquefied petroleum gas (LPG) flows, said the crisis had triggered an unprecedented global energy shock. Around 3.4 billion people across developing countries depend on LPG as the primary cooking fuel. In 2025, about 30 per cent of global seaborne LPG exports transited through the Strait, the agency noted.

India's LPG imports have been particularly affected, dropping by more than half during the first two months of the conflict, a loss of around 430 kb/d. To offset the shortfall, the government directed domestic refineries to maximise LPG production, adding an estimated 180 kb/d. Additional demand curbs were also introduced to reduce the impact on supplies.

Companies secured some alternative cargoes, but supplies from the US take nearly 40 days to reach Mumbai, compared with just four-five days from the Gulf region. India's LPG storage capacity covers a little over 10 days of consumption, offering only a limited cushion during supply disruptions. The shortage hit commercial users the hardest, with many unable to access pre-conflict supply volumes, while both commercial and household consumers faced sharply higher prices in unregulated markets.

LPG exports through the Strait plunged about 80 per cent in March, falling from an average 1.5 million barrels per day (mb/d) in 2025 to just 0.3 mb/d during the conflict. Almost all Middle East LPG exports were shipped to Asia in 2025, with nearly 60 per cent used by homes, restaurants, street vendors and commercial establishments — enough to meet the cooking needs of around 820 million people. The remaining volumes were largely used for water heating and as feedstock for petrochemicals, particularly in China, where some flexibility exists to switch to alternative feedstocks.

The IEA also noted that damage to LPG infrastructure in Qatar, Oman and Iran has resulted in production losses of around 170 kb/d. Eight additional LPG-related facilities in the region were reportedly hit, though the extent of the damage remains unclear. LPG prices surged sharply in March, with benchmark rates in India and East Africa rising as much as 90 per cent above 2025 average, while West African prices climbed about 70 per cent.

The supply shock underscores a structural vulnerability in India's energy security architecture. The country's limited domestic storage, high dependence on a single choke-point waterway for over 60 per cent of its LPG inflows, and the long transit times from alternative suppliers such as the US combine to create a scenario where even a temporary disruption causes disproportionate and prolonged price stress, particularly for the most economically vulnerable segments of the population.`,
    mcqs: [
      {
        type: "Critical Reasoning",
        question:
          "The passage argues that India faces a 'structural vulnerability' in LPG energy security. Which of the following, if true, would most directly undermine the severity of this claim?",
        choices: [
          "India has signed long-term LPG supply contracts with the US, Australia and Nigeria that include contractual delivery timelines as fast as 25 days to Mumbai.",
          "Domestic LPG production from Indian refineries can be scaled up to cover 40 per cent of normal import volumes within 90 days of a supply disruption.",
          "The government-regulated LPG cylinder price has remained unchanged despite the 90 per cent surge in benchmark import prices, insulating household consumers entirely from the price shock.",
          "China's ability to substitute LPG with naphtha as a petrochemical feedstock means that global LPG demand will fall during prolonged Gulf supply disruptions, eventually reducing price pressure on India.",
        ],
        answer:
          "Domestic LPG production from Indian refineries can be scaled up to cover 40 per cent of normal import volumes within 90 days of a supply disruption.",
        explanation:
          "The structural vulnerability argument rests on two pillars: geographic concentration of supply source and inadequate domestic storage/production buffer. If domestic refineries can rapidly replace 40 per cent of import shortfalls, the buffer is far more substantial than the '10 days of storage' figure suggests, directly undermining the severity of the structural claim. Option C is a trap: protecting household consumers from price increases does not address the physical supply availability problem, which is the core structural issue.",
      },
      {
        type: "Inference",
        question:
          "The passage states that 'China has some flexibility to switch to alternative feedstocks' while India does not. What does this most logically imply about the difference in LPG supply shock exposure between the two countries?",
        choices: [
          "China's superior petrochemical infrastructure allows it to absorb LPG supply shocks at the national level, while India's near-total dependence on LPG for domestic cooking makes supply disruptions a welfare crisis rather than merely an industrial input problem.",
          "China's LPG imports are primarily for industrial use, whereas India's are for household consumption, meaning China can destock industrial LPG reserves to compensate for import shortfalls.",
          "China's diversified energy feedstock base insulates it from LPG price spikes, whereas India's refinery sector is too small to substitute domestically produced LPG for imported volumes.",
          "India should restructure its LPG consumption pattern to increase the share of petrochemical use, thereby gaining the same feedstock flexibility that insulates China from supply shocks.",
        ],
        answer:
          "China's superior petrochemical infrastructure allows it to absorb LPG supply shocks at the national level, while India's near-total dependence on LPG for domestic cooking makes supply disruptions a welfare crisis rather than merely an industrial input problem.",
        explanation:
          "The passage specifically notes that China's flexibility to switch to alternative petrochemical feedstocks gives it an adjustment mechanism. India's LPG usage is dominated by household cooking — which has no comparable substitutability — meaning a supply disruption hits subsistence needs, not discretionary industrial inputs. Option B is a tempting trap but introduces the concept of 'destocking reserves', which the passage does not support.",
      },
      {
        type: "Strengthen",
        question:
          "The IEA described the Gulf LPG crisis as an 'unprecedented global energy shock'. Which of the following additional pieces of information would most strengthen this characterisation?",
        choices: [
          "Previous Gulf conflicts in 1991 and 2003 resulted in no significant LPG supply disruptions because LNG, not LPG, was the dominant cooking fuel in developing countries at that time.",
          "The 80 per cent decline in Strait of Hormuz LPG exports in March was the largest single-month disruption in any internationally traded energy commodity in the past three decades.",
          "The 3.4 billion people who depend on LPG for cooking represent a larger population than was affected by the 1973 oil shock, which disrupted petroleum products consumed by approximately 1.2 billion people.",
          "Global LPG spot prices in April 2026 reached their highest absolute dollar level ever recorded, surpassing even the price spikes seen during the 2008 commodity super-cycle.",
        ],
        answer:
          "The 80 per cent decline in Strait of Hormuz LPG exports in March was the largest single-month disruption in any internationally traded energy commodity in the past three decades.",
        explanation:
          "The characterisation of 'unprecedented' requires evidence of historical comparison. A finding that this was the largest single-commodity disruption in 30 years directly validates the 'unprecedented' label by providing a comparative historical benchmark. Option C is a trap: it compares the number of people affected, not the supply disruption magnitude — but 'unprecedented energy shock' refers to the disruption to supply flows, not simply the count of potentially affected consumers.",
      },
    ],
  },
  {
    id: 107,
    page: 1,
    category: "BL · BUSINESS",
    headline: "Aditya Birla Group to infuse ₹4,730 crore equity in Vodafone Idea",
    subhead:
      "The board approved convertible warrants worth $500 million on a preferential basis and called an EGM for June 11; AGR relief from DoT and Chairman Birla's returned stake add to the recovery story.",
    body: `The Aditya Birla Group on Saturday committed an equity infusion of $500 million (₹4,730 crore) in debt-ridden telco Vodafone Idea (Vi), as per an exchange filing. On the day of Vi's fourth quarter results, the board also approved the issuance of fully convertible warrants worth ₹4,730 crore ($500 million) to Promoter Group Aditya Birla on a preferential basis. Each warrant is convertible into one fully paid-up equity share.

Over the years, the Group has invested around ₹27,000 crore in Vi, as indicated by Sushil Agarwal, Chief Financial Officer and Director of Aditya Birla in Vi's earlier investor's meet.

The board also called for an extraordinary general meeting on June 11 to seek approval of the shareholders for the preferential issue. The development comes days after Kumar Mangalam Birla, Chairperson of Aditya Birla, returned as the Chairman of Vi on May 5.

In April, the Department of Telecommunications (DoT) gave a major relief to Vodafone Idea on its long-pending adjusted gross revenue (AGR) dues, reducing the payable amount to ₹64,046 crore as of December 31, 2025, from ₹87,695 crore earlier. Under the revised payment schedule, Vi will pay ₹126 crore between March 2026 and March 2031, followed by a minimum of ₹100 crore annually from March 2032 to March 2035. The remaining ₹10,608 crore will then be repaid over six years until March 2041. The company must also pay spectrum usage charges of ₹609 crore, along with interest.

Vi's bank debt stood at ₹726 crore in the March quarter, down sharply from ₹2,326 crore a year earlier. Chairman Birla had increased his stake in Vi by 2.21 crore shares on January 30 and another 1.88 crore shares on February 1 at ₹11.13 per share.`,
    mcqs: [
      {
        type: "Critical Reasoning",
        question:
          "The passage presents the equity infusion, AGR relief and the Chairman's return as positive developments for Vi. A sceptic would most reasonably argue that these developments, taken together, are insufficient to resolve Vi's structural challenges because:",
        choices: [
          "The ₹4,730 crore infusion, while material, is small relative to Vi's total debt obligations and cannot bridge the spectrum investment gap needed to compete with Reliance Jio and Bharti Airtel on 5G rollout.",
          "Preferential warrant issuances dilute existing minority shareholders' equity value and signal that the promoter lacks confidence in Vi's ability to raise funds at market prices.",
          "The DoT's revised AGR payment schedule spreads payments over 15 years, which means Vi will remain capital-constrained through most of its competitive window against better-funded peers.",
          "Kumar Mangalam Birla's return as Chairman is a reputational move rather than a strategic one, since day-to-day operational decisions are made by the CEO, not the non-executive Chairman.",
        ],
        answer:
          "The ₹4,730 crore infusion, while material, is small relative to Vi's total debt obligations and cannot bridge the spectrum investment gap needed to compete with Reliance Jio and Bharti Airtel on 5G rollout.",
        explanation:
          "The most structurally compelling sceptical argument is about competitive adequacy, not just debt reduction. Even with ₹4,730 crore, Vi faces a spectrum investment deficit versus Jio and Airtel that runs into tens of thousands of crores. Option C is a close trap — the AGR deferral is real relief, but the sceptic's strongest argument targets the competitive gap (capex for 5G), not just the debt repayment timeline.",
      },
      {
        type: "Inference",
        question:
          "The passage notes that Vi's bank debt fell sharply from ₹2,326 crore to ₹726 crore year-on-year, even before the new equity infusion. What does this most directly suggest about Vi's financial management over the past year?",
        choices: [
          "Vi has been prioritising bank debt repayment over subscriber acquisition spending, which may have contributed to its competitive weakness against Jio and Airtel.",
          "The significant reduction in bank debt indicates Vi has been generating sufficient operating cash flows to service its financial obligations.",
          "Vi has been replacing relatively expensive bank debt with cheaper government-deferred AGR dues, effectively restructuring its liability profile towards longer-duration obligations.",
          "The fall in bank debt reflects the conversion of loans to equity by creditor banks, which would have diluted existing shareholders prior to the new warrant issuance.",
        ],
        answer:
          "Vi has been replacing relatively expensive bank debt with cheaper government-deferred AGR dues, effectively restructuring its liability profile towards longer-duration obligations.",
        explanation:
          "The passage shows simultaneous falls in bank debt and a DoT restructuring of AGR dues. The most coherent interpretation is that Vi is deliberately shifting from short-duration, high-rate bank loans to long-duration government obligations (AGR dues repayable over 15 years at structured rates) — a classic liability management exercise. Option B is a trap: the passage gives no evidence of strong operating cash flows; in fact, the equity infusion suggests cash generation alone is insufficient.",
      },
      {
        type: "Vocabulary",
        question:
          "In the context of the passage, 'adjusted gross revenue (AGR) dues' refers to:",
        choices: [
          "A category of government taxes on telecom spectrum usage, disputed by telcos as being calculated on a broader revenue definition than the companies believed was contractually agreed.",
          "The total outstanding bank loans of telecom companies, adjusted for write-offs and provisions made by lenders during the 2020-22 period of sector-wide financial stress.",
          "The government's estimate of revenue that telecom companies underreported in filings, forming the basis of fraud charges that were subsequently settled through a payment schedule.",
          "A regulatory formula used by TRAI to assess spectrum pricing based on telecom companies' gross billings, adjusted for interconnect and roaming charges.",
        ],
        answer:
          "A category of government taxes on telecom spectrum usage, disputed by telcos as being calculated on a broader revenue definition than the companies believed was contractually agreed.",
        explanation:
          "AGR dues arose from the Supreme Court's interpretation that gross revenue (including non-telecom revenue) formed the base for spectrum and licence fees — a much broader definition than telcos had been paying on. The dispute centred on definitional scope, not fraud or bank loans. Option C is a sophisticated trap: while there was a legal dispute, it was about the scope of the revenue definition, not about underreporting in the fraud sense.",
      },
    ],
  },
  {
    id: 108,
    page: 5,
    category: "BL · BUSINESS",
    headline: "SRF: On the road to recovery after navigating geopolitical headwinds",
    subhead:
      "The chemicals major expects 15-20 per cent revenue growth in FY27, driven by refrigerant gas quota benefits and new product launches, even as Chinese competition and energy costs remain overhangs.",
    body: `SRF reported its Q4FY26 results in early May and provided a strong outlook. The company had been recommended a hold in August 2025 because valuations were elevated at 44 times one-year forward earnings even when factoring for expectations of strong growth. Since that call, the stock has declined 4 per cent, even though the company delivered 7 per cent year-on-year revenue growth to ₹15,787 crore and 44 per cent PAT growth to ₹1,835 crore in FY26. Valuations have now moderated to 36 times one-year forward earnings, broadly in line with the five-year average. The stock is now recommended to accumulate on market corrections linked to the US-Iran conflict.

Two of SRF's three large segments — speciality chemicals and performance films — are expected to recover over the longer term. The company has navigated recent challenges well, as reflected in its latest results. However, volatility in energy costs and global trade remains an overhang for both the company and the broader economy.

The division includes speciality chemicals and refrigerant gas (RG) business. The management expects to drive 15-20 per cent revenue growth in FY27 for the Chemicals segment, which should be primarily supported by the RG sub-segment. This is on the base of a 16 per cent growth in FY26 for chemicals. Internationally, RG sales are now under a quota regime to limit the impact of greenhouse gases. This appears to have benefited existing companies in the business with elevated volumes and better price realisations. The company should gain further as it debottlenecks its facilities, secures volumes and continues to be supported by improved prices.

SRF is building a facility for RG, developed from in-house research, which is a fourth-generation RG and is likely to be environmentally sustainable. The plant is expected to be commercialised by February 2028. The project includes annual RG capacity of 20,000 tonnes and a 30,000-tonne hydrofluoric acid facility to support production. It has also started trial production of higher grades of fluoropolymer – PTFE, which should also contribute to sales this fiscal.

SRF has entered into a strategic collaboration with Chemours (the US-based chemicals major that was spun off from DuPont) for the manufacture, supply and distribution of fluoropolymers and fluoroelastomers. The multi-year arrangement caters to global markets across diverse industries such as semiconductor, automotive, aerospace, chemical processing, and oil and gas. The company has allotted a capital outlay of ₹745 crore for the project that will be completed by December 2026 and should contribute to revenues towards Q4FY27.

On the other hand, the speciality chemicals sub-segment under the Chemicals segment has been facing lower volume demand and pricing pressure on account of Chinese competition. The recent quarter indicates an easing of pricing pressure, as the speciality chemicals cycle may be improving, but the timing of recovery is yet unknown. SRF is also developing a pharma intermediates platform, under which several early-stage intermediates are under sales. The company has a comfortable net debt to EBITDA of 1.29 times in March 2026, which supports the strong capital expansion it has undertaken for FY27.`,
    mcqs: [
      {
        type: "Critical Reasoning",
        question:
          "The passage recommends accumulating SRF stock 'on market corrections linked to the US-Iran conflict'. Which of the following best identifies the logical tension in this recommendation?",
        choices: [
          "The recommendation to buy on geopolitical corrections implicitly assumes the conflict's impact on SRF is temporary and sector-specific, but the passage also notes that energy cost volatility and Chinese competition are structural overhangs that would persist even after the conflict resolves.",
          "Accumulating on dips assumes that the conflict-driven correction will reverse, but if the conflict persists, energy price inflation could compress SRF's chemical segment margins, making any dip-buying premature.",
          "The recommendation contradicts the earlier 'hold' call, since the stock has declined only 4 per cent despite a 44 per cent PAT improvement — suggesting the market is already pricing in future risks beyond the conflict.",
          "A stock trading at 36 times forward earnings in a rising interest rate environment has a lower margin of safety than the historical average would suggest, making the 'accumulate' call overly optimistic.",
        ],
        answer:
          "The recommendation to buy on geopolitical corrections implicitly assumes the conflict's impact on SRF is temporary and sector-specific, but the passage also notes that energy cost volatility and Chinese competition are structural overhangs that would persist even after the conflict resolves.",
        explanation:
          "The core tension is between treating the conflict as a temporary, correctable headwind (the basis for the 'accumulate on dips' call) and the passage's own acknowledgement that energy cost volatility and Chinese competition — neither of which are resolved by a ceasefire — are ongoing. Option B is a close trap: it makes a similar point but frames it only around energy costs, missing the compound nature of the structural overhang (energy + Chinese competition).",
      },
      {
        type: "Inference",
        question:
          "The passage notes that the international RG (refrigerant gas) market 'is now under a quota regime to limit the impact of greenhouse gases', and that this has benefited existing players. What does this most directly imply about SRF's competitive positioning in the RG business?",
        choices: [
          "The quota regime is a temporary measure and will likely be removed once global temperatures stabilise, meaning SRF's advantage is cyclical rather than structural.",
          "Quota systems typically restrict new entrants and expansion by incumbents alike, so SRF's ability to grow RG revenues depends primarily on its share of the quota allocation rather than on market-share gains.",
          "The quota regime creates a regulated-oligopoly structure in which incumbents like SRF can earn above-normal returns through volume security and pricing power, as long as they remain compliant with environmental norms.",
          "Since SRF is developing a fourth-generation, environmentally sustainable RG, the quota regime for existing RG variants may not apply to its new product, creating an unquantified regulatory risk for its FY28 capacity addition.",
        ],
        answer:
          "The quota regime creates a regulated-oligopoly structure in which incumbents like SRF can earn above-normal returns through volume security and pricing power, as long as they remain compliant with environmental norms.",
        explanation:
          "A quota regime that limits total RG supply while controlling which players can supply it effectively creates an oligopoly — exactly what the passage implies when it says 'elevated volumes and better price realisations' benefit existing companies. Option D is a sophisticated trap: it introduces a plausible regulatory risk, but the passage says the fourth-generation RG is 'environmentally sustainable', suggesting it is designed to comply with or even transcend the current quota framework.",
      },
      {
        type: "Strengthen",
        question:
          "The passage claims that the Chemours collaboration is a significant growth catalyst for SRF. Which of the following would most strengthen this specific claim?",
        choices: [
          "Fluoropolymers and fluoroelastomers are used in high-growth sectors such as semiconductors and electric vehicle batteries, where demand is projected to grow at 15-20 per cent CAGR through 2030.",
          "Chemours has historically partnered only with manufacturers that have proprietary fluoropolymer technology, suggesting SRF's in-house R&D capabilities are competitively validated.",
          "The ₹745 crore capital outlay for the Chemours project is lower than the cost of greenfield fluoropolymer capacity built by Chinese competitors, indicating SRF has a cost advantage in this segment.",
          "DuPont's original fluoropolymer patents expired in 2022, meaning SRF can manufacture fluoropolymers independently without the Chemours agreement, making the collaboration an additive rather than a prerequisite.",
        ],
        answer:
          "Fluoropolymers and fluoroelastomers are used in high-growth sectors such as semiconductors and electric vehicle batteries, where demand is projected to grow at 15-20 per cent CAGR through 2030.",
        explanation:
          "A strategic collaboration's growth potential depends on the underlying demand trajectory of the end markets it serves. If the target industries (semiconductors, EVs, aerospace) are themselves high-growth, the collaboration is positioned in structurally attractive markets, directly strengthening the 'significant growth catalyst' claim. Option B is a trap: it validates SRF's R&D credentials but speaks to entry criteria for the partnership, not to the revenue growth potential of the collaboration itself.",
      },
    ],
  },
];
