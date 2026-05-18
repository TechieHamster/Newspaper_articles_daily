import React, { useMemo, useState } from "react";

const categoryColors = {
  "POLITY · GOVERNANCE": { bg: "#1c3557", accent: "#4a90d9", light: "#eef3fa" },
  "INTERNATIONAL · DIPLOMACY": { bg: "#1e4028", accent: "#5aad72", light: "#edf6ef" },
  "ENVIRONMENT · SOCIETY": { bg: "#5c3200", accent: "#e8893a", light: "#fdf3ea" },
  "ECONOMY · POLICY": { bg: "#2e1a5c", accent: "#9b6de0", light: "#f3eefb" },
  "EDUCATION · REFORMS": { bg: "#7a3b00", accent: "#ff9f43", light: "#fff4ea" },
  "JUDICIARY · LAW": { bg: "#5c1a1a", accent: "#d96060", light: "#fceaea" },
  "FAQ · EXPLAINER": { bg: "#4a4a4a", accent: "#8b8b8b", light: "#f5f5f5" },
  "PROFILE · POLITICS": { bg: "#444d1f", accent: "#9aad4a", light: "#f5f7ea" },
  "SCIENCE · RESEARCH": { bg: "#0f4040", accent: "#3db8b0", light: "#e5f6f5" },
};

const articleData = [
  // ─── POLITY · GOVERNANCE ───────────────────────────────────────────────────
  {
    id: 1,
    page: 9,
    category: "POLITY · GOVERNANCE",
    headline: "Manipur protest on; Kukis want President's Rule back",
    subhead:
      "Thousands take to the streets demanding the unconditional release of hostages; shutdown extended; they demand special security zones in vulnerable areas, stronger protection for civilians.",
    body: `Thousands of Kuki-Zo people took to the streets in Churachandpur and Kangpokpi districts of Manipur on Saturday, demanding the unconditional release of Kuki hostages and justice for three church leaders killed in an ambush by extremists on May 13.

In a memorandum to Union Home Minister Amit Shah, several Kuki civil society groups called for the reimposition of President's Rule in the State. The protest rallies coincided with the extension of a 48-hour total shutdown called by the Kuki Inpi Manipur, the apex body of Kukis.

According to Manipur's Home Minister Govindas Konthoujam, more than 38 Kuki and Naga people were held captives by various groups after the killing of three church leaders. Security forces and community-based organisations helped secure the release of 28 hostages on Friday. Unconfirmed reports said 10 more hostages were released on Saturday, but the Kuki-Zo groups said 14 community members continued to be in captivity.

Protesters at the rally held by the Committee on Tribal Unity demanded the immediate and unconditional release of all Kuki hostages and the "urgent implementation of the charter of demands" submitted to the Centre. These demands include a National Investigation Agency probe into the killing of the church leaders, security for civilians and villages, the establishment of special security zones in conflict-prone areas, and an expedited engagement with Kuki-Zomi extremist groups under the Suspension of Operations pact.

"The continued captivity of innocent civilians was not merely unlawful detention but an act of terror against a people," KIM president Ch. Ajang Khongsai told the gathering. The KWOHR called for the re-imposition of President's Rule in Manipur, strengthening of security deployment in Kuki-Zo areas, a high-level investigation into the killings and related incidents of violence, and the fulfilment of the long-standing demand for a separate administration for the Kuki-Zo people under the Constitution of India.`,
    mcqs: [
      {
        type: "Main Idea",
        question: "What is the passage mainly about?",
        choices: [
          "The protests translate ethnic insecurity into a constitutional demand for protection and administrative change.",
          "The protests are primarily a response to economic inflation in Manipur.",
          "The protests are mainly about a dispute inside the ruling coalition.",
          "The protests focus on electoral reform in the state.",
        ],
        answer: "The protests translate ethnic insecurity into a constitutional demand for protection and administrative change.",
        explanation: "The report is not only about violence; it shows how the crisis is being reframed as a demand for governance, security and constitutional intervention.",
      },
      {
        type: "Counter Argument",
        question: "Which point would most weaken the demand for President's Rule?",
        choices: [
          "If local security arrangements were already stabilising the situation effectively.",
          "If the memorandum was handed to the Union Home Minister.",
          "If the shutdown was extended for 48 hours.",
          "If hostages were still being held.",
        ],
        answer: "If local security arrangements were already stabilising the situation effectively.",
        explanation: "The demand gains force when normal governance clearly fails; effective local stabilisation would undercut the case for central takeover.",
      },
      {
        type: "Tone",
        question: "The tone of the report is best described as:",
        choices: [
          "Forensically neutral with an undercurrent of institutional concern.",
          "Celebratory and partisan.",
          "Mocking and dismissive.",
          "Nostalgic and reflective.",
        ],
        answer: "Forensically neutral with an undercurrent of institutional concern.",
        explanation: "It reports claims carefully, but the framing makes the fragility of order obvious.",
      },
    ],
  },
  {
    id: 3,
    page: 10,
    category: "POLITY · GOVERNANCE",
    headline: "Full list of Cabinet Ministers by today evening: Satheesan",
    subhead:
      "Kerala's Chief Minister-designate signals that ministerial allocation will be handed over to the Governor by Sunday evening.",
    body: `Amid intense speculation over Cabinet formation and portfolio allocation in Kerala's new United Democratic Front (UDF) government, Chief Minister-designate V.D. Satheesan indicated on Saturday that the full list of Ministers will be handed over to Governor Rajendra Vishwanath Arlekar by Sunday evening.

Mr. Satheesan said the full Council of Ministers would take the oath of office at 10 a.m. on Monday at the Central Stadium here. The State capital witnessed hectic parleys and negotiations through the day, as the Congress-led UDF steered discussions to finalise ministerial berths.

Rumours suggest that the Chief Minister is considering holding on to the Finance portfolio himself. Speculation is rife that senior Congress leader Ramesh Chennithala, who was reportedly disgruntled over being bypassed for the Chief Minister's post, will join the Cabinet as Home Minister. Mr. Satheesan and AICC general secretary K.C. Venugopal met Mr. Chennithala for conciliatory talks. Speaking to presspersons after the meeting, Mr. Chennithala restricted his comments to one sentence: "I'm always a true Congressman."

Reports suggested that Mr. Chennithala demanded ministerial berths for Anwar Sadath and T.J. Vinod. Mr. Satheesan said decisions in the Congress and the UDF are made democratically and in consultation with everyone. The Indian Union Muslim League (IUML) is reportedly bidding for five ministerial berths, the same number the party held in the last UDF government headed by Oommen Chandy from 2011 to 2016.`,
    mcqs: [
      {
        type: "Main Idea",
        question: "What is the article mainly about?",
        choices: [
          "Cabinet formation as a test of coalition management after electoral victory.",
          "A constitutional crisis over the Governor's powers.",
          "A dispute over the Delhi logistics policy.",
          "A legal battle over ministerial eligibility.",
        ],
        answer: "Cabinet formation as a test of coalition management after electoral victory.",
        explanation: "The article is about how power is divided after victory, not about policy detail.",
      },
      {
        type: "Counter Argument",
        question: "What would most weaken the article's sense of tension?",
        choices: [
          "If all portfolios had already been settled unanimously before the public announcement.",
          "If the oath was scheduled for Monday morning.",
          "If the Governor was given the list by Sunday evening.",
          "If the Finance portfolio stayed with the Chief Minister.",
        ],
        answer: "If all portfolios had already been settled unanimously before the public announcement.",
        explanation: "The story depends on bargaining and uncertainty; unanimity would remove the conflict.",
      },
      {
        type: "Tone",
        question: "The tone is best described as:",
        choices: [
          "Measured and politically observant.",
          "Sensational and accusatory.",
          "Sentimental and nostalgic.",
          "Dismissive and sarcastic.",
        ],
        answer: "Measured and politically observant.",
        explanation: "The report notes the manoeuvring without overstatement.",
      },
    ],
  },
  {
    id: 9,
    page: 5,
    category: "POLITY · GOVERNANCE",
    headline: "TMC's fact-finding teams visit areas hit by post-poll violence in Bengal",
    subhead:
      "The party says its workers and supporters have faced attacks after the election setback, while the BJP calls the exercise drama.",
    body: `The Trinamool Congress on Saturday said its fact-finding teams visited several areas hit by post-poll violence and spoke to affected families in South 24 Parganas, Purba Medinipur, and Hooghly districts of West Bengal.

Speaking to reporters, Rajya Sabha MP Dola Sen, who was part of one of the three teams, said TMC workers as well as common people have come under attack by BJP workers after her party's electoral setback in the recently concluded Assembly election. "Many people have been forced to flee their homes. They [BJP workers] have vandalised several homes and taken over many of our party offices. They are also trying to break all government offices... However, even after so much intimidation, our workers are not scared," Ms. Sen said.

She added that the teams will submit their findings to the government and the Calcutta High Court, which is hearing a writ petition filed by Sirsanya Bandyopadhyay, son of TMC MP Kalyan Banerjee, alleging widespread violence against workers and attacks on party offices following the declaration of the poll results.

Based on the takeaways from the fact-finding teams' visits, TMC Rajya Sabha MP Sagarika Ghose said, "Our counting agents were beaten up badly across Bengal and thrown out of counting centres after 2 p.m. on May 4." Of the 294 Assembly seats in the State, the party managed to win 80 in the election. West Bengal Minister Ashok Kirtania, however, called the TMC exercise a "drama."`,
    mcqs: [
      {
        type: "Main Idea",
        question: "What is the article mainly concerned with?",
        choices: [
          "How post-poll violence also becomes a struggle over narrative control.",
          "A formal court ruling on election violence.",
          "The logistics of the polling booth system.",
          "A debate over candidate nomination rules.",
        ],
        answer: "How post-poll violence also becomes a struggle over narrative control.",
        explanation: "The piece focuses on competing claims about victimhood and responsibility.",
      },
      {
        type: "Counter Argument",
        question: "What would most undercut the TMC's framing?",
        choices: [
          "Independent verification showing comparable violence and intimidation on both sides.",
          "If the teams visited affected districts.",
          "If the BJP called it drama.",
          "If the High Court heard a petition.",
        ],
        answer: "Independent verification showing comparable violence and intimidation on both sides.",
        explanation: "The article's moral asymmetry weakens if harm proves mutually distributed.",
      },
      {
        type: "Tone",
        question: "The tone is best characterised as:",
        choices: [
          "Politically descriptive with a sceptical edge.",
          "Mournful and elegiac.",
          "Neutral and celebratory.",
          "Didactic and academic.",
        ],
        answer: "Politically descriptive with a sceptical edge.",
        explanation: "It reports both sides, but keeps the contest visible.",
      },
    ],
  },
  {
    id: 20,
    page: 11,
    category: "POLITY · GOVERNANCE",
    headline: "Bengal govt. to reverify caste certificates issued since 2011",
    subhead:
      "About 1.69 crore SC, ST and OBC certificates have been issued in the State since 2011; about 47.8 lakh certificates were issued under Duare Sarkar camps during the Trinamool regime.",
    body: `Observing that the authenticity and genuineness of some caste certificates have been challenged by different quarters, the West Bengal government has decided to conduct a reverification of all caste certificates issued in the State since 2011.

"Considering the importance and sensitivity of the matter, and as directed in a review meeting chaired by the competent authority, reverification of such caste certificates at the level of the respective issuing authorities will be done in accordance with the prevailing norms and statutory provisions," stated a letter issued by the Secretary of Backward Classes Welfare Department to all the District Magistrates on May 14.

About 1.69 crore SC, ST and OBC certificates have been issued in the State since 2011. The notification points out that about 47.8 lakh certificates — 32.51 lakh SC certificates, 6.65 lakh ST certificates and 8.64 lakh OBC certificates — were issued under the Duare Sarkar camps during the previous Trinamool Congress regime.

Newly appointed Minister for Tribal Development and Backward Classes Kshudiram Tudu had raised the issue of fake or irregular caste certificates being issued soon after he took oath on May 9. "During the Trinamool Congress regime, a large number of fake SC, ST and OBC certificates were issued. Many people availed themselves of benefits using these certificates," the Minister said, adding that action would be taken against officials under whose supervision such certificates were issued.

The West Bengal BJP said the Calcutta High Court had already made it clear that around 75 Muslim castes were included on the OBC list without any proper survey or due process, which the BJP alleged reflected the vote bank politics of former Chief Minister Mamata Banerjee.`,
    mcqs: [
      {
        type: "Main Idea",
        question: "What is the passage primarily about?",
        choices: [
          "A new government using administrative reverification to audit and delegitimise a predecessor's welfare reach.",
          "A judicial order directing the cancellation of all caste certificates.",
          "A policy to increase the number of OBC seats in government jobs.",
          "A dispute between the Centre and the State over census data.",
        ],
        answer: "A new government using administrative reverification to audit and delegitimise a predecessor's welfare reach.",
        explanation: "The BJP government's move to reverify certificates targets the scale of the Trinamool's Duare Sarkar scheme, framing it as fraudulent.",
      },
      {
        type: "Counter Argument",
        question: "What would most weaken the BJP government's justification for the reverification?",
        choices: [
          "If an independent audit found that the vast majority of certificates issued were legitimate.",
          "If the Duare Sarkar camps had issued 47.8 lakh certificates.",
          "If the new minister took oath on May 9.",
          "If the High Court had commented on Muslim OBC inclusions.",
        ],
        answer: "If an independent audit found that the vast majority of certificates issued were legitimate.",
        explanation: "The reverification is premised on widespread fraud; clean results would strip the exercise of its political rationale.",
      },
      {
        type: "Tone",
        question: "The tone of the article is best described as:",
        choices: [
          "Factually descriptive with a politically observant undercurrent.",
          "Aggressively partisan toward the BJP.",
          "Celebratory of welfare schemes.",
          "Legally technical and detached.",
        ],
        answer: "Factually descriptive with a politically observant undercurrent.",
        explanation: "The report records facts but frames them in a way that makes the political stakes unmistakable.",
      },
    ],
  },

  // ─── INTERNATIONAL · DIPLOMACY ─────────────────────────────────────────────
  {
    id: 2,
    page: 9,
    category: "INTERNATIONAL · DIPLOMACY",
    headline: "India rejects CoA's award on Indus Waters Treaty",
    subhead:
      "New Delhi says it does not recognise the tribunal as legitimately constituted and reiterates that the treaty remains in abeyance.",
    body: `India on Saturday rejected an award reportedly issued by the Court of Arbitration (CoA) at The Hague on Friday, reiterating that it does not recognise the tribunal as legitimately constituted.

The award concerned maximum pondage at Indian hydroelectric projects on the Indus river system. "India categorically rejects the present so-called award, just as it has firmly rejected all prior pronouncements of the illegally constituted CoA," External Affairs Ministry spokesperson Randhir Jaiswal said.

He added that any decision of the body was "null and void." India's decision to hold the Indus Waters Treaty in abeyance, he said, remained in force.

No official communication of the award is publicly available on the website of the Permanent Court of Arbitration, which acts as the secretariat to the CoA. The recent press release listed there is dated May 11, which announced the conclusion of a three-day hearing held on April 28 on Pakistan's request for interim measures and the status of the Treaty itself.

The CoA is a five-member arbitral panel, chaired by Sean D. Murphy, constituted in January 2023. It was set up at Pakistan's request after Islamabad challenged the design of India's Kishenganga and Ratle hydroelectric projects. India has refused to participate, arguing that the technical questions involved fall within the remit of a Neutral Expert appointed in parallel by the World Bank. In its August 2025 Award on Issues of General Interpretation, the CoA ruled largely in Pakistan's favour, restricting how India calculates permissible pondage for run-of-river plants and narrowing the design latitude available under the Treaty.`,
    mcqs: [
      {
        type: "Main Idea",
        question: "What is the central significance of India's response?",
        choices: [
          "India is rejecting the legitimacy of the arbitration forum itself, not just the award.",
          "India is preparing to sign a new water-sharing treaty immediately.",
          "India is asking Pakistan to withdraw its hydroelectric projects.",
          "India is focusing only on pondage calculations.",
        ],
        answer: "India is rejecting the legitimacy of the arbitration forum itself, not just the award.",
        explanation: "The key move is institutional rejection: the government denies the tribunal's authority, not merely the outcome.",
      },
      {
        type: "Counter Argument",
        question: "What would most weaken India's position?",
        choices: [
          "Evidence that India had earlier treated the tribunal's rulings as binding or legitimate.",
          "The fact that the tribunal was based in The Hague.",
          "The existence of hydroelectric projects on the Indus system.",
          "The use of the word 'award' in the report.",
        ],
        answer: "Evidence that India had earlier treated the tribunal's rulings as binding or legitimate.",
        explanation: "A history of acceptance would undercut the claim of total illegitimacy.",
      },
      {
        type: "Tone",
        question: "The tone of the ministry's statement is best described as:",
        choices: [
          "Defiant and legally categorical.",
          "Hesitant and conciliatory.",
          "Playful and ironic.",
          "Uncertain and exploratory.",
        ],
        answer: "Defiant and legally categorical.",
        explanation: "The language is final and confrontational rather than tentative.",
      },
    ],
  },
  {
    id: 10,
    page: 10,
    category: "INTERNATIONAL · DIPLOMACY",
    headline: "'BRICS will reach a common position'",
    subhead:
      "Brazil's Foreign Minister Mauro Vieira says BRICS remains a platform for dialogue and negotiation despite divisions over West Asia.",
    body: `The BRICS Foreign Ministers' Meeting in Delhi, chaired by External Affairs Minister S. Jaishankar, ended on Friday with some heat, but not much light in terms of a joint statement. Instead, in a detailed 63-paragraph Chair Statement, BRICS Ministers recorded their support for a number of Indian initiatives, the Palestinian cause and the two-state solution.

However, there was no reconciliation on positions taken by Iranian and UAE Ministers over the war in West Asia that began on February 28. In an exclusive interview to The Hindu, Mauro Vieira, Foreign Minister of Brazil, explains why, despite the differences, BRICS continues to be an important international grouping.

"I think the diversity of positions is a positive aspect of BRICS because it's a platform for consultation and political articulation, and what we are seeing now is the evolution of BRICS," he said. "But, I think that on the large majority of issues, we all have the same position. And I believe that those [issues] on which we don't have [consensus] now, we may have them later this year, when the summit will happen here in India."

"So, I am very confident that we will reach a common position, and that this platform of negotiation will generate the consensus that's necessary."

On the question of whether BRICS expansion was pushed through too quickly, Mr. Vieira noted that the original five members had been together for nearly 15 years before agreeing to expand, and that one of the important issues was that new members should share the same positions on international affairs. On de-dollarisation, Mr. Vieira clarified that President Lula never spoke of de-dollarisation or the creation of a BRICS currency — only about mechanisms of payments in local currencies, which exists between many countries.`,
    mcqs: [
      {
        type: "Main Idea",
        question: "What is Vieira's main argument about BRICS?",
        choices: [
          "Difference inside BRICS is a feature of the grouping, not proof of failure.",
          "BRICS should replace the United Nations immediately.",
          "BRICS is now a military alliance.",
          "BRICS has no relevance after expansion.",
        ],
        answer: "Difference inside BRICS is a feature of the grouping, not proof of failure.",
        explanation: "The interview frames diversity as a consultation platform rather than a breakdown.",
      },
      {
        type: "Counter Argument",
        question: "What would most weaken the claim that BRICS can still find consensus?",
        choices: [
          "If the present divisions hardened into repeated deadlock across multiple summits.",
          "If the chair statement was 63 paragraphs long.",
          "If BRICS supported the two-state solution.",
          "If Iran and the UAE held different positions.",
        ],
        answer: "If the present divisions hardened into repeated deadlock across multiple summits.",
        explanation: "Persistent deadlock would challenge the idea that negotiation can still produce a shared position.",
      },
      {
        type: "Tone",
        question: "The tone is best described as:",
        choices: [
          "Diplomatic and cautiously optimistic.",
          "Hostile and dismissive.",
          "Triumphalist and self-congratulatory.",
          "Angry and accusatory.",
        ],
        answer: "Diplomatic and cautiously optimistic.",
        explanation: "The interview stresses dialogue, not confrontation.",
      },
    ],
  },

  // ─── ENVIRONMENT · SOCIETY ─────────────────────────────────────────────────
  {
    id: 7,
    page: 4,
    category: "ENVIRONMENT · SOCIETY",
    headline: "Relief out of reach",
    subhead:
      "Nearly a year after floods in Maharashtra, farmers remain stuck between debt, delays and disputes over compensation.",
    body: `Nagubai Chaudhary, 52, had always believed that the land would take care of her, and it did. For as long as she can remember. But in 2025, unseasonal rains lashed parts of western and central Maharashtra. The flash floods that ensued devastated the kharif crop.

When the land began to dry, Nagubai and her husband, Malinath, 60, had to quickly think of how to survive the season. "We paid to level the damaged topsoil, and sowed onions. They usually give a quick yield. But the crop failed. It created more debt," said Nagubai. Then, her husband died. She needed to clear a debt of ₹14 lakh, taken to fund farming and the bills from Malinath's hospitalisation. She was forced to sell an acre to repay the debts.

Maharashtra's Agriculture Department estimated that last year 3 million farmers were affected by floods that devastated 6.5 million hectares of crop area through August and September. The rains flattened soyabean fields in Vidarbha, rotted onions in Nashik, destroyed pulses in Marathwada, and flooded paddy plots across the low-lying belts. The Maharashtra government announced a ₹31,628-crore relief package on October 7.

According to the State Relief and Rehabilitation Department, the compensation for crop loss was ₹18,500 per hectare for rainfed land, ₹27,000 per hectare for irrigated land, ₹32,500 per hectare for horticulture or perennial land. In addition, if the topsoil had been washed away, a farmer was to get ₹47,000 per hectare. Several farmers say they have no clear idea of how much they are due, despite a government assessment.

To calculate insurance claims, the Maharashtra government uses a combination of the crop cutting experiment (CCE) and satellite imagery. Officials in the Agriculture Department claim that the insurance company says there is a discrepancy between satellite-based yield assessments, which are showing greater crop damage, and CCE data that reflect lower losses. From January to April, 2026, in Dharashiv, 36 farmers took their lives.`,
    mcqs: [
      {
        type: "Main Idea",
        question: "What is the passage's deepest argument?",
        choices: [
          "Disaster becomes catastrophic when relief systems fail to keep pace.",
          "Floods in Maharashtra were not severe.",
          "Insurance companies are solely responsible for distress.",
          "Topsoil loss matters only in rich districts.",
        ],
        answer: "Disaster becomes catastrophic when relief systems fail to keep pace.",
        explanation: "The article links physical damage to administrative delay.",
      },
      {
        type: "Counter Argument",
        question: "What would most weaken the article's critique?",
        choices: [
          "If compensation had reached most farmers quickly and predictably.",
          "If rainfall was unseasonal.",
          "If topsoil restoration cost money.",
          "If farmers had taken loans.",
        ],
        answer: "If compensation had reached most farmers quickly and predictably.",
        explanation: "Timely relief would blunt the article's main complaint about institutional failure.",
      },
      {
        type: "Tone",
        question: "The tone is best described as:",
        choices: [
          "Analytically empathetic.",
          "Triumphalist.",
          "Playfully detached.",
          "Bluntly celebratory.",
        ],
        answer: "Analytically empathetic.",
        explanation: "The piece is humane without becoming melodramatic.",
      },
    ],
  },

  // ─── ECONOMY · POLICY ──────────────────────────────────────────────────────
  {
    id: 4,
    page: 3,
    category: "ECONOMY · POLICY",
    headline: "Govt. to unveil policy to transform Delhi into logistics hub: CM",
    subhead:
      "Delhi's top LEADS ranking is being used to justify a warehousing policy, freight corridors and metro-based cargo movement.",
    body: `Buoyed by Delhi's top ranking in the national logistics index, Chief Minister Rekha Gupta on Saturday said the government will launch a new warehousing policy, improve ease of doing business and promote technology-driven governance to transform the Capital into a logistics hub.

Noting that Delhi has been placed in the 'Exemplary' category in the Logistics Ease Across Different States (LEADS) 2025 Index, Ms. Gupta said the government will build further on the city's existing infrastructure and connectivity network. "The Warehousing and Logistics Policy 2025 will soon be finalised, which will reduce congestion in freight movement, eliminate regulatory complexities, and address gaps in logistics infrastructure," she said.

The LEADS Index, prepared by the Department for Promotion of Industry and Internal Trade (DPIIT) under the Ministry of Commerce and Industry, evaluates States and Union Territories on parameters such as logistics infrastructure, logistics services, regulatory framework, digital integration, sustainability and stakeholder perception. States and UTs are classified into four categories — Exemplary, High Performer, Accelerators, and Growth Seekers.

Among the government's priorities, Ms. Gupta said, is increasing women's participation in green warehousing and the logistics sector, besides developing organised transport hubs to reduce unregulated roadside loading and congestion.

"The government is also working on increasing the use of the metro rail network for light freight transportation during night and non-peak hours to reduce pressure on road corridors," the CM said. She said plans are afoot to develop dedicated freight corridors to separate commercial and passenger traffic on busy roads. Ms. Gupta said under the Prime Minister Gati Shakti Yojana, the government has prepared a City Logistics Plan, which has already received approval and will soon be notified.`,
    mcqs: [
      {
        type: "Main Idea",
        question: "What is the broader significance of the announcement?",
        choices: [
          "Logistics is being treated as a core instrument of urban governance and competitiveness.",
          "Delhi is ending all road transport in favour of rail.",
          "The policy is mainly about lowering school fees.",
          "The government is prioritising agriculture over freight.",
        ],
        answer: "Logistics is being treated as a core instrument of urban governance and competitiveness.",
        explanation: "The piece frames infrastructure efficiency as a governance strategy, not a narrow transport update.",
      },
      {
        type: "Counter Argument",
        question: "What would most weaken the claim that this is a transformative move?",
        choices: [
          "If the announced measures were mostly repackaged versions of older plans.",
          "If women were included in warehousing jobs.",
          "If freight corridors separated commercial and passenger traffic.",
          "If the LEADS ranking was favourable.",
        ],
        answer: "If the announced measures were mostly repackaged versions of older plans.",
        explanation: "Transformative language loses force if the policy is just a relabelled continuation.",
      },
      {
        type: "Tone",
        question: "The tone is best described as:",
        choices: [
          "Technocratically optimistic.",
          "Mockingly hostile.",
          "Elegiac and literary.",
          "Alarmist and punitive.",
        ],
        answer: "Technocratically optimistic.",
        explanation: "The article uses the language of systems, efficiency and policy capacity.",
      },
    ],
  },
  {
    id: 19,
    page: 12,
    category: "ECONOMY · POLICY",
    headline: "Reality check of govt.'s LPG stock claim",
    subhead:
      "Govt. assured people that India had 45 days of LPG 'rolling stock'; this came as a puzzle to many since India has rather limited LPG storage capacity and needs regular shipments of one shipload arriving every day.",
    body: `A few days ago, the government assured the people that India had 45 days of "rolling stock" in LPG, implying there were enough stocks and there was no need for panic.

The implication came as a puzzle to many since India has rather limited LPG storage capacity and needs regular shipments from abroad to the extent of an average of one shipload of LPG arriving every day. As per government data, India has a total LPG tankage capacity of some 1.6 million tonne of which some 53% is in import terminals, some 31% in bottling plants, 16% in refineries and related facilities.

As per government data, this would account for some 17 days of consumption as per January 1, 2026 consumption figures, assuming all the tanks are full, no fresh LPG came in and none were produced in Indian refineries in that period. India has almost negligible long-term storage such as caverns unlike, say, Europe in the case of natural gas.

Yet, this still leaves a large shortfall from the claimed figure of 45 days even if all the tanks are full, unless the government has considered the LPG on ships, which have been ordered and are on their way, as inventory. It is industry practice to consider certain types of import shipments as inventory though they may not be considered reliable buffer stocks. The term "rolling stock" usually applies to goods transported by train.

The Hindu has been able to track 15 LPG tankers that left various ports in the U.S. for India using open-source marine traffic data. The combined dead weight of these 15 ships is 8.38 lakh tonne. India's post-war LPG consumption in March was some 2.4 million tonne — a drop of 6 lakh tonne compared with normal months. Import deficit was about 1 million tonne, made up by higher local output. By this account, 1 million tonne of shipment could add to another 12 days.`,
    mcqs: [
      {
        type: "Main Idea",
        question: "What is the central argument of this news analysis?",
        choices: [
          "The government's claim of a 45-day LPG buffer is inconsistent with India's documented storage infrastructure.",
          "India has more LPG storage than any other country in Asia.",
          "The government should stop importing LPG from the United States.",
          "Private LPG companies are solely responsible for the shortage.",
        ],
        answer: "The government's claim of a 45-day LPG buffer is inconsistent with India's documented storage infrastructure.",
        explanation: "The analysis cross-checks the official figure against infrastructure data and finds a structural mismatch.",
      },
      {
        type: "Counter Argument",
        question: "Under what condition would the government's 45-day claim be most defensible?",
        choices: [
          "If in-transit shipments and pipeline inventory are legitimately counted as part of the national stock.",
          "If India builds more underground storage caverns.",
          "If all import terminals are running below 50% capacity.",
          "If the term 'rolling stock' is redefined to exclude rail transport.",
        ],
        answer: "If in-transit shipments and pipeline inventory are legitimately counted as part of the national stock.",
        explanation: "The article itself notes this is the most plausible explanation for the discrepancy — counting ships already on their way.",
      },
      {
        type: "Tone",
        question: "The tone of the news analysis is best described as:",
        choices: [
          "Empirically sceptical and methodically investigative.",
          "Alarmist and populist.",
          "Deferential to official sources.",
          "Whimsically dismissive.",
        ],
        answer: "Empirically sceptical and methodically investigative.",
        explanation: "The piece does not sensationalise; it systematically applies publicly available data to test an official claim.",
      },
    ],
  },

  // ─── EDUCATION · REFORMS ───────────────────────────────────────────────────
  {
    id: 5,
    page: 3,
    category: "EDUCATION · REFORMS",
    headline: "DU launches registration for 2-year PG courses; applications open till June 7",
    subhead:
      "DigiLocker integration and revised eligibility norms aim to streamline postgraduate admissions.",
    body: `Delhi University on Saturday opened registrations for admissions to its two-year postgraduate (PG) programmes, introducing DigiLocker-based auto-integration of candidate credentials to streamline the application process. The registration process will continue till June 7.

The Registrar's Office said students currently studying in the third or fourth year of their undergraduate programmes are eligible to apply for the two-year master's programmes.

Candidates must fulfil the eligibility criteria for the specific programme they are applying to and should have appeared for the Common University Entrance Test for Postgraduate admissions in the relevant subjects.

The university also said applications for one-year postgraduate programmes, under the National Education Policy 2020 framework, will be invited soon through a separate portal. Candidates have been advised to visit admission.uod.ac.in for updates.`,
    mcqs: [
      {
        type: "Main Idea",
        question: "Which option best captures the passage?",
        choices: [
          "The article is about administrative streamlining in postgraduate admissions.",
          "The article argues for abolishing CUET-PG.",
          "The article focuses on school admissions in Delhi.",
          "The article is mainly about hostel allocation.",
        ],
        answer: "The article is about administrative streamlining in postgraduate admissions.",
        explanation: "The central change is procedural: DigiLocker integration and eligibility rules.",
      },
      {
        type: "Counter Argument",
        question: "What would most challenge the claim that the system is simpler?",
        choices: [
          "If multiple verification layers still made the process cumbersome.",
          "If the portal is official.",
          "If the deadline is June 7.",
          "If third- and fourth-year students can apply.",
        ],
        answer: "If multiple verification layers still made the process cumbersome.",
        explanation: "A smoother interface does not matter if the back-end remains hard to use.",
      },
      {
        type: "Tone",
        question: "The tone of the report is best described as:",
        choices: [
          "Functional and administrative.",
          "Celebratory and dramatic.",
          "Suspicious and adversarial.",
          "Poetic and reflective.",
        ],
        answer: "Functional and administrative.",
        explanation: "It is a process story, not a controversy story.",
      },
    ],
  },
  {
    id: 6,
    page: 6,
    category: "EDUCATION · REFORMS",
    headline: "PM SHRI set to be a tightrope walk for UDF govt. in Kerala",
    subhead:
      "The incoming government inherits a difficult trade-off between ideological resistance and fiscal dependence on the Centre.",
    body: `Among the many challenges the soon-to-be-formed United Democratic Front (UDF) government in Kerala will face in the school education sector, none will be as daunting and keenly watched as the contentious PM SHRI (Pradhan Mantri Schools for Rising India) scheme of the Union government.

With the BJP government in West Bengal not wasting any time in inking the agreement for implementing PM SHRI after coming to power, all eyes are on Kerala, one of the States that have held out so far other than Tamil Nadu. The stance of the UDF government on signing up for the scheme remains to be seen, particularly as the previous Left Democratic Front (LDF) was left scrambling to save face in the wake of differences within the front on the issue coming out in the open.

The LDF government, after rejecting the scheme on the grounds of ideological opposition to the National Education Policy for three years, inked the agreement in October last year, only to see constituent Communist Party of India (CPI) alleging it had been kept in the dark about the significant decision.

While the deal was later put on hold, the LDF had claimed then that with the Centre linking funds to scheme implementation, it was the only way to secure pending funds. Nearly ₹1,100 crore of Samagra Shiksha funds to the State have been withheld by the Centre since 2023-24.

The UDF too is likely to face the same pressure. Chief Minister-designate V.D. Satheesan had slammed the LDF for capitulating to the Centre's pressure by signing on to the scheme which, he alleged, was an "ideological project to infuse majoritarian nationalism" into students. With even payment of salaries for Samagra Shiksha staff becoming difficult owing to lack of funds, the UDF sure has its work cut out in the months ahead.`,
    mcqs: [
      {
        type: "Main Idea",
        question: "What is the core argument in the passage?",
        choices: [
          "Fiscal dependence is narrowing Kerala's room to resist centrally designed education policy.",
          "The PM SHRI scheme has already been fully accepted by Kerala.",
          "The issue is mainly about teacher recruitment.",
          "The government is planning to shut down all schools.",
        ],
        answer: "Fiscal dependence is narrowing Kerala's room to resist centrally designed education policy.",
        explanation: "The piece is about policy leverage through funding, not about classroom pedagogy alone.",
      },
      {
        type: "Counter Argument",
        question: "A defender of the scheme would most plausibly argue that:",
        choices: [
          "Conditional funding can be justified to ensure national coherence and accountability.",
          "States have no role in education at all.",
          "The LDF's earlier objection proves PM SHRI is harmful in every sense.",
          "Education policy should ignore funding constraints.",
        ],
        answer: "Conditional funding can be justified to ensure national coherence and accountability.",
        explanation: "That is the strongest counterweight to the autonomy argument.",
      },
      {
        type: "Tone",
        question: "The tone is best described as:",
        choices: [
          "Structurally analytical.",
          "Boisterously partisan.",
          "Sentimental and personal.",
          "Casually humorous.",
        ],
        answer: "Structurally analytical.",
        explanation: "The article tracks institutional pressure rather than rhetoric.",
      },
    ],
  },
  {
    id: 16,
    page: 9,
    category: "EDUCATION · REFORMS",
    headline: "CBSE makes three-language study compulsory for Class 9 students beginning July 1",
    subhead:
      "Students may opt for a foreign language only if the other two are Indian languages; no Board exam for the third language at Class-10 level.",
    body: `The Central Board of Secondary Education (CBSE) has made the study of three languages, including at least two Indian languages, compulsory for Class 9 students beginning July 1, according to a circular issued by the Board.

The move is part of the CBSE's alignment of its Scheme of Studies with the National Education Policy, 2020 and the National Curriculum Framework for School Education, 2023. The May 15 circular said students opting for a foreign language may do so as the third language only if the other two are native Indian languages, or as an additional fourth language.

"With effect from July 1, 2026, for Class IX, the study of three languages (R1, R2, R3) shall be compulsory, with at least two languages being native Indian languages," it stated.

The CBSE said to keep the focus on learning and to reduce undue pressure on students, no Board examination shall be conducted for the third language at the Class-10 level. "All assessments for R3 shall be entirely school-based and internal. The performance of students in R3 will be duly reflected in the CBSE certificate. It is clarified that no student will be barred from appearing in the Class X Board Examinations due to R3," it added.

The Board also asked schools to update their third language offerings for Classes 6 to 9 on the OASIS portal by June 30. Schools facing a shortage of qualified native Indian language teachers may use interim measures, such as inter-school resource sharing, virtual or hybrid teaching support, engagement of retired language teachers and qualified postgraduates. Relaxations would be provided to Children With Special Needs in accordance with the Rights of Persons with Disabilities Act, 2016.`,
    mcqs: [
      {
        type: "Main Idea",
        question: "What is the central policy change described in the passage?",
        choices: [
          "CBSE is institutionalising NEP 2020's multilingual mandate at the secondary level while protecting students from additional Board exam pressure.",
          "CBSE is replacing English with regional languages as the primary medium of instruction.",
          "CBSE is abolishing foreign language study entirely from its curriculum.",
          "CBSE is making Class 10 Board exams optional for all students.",
        ],
        answer: "CBSE is institutionalising NEP 2020's multilingual mandate at the secondary level while protecting students from additional Board exam pressure.",
        explanation: "The circular mandates three languages including two Indian ones, but deliberately avoids creating Board exam burden for the third language.",
      },
      {
        type: "Counter Argument",
        question: "Critics of this policy would most plausibly argue that:",
        choices: [
          "Schools without enough language teachers will be unable to comply meaningfully, making the mandate hollow in practice.",
          "Three languages are too few for a multilingual country like India.",
          "The Board exam for R3 should be made compulsory to ensure seriousness.",
          "Foreign languages should be the first choice, not the third.",
        ],
        answer: "Schools without enough language teachers will be unable to comply meaningfully, making the mandate hollow in practice.",
        explanation: "The circular itself acknowledges teacher shortages as a gap, making implementation the weak link in this policy.",
      },
      {
        type: "Inference",
        question: "What does the phrase 'no student will be barred from appearing in Class X Board Examinations due to R3' most likely imply?",
        choices: [
          "There were earlier fears that the third-language requirement might block students from sitting Board exams, and this clause addresses that anxiety.",
          "The Board is considering scrapping all Board examinations.",
          "Class X Board exams are being made optional for all students.",
          "Foreign language students will automatically be exempt from R3.",
        ],
        answer: "There were earlier fears that the third-language requirement might block students from sitting Board exams, and this clause addresses that anxiety.",
        explanation: "The explicit reassurance signals awareness of a concern that a new subject could become a gatekeeping requirement.",
      },
    ],
  },
  {
    id: 21,
    page: 15,
    category: "EDUCATION · REFORMS",
    headline: "Test in turmoil: NEET-UG",
    subhead:
      "Following a question-paper leak, this year's medical entrance exam, taken by over 22 lakh students, has been cancelled and rescheduled.",
    body: `On May 12, the National Testing Agency (NTA), acting on inputs from central and law-enforcement agencies about a possible paper leak and examination irregularities in the NEET-UG 2026, cancelled the entrance exam. This isn't the first time the exam or the agency conducting it has come under scrutiny over allegations of malpractice. However, this is the first time the annual, all-India medical entrance examination has been cancelled. A retest has now been scheduled for June 21.

Through this exam, students compete for over 2.8 lakh seats for bachelor courses in dental surgery, veterinary science and animal husbandry, nursing, physiotherapy and audiology and speech-language pathology, among others. MBBS remains the most sought-after course, with around 1.29 lakh seats available. Admission to top government medical colleges typically requires a score of 650-720 marks.

This year, NEET-UG was held on May 3, with about 22.79 lakh candidates registering for the exam. The exam was conducted at 5,432 centres across 551 cities in India and 14 cities abroad. Following the paper leak, confirmed by the Central Government, it has been alleged that about 120–140 questions in the leaked question paper matched those in the actual NEET-UG 2026 exam. NTA Director General Abhishek Singh said the exam "cannot be permitted to stand."

NEET, introduced to create a standardised, single admission test for medical institutions across India, was first conducted in 2013. In 2016, the Supreme Court restored NEET, and since then it has been the mandatory entrance for admission to government, private, deemed, and central medical institutions, including AIIMS.

The K. Radhakrishnan committee, set up after the 2024 allegations, identified weak links in the system such as over-dependence on outsourced staff and private centres, weak CCTV and surveillance systems, insecure transport and storage of question papers, and the risk of conducting a massive pen-and-paper exam for over 20 lakh students on a single day. Proposed changes for next year's exam include a likely shift from the offline OMR format to a Computer-Based Test (CBT) mode.`,
    mcqs: [
      {
        type: "Main Idea",
        question: "What is the passage's central concern?",
        choices: [
          "Systemic vulnerabilities in a high-stakes national exam that persist despite earlier reform efforts.",
          "The personal failures of the NTA Director General.",
          "The need to increase medical college seats across India.",
          "A comparison between NEET and JEE examination formats.",
        ],
        answer: "Systemic vulnerabilities in a high-stakes national exam that persist despite earlier reform efforts.",
        explanation: "The piece links the 2026 leak to a pattern of institutional failure and asks why committee recommendations were not implemented.",
      },
      {
        type: "Counter Argument",
        question: "Defenders of the NTA's current structure would most plausibly argue that:",
        choices: [
          "A single national exam is inherently fairer than 30 different State-level tests with varying standards.",
          "The leak affected fewer than 10 questions, making the cancellation disproportionate.",
          "CBT mode is more vulnerable to hacking than pen-and-paper exams.",
          "The Radhakrishnan committee's recommendations were fully implemented.",
        ],
        answer: "A single national exam is inherently fairer than 30 different State-level tests with varying standards.",
        explanation: "The strongest case for NEET is its standardising function, which pre-dates the current institutional problems.",
      },
      {
        type: "Tone",
        question: "The tone of this explainer is best described as:",
        choices: [
          "Analytically diagnostic — documenting failure and tracing its structural roots.",
          "Morally outraged and politically partisan.",
          "Celebratory of the government's swift cancellation decision.",
          "Technically indifferent to the wider policy implications.",
        ],
        answer: "Analytically diagnostic — documenting failure and tracing its structural roots.",
        explanation: "The piece lays out history, scale and systemic gaps without partisan heat.",
      },
    ],
  },

  // ─── JUDICIARY · LAW ───────────────────────────────────────────────────────
  {
    id: 8,
    page: 6,
    category: "JUDICIARY · LAW",
    headline: "Minister's son held in POCSO Act case",
    subhead:
      "Cyberabad police arrest Bandi Bageerath after a week-long hunt in a case involving allegations of sexual assault and emotional manipulation.",
    body: `After a week-long manhunt, Bandi Bageerath, son of Union Minister of State for Home Affairs Bandi Sanjay, was arrested by the Cyberabad police on Saturday night, in connection with a Protection of Children from Sexual Offences (POCSO) Act case booked against him at the Petbasheerabad police station.

According to Telangana's Cyberabad Police Commissioner M. Ramesh, he was apprehended at the TGPA junction around 8 p.m. and was taken to the Narsingi police station first. He was later shifted to Petbasheerabad for post-arrest formalities.

The accused had remained untraceable since the case was registered on May 8 following a complaint lodged by the mother of a 17-year-old girl, who had accused him of sexually assaulting and emotionally manipulating her daughter over several months.

Mr. Sanjay, in a statement issued late on Saturday, said, "All are equal before the law. All should abide by the rule of law." "In fact, I thought of handing him over at the police station soon after a complaint was lodged. The lawyers, after examining the evidence, said that the case will be quashed and bail will be granted. As a result, a slight delay occurred," Mr. Sanjay said.

The arrest was made after the Cyberabad police's efforts to trace him by deploying five special teams, carrying out searches at residences linked to him in Hyderabad and Karimnagar, and issuing a lookout circular to prevent him from leaving the country.`,
    mcqs: [
      {
        type: "Main Idea",
        question: "What does the report primarily emphasise?",
        choices: [
          "The case is both a criminal investigation and a public test of accountability around political privilege.",
          "The arrest was delayed because of a police jurisdiction dispute.",
          "The accusation was withdrawn by the complainant.",
          "The case concerns a financial crime.",
        ],
        answer: "The case is both a criminal investigation and a public test of accountability around political privilege.",
        explanation: "The family connection matters because it raises the question of whether power affects legal process.",
      },
      {
        type: "Counter Argument",
        question: "Which point would most weaken the implication of political shielding?",
        choices: [
          "If police action was prompt, public and procedurally identical to any other POCSO arrest.",
          "If the father issued a public statement.",
          "If the police deployed five special teams.",
          "If the case was registered on May 8.",
        ],
        answer: "If police action was prompt, public and procedurally identical to any other POCSO arrest.",
        explanation: "Routine and transparent procedure would reduce the sense that privilege delayed justice.",
      },
      {
        type: "Tone",
        question: "The tone is best described as:",
        choices: [
          "Matter-of-fact but accountability-conscious.",
          "Sensationalistic and speculative.",
          "Sympathetic to the accused.",
          "Dismissive of legal process.",
        ],
        answer: "Matter-of-fact but accountability-conscious.",
        explanation: "The report keeps to facts, but the political context is unmistakable.",
      },
    ],
  },

  // ─── FAQ · EXPLAINER ───────────────────────────────────────────────────────
  {
    id: 11,
    page: 14,
    category: "FAQ · EXPLAINER",
    headline: "Why has RSS called for dialogue with Pak.?",
    subhead:
      "The FAQ tracks the reactions to Hosabale's comments and asks whether the statement can be read as government policy.",
    body: `Last week, Dattatreya Hosabale, the second in command in the Rashtriya Swayamsewak Sangh (RSS), the ideological mothership of the Bharatiya Janata Party (BJP), said in an interview to news agency PTI that India should persist with attempts at a dialogue with Pakistan. His statement triggered reactions from Pakistan, leaders of political parties in Jammu and Kashmir, India's former Chief of Army Staff, and from the Opposition.

There have been a lot of comments on not just the substance of the remarks, but also their timing, coming as they do close on the heels of the first anniversary of Operation Sindoor, which followed the 2025 terror attack in Pahalgam in J&K that left 16 people dead. The Narendra Modi-led NDA government has consistently held that there can be no dialogue as long as Pakistan-backed terror groups continue to carry out attacks in India.

Pakistan's Ministry of Foreign Affairs welcomed the remarks, calling them a "positive development" and hoping that "sanity will prevail in India". In J&K, National Conference president Farooq Abdullah said that he is "glad that somebody is now thinking that war is not an option." PDP president Mehbooba Mufti said "talks are the only headway" to address the issues between the two countries.

Can Mr. Hosabale's statement be extrapolated to reflect government policy? The answer is complicated. Prime Minister Narendra Modi is a product of the Sangh Parivar and has publicly acknowledged this fact. His government has been one of the most intensely ideological in India's history, fulfilling some of the core issues on the RSS agenda including the reading down of Article 370 and the construction of a Ram temple in Ayodhya.

With regard to the relationship with Pakistan, matters stray into a territory that is more dynamic, and affected by both internal and external events. The RSS's views have been quite consistent for a long time; therefore, governmental intervention, which also depends on immediate circumstances, may not usually follow the same trajectory. What the comments suggest is that whenever or if ever Mr. Modi seeks to initiate dialogue with Pakistan, he will have political cover from the ideological parent of the BJP.`,
    mcqs: [
      {
        type: "Main Idea",
        question: "What is the FAQ mainly trying to clarify?",
        choices: [
          "Whether RSS remarks on Pakistan should be read as government policy.",
          "Whether Air India should cut routes to Europe.",
          "Whether Article 370 should be restored.",
          "Whether BRICS should expand further.",
        ],
        answer: "Whether RSS remarks on Pakistan should be read as government policy.",
        explanation: "The piece is built around interpreting a political signal, not merely reporting the comment.",
      },
      {
        type: "Counter Argument",
        question: "What would most weaken the claim that the statement is not government policy?",
        choices: [
          "If the government later echoed the same message in formal diplomatic language.",
          "If Pakistan welcomed the remarks.",
          "If the remarks were discussed in an FAQ.",
          "If the RSS has long held similar views.",
        ],
        answer: "If the government later echoed the same message in formal diplomatic language.",
        explanation: "That would make the separation between organisation and state much less convincing.",
      },
      {
        type: "Tone",
        question: "The tone is best described as:",
        choices: [
          "Explanatory and interpretive.",
          "Sarcastic and dismissive.",
          "Solemn and ceremonial.",
          "Purely statistical.",
        ],
        answer: "Explanatory and interpretive.",
        explanation: "The FAQ is structured to unpack context and implications.",
      },
    ],
  },
  {
    id: 14,
    page: 14,
    category: "FAQ · EXPLAINER",
    headline: "Why is the Prime Minister advocating austerity?",
    subhead:
      "What are the seven suggestions PM Modi made for the public? How has the West Asia war impacted India's economy? What measures is the government taking?",
    body: `Over the past week, a series of nudges, policy changes, and public messages have sought to influence the behaviour of Indian consumers, companies, and farmers. At the heart of this push is an effort to reduce India's imports of oil and petroleum products, gold, and fertilizers.

On May 10, during a speech in Secunderabad, Prime Minister Narendra Modi laid out a seven-fold set of suggestions for the Indian public: prioritise working from home; reduce petrol and diesel usage by using public transport and electric vehicles; reduce the use of cooking oil; stop buying gold for at least a year; buy Indian-made products rather than foreign ones; pause foreign travel; and adopt natural fertilizers instead of using imported chemical ones.

The war in West Asia has created a global energy crisis. A year ago, the price of Brent Crude stood at $65 a barrel; it is now around $110. India imports 85-90% of its oil requirement. This means that any time the price of oil goes up internationally, the country's import bill increases. Oil alone makes up about 17% of India's total goods import basket.

A third major trend is the depreciation of the rupee. The currency breached the ₹96-to-a-dollar mark on May 15 before closing a little higher at ₹95.96. A year ago, the currency was trading at about ₹85 to a dollar. The Reserve Bank of India's foreign exchange reserves fell to $552.4 billion as of May 8, 2026, from $581.4 billion a year earlier — a decline of about $29 billion.

Taken together, all this means that India's Current Account Deficit (CAD) — the amount by which its imports of goods and services exceed exports — is set to grow to about 2.5% of the GDP in this financial year from 1.4% as recently as the quarter ended December 2025. Effective from May 13, the government doubled the effective tax to be paid on the import of gold and silver to a total of 18.4% from the previous 9.2%. The prices of petrol and diesel were hiked on May 15 by ₹3 a litre each.`,
    mcqs: [
      {
        type: "Main Idea",
        question: "What is the underlying logic connecting all seven of PM Modi's suggestions?",
        choices: [
          "Each suggestion targets a specific import category in order to reduce the Current Account Deficit.",
          "Each suggestion is designed to boost the government's tax revenues.",
          "Each suggestion is aimed at reducing domestic inflation.",
          "Each suggestion primarily targets the agricultural sector.",
        ],
        answer: "Each suggestion targets a specific import category in order to reduce the Current Account Deficit.",
        explanation: "Gold, oil, foreign goods, and travel are all import-heavy categories whose reduction directly addresses the widening CAD.",
      },
      {
        type: "Counter Argument",
        question: "Critics of the PM's austerity appeal would most plausibly point out that:",
        choices: [
          "Several measures like higher fuel prices are inflationary and make public transport more expensive, creating the opposite effect.",
          "India's import of gold is negligible relative to GDP.",
          "The CAD was at its lowest ever in December 2025.",
          "The rupee appreciated against the dollar during the same period.",
        ],
        answer: "Several measures like higher fuel prices are inflationary and make public transport more expensive, creating the opposite effect.",
        explanation: "The article itself notes this contradiction: fuel price hikes are inflationary and likely to increase the cost of the very public transport the PM recommends.",
      },
      {
        type: "Inference",
        question: "What does the fall in RBI's forex reserves from $581.4 billion to $552.4 billion most directly indicate?",
        choices: [
          "The RBI has been actively selling dollars to stabilise the rupee's exchange rate.",
          "India has reduced its imports significantly over the past year.",
          "Foreign portfolio investment into India has increased sharply.",
          "The RBI has been purchasing gold to diversify its reserves.",
        ],
        answer: "The RBI has been actively selling dollars to stabilise the rupee's exchange rate.",
        explanation: "The article explicitly states that the RBI has been 'stepping in to stabilise the fall of the rupee... mainly by selling the dollars in its reserves.'",
      },
    ],
  },
  {
    id: 15,
    page: 14,
    category: "FAQ · EXPLAINER",
    headline: "Why has Air India cut international flight operations?",
    subhead:
      "Why has it been so severely impacted? Which routes have been affected? How are other international airlines coping?",
    body: `Last week, Air India announced sweeping international schedule cuts between June and August, including a nearly 40% reduction in North America operations and significant cuts across SAARC and Southeast Asia.

According to airline sources, a total of 145 weekly flights across North America, Europe, Southeast Asia, SAARC, and the Far East have been removed, resulting in an overall 27% reduction in international flight operations. In North America, Air India's most critical international market, weekly flights will be reduced from 51 to 33, which is a 39% decline. Services on routes such as Delhi-Chicago, Delhi-Newark and Mumbai-New York are being temporarily suspended.

The reductions in flight capacity are a direct fallout of the West Asia conflict, which has forced airlines operating between Asia and Europe to avoid the conflict-hit airspace for safety reasons. As a result, Air India has been forced to adopt longer flight paths, increasing travel times to North America by nearly five to six hours. For Indian carriers, the disruption has been compounded by Pakistan's ban on the use of its airspace by Indian airlines since Operation Sindoor in April 2025. This puts them at a clear disadvantage compared to European peers such as Lufthansa.

By April, jet fuel prices had already risen by 130% amid escalating tensions in the Gulf, creating another major challenge for airlines, where fuel accounts for nearly 40% of operating costs. Air India posted a loss of ₹26,700 crore in FY2025-26 amid multiple headwinds, including the Pakistan airspace ban and travellers avoiding the airline in the aftermath of the crash in Ahmedabad on June 12 last year.

The regional conflict has hit the Gulf carriers the worst, with the International Air Transport Association reporting a 61% decline in international passenger traffic carried by them in March. The Lufthansa Group cancelled 20,000 short-haul flights operated by its subsidiary until October to save jet fuel while consolidating long-haul connections. Qantas has announced a 5% reduction in domestic capacity and a 2% cut in international flights in response to soaring jet fuel prices.`,
    mcqs: [
      {
        type: "Main Idea",
        question: "What is the central argument of the FAQ?",
        choices: [
          "Air India's cuts are the compound result of airspace restrictions, rising fuel costs, and reputational damage — making its predicament uniquely severe among Indian carriers.",
          "Air India's cuts are mainly due to poor management decisions unrelated to geopolitics.",
          "The West Asia conflict has uniformly affected all global airlines equally.",
          "The solution to Air India's losses lies in acquiring more aircraft.",
        ],
        answer: "Air India's cuts are the compound result of airspace restrictions, rising fuel costs, and reputational damage — making its predicament uniquely severe among Indian carriers.",
        explanation: "The FAQ identifies three simultaneous pressures: conflict-forced rerouting, Pakistan airspace ban, and post-crash reputational damage — all hitting Air India harder than any other Indian airline.",
      },
      {
        type: "Counter Argument",
        question: "What fact most strengthens the case that Pakistan's airspace ban is the decisive factor in Air India's disadvantage?",
        choices: [
          "European carriers like Lufthansa can still fly over Pakistan, giving them significantly shorter routes to the Americas and saving fuel.",
          "Jet fuel prices have risen by 130% for all airlines globally.",
          "Air India posted a loss of ₹26,700 crore in FY2025-26.",
          "Gulf carriers saw a 61% decline in March.",
        ],
        answer: "European carriers like Lufthansa can still fly over Pakistan, giving them significantly shorter routes to the Americas and saving fuel.",
        explanation: "The airspace asymmetry directly creates a competitive disadvantage: Indian carriers must fly longer routes and burn more fuel than European rivals on the same routes.",
      },
      {
        type: "Inference",
        question: "The phrase 'travellers avoiding the airline in the aftermath of the crash in Ahmedabad' most likely means:",
        choices: [
          "A safety incident last year damaged passenger confidence in Air India, reducing bookings beyond what geopolitics alone would explain.",
          "Air India pilots refused to fly after the crash.",
          "The Ahmedabad crash was caused by the West Asia conflict.",
          "All Indian airlines were affected equally by the Ahmedabad crash.",
        ],
        answer: "A safety incident last year damaged passenger confidence in Air India, reducing bookings beyond what geopolitics alone would explain.",
        explanation: "The article lists it as a separate headwind from the geopolitical factors, implying Air India faces both structural and reputational demand-side damage simultaneously.",
      },
    ],
  },

  // ─── PROFILE · POLITICS ────────────────────────────────────────────────────
  {
    id: 13,
    page: 15,
    category: "PROFILE · POLITICS",
    headline: "V.D. Satheesan profile: from political exile threat to Kerala Chief Minister",
    subhead:
      "A profile of the Kerala CM-designate tracing his rise through persistence, party engineering and constituency loyalty.",
    body: `A few months before the Assembly polls, V.D. Satheesan, the then Opposition Leader of the Kerala Legislative Assembly, created a political flutter by declaring that he would opt for political exile if he failed to bring the party back to power. The announcement was greeted with usual cynicism.

Many political observers even dismissed it as an astute move of a canny politician to energise the party and its rank and file for the crucial election. A few months after the declaration, Mr. Satheesan is set to assume office as Kerala Chief Minister, after leading the Congress-led alliance to victory over the Left Democratic Front (LDF) and outmanoeuvring two senior colleagues in the race for the top post.

The Congress, after being out of power for a decade, and Mr. Satheesan could ill-afford a defeat in the election as it would have spelt doom for both the organisation and himself, especially at a time when the national leadership of the Congress had reposed much faith in him to revive its fortunes in the State.

Mr. Satheesan, who has been consistently representing the Paravur Assembly constituency in Ernakulam district for six terms, began his political career with a defeat in his debut contest in 1996. The young lawyer of the Kerala High Court refused to leave the constituency despite losing the election. The next five years saw Mr. Satheesan carefully nurturing his relationship with the voters of the constituency, who presented him with his first electoral victory in 2001.

Mr. Satheesan also provided an ideological framework to his fight against the Left parties by claiming that the Congress was the true leftist organisation. "We are the Nehruvian Left," he once asserted. The five years of his political life as the Leader of the Opposition saw the emergence of an aggressive leader, who confronted the CPI(M) on the floor of the House. The elections witnessed the Congress-led UDF winning 102 seats in the 140-member legislative Assembly, with the party nearly tripling its strength as its 63 candidates got elected.`,
    mcqs: [
      {
        type: "Main Idea",
        question: "What is the profile mainly trying to show?",
        choices: [
          "His rise combined persistence, constituency work and political timing.",
          "His career was defined by a single election speech.",
          "He rose mainly because the Governor intervened.",
          "He became CM without any organisational backing.",
        ],
        answer: "His rise combined persistence, constituency work and political timing.",
        explanation: "The profile traces a long climb, not a sudden leap.",
      },
      {
        type: "Counter Argument",
        question: "What would most weaken the profile's argument about his political skill?",
        choices: [
          "If his constituency loyalty had not translated into repeated electoral victories.",
          "If he was once described as a loner.",
          "If he studied law and social work.",
          "If the Congress was out of power for a decade.",
        ],
        answer: "If his constituency loyalty had not translated into repeated electoral victories.",
        explanation: "His rise is anchored in durable voter support.",
      },
      {
        type: "Tone",
        question: "The tone is best described as:",
        choices: [
          "Profile-driven and admiring but restrained.",
          "Hostile and cynical throughout.",
          "Comedic and irreverent.",
          "Strictly procedural.",
        ],
        answer: "Profile-driven and admiring but restrained.",
        explanation: "It is a classic political profile with measured respect.",
      },
    ],
  },

  // ─── SCIENCE · RESEARCH ────────────────────────────────────────────────────
  {
    id: 12,
    page: 4,
    category: "EDUCATION · REFORMS",
    headline: "Pune biology teacher held in NEET case",
    subhead:
      "CBI says a subject expert used examination access to coach candidates and disclose questions in advance.",
    body: `The CBI on Saturday arrested a biology lecturer from Pune in connection with the 2026 NEET-UG paper leak case. Manisha Gurunath Mandhare was appointed by the National Testing Agency (NTA) as an expert and was involved in this year's examination process.

"She had complete access to the botany and zoology question papers. During April 2026, she had mobilised prospective NEET examination candidates through Manisha Waghmare of Pune (arrested on May 14) and conducted special coaching classes for these students at her residence," the agency said.

According to the CBI, during those classes, Ms. Mandhare explained and disclosed various questions from botany and zoology, had the students note them down in their notebooks, and also marked them in their textbooks. The majority of these questions tallied with the actual question paper of the NEET-UG 2026 examination.

The agency has so far arrested nine accused in the case. In the last 24 hours, the CBI has conducted searches at six locations across the country and seized laptops, bank statements, and mobile phones. The Pune-based chemistry lecturer P.V. Kulkarni was held on the charge of leaking chemistry questions. The agency alleged that he had access to the question papers as he was involved in the examination process on behalf of the NTA.`,
    mcqs: [
      {
        type: "Main Idea",
        question: "What is the passage mainly about?",
        choices: [
          "Alleged abuse of insider access to enable advance disclosure of NEET-UG questions.",
          "A dispute over teacher salaries in Pune.",
          "A new admissions window at Delhi University.",
          "A court ruling on NTA restructuring.",
        ],
        answer: "Alleged abuse of insider access to enable advance disclosure of NEET-UG questions.",
        explanation: "The report focuses on how an expert's access allegedly enabled advance disclosure — a systemic integrity failure, not just an individual crime.",
      },
      {
        type: "Counter Argument",
        question: "What would most weaken the article's implication of a systemic leak?",
        choices: [
          "If the disclosed questions did not match the final paper in significant numbers.",
          "If searches were conducted across six locations.",
          "If laptops and phones were seized.",
          "If the accused was a lecturer from Pune.",
        ],
        answer: "If the disclosed questions did not match the final paper in significant numbers.",
        explanation: "The case depends on the alleged overlap between disclosed and actual questions.",
      },
      {
        type: "Tone",
        question: "The tone is best described as:",
        choices: [
          "Investigative and alarmed.",
          "Light-hearted and casual.",
          "Admiring and celebratory.",
          "Detached and playful.",
        ],
        answer: "Investigative and alarmed.",
        explanation: "The article treats the leak as a serious integrity breach.",
      },
    ],
  },
  {
    id: 17,
    page: 11,
    category: "SCIENCE · RESEARCH",
    headline: "Barn swallows in Manipur shed their migratory trait",
    subhead:
      "A new study suggests descendants of migratory birds may have permanently settled in the Imphal Valley, shaped by culture, climate and interbreeding.",
    body: `Descendants of migratory barn swallows may have gradually stopped making long journeys and settled permanently in Manipur's Imphal Valley, a new study suggests.

The finding, published in the Journal of Wildlife Science, also says that these fork-tailed birds may represent a mixed population shaped by ancient movements and interbreeding between their different groups over thousands of years. The authors of the study are Amarjeet Kaur and R. Suresh Kumar of the Wildlife Institute of India (WII). Their study is based on field surveys conducted in 2022 and 2023.

"Birds have shown notable expansions and contractions of breeding ranges in response to climate change, land-use transformation, and the creation of novel human-made habitats. Synanthropic species, those closely associated with humans, are often at the forefront of such shifts," the study notes.

The two WII scientists did not find any barn swallows in Manipur's hill districts. They found thriving colonies in the Imphal Valley, recording nests in about 50 homes and buildings across Bishnupur, Imphal East, Imphal West, and Thoubal districts. They captured 45 individuals — 26 males and 19 females. The swallows showed a variety of colours with differences in throat and breast markings. During the survey, adult barn swallows were seen at the nesting sites throughout the year, indicating that they do not leave the valley after breeding.

The scientists suggest two possible explanations: the birds shed the migratory trait of their ancestors to settle in the valley, which offers a mild climate, plentiful flying insects, and suitable structures for mud nests; or the impact of interbreeding of different groups over thousands of years. The researchers also note that the Meitei community regards the barn swallow as a symbol of Goddess Lakshmi, prosperity, and good fortune, translating into strong protection of nests within private properties — likely contributing to the persistence of breeding populations in densely inhabited areas.`,
    mcqs: [
      {
        type: "Main Idea",
        question: "What is the study's primary significance?",
        choices: [
          "It documents the first evidence of a resident breeding barn swallow population in Manipur, challenging assumptions about subspecies limits and migration patterns.",
          "It proves that climate change has permanently altered bird migration globally.",
          "It establishes that the Meitei community's cultural practices caused the birds to evolve new species.",
          "It recommends that barn swallows be declared a protected species across India.",
        ],
        answer: "It documents the first evidence of a resident breeding barn swallow population in Manipur, challenging assumptions about subspecies limits and migration patterns.",
        explanation: "The study's stated contribution is extending the known breeding range and challenging long-standing assumptions — not broader climate change claims.",
      },
      {
        type: "Counter Argument",
        question: "Critics of the study's conclusions would most plausibly argue that:",
        choices: [
          "Without genetic analysis and tracking devices, it is premature to conclude that the birds are non-migratory rather than a wintering population whose departure was simply missed.",
          "The Meitei community's reverence for swallows proves the birds evolved there.",
          "The absence of swallows in hill districts confirms the valley subspecies hypothesis.",
          "A sample of 45 individuals is too large for a reliable study.",
        ],
        answer: "Without genetic analysis and tracking devices, it is premature to conclude that the birds are non-migratory rather than a wintering population whose departure was simply missed.",
        explanation: "The researchers themselves acknowledge this gap and call for tracking devices and genetic analysis in future studies.",
      },
      {
        type: "Inference",
        question: "The term 'synanthropic species' as used in the study most likely refers to:",
        choices: [
          "Species that live in close association with human settlements and benefit from human-modified environments.",
          "Species that are endemic to a single geographic region and found nowhere else.",
          "Species that migrate seasonally across international boundaries.",
          "Species classified as endangered due to habitat destruction.",
        ],
        answer: "Species that live in close association with human settlements and benefit from human-modified environments.",
        explanation: "The study uses 'synanthropic' to describe species at the forefront of range shifts because of their proximity to human habitats — a standard ecological term.",
      },
    ],
  },
  {
    id: 18,
    page: 13,
    category: "SCIENCE · RESEARCH",
    headline: "Constant mechanical force may be why heart cancer is so rare",
    subhead:
      "New research suggests the physical force of each heartbeat directly limits the growth of cancer cells in the organ.",
    body: `The human heart beats more than 1 lakh times a day, pushing blood through the body. Every second, it encounters circulating cells, including cancer cells that travel through the bloodstream. Yet tumours of the heart are strikingly rare. For decades, explanations based on genetics, immune surveillance, and the biology of heart cells have not cracked this puzzle.

New research in Science has now suggested that the force of each heartbeat may itself limit the growth of cancer cells in the organ. The researchers introduced cancer-causing mutations across multiple organs in mice, expecting tumours throughout the body. Tumours formed in several tissues but not in the heart. Then, the team surgically implanted a second heart into another part of the body and connected it to blood vessels so it remained alive and beating, but no longer pumped blood through its left ventricle under normal mechanical load. In these 'unloaded' hearts, cancer cells that had struggled to grow began to expand rapidly.

With every contraction, heart muscles generate compressive forces that cells must withstand. This could create a hostile environment for cancer cells that limits their ability to multiply. The researchers found that mechanical stress changed which parts of the DNA became easier for the cell to access. In beating heart tissue, regions linked to slowing or restraining cell division became more accessible, while signs of active proliferation declined.

These changes suggested that mechanical force shifted cancer cells away from rapid growth. The findings suggested stress from the heart could reach the nucleus through the internal cytoskeleton — connecting proteins that link the cytoskeleton to the nucleus — influencing how DNA is organised and used.

If mechanical forces can influence gene activity in heart tissue, similar effects could be at play in other organs where cells are constantly stretched, compressed or exposed to physical strain. However, in other settings, mechanical cues from the tumour environment can promote cancer progression and metastasis, making it important to identify which specific physical signals lead to these different outcomes.`,
    mcqs: [
      {
        type: "Main Idea",
        question: "What is the key finding of the research described?",
        choices: [
          "The mechanical load of the heartbeat physically suppresses cancer cell proliferation by altering chromatin accessibility in the cell nucleus.",
          "Heart cancer is rare because the heart has a uniquely powerful immune system.",
          "Genetic mutations in heart cells are far less common than in other organs.",
          "Cancer cells cannot survive in blood because of oxygen levels.",
        ],
        answer: "The mechanical load of the heartbeat physically suppresses cancer cell proliferation by altering chromatin accessibility in the cell nucleus.",
        explanation: "The study's central mechanism is mechanical: repeated compression changes which genes the cell can access, effectively silencing growth pathways.",
      },
      {
        type: "Counter Argument",
        question: "What limitation of the study would most qualify its conclusions?",
        choices: [
          "The experiments used mice and lab-grown tissue, and the causal pathway from mechanical stress to chromatin change to cancer suppression has not been fully mapped in humans.",
          "The study was published in Science, a journal that sometimes retracts findings.",
          "The researchers did not compare the heart to the liver.",
          "The sample size of unloaded hearts was not specified in the article.",
        ],
        answer: "The experiments used mice and lab-grown tissue, and the causal pathway from mechanical stress to chromatin change to cancer suppression has not been fully mapped in humans.",
        explanation: "Translating animal and in-vitro results to human biology is the standard methodological caveat, and the article notes this explicitly.",
      },
      {
        type: "Inference",
        question: "The term 'chromatin accessibility' as implied in the passage most likely refers to:",
        choices: [
          "The degree to which specific DNA regions in the cell nucleus are open and available for the machinery that reads and activates genes.",
          "The physical size of the heart muscle cell's nucleus under compression.",
          "The ability of cancer cells to move through the bloodstream.",
          "The rate at which cells divide in response to hormonal signals.",
        ],
        answer: "The degree to which specific DNA regions in the cell nucleus are open and available for the machinery that reads and activates genes.",
        explanation: "The article describes 'tightly packed' versus 'open' regions of DNA — classic chromatin accessibility language — determining which genes are easier to activate.",
      },
    ],
  },
  {
    id: 22,
    page: 13,
    category: "SCIENCE · RESEARCH",
    headline: "IIT-M, IISc team makes carbon-free version of ferrocene sandwich",
    subhead:
      "A stable, purely inorganic analogue of ferrocene using boron rings and osmium opens a new era in inorganic chemistry.",
    body: `A compound called ferrocene has been a landmark of chemistry for over seven decades. It consists of an iron atom sandwiched between two flat carbon rings. Its discovery launched the field of organometallic chemistry, with numerous applications in materials science and medicine. Since then, chemists have been trying to create a version of this sandwich that contains no carbon atoms.

In a new study in Science, researchers from IIT-Madras and the Indian Institute of Science, Bengaluru, announced they had finally achieved this goal: a stable, carbon-free analogue of ferrocene using boron rings and osmium. "Just as ferrocene started a new era in organometallics, these results will start a new era in inorganometallics and will be a part of textbooks of inorganic chemistry," study co-author and IIT-Madras professor Sundargopal Ghosh said.

Boron is next to carbon on the periodic table and can form similar ring structures. While scientists had created sandwiches containing both carbon and boron, a purely inorganic version had been elusive. The team turned to computer modelling to predict which metal would best stabilise a boron sandwich, and zeroed in on osmium.

To create the complex, the team reacted a polymeric osmium-bromine precursor compound with an excess of a borane-dimethyl sulphide reagent. Then they heated the mixture to 100°C for eight hours and isolated the product as a colourless solid. Finally, they used X-ray diffraction and nuclear magnetic resonance spectroscopy to check the atoms' arrangement.

The X-ray analysis revealed a perfect sandwich, with a single osmium atom between two parallel, five-membered boron rings. Unlike the flat carbon rings in ferrocene, the boron rings used bridging hydrogen atoms between the boron atoms. These bridges redirected the ring's electron orbitals towards the metal, creating a bond even stronger than the one in ferrocene. This could pave the way for new catalysts that are stable at much higher temperatures.`,
    mcqs: [
      {
        type: "Main Idea",
        question: "What is the primary significance of the IIT-M and IISc research?",
        choices: [
          "It demonstrates that the sandwich architecture of organometallic chemistry is not exclusive to carbon, opening an entirely new domain of inorganic chemistry.",
          "It proves that osmium is a better catalyst than iron for industrial applications.",
          "It replaces ferrocene in all existing pharmaceutical applications.",
          "It provides the first evidence that boron can form ring structures.",
        ],
        answer: "It demonstrates that the sandwich architecture of organometallic chemistry is not exclusive to carbon, opening an entirely new domain of inorganic chemistry.",
        explanation: "The paper's own framing — 'just as ferrocene started a new era in organometallics, these results will start a new era in inorganometallics' — makes this the central claim.",
      },
      {
        type: "Inference",
        question: "The fact that the boron-osmium bond is described as 'even stronger than the one in ferrocene' most likely implies:",
        choices: [
          "The bridging hydrogen atoms in the boron rings concentrate electron density toward the osmium in a way the flat carbon rings in ferrocene cannot.",
          "Osmium is heavier than iron, making all its compounds structurally stronger.",
          "Boron rings are inherently more stable than carbon rings at room temperature.",
          "The new compound was synthesised at a higher temperature than ferrocene.",
        ],
        answer: "The bridging hydrogen atoms in the boron rings concentrate electron density toward the osmium in a way the flat carbon rings in ferrocene cannot.",
        explanation: "The article specifies that the hydrogen bridges 'redirected the ring's electron orbitals towards the metal' — a structural explanation for the enhanced bond strength.",
      },
      {
        type: "Counter Argument",
        question: "A sceptic would most reasonably question the claimed significance of this synthesis by arguing that:",
        choices: [
          "Until practical applications such as high-temperature catalysts are demonstrated, the discovery remains primarily a proof of concept with limited immediate utility.",
          "Carbon-free sandwiches have already been made using nitrogen rings.",
          "Computer modelling cannot reliably predict which metals will form stable complexes.",
          "Ferrocene itself is already carbon-free in its metallic core.",
        ],
        answer: "Until practical applications such as high-temperature catalysts are demonstrated, the discovery remains primarily a proof of concept with limited immediate utility.",
        explanation: "The article acknowledges the catalytic potential but does not demonstrate it — the transition from structural novelty to technological application remains unproven.",
      },
    ],
  },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

function hashString(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i += 1) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(a) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffleWithSeed(arr, seed) {
  const out = [...arr];
  const rand = mulberry32(seed);
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function splitParagraphs(text) {
  return text
    .trim()
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(articleData[0].id);
  const [revealed, setRevealed] = useState({});

  const categories = ["All", ...new Set(articleData.map((a) => a.category))];

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return articleData.filter((article) => {
      const matchesCategory =
        activeCategory === "All" || article.category === activeCategory;
      const matchesSearch =
        !q ||
        article.headline.toLowerCase().includes(q) ||
        article.subhead.toLowerCase().includes(q) ||
        article.body.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const selectedArticle = useMemo(() => {
    return (
      filtered.find((a) => a.id === selectedId) ||
      filtered[0] ||
      articleData[0]
    );
  }, [filtered, selectedId]);

  const answerSets = useMemo(() => {
    if (!selectedArticle) return [];
    return selectedArticle.mcqs.map((mcq, idx) => {
      const seed = hashString(
        `${selectedArticle.id}-${idx}-${mcq.question}`
      );
      return shuffleWithSeed(mcq.choices, seed);
    });
  }, [selectedArticle]);

  const selectArticle = (id) => {
    setSelectedId(id);
    setRevealed({});
  };

  const pickAnswer = (qIdx, choice) => {
    setRevealed((prev) => ({ ...prev, [qIdx]: choice }));
  };

  const colors = categoryColors[selectedArticle?.category] || {
    bg: "#253047",
    accent: "#5b8def",
    light: "#eef3fb",
  };

  const totalMCQs = articleData.reduce((n, a) => n + a.mcqs.length, 0);
  const totalCats = new Set(articleData.map((a) => a.category)).size;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl p-4 md:p-6">

        {/* ── Header ── */}
        <div className="mb-5 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200 md:p-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                CAT Newspaper Extractor
              </p>
              <h1 className="mt-1 text-2xl font-bold md:text-3xl">
                The Hindu — CAT relevant articles with randomised MCQs
              </h1>
              <p className="mt-2 max-w-3xl text-sm text-slate-600">
                Extracted verbatim from the May 17, 2026 issue. Organised for reading practice — tone, main idea, counter-argument, inference and vocabulary drills. Answers are shuffled on every load.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center text-sm">
              <div className="rounded-2xl bg-slate-100 px-4 py-3">
                <div className="text-lg font-bold">{articleData.length}</div>
                <div className="text-slate-500">articles</div>
              </div>
              <div className="rounded-2xl bg-slate-100 px-4 py-3">
                <div className="text-lg font-bold">{totalMCQs}</div>
                <div className="text-slate-500">MCQs</div>
              </div>
              <div className="rounded-2xl bg-slate-100 px-4 py-3">
                <div className="text-lg font-bold">{totalCats}</div>
                <div className="text-slate-500">categories</div>
              </div>
            </div>
          </div>

          {/* search + category filters */}
          <div className="mt-5 grid gap-3 md:grid-cols-[1.5fr_1fr]">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search headline, subhead or body…"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-400"
            />
            <div className="flex gap-2 overflow-x-auto pb-1 md:justify-end">
              {categories.map((cat) => {
                const isActive = cat === activeCategory;
                const c =
                  cat === "All"
                    ? colors
                    : categoryColors[cat] || colors;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition"
                    style={{
                      background: isActive ? c.bg : "#ffffff",
                      color: isActive ? "#ffffff" : "#334155",
                      boxShadow: isActive
                        ? "0 10px 22px rgba(15,23,42,0.12)"
                        : "inset 0 0 0 1px #e2e8f0",
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Main grid ── */}
        <div className="grid gap-5 lg:grid-cols-[360px_1fr]">

          {/* Sidebar */}
          <aside className="space-y-3">
            {filtered.map((article) => {
              const c = categoryColors[article.category] || colors;
              const active = article.id === selectedArticle?.id;
              return (
                <button
                  key={article.id}
                  onClick={() => selectArticle(article.id)}
                  className="w-full rounded-3xl border p-4 text-left transition hover:-translate-y-0.5"
                  style={{
                    background: active ? c.light : "#fff",
                    borderColor: active ? c.accent : "#e2e8f0",
                    boxShadow: active
                      ? "0 16px 40px rgba(15,23,42,0.08)"
                      : "0 1px 0 rgba(15,23,42,0.02)",
                  }}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]"
                      style={{ background: c.bg, color: "#fff" }}
                    >
                      Page {article.page}
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      {article.category}
                    </span>
                  </div>
                  <h2 className="mt-3 text-base font-bold leading-snug">
                    {article.headline}
                  </h2>
                  <p className="mt-2 line-clamp-3 text-sm text-slate-600">
                    {article.subhead}
                  </p>
                </button>
              );
            })}

            {filtered.length === 0 && (
              <div className="rounded-3xl border border-dashed border-slate-300 p-8 text-center text-slate-500 text-sm">
                No articles match the current filter.
              </div>
            )}
          </aside>

          {/* Article + MCQs */}
          <main className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200 md:p-7">
            {selectedArticle ? (
              <>
                {/* Header banner */}
                <div
                  className="rounded-3xl p-5"
                  style={{
                    background: `linear-gradient(135deg, ${colors.bg}, #0f172a)`,
                  }}
                >
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/75">
                    <span>{selectedArticle.category}</span>
                    <span>•</span>
                    <span>Page {selectedArticle.page}</span>
                  </div>
                  <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
                    {selectedArticle.headline}
                  </h2>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-white/80">
                    {selectedArticle.subhead}
                  </p>
                </div>

                {/* Body */}
                <div className="mt-6 space-y-4 text-[15px] leading-7 text-slate-800">
                  {splitParagraphs(selectedArticle.body).map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                {/* MCQs */}
                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">MCQs</h3>
                    <p className="text-sm text-slate-500">
                      Answers are shuffled per question.
                    </p>
                  </div>

                  <div className="mt-4 space-y-5">
                    {selectedArticle.mcqs.map((mcq, qIdx) => {
                      const choices = answerSets[qIdx] || mcq.choices;
                      const picked = revealed[qIdx];
                      const isCorrect = picked === mcq.answer;
                      const isRevealed = picked !== undefined;

                      return (
                        <div
                          key={qIdx}
                          className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                                {mcq.type}
                              </div>
                              <h4 className="mt-1 text-lg font-bold leading-snug">
                                {mcq.question}
                              </h4>
                            </div>
                            {isRevealed && (
                              <div
                                className="rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap"
                                style={{
                                  background: isCorrect
                                    ? "#dcfce7"
                                    : "#fee2e2",
                                  color: isCorrect ? "#166534" : "#991b1b",
                                }}
                              >
                                {isCorrect ? "✓ Correct" : "✗ Wrong"}
                              </div>
                            )}
                          </div>

                          <div className="mt-4 grid gap-2">
                            {choices.map((choice) => {
                              const active = picked === choice;
                              const showCorrect =
                                isRevealed && choice === mcq.answer;
                              return (
                                <button
                                  key={choice}
                                  onClick={() => pickAnswer(qIdx, choice)}
                                  className="rounded-2xl border px-4 py-3 text-left text-sm transition"
                                  style={{
                                    background: showCorrect
                                      ? "#dcfce7"
                                      : active
                                      ? isCorrect
                                        ? "#dcfce7"
                                        : "#fee2e2"
                                      : "#fff",
                                    borderColor: showCorrect
                                      ? "#86efac"
                                      : active
                                      ? isCorrect
                                        ? "#86efac"
                                        : "#fca5a5"
                                      : "#e2e8f0",
                                  }}
                                >
                                  {choice}
                                </button>
                              );
                            })}
                          </div>

                          {isRevealed && (
                            <div className="mt-4 rounded-2xl bg-white p-4 text-sm leading-6 text-slate-700 ring-1 ring-slate-200">
                              <div className="font-semibold text-slate-900">
                                Correct Answer
                              </div>
                              <div className="mt-1">{mcq.answer}</div>
                              <div className="mt-3 font-semibold text-slate-900">
                                Why this works
                              </div>
                              <div className="mt-1">{mcq.explanation}</div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            ) : (
              <div className="rounded-3xl border border-dashed border-slate-300 p-10 text-center text-slate-500">
                No articles match the current filter.
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
