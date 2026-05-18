/**
 * LIVE MINT — CAT Article Data  (18 May 2026 edition)
 * ─────────────────────────────────────────────────────────────────────────
 * HOW TO ADD NEW ARTICLES:
 *
 * 1. Copy one of the article objects below and paste it after the last one.
 * 2. Give it a unique `id` (use 201, 202, 203 … for Live Mint articles).
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

export const lmArticleData: Article[] = [
  {
    id: 201,
    page: 1,
    category: "ENERGY · POLICY",
    headline: "Govt spark likely for long energy storage",
    subhead:
      "Support for long-duration energy storage to aid green power; India Battery Storage Vision 2047 scheme expected by FY28",
    body: `India is scrambling to solve a growing clean-energy paradox: the country is adding renewable power at a record pace, but it lacks the storage capacity needed to use that energy when the sun sets and wind generation drops. To bridge that gap, the Union government is preparing a financial support scheme for long-duration energy storage (LDES) technologies, according to three people aware of the discussions.

The proposed scheme — part of the government's 'India Battery Storage Vision 2047' — is being worked out by the ministries of power and heavy industries, and is expected to be rolled out by fiscal year 2028 (FY28) under the administrative control of the power ministry, the people said on condition of anonymity.

The push comes as policymakers increasingly acknowledge that India cannot fully leverage its rapidly expanding renewable-energy capacity without large-scale storage infrastructure. Unlike battery energy storage systems (Bess), which typically store electricity for one to four hours, LDES technologies can supply power for eight hours or more.

These include pumped hydro storage, flow batteries, compressed air energy storage (CAES), and sensible heat storage. A viability gap funding (VGF) mechanism for LDES is currently being worked out, one of the officials said, adding that the government could also consider interest subvention support to improve liquidity access and accelerate adoption.

"Heavy reliance on short-duration storage could reduce energy security, increase system costs, and limit the feasibility of achieving 100% [renewable integration]," the official said.`,
    mcqs: [
      {
        type: "Critical Reasoning",
        question:
          "The article describes India's situation as a 'clean-energy paradox'. Which assumption is most essential to sustain this characterisation?",
        choices: [
          "Renewable energy output is time-concentrated, creating hours of surplus during generation and deficit when generation stops",
          "BESS technologies are fundamentally incapable of scaling beyond a four-hour storage window at commercial cost",
          "The government has committed adequate budgetary resources to finance a VGF mechanism of sufficient scale",
          "Long-duration storage technologies have already been proven commercially viable in comparable developing economies",
        ],
        answer:
          "Renewable energy output is time-concentrated, creating hours of surplus during generation and deficit when generation stops",
        explanation:
          "The paradox exists only if renewable energy is not continuously available — i.e., solar generates during the day and wind at certain hours, leaving night-time and low-wind periods underserved. Without this temporal mismatch assumption, additional storage would be unnecessary. B is a trap: the article contrasts LDES with BESS on duration, not on scalability limits. C and D are background conditions, not core assumptions.",
      },
      {
        type: "Inference",
        question:
          "The article mentions that LDES technologies 'can supply power for eight hours or more' while BESS supply 'one to four hours'. What can most reasonably be inferred from this distinction in the context of the article?",
        choices: [
          "BESS is sufficient for daily load management but inadequate for bridging multi-day renewable generation gaps during cloudy or low-wind periods",
          "LDES is economically unviable at scale, which is precisely why government VGF support is needed to bridge the commercial gap",
          "India's renewable energy grid is currently designed around BESS infrastructure, making a transition to LDES technically complex",
          "The government prefers LDES over BESS because LDES operates on a different physical principle and is harder for private firms to replicate",
        ],
        answer:
          "BESS is sufficient for daily load management but inadequate for bridging multi-day renewable generation gaps during cloudy or low-wind periods",
        explanation:
          "The 8-hour threshold matters because renewable generation gaps (overnight, multi-day weather events) extend beyond what BESS can cover. The inference is about the functional gap, not commercial viability per se. B introduces 'economic unviability' as the reason for VGF, which is plausible but the article mentions VGF to accelerate adoption, not to make LDES commercially viable. C and D are not supported by the text.",
      },
      {
        type: "Weaken",
        question:
          "The article argues that VGF support for LDES will help India fully leverage its renewable energy capacity. Which of the following, if true, would most weaken this argument?",
        choices: [
          "VGF has previously been deployed successfully to scale solar and wind power projects across Indian states",
          "LDES technologies such as flow batteries and CAES remain pre-commercial globally and cannot be deployed at grid scale within a five-year horizon",
          "Heavy reliance on short-duration storage increases system costs and reduces energy security, as noted in the article",
          "The LDES scheme is being designed jointly by the power and heavy industries ministries, ensuring inter-ministerial coordination",
        ],
        answer:
          "LDES technologies such as flow batteries and CAES remain pre-commercial globally and cannot be deployed at grid scale within a five-year horizon",
        explanation:
          "If LDES technologies are not commercially deployable within the FY28 timeline, financial support through VGF cannot close the renewable storage gap — the constraint is technological readiness, not capital availability. A strengthens the argument by analogy. C is a point made within the article to support LDES, not to weaken it. D strengthens policy coherence.",
      },
    ],
  },

  {
    id: 202,
    page: 1,
    category: "BUSINESS · CONGLOMERATES",
    headline: "Adani eyes an Apple model to scale up rapidly via vendors",
    subhead:
      "Gautam Adani is outsourcing vast swathes of operations to third-party vendors while compressing corporate structure into three layers to speed up decision-making",
    body: `Billionaire Gautam Adani is looking to outsource vast swathes of the group's operations to its vendors while conserving management bandwidth for strategy, research and finance, following the global playbook of multinationals such as Apple and Hyundai, which rely heavily on contract manufacturing to scale rapidly. The move is part of a larger strategy to promote internal talent and create an easier organisational structure, two people aware of the development said. The ports-to-renewable energy conglomerate is aggressively developing a third-party vendor ecosystem to take over manufacturing, logistics, engineering and other functions, the people said on the condition of anonymity. It is also compressing its corporate structure into three layers to speed up decision-making. It has also set up a programme to promote internal talent with an emphasis on prioritizing internal promotions over lateral hiring.

"Apple gets Gorilla Glass from Corning, screen from Samsung, camera parts from Sony, chips from TSMC, and it gives the parts to Foxconn to assemble. That's why Apple could scale," the person cited said. "The Adani Group is creating an extended enterprise environment like Apple has."

Adani, the richest Indian as per Bloomberg Billionaires Index, is himself overseeing the changes that have been in the works for over three years, the first person said. It was partly triggered by the group becoming too large to manage, raising concerns about a growth slowdown.

The Ahmedabad-based conglomerate has committed annual capital expenditure of over ₹2 trillion over the coming five years across its 10 listed companies and numerous unlisted businesses incubated under Adani Enterprises Ltd. It reported combined earnings before interest, tax, depreciation and amortization of over ₹92,000 crore in the first nine months of fiscal year 2026 (FY26) across the group.

According to one of the two people cited above, the conglomerate will oversee research and development and finance, and retain intellectual property rights on manufacturing designs and others. Initially, the group will ensure its partners' profitability and establish offices and staff housing closer to its sites. It will also transfer its workforce to vendors where required, like in the case of manufacturing units or ground handling operations at ports, for a smooth transition. A large number of site-level employees have been shifted to vendors in recent months, while many more are expected to follow. The employees continue to be part of "Adani's extended enterprise environment," the person cited above said, implying the transition won't change their working conditions.

"Our endeavour is to work with a selected group of strong and reliable partners who can take responsibility for the entire task and complete it better, faster, and more effectively," chairman Adani said in an address on Labour Day earlier this month, when he broadly outlined a transformation plan based on three pillars. "This is a change in mindset; this is a change in culture," he said. The Adani Group did not respond to Mint's request for a comment.

Experts confirmed the ongoing global shift to a vendor-heavy model to improve scale and capital efficiency through third-party ecosystems, rather than directly owning every operational layer. "It is encouraging to now see large Indian conglomerates making a similar strategic transition with growing confidence and sophistication," said Monish G. Chatrath, managing partner of MGC Global Risk Advisory, a risk management advisory firm. However, he cautioned that such models have potential risks too. It becomes more challenging to ensure sound corporate governance across a decentralised ecosystem of contractors and service providers, he said. "The most material exposures in such structures arise around third-party cyber vulnerabilities, ESG and labour compliance across vendor chains," he said.

"The three-layer model aims to flatten the organization so that responsibility is clear and decisions can be made quickly," Adani said in the same speech. Multiple reporting layers are being compressed into each other to create a wider reporting span, with the intention of cutting down the layers between decision centres and decision makers, the two people said. "The three-layer structure is that you have a head office layer, you have a site layer, and you have the direct shop floor layer. This means the shop floor layer can speak to the head office directly," the first person quoted above said. "This requires a redesign of how HR works."

Chatrath said that promoting internal talent carries its own challenges, as it requires robust talent pipelines and a culture of continuous development — areas where large, diversified conglomerates often face structural inertia.`,
    mcqs: [
      {
        type: "Main Idea",
        question:
          "Which of the following best captures the central argument of the article?",
        choices: [
          "Adani Group is restructuring along Apple's vendor-ecosystem model to achieve scale, while compressing its corporate hierarchy to accelerate decision-making",
          "Adani Group's rapid growth has made centralised management unsustainable, forcing a shift toward decentralised operations and lateral hiring",
          "The Apple model of vendor dependency is superior to in-house manufacturing for conglomerates, a lesson Adani has drawn from its own operational difficulties",
          "Adani Group's decision to outsource operations is primarily motivated by the need to reduce EBITDA pressure and annual capital expenditure",
        ],
        answer:
          "Adani Group is restructuring along Apple's vendor-ecosystem model to achieve scale, while compressing its corporate hierarchy to accelerate decision-making",
        explanation:
          "The article's dual focus is: (a) vendor ecosystem creation on the Apple model, and (b) three-layer structural compression for faster decisions. B incorrectly states the motive as decentralisation and introduces 'lateral hiring' — the article says the opposite (prioritising internal promotions). C overstates the editorial claim about Apple's superiority. D misrepresents the financial motivation.",
      },
      {
        type: "Inference",
        question:
          "The article states that 'a large number of site-level employees have been shifted to vendors in recent months, while many more are expected to follow' but that employees 'continue to be part of Adani's extended enterprise environment'. What can most reasonably be inferred from this?",
        choices: [
          "The workforce transfer is structured to maintain operational continuity and loyalty without formally severing employee ties to the Adani ecosystem",
          "Adani Group is using vendor transfers as a form of voluntary retrenchment to reduce its direct employee headcount and associated liabilities",
          "Employees transferred to vendors will retain Adani salaries and benefits, funded through a cross-subsidy arrangement between the group and its vendor partners",
          "The term 'extended enterprise environment' is a legal designation that protects transferred employees under Adani's existing employment contracts",
        ],
        answer:
          "The workforce transfer is structured to maintain operational continuity and loyalty without formally severing employee ties to the Adani ecosystem",
        explanation:
          "The phrase 'extended enterprise environment' and the assurance that 'working conditions won't change' signal that Adani is managing the transition carefully — preserving cultural continuity even as legal employment moves to vendors. B introduces 'retrenchment' intent, which the article explicitly contradicts. C and D add specific financial/legal details that are not mentioned in the article.",
      },
      {
        type: "Counter Argument",
        question:
          "An expert in the article cautions that vendor-heavy models create risks around 'third-party cyber vulnerabilities, ESG and labour compliance'. Which of the following responses would most effectively counter this caution?",
        choices: [
          "Apple has operated the vendor-heavy model for decades with a robust supplier code of conduct, demonstrating that compliance risks are manageable through contractual governance",
          "The Adani Group's annual ₹2 trillion capex commitment signals that it has sufficient financial resources to absorb any losses from vendor compliance failures",
          "The three-layer corporate structure eliminates the reporting gaps that typically allow cyber and ESG violations to go undetected in large organisations",
          "Since Adani retains IP rights and R&D control, vendors are incentivised to self-regulate to protect their relationship with the group",
        ],
        answer:
          "Apple has operated the vendor-heavy model for decades with a robust supplier code of conduct, demonstrating that compliance risks are manageable through contractual governance",
        explanation:
          "The most direct counter to the expert's caution is showing that the risks cited are manageable — and Apple's track record (supplier audits, Supplier Responsibility programme) provides the strongest precedent-based rebuttal since Adani is explicitly modelling its strategy on Apple. B addresses financial resilience, not the risk prevention mechanism. C confuses structural compression with compliance monitoring. D relies on an incentive assumption not supported by the text.",
      },
    ],
  },

  {
    id: 203,
    page: 2,
    category: "POLICY · SAFETY",
    headline: "New two-wheeler safety norms in works to curb hands-off riding",
    subhead:
      "Government planning three-layer 'hands-free' safety system for two-wheelers; cost to rise ₹800–1,000 per unit",
    body: `Youngsters riding bikes at high speed without hands on the handlebars and performing stunts have long been a common sight in India, raising serious safety concerns for both riders and other motorists and even pedestrians. This could soon change. The government is planning a three-layer "hands-free" safety system for two-wheelers, requiring manufacturers to install technology that can detect whether riders have both hands on the handlebars and step in if they do not, amid rising road accidents in the country.

According to an internal draft of the proposal, reviewed by Mint, the planned safety standards would require bikes and scooters to prevent ignition without both hands on the grip, issue audio and visual alerts if hands are removed while riding, and gradually slow down the vehicle in such cases.

The introduction of new standards will lead to additional costs for automakers, which are typically passed on to consumers, with the proposed measures expected to increase prices by ₹800-1,000 per unit for installing sensors on handlebars, at least two industry executives said.

The move marks a fresh push by the Centre to tighten two-wheeler safety norms even as its attempt to mandate anti-lock braking systems (ABS) across all categories of two-wheelers irrespective of engine capacity remains stuck amid industry resistance and cost concerns.

Mint first reported in July last year that the Centre had begun working on a plan to curb hands-off driving in two-wheelers. "There have been deliberations with the government on this where we have discussed a range of features that can be introduced on two-wheelers. The Automotive Industry Standards Committee has prepared a set of regulations and test procedures to crack down on people removing hands while driving," the senior executive cited above said on the condition of anonymity.

"Any price increase could have an adverse impact on demand, especially when coupled with an increase in fuel prices. However, regulations that do not lead to an adverse sticker shock could see a lower impact on demand," said Ashim Sharma, senior partner and business unit head at Nomura Research Institute Consulting and Solutions, India.

Consultations between the government and automobile manufacturers in 2025 on increasing road safety involved discussions about whether the industry could introduce features on vehicles to reduce accidents, at a time when the government had indicated its view to mandate the use of ABS, Mint reported in July 2025. AISC works under the aegis of the ministry of road transport and highways and prepares standards, which are then approved by Central Motor Vehicle Rules Technical Standing Committee.`,
    mcqs: [
      {
        type: "Strengthen",
        question:
          "The article implies that the government expects its hands-free safety mandate to succeed despite cost concerns. Which of the following, if true, would most strengthen the government's case for proceeding with the mandate?",
        choices: [
          "A study finds that two-wheeler accidents involving hands-off riding account for over 40% of all fatal road accidents in urban India, making the safety case compelling even at higher vehicle prices",
          "The ABS mandate, though stalled, succeeded in reducing accidents in the premium two-wheeler segment where it was voluntarily adopted by manufacturers",
          "Automotive sensors of the type required for hands-free detection have seen a 60% cost reduction over the past three years due to scale adoption in passenger cars",
          "Consumer surveys show that over 70% of two-wheeler buyers would accept a ₹1,000 price increase if it came with a certified safety feature",
        ],
        answer:
          "A study finds that two-wheeler accidents involving hands-off riding account for over 40% of all fatal road accidents in urban India, making the safety case compelling even at higher vehicle prices",
        explanation:
          "The government's justification for the mandate rests on a strong safety rationale that overrides cost concerns. Evidence that hands-off riding causes a large proportion of fatal accidents most directly strengthens this justification by establishing that the problem is severe enough to warrant mandatory intervention despite price increases. C would strengthen the feasibility argument but not the safety rationale. D strengthens consumer acceptance, not the policy rationale. B shows a different regulation's partial success.",
      },
      {
        type: "Critical Reasoning",
        question:
          "The article notes that the ABS mandate 'remains stuck amid industry resistance and cost concerns' while the government is now proposing a hands-free safety system. What conclusion can be drawn about regulatory strategy from this juxtaposition?",
        choices: [
          "The government is pursuing the hands-free mandate as a politically easier alternative to ABS, even though ABS has a stronger safety case",
          "The failure of the ABS mandate suggests the hands-free system will face similar industry resistance, potentially delaying its implementation beyond the projected timeline",
          "Industry resistance to safety mandates is primarily driven by cost pass-through concerns rather than by technical feasibility limitations",
          "The government is using incremental safety mandates sequentially, with each proposal building institutional precedent for the next regulation regardless of the previous mandate's status",
        ],
        answer:
          "The failure of the ABS mandate suggests the hands-free system will face similar industry resistance, potentially delaying its implementation beyond the projected timeline",
        explanation:
          "The ABS mandate's stalling due to 'industry resistance and cost concerns' is directly analogous to the hands-free system's challenges — both involve mandatory safety hardware with per-unit cost increases. The most logical inference is that similar dynamics will play out. A introduces a subjective political motivation not supported by the text. C overgeneralises beyond what the article states. D is an optimistic interpretation that ignores the structural similarity between the two mandates.",
      },
      {
        type: "Inference",
        question:
          "The article quotes an expert saying regulations that 'do not lead to an adverse sticker shock could see a lower impact on demand'. What does this most likely imply about the ₹800–1,000 per unit cost increase?",
        choices: [
          "The ₹800-1,000 increase is at the borderline of what the market can absorb — small enough to avoid a demand collapse but large enough to cause measurable sales pressure, especially in the entry-level segment",
          "The expert is suggesting that the government should subsidise the cost of sensor installation to ensure no price increase is passed on to consumers",
          "Two-wheeler demand in India is perfectly inelastic to price changes of less than ₹2,000, making the ₹800-1,000 increase commercially insignificant",
          "The expert believes industry resistance to the mandate will ultimately succeed in reducing the mandated cost increase below the ₹800-1,000 estimate",
        ],
        answer:
          "The ₹800-1,000 increase is at the borderline of what the market can absorb — small enough to avoid a demand collapse but large enough to cause measurable sales pressure, especially in the entry-level segment",
        explanation:
          "The expert's conditional framing ('regulations that do not lead to an adverse sticker shock') implies that whether the ₹800-1,000 increase counts as 'sticker shock' is uncertain — it depends on the segment and the broader macro context (fuel price hikes are also mentioned). This signals the increase is at a sensitive threshold, not clearly safe or clearly damaging. B introduces a subsidy proposal absent from the text. C asserts a specific elasticity figure not supported by the article. D speculates about industry negotiations.",
      },
    ],
  },

  {
    id: 204,
    page: 2,
    category: "POLICY · INFRASTRUCTURE",
    headline: "FASTags for toll-exempt vehicles under MLFF regime",
    subhead:
      "Centre developing separate FASTag category for defence, paramilitary and police under Multi-Lane Free Flow highway tolling; two approaches under evaluation",
    body: `The Centre is developing a separate category of FASTags for toll-exempt vehicles as part of its nationwide rollout of barrier-free highway tolling under the Multi-Lane Free Flow (MLFF) regime, according to two people aware of the matter. The proposed system is expected to allow exempted users, including armed forces personnel and certain government agencies, to pass through toll corridors without being charged or flagged for violations, the two people said.

The move is aimed at addressing a key challenge in India's shift to artificial intelligence (AI)-enabled tolling systems, where every vehicle passing through a toll point must be digitally identified and recorded. Mint had earlier reported on the government's plans to shift to MLFF tolling, which uses AI, satellite-based tracking and automatic number plate recognition systems to collect tolls electronically while vehicles continue moving at high speeds.

But the system creates compliance challenges for exempted categories such as defence, paramilitary, and police vehicles. Any unregistered or unrecognized vehicle movement through toll points could automatically trigger e-challans or penalties even in cases where the vehicle is legally toll-exempt.

Exempted vehicles could carry specially configured FASTags capable of automatically registering vehicle movement without deducting toll charges, the first person said. Official military vehicles, however, may not require FASTags at all. Their movement through tolling points could instead be tracked through recognition of special defence number plates, with the associated movement data deleted immediately afterwards for security reasons, the person added.

To address the issue, the government is evaluating two approaches. One involves creating a centralised database of exempted vehicles with the ministry of road transport and highways (MoRTH), enabling back-end integration with the tolling system. The second involves issuing dedicated FASTags carrying unlimited free-pass privileges to authorised agencies, the second person cited above said.

Queries sent to MoRTH, the National Highways Authority of India and the defence ministry remained unanswered till press time.

Former defence and road transport secretary Giridhar Aramane said the government had already conducted pilots involving exempted institutions such as the armed forces, police and paramilitary agencies, where vehicle databases were integrated with tolling systems for smooth passage. "The new system brings about challenges for toll treatment of private vehicles used for official purposes that are also in the exempted category. Either details of these vehicles can also be shared with MoRTH or the ministry could issue special FASTags with infinite free movement," he said.

Under the proposed system, every vehicle passing through a toll point will be digitally identified and recorded.`,
    mcqs: [
      {
        type: "Main Idea",
        question:
          "Which of the following best summarises the central problem the article is addressing?",
        choices: [
          "AI-enabled MLFF tolling systems cannot distinguish legally exempt vehicles from violating ones, potentially generating erroneous penalties for defence and government users",
          "The MLFF tolling regime requires every vehicle to carry a FASTag, but exempt vehicles such as military units refuse to participate in the digital identification system",
          "The government's shift to barrier-free tolling has reduced toll collection efficiency because exempt vehicles bypass toll corridors without any digital record",
          "India's highway tolling infrastructure lacks the AI capability needed to implement MLFF at scale, forcing the government to develop special exemption mechanisms",
        ],
        answer:
          "AI-enabled MLFF tolling systems cannot distinguish legally exempt vehicles from violating ones, potentially generating erroneous penalties for defence and government users",
        explanation:
          "The core problem articulated is that MLFF's automated digital identification will flag all unregistered/unrecognised vehicles — including legally exempt ones — as violators. The solution (special FASTags or exemption databases) is designed to prevent this misidentification. B incorrectly frames the issue as a refusal to participate. C inverts the problem — exempt vehicles not paying toll is legal, not a revenue loss issue. D mischaracterises the infrastructure problem.",
      },
      {
        type: "Inference",
        question:
          "The article notes that military vehicle movement data would be 'deleted immediately afterwards for security reasons'. What can most reasonably be inferred from this provision?",
        choices: [
          "The government is balancing the operational transparency requirements of the MLFF system against the national security imperative of not creating traceable movement logs for military assets",
          "The defence ministry is legally prohibited from sharing vehicle movement data with civilian agencies such as MoRTH, necessitating immediate data deletion",
          "Military vehicles will use a separate encrypted data channel within the MLFF system that civilian administrators cannot access, while retaining movement records internally",
          "Immediate data deletion indicates that military vehicles will be exempt from tolling entirely and will not be integrated into the MLFF database at all",
        ],
        answer:
          "The government is balancing the operational transparency requirements of the MLFF system against the national security imperative of not creating traceable movement logs for military assets",
        explanation:
          "The MLFF system requires identification (for the tolling record), but retaining military vehicle movement data creates an intelligence vulnerability — adversaries could analyse movement patterns of defence assets. Immediate deletion is a compromise: vehicles are identified (to avoid challan) but records are not retained (to protect operational security). B introduces a legal prohibition not mentioned in the text. C adds details about encrypted channels that are speculative. D contradicts the article, which says their movement 'would be tracked'.",
      },
      {
        type: "Critical Reasoning",
        question:
          "The article describes two approaches to handling toll-exempt vehicles: (1) a centralised exemption database at MoRTH and (2) dedicated FASTags with free-pass privileges. A policymaker argues that approach 1 is superior because it requires no new hardware for exempt vehicles. Which of the following best identifies a flaw in this argument?",
        choices: [
          "Approach 1 requires all exempted agencies to proactively register and update their vehicle databases with MoRTH, creating an ongoing administrative coordination burden that could result in gaps for newly acquired vehicles",
          "The argument assumes that issuing FASTags constitutes 'new hardware', whereas FASTags are already standard equipment on most vehicles on Indian highways",
          "A centralised database at MoRTH would give a civilian ministry access to the vehicle inventory of military and paramilitary units, creating a security concern comparable to retaining movement data",
          "Approach 2 would allow vehicles to pass toll points faster than approach 1, making it operationally superior regardless of hardware requirements",
        ],
        answer:
          "A centralised database at MoRTH would give a civilian ministry access to the vehicle inventory of military and paramilitary units, creating a security concern comparable to retaining movement data",
        explanation:
          "The policymaker's argument focuses only on hardware convenience. The critical flaw it misses is that centralising exempt vehicle data with MoRTH means a civilian agency holds a comprehensive inventory of defence and paramilitary assets — a potential security risk. This is especially relevant given the article's mention of deleting military movement data for security. A is a valid operational concern but addresses implementation friction, not a fundamental flaw. B reframes the hardware argument but doesn't identify a flaw. D is irrelevant to the policymaker's argument about hardware.",
      },
    ],
  },

  {
    id: 205,
    page: 2,
    category: "ENVIRONMENT · GOVERNANCE",
    headline: "Govt digitises green nods for projects",
    subhead:
      "Ministry of Environment makes compliance reports for industrial expansion digital via PARIVESH portal; on-site inspections with geo-tagging to continue",
    body: `The government has digitised the compliance process for environmental clearances linked to industrial expansion, in a move aimed at easing regulatory burdens and accelerating project approvals, said two officials aware of the development.

The ministry of environment, forest and climate change has made the process of obtaining certified compliance reports for industrial expansion proposals digital through the existing PARIVESH portal, aiming to ease procedures for businesses seeking environmental clearance.

Launched in August 2018, PARIVESH (Pro-Active and Responsive facilitation by Interactive, Virtuous, and Environmental Single-window Hub) is a central government digital platform, which automates and streamlines the process for businesses and developers to apply for and track mandatory environmental and ecological clearances.

The online system will enable industries to file compliance reports pertaining to projects where environmental clearance is needed, upload mandatory documents and track approval status through a single digital platform, reducing paperwork and procedural delays, the officials said, requesting anonymity.

"It will be useful for those projects which require environmental clearance. The move will benefit medium and large scale industries as the entire process can now be completed online. Once all the documents are uploaded, ministry officials will conduct on-site inspections and geo-tag the premises, a move that is also expected to enhance transparency in the system," said the first official cited above.

The move is aimed at easing regulatory burdens and accelerating project approvals, said two officials.`,
    mcqs: [
      {
        type: "Tone and Purpose",
        question:
          "Which of the following best describes the tone and primary purpose of this article?",
        choices: [
          "Informational and neutral — reporting a government policy update on environmental clearance digitisation with quotes from officials to establish factual basis",
          "Critical and investigative — examining whether the PARIVESH portal's digitisation genuinely reduces environmental oversight or merely accelerates industrial approvals at the environment's expense",
          "Optimistic and promotional — advocating for wider adoption of digital governance tools in environmental regulation as a model for other ministries",
          "Cautionary — warning that digitising environmental compliance may reduce the rigour of inspections if on-site verification is replaced by document uploads",
        ],
        answer:
          "Informational and neutral — reporting a government policy update on environmental clearance digitisation with quotes from officials to establish factual basis",
        explanation:
          "The article presents the policy development factually, with official quotes and background on the PARIVESH platform. It neither advocates for nor critiques the policy, remaining neutral throughout. B would require investigative framing or questioning of the policy's environmental impact — neither is present. C would require advocacy language. D would require cautionary warnings, which are absent.",
      },
      {
        type: "Inference",
        question:
          "The article notes that 'ministry officials will conduct on-site inspections and geo-tag the premises' even after digital document filing. What does this most likely suggest about the government's approach to the digitisation reform?",
        choices: [
          "The government intends digitisation as a front-end administrative convenience, not as a replacement for physical verification, preserving ground-truth checks in the clearance process",
          "Geo-tagging is being introduced to enable remote sensing satellite monitoring of project sites as a substitute for traditional on-ground inspections",
          "The retention of on-site inspections indicates that the PARIVESH portal digitisation is largely symbolic, with the substantive regulatory decision-making remaining manual",
          "The government distrusts the accuracy of digitally uploaded documents and has therefore mandated on-site visits as a corrective mechanism",
        ],
        answer:
          "The government intends digitisation as a front-end administrative convenience, not as a replacement for physical verification, preserving ground-truth checks in the clearance process",
        explanation:
          "The co-existence of digital filing and on-site inspections shows a hybrid model — paperwork burden is reduced through digitisation, but physical verification is retained. This suggests the government is automating the administrative layer while keeping oversight mechanisms intact. B introduces satellite remote sensing, which is not mentioned. C overstates the critique — retaining inspections doesn't make digitisation 'symbolic' since filing, tracking and document submission are genuinely digitalised. D introduces distrust as a motivation not supported by the text.",
      },
      {
        type: "Strengthen",
        question:
          "The article claims that PARIVESH digitisation will accelerate project approvals. Which of the following, if true, would most strengthen this claim?",
        choices: [
          "An independent audit found that over 60% of delays in environmental clearances were caused by document resubmissions due to paperwork errors — a problem that digital validation can prevent at the submission stage",
          "The PARIVESH portal has been operational since 2018 and has processed over 50,000 clearance applications, demonstrating established technical infrastructure",
          "Several state governments have already developed their own digital clearance portals that have reduced approval times by 30% in sectors like mining and real estate",
          "The ministry of environment has increased its inspector headcount by 25% over the past three years to support faster on-site verifications",
        ],
        answer:
          "An independent audit found that over 60% of delays in environmental clearances were caused by document resubmissions due to paperwork errors — a problem that digital validation can prevent at the submission stage",
        explanation:
          "This directly supports the causal chain: delays are caused by paperwork errors → digitisation prevents these errors at submission → approvals accelerate. It precisely identifies the bottleneck the article's reform addresses. B establishes technical credibility but doesn't explain how digitisation will accelerate approvals. C shows state-level success but is not about the PARIVESH reform specifically. D increases inspector capacity, which helps on-site speed but is unrelated to the digitisation reform.",
      },
    ],
  },

  {
    id: 206,
    page: 2,
    category: "HEALTH · PHARMA",
    headline: "Govt plans clean-up of toxic chemicals in drug-making",
    subhead:
      "Indian Pharmacopoeia Commission crafting green chemistry standards; targeting carcinogenic class-1 solvents across 75 monographs; 14 other countries also follow Indian standards",
    body: `The Centre is set to clamp down on the use of harmful chemicals and energy-intensive processes in the pharmaceutical industry — a sweeping regulatory shift that will alter how medicines are tested and manufactured in its $50 billion drug market.

The Indian Pharmacopoeia Commission (IPC) is crafting new standards for drug making and testing by using green chemistry principles, which are essentially guidelines to reduce or eliminate hazardous substances. The commission is the health ministry's apex body responsible for setting the standards for drug making and testing in India.

A key objective is to replace carcinogenic class-1 solvents such as benzene, chloroform and carbon tetrachloride with water or other safer class-3 solvents, two people aware of the matter said on condition of anonymity. The commission has started with high-volume categories, one of the two people said.

"The IPC has already updated approximately 25 monographs within the IP (Indian Pharmacopoeia) 2026 edition, focusing on high-volume categories such as anticancer, antihypertensive and antibiotic drugs. It is now working on an additional 50 monographs under this 'green' framework to further expand the initiative," the person said. A monograph outlines the tests a drug must pass to prove its identity, purity, and strength before it can be sold.

The shift towards a green pharmacopoeia is expected to have a broad impact on public health by ensuring a cleaner manufacturing cycle. It also assumes significance for global medicine use, given that Indian companies supply 20% of the world's generic medicines and account for 60% of global vaccines. Apart from India, these standards are also followed in 14 more countries — Afghanistan, Ghana, Nepal, Mauritius, Suriname, Nicaragua, Bhutan, Mozambique, the Solomon Islands, Sri Lanka, Nauru, Malawi, Guyana and Fiji.

"The IPC is working on environmental sustainability and ecofriendly standards. If these methods are adopted into the IP, hundreds of manufacturers across India will cumulatively save thousands of litres of hazardous solvents," the second person said.

The IPC is also utilizing research and innovation to optimize testing processes. By reducing the number of procedural steps and shortening testing times — for instance, achieving results in five hours rather than 10 — the commission aims to save significant resources and energy. "These changes are meticulously evaluated to ensure that drug quality remains uncompromised and results remain reproducible." The initiative also extends to the physical and digital footprints of the commission. The IPC has already moved toward a digital-first IP to reduce paper consumption and is now transitioning its Indian Pharmacopoeia Reference Substances (IPRS) packaging to fully recyclable materials, the second person said, adding the new standards will also limit the flow of discarded toxic chemicals into soil and water.

Queries emailed to a health ministry spokesperson remained unanswered.

The Indian Pharmaceutical Alliance (IPA), which represents 23 leading pharmaceutical companies, welcomed the move. "The IPA has consistently advocated for integrating green chemistry and scientifically validated alternatives to animal testing into regulatory frameworks. To ensure seamless adoption, the implementation of these methodologies must remain science-driven, globally harmonized, and pragmatically phased. This approach will guarantee analytical consistency, reproducibility, and cross-border regulatory acceptance, while upholding the highest standards of drug quality, safety, and efficacy," secretary general Sudarshan Jain said.`,
    mcqs: [
      {
        type: "Critical Reasoning",
        question:
          "The article states that IPC is replacing class-1 solvents with class-3 solvents in drug manufacturing. A pharmaceutical company argues that the transition will compromise drug quality because class-1 solvents are established and proven in existing monographs. Which of the following best evaluates this argument?",
        choices: [
          "The argument is weakened by the article's statement that the IPC evaluates changes to 'ensure drug quality remains uncompromised and results remain reproducible', suggesting a scientific vetting process is in place",
          "The argument is strengthened because the IPC is beginning with high-volume drugs like anticancer and antibiotics, which have zero tolerance for any quality variation",
          "The argument is irrelevant because the primary purpose of the green pharmacopoeia is environmental protection, not maintaining drug quality standards",
          "The argument is valid because class-3 solvents are water-based and may not dissolve the active pharmaceutical ingredients of complex molecule drugs effectively",
        ],
        answer:
          "The argument is weakened by the article's statement that the IPC evaluates changes to 'ensure drug quality remains uncompromised and results remain reproducible', suggesting a scientific vetting process is in place",
        explanation:
          "The company's argument assumes that replacing solvents will harm quality. The article directly addresses this by stating that changes are 'meticulously evaluated' for quality and reproducibility — meaning the IPC is not making changes without verifying quality parity. B actually supports the company's argument by highlighting high-stakes categories. C dismisses the quality concern but incorrectly separates environmental and quality goals. D introduces a chemistry claim not supported by the article.",
      },
      {
        type: "Inference",
        question:
          "The article mentions that IPC standards are followed in 14 countries beyond India. What can most reasonably be inferred from this fact in the context of the green pharmacopoeia reform?",
        choices: [
          "India's shift to green chemistry standards will have regulatory ripple effects in 14 other countries that currently follow Indian Pharmacopoeia norms, potentially triggering corresponding manufacturing changes in those markets",
          "The 14 countries that follow IPC standards are also developing economies with limited domestic regulatory capacity, making them dependent on India's standards for drug quality assurance",
          "India's dominance in generic medicine supply gives it sufficient leverage to unilaterally change global pharmaceutical manufacturing standards without multilateral consultation",
          "The transition to green chemistry in India will reduce the cost of medicines in these 14 countries since hazardous solvents are typically more expensive than class-3 alternatives",
        ],
        answer:
          "India's shift to green chemistry standards will have regulatory ripple effects in 14 other countries that currently follow Indian Pharmacopoeia norms, potentially triggering corresponding manufacturing changes in those markets",
        explanation:
          "If 14 countries follow India's pharmacopoeia standards, changes to those standards will require those countries' manufacturers to also adopt the new methods. This is the direct, text-supported inference. B makes an assumption about those countries' regulatory capacity not supported by the article. C overstates India's 'leverage' and introduces bypassing multilateral consultation. D introduces a cost claim about solvent pricing not in the article.",
      },
      {
        type: "Strengthen",
        question:
          "The IPA welcomed the green pharmacopoeia move but insisted implementation must remain 'science-driven, globally harmonised, and pragmatically phased'. Which of the following, if true, would most support the IPA's concern about 'pragmatic phasing'?",
        choices: [
          "A pharmaceutical company that produces a high-volume antibiotic would need 18-24 months to validate a new solvent system, retool manufacturing lines, and obtain regulatory approval for the reformulation before it can sell the updated product",
          "Green chemistry alternatives for certain class-1 solvents have already been pre-validated by the European Medicines Agency, reducing the scientific review burden for Indian manufacturers",
          "The IPA represents 23 leading pharmaceutical companies, giving it significant bargaining power in negotiations with the IPC over implementation timelines",
          "The shift to digital pharmacopoeia has already been completed by the IPC, demonstrating that the commission can execute complex transitions quickly",
        ],
        answer:
          "A pharmaceutical company that produces a high-volume antibiotic would need 18-24 months to validate a new solvent system, retool manufacturing lines, and obtain regulatory approval for the reformulation before it can sell the updated product",
        explanation:
          "The IPA's concern about 'pragmatic phasing' is about giving manufacturers adequate time to transition without disrupting supply. Evidence of a long validation and retooling cycle (18-24 months) directly supports the need for a phased timeline — rushing the transition could create supply disruptions for essential medicines. B reduces the scientific burden, which would weaken the case for phasing. C is about political leverage, not the substantive reason for phasing. D demonstrates execution speed but doesn't address the manufacturing transition timeline.",
      },
    ],
  },

  {
    id: 207,
    page: 7,
    category: "FINANCE · INSURANCE",
    headline: "Prudential to buy 75% in Bharti Life for ₹3,500 cr",
    subhead:
      "UK insurer will acquire stake from Bharti Life Ventures and 360 ONE Asset Management; to cut ICICI Prudential holding to 10% as part of India strategy realignment",
    body: `UK-based Prudential Plc on Sunday said it plans to pick up a 75% stake in Bharti Life Insurance and subsequently cut its holding in ICICI Prudential Life Insurance to 10%, marking a major realignment of its India strategy.

The investment is part of Prudential's "strategic repositioning of its India operations," the company said in a statement. It will buy the stake from Bharti Life Ventures Pvt. Ltd and 360 ONE Asset Management for ₹3,500 crore. The deal also includes a potential additional consideration of ₹700 crore, subject to the fulfilment of certain conditions.

Prudential Plc currently owns about 22% in ICICI Prudential Life Insurance through its partnership with ICICI Bank.`,
    mcqs: [
      {
        type: "Critical Reasoning",
        question:
          "Prudential is reducing its stake in ICICI Prudential Life (a large, established insurer) to fund a 75% position in Bharti Life (a newer, smaller insurer). Which of the following best explains the strategic logic implied by this move?",
        choices: [
          "A 75% controlling stake in a smaller, early-stage insurer offers greater influence over strategy and higher growth potential, while a 22% minority stake in a dominant incumbent offers limited upside and no operational control",
          "Prudential believes ICICI Prudential Life is overvalued and is selling down its stake before an anticipated market correction in the life insurance sector",
          "The Bharti Group's network infrastructure provides Prudential with a distribution advantage in rural India that ICICI Bank's urban-focused network does not",
          "Prudential is exiting the established insurer market segment to focus exclusively on greenfield insurance ventures in high-growth emerging markets",
        ],
        answer:
          "A 75% controlling stake in a smaller, early-stage insurer offers greater influence over strategy and higher growth potential, while a 22% minority stake in a dominant incumbent offers limited upside and no operational control",
        explanation:
          "The deal is framed as a 'strategic repositioning' — moving from a minority stake in a market leader (limited control, limited growth headroom) to a controlling stake in a newer entity. A 22% stake in ICICI Prudential gives Prudential little say in operations; 75% in Bharti Life gives full operational control and exposure to higher incremental growth. B introduces a valuation correction thesis not supported by the text. C speculates about distribution advantages. D overgeneralises — Prudential is not exiting established insurers universally.",
      },
      {
        type: "Inference",
        question:
          "The deal structure includes a ₹700 crore 'contingent consideration subject to the fulfilment of certain conditions'. What does this most likely imply?",
        choices: [
          "Part of the purchase price is tied to Bharti Life achieving specific performance milestones, protecting Prudential from paying full price if the business underperforms initial projections",
          "The ₹700 crore will be paid to the sellers only if regulatory approvals from IRDAI and the Competition Commission of India are obtained within a specified timeline",
          "Prudential will pay the additional ₹700 crore contingent on ICICI Bank agreeing to reduce its stake in ICICI Prudential Life proportionately",
          "The contingent consideration represents the estimated valuation premium for Bharti Life's unbooked business pipeline, payable only if new business premiums meet targets in the first year",
        ],
        answer:
          "Part of the purchase price is tied to Bharti Life achieving specific performance milestones, protecting Prudential from paying full price if the business underperforms initial projections",
        explanation:
          "Contingent consideration in M&A transactions is typically an earn-out — additional payment linked to performance targets being met post-acquisition. This protects the acquirer from overpaying for projected growth that may not materialise. B links it to regulatory timelines, which is possible but regulatory approval conditions are usually stated explicitly as conditions precedent, not as contingent consideration. C and D introduce specific conditions not inferable from the article.",
      },
      {
        type: "Main Idea",
        question:
          "What does the Prudential-Bharti Life deal most clearly illustrate about foreign insurers' strategy in India?",
        choices: [
          "Foreign insurers are repositioning from minority stakes in established Indian players toward controlling positions in smaller ventures, prioritising operational influence and growth upside",
          "The Indian life insurance market is saturating at the top, prompting established players like ICICI Prudential to seek foreign capital infusions to sustain growth",
          "UK-based financial institutions are accelerating their India entry strategies due to the post-Brexit imperative to find growth markets outside Europe",
          "India's insurance regulator is encouraging foreign insurers to increase stakes in domestic companies to bring international governance standards to the sector",
        ],
        answer:
          "Foreign insurers are repositioning from minority stakes in established Indian players toward controlling positions in smaller ventures, prioritising operational influence and growth upside",
        explanation:
          "The article frames the deal as a 'strategic repositioning', moving from a 22% minority position with limited control to 75% ownership of a newer entity where Prudential will have full strategic influence and growth exposure. B inverts the narrative — ICICI Prudential is not seeking capital. C introduces a Brexit motivation not mentioned. D introduces a regulatory push that is not part of the article's framing.",
      },
    ],
  },

  {
    id: 208,
    page: 7,
    category: "FINANCE · MARKETS",
    headline: "Easing of IPO size rule finds few takers as valuations remain key",
    subhead:
      "Sebi allowed companies to cut IPO fresh issue sizes by up to 50% without refiling draft papers, versus the earlier 20% limit; issuers prefer pricing alignment over downsizing",
    body: `The Securities and Exchange Board of India (Sebi) granted a rare concession in troubled times: the freedom to reduce a public offering by half without re-filing paperwork. A month later, there are few takers for it.

Sebi introduced the rule in April, allowing companies to cut the fresh issue component of initial public offerings (IPO) by up to 50% — earlier there was a 20% limit — without resubmitting their Draft Red Herring Prospectus (DRHP), which generally takes about 75 days. As reported on 15 April, Sebi introduced the rule change to assist capital mobilisation during market volatility linked to the West Asia war. The facility, which followed a regulatory extension for the validity of IPO observation letters, was conveyed to the Association of Investment Bankers of India and is valid for IPOs opening on or before 30 September this year.

But investment bankers and legal advisers say issuers have not evinced interest. The reason is that the current IPO market is only interested in valuations. Companies would prefer not to proceed with IPOs than raise less money at a price that does not align with their calculations.

"We have not seen issuers exploring this option as of now," said Sourav Modi, partner at law firm JSA. "Indian markets have an appetite for deals which match their pricing expectations. We have seen big-ticket InvITs (Infrastructure Investment Trusts), REITs (Real Estate Investment Trusts) and IPOs being massively oversubscribed in the last four weeks, and none of them reduced their size by more than 20%," he explained.

For instance, three consecutive mainboard IPOs of Bagmane Prime Office REIT, OnEMI Technology Solutions, and Citius Transnet Investment Trust, were subscribed 25, 10, and 20 times, respectively, without the need to reduce their offer size.

"The 50% flexibility acts as a buffer, but executing a reduction of that scale can affect investor confidence regarding demand," a dealmaker at a Mumbai-based investment bank explained, wishing to remain unnamed since they are not authorized to speak to the media. "For our large mandates, we are currently focusing on matching institutional pricing demands rather than resizing capital requirements. If pricing aligns with market expectations, then the current liquidity pipeline will remain sufficient to absorb transactions without downsizing," this investment banker said.

India's public offer pipeline currently has a few big IPOs whose DRHPs have already been filed. These include SBI Funds Management Ltd, InCred Holdings Ltd, Manipal Health Enterprises Ltd, Sterlite Electric Ltd, and UPL arm Advanta Enterprises Ltd.`,
    mcqs: [
      {
        type: "Critical Reasoning",
        question:
          "Sebi introduced the 50% IPO size reduction rule to support capital mobilisation during market volatility. However, issuers have not used it. A regulator argues this proves the rule has failed. Which of the following best challenges this argument?",
        choices: [
          "The absence of uptake may indicate that the IPO market has recovered faster than anticipated, making the relief measure unnecessary — which would be a positive outcome rather than a policy failure",
          "The rule's failure to attract takers proves that Sebi should have allowed a 100% reduction (i.e., full withdrawal of the IPO) to give issuers maximum flexibility",
          "Sebi should have mandated rather than permitted size reductions, as voluntary relief mechanisms are inherently ineffective during periods of market stress",
          "The rule failed because it was communicated only to the Association of Investment Bankers, not directly to the issuers who would benefit from it",
        ],
        answer:
          "The absence of uptake may indicate that the IPO market has recovered faster than anticipated, making the relief measure unnecessary — which would be a positive outcome rather than a policy failure",
        explanation:
          "The article shows that large IPOs are being oversubscribed without downsizing — suggesting market conditions have improved. If demand is strong, issuers don't need to reduce size; the relief measure's non-use therefore signals market recovery, not policy failure. B proposes an escalation not supported by any argument in the article. C introduces a mandatory approach that is a separate policy choice, not a challenge to the failure argument. D is a communication issue that doesn't challenge the fundamental argument about failure.",
      },
      {
        type: "Inference",
        question:
          "A dealmaker in the article says: 'executing a reduction of that scale can affect investor confidence regarding demand.' What does this most likely imply about IPO market dynamics?",
        choices: [
          "A large downward revision in IPO size signals to the market that the company could not attract enough demand at its original price, creating a negative perception that undermines subsequent subscription",
          "Institutional investors use IPO offer size as a proxy for the company's market capitalisation ambitions, and any reduction signals management's lack of confidence in long-term valuations",
          "Retail investors in the Indian market are more sensitive to the absolute size of an IPO than to its per-share price, making large size reductions commercially counterproductive",
          "Indian regulators have historically viewed IPO size reductions as indicators of fraudulent intent, creating reputational risks for companies that invoke the flexibility",
        ],
        answer:
          "A large downward revision in IPO size signals to the market that the company could not attract enough demand at its original price, creating a negative perception that undermines subsequent subscription",
        explanation:
          "In IPO markets, a substantial size cut is often read as a distress signal — the company couldn't fill its original book. This damages momentum and can cause anchor investors to reassess their participation. The dealmaker is warning that using the 50% flexibility may trigger this negative signalling effect. B introduces management confidence about long-term valuations — plausible but not the primary inference from the quote. C makes an unsupported distinction between retail and institutional sensitivity. D introduces a regulatory/legal interpretation not supported by the text.",
      },
      {
        type: "Weaken",
        question:
          "The article argues that the low uptake of Sebi's 50% IPO size reduction rule is explained by issuers prioritising valuations over capital raising flexibility. Which of the following, if true, would most weaken this explanation?",
        choices: [
          "Several companies with DRHP filings pending chose to defer their IPO entirely rather than reduce size, suggesting they faced demand uncertainty and chose to wait for better conditions rather than invoke the Sebi relief",
          "Investment bankers report that the 75-day DRHP refiling process was not actually seen as a significant barrier by issuers, since most companies have continuous access to legal teams that can resubmit documents quickly",
          "The three IPOs cited as oversubscribed — Bagmane REIT, OnEMI, and Citius Transnet — all opened after the Sebi rule was introduced, suggesting the rule may have encouraged more companies to list",
          "A survey of CFOs of companies with pending IPO filings finds that 80% were unaware of the new Sebi rule until three weeks after it was announced",
        ],
        answer:
          "A survey of CFOs of companies with pending IPO filings finds that 80% were unaware of the new Sebi rule until three weeks after it was announced",
        explanation:
          "If issuers were simply unaware of the rule, the low uptake cannot be attributed to a deliberate preference for valuation alignment — the explanation would instead be a communication/awareness gap. This directly weakens the article's primary explanation for non-use. A strengthens the explanation (deferred IPOs also reflect pricing discipline). B suggests the rule addressed a problem that wasn't real — but this is a different kind of weakener (attacking the rule's premise, not the explanation for non-use). C has no clear logical connection to weakening the explanation.",
      },
    ],
  },

  {
    id: 209,
    page: 7,
    category: "STARTUPS · VENTURE",
    headline: "VCs adapt to non-IPO exits as pragmatism trumps prestige",
    subhead:
      "Investors relying more on secondaries and M&A deals as volatility delays technology IPOs; secondary VC transactions rose from 22 deals in 2020 to 51 in 2025",
    body: `Investors are relying more on secondaries and M&A deals as volatility delays technology IPOs.

Secondary VC transactions in India have risen steadily: 22 deals in 2020, 44 in 2021, 31 in 2022, 47 in 2023, 45 in 2024, 51 in 2025, and 11 deals already recorded as of May 2026.

Startup M&A transactions in India have also remained active: 55 deals ($2.5 billion) in 2020, 108 deals ($9 billion) in 2021, 322 deals ($7.3 billion) in 2022, 243 deals ($3.5 billion) in 2023, 162 deals ($8.2 billion) in 2024, 214 deals ($6.7 billion) in 2025, and 84 deals ($5.9 billion) as of May 2026.

Curefoods, Turtlemint, IndoMIM, Inframarket, and KKR-backed Leap India are among the companies recalibrating their IPO timelines amid persisting market volatility.`,
    mcqs: [
      {
        type: "Main Idea",
        question:
          "What does the data in this article most directly establish about India's VC exit landscape?",
        choices: [
          "Secondary transactions have grown consistently as a share of VC exits, and M&A deal volumes have remained substantial even as IPO windows remain uncertain due to market volatility",
          "Indian startups are structurally incapable of sustaining IPO-readiness and will perpetually rely on secondary and M&A exits for investor liquidity",
          "The West Asia conflict has permanently shifted investor preference away from public markets toward private exit routes across all asset classes",
          "Secondary transaction volumes in 2025 were higher than M&A deal volumes, indicating that investor-to-investor transfers have become the dominant exit mode in India",
        ],
        answer:
          "Secondary transactions have grown consistently as a share of VC exits, and M&A deal volumes have remained substantial even as IPO windows remain uncertain due to market volatility",
        explanation:
          "The data shows a clear upward trend in secondaries (22 to 51 deals from 2020 to 2025) and sustained M&A activity ($6.7-8.2 billion in 2024-25). This directly supports the headline claim that VCs are adapting to non-IPO exits. B makes a permanence claim not supported by the data. C overgeneralises across all asset classes. D is factually incorrect — the data shows M&A deal values are substantially larger than secondary transaction amounts.",
      },
      {
        type: "Critical Reasoning",
        question:
          "The article's headline claims 'pragmatism trumps prestige'. Which assumption is most necessary for this framing to hold?",
        choices: [
          "IPO exits were previously pursued not solely for their financial returns but also for their reputational and signalling value — making the shift to secondaries a sacrifice of prestige for practical liquidity",
          "Secondary and M&A exits consistently deliver lower financial returns to VCs than IPO exits, making the shift pragmatic only in the narrow sense of timing certainty",
          "Indian public market investors are not yet sophisticated enough to price high-growth technology companies accurately, making IPOs financially inferior to private exits",
          "The term 'prestige' in VC contexts refers exclusively to the fund manager's personal reputation among limited partners, not to the startup ecosystem's perception of the exit type",
        ],
        answer:
          "IPO exits were previously pursued not solely for their financial returns but also for their reputational and signalling value — making the shift to secondaries a sacrifice of prestige for practical liquidity",
        explanation:
          "For 'pragmatism trumps prestige' to be meaningful, IPOs must have had non-financial value (prestige/signalling) that is being traded off for the practical certainty of secondaries or M&A. Without this assumption, the headline would simply be saying 'better exits trump worse exits', which is trivially true. B introduces a return comparison not stated in the data. C attributes the shift to investor sophistication issues, not pragmatism. D overly narrows the definition of 'prestige'.",
      },
      {
        type: "Inference",
        question:
          "The data shows secondary VC transactions dipped from 44 in 2021 to 31 in 2022 and then rose steadily to 51 in 2025. What can most reasonably be inferred about the 2022 dip?",
        choices: [
          "The 2022 dip likely coincided with the post-pandemic market correction that temporarily improved IPO conditions, reducing the need for secondary exits as a fallback",
          "The 2022 dip indicates that Indian VC-backed companies were uniformly performing well in 2022, making early secondary sales unattractive to fund managers",
          "The 2022 dip was caused by regulatory restrictions on secondary transactions imposed by Sebi, which were subsequently relaxed by 2023",
          "The 2022 dip reflects a cyclical pattern in secondary markets that has no structural explanation and should be disregarded in interpreting the long-term trend",
        ],
        answer:
          "The 2022 dip likely coincided with the post-pandemic market correction that temporarily improved IPO conditions, reducing the need for secondary exits as a fallback",
        explanation:
          "2022 was characterised globally by a post-pandemic valuation correction and rising interest rates. In India, the IPO market was relatively active in late 2021 through early 2022 (many unicorns listed), which would have reduced the urgency for secondary exits. When the IPO window narrowed again (2023+), secondary transactions resumed their upward trend. B incorrectly attributes it to portfolio performance. C introduces a Sebi regulatory restriction not mentioned anywhere. D dismisses the data point without offering an alternative explanation.",
      },
    ],
  },

  {
    id: 210,
    page: 10,
    category: "ECONOMY · MARKETS",
    headline: "Temper expectations, Kotak's Bharkhada tells investors",
    subhead:
      "Kotak Pension Fund CIO Nilesh Bharkhada says crude above $100 not in base-case estimates; prefers private banks, energy value chain, defence, commodities and IT",
    body: `As higher oil prices, foreign outflows and slowing corporate earnings growth weigh on markets, Indian investors may need to temper expectations from equities, according to Nilesh Bharkhada, chief investment officer at Kotak Pension Fund. In an interview with Mint, Bharkhada said rising capital costs could pressure valuations further, while crude oil above $100 a barrel may trigger cuts to earnings and growth estimates. Edited excerpts:

The government has hiked petrol and diesel prices. Which sectors are the most impacted? How is it going to affect the broader macro environment?

The current price hikes are modest compared to the sharp rise in crude oil prices. Elevated crude prices will either be absorbed by the government, if it expects prices to normalize soon, or passed on to consumers in a staggered manner. Either scenario would be inflationary. Rising petrol and diesel prices will directly impact sectors such as travel and tourism, fast-moving consumer goods (FMCG) and other discretionary segments. More broadly, economic growth could come under pressure as a sharp rise in inflation affects consumer demand.

Inflation inched up in April. Do you see rising crude prices and El Niño pushing inflation higher? Which companies are likely to be most impacted by higher input costs?

The inflation trajectory is turning upward, with the Wholesale Price Index (WPI)-based inflation for April rising to 8.3%. However, the pass-through to consumers is yet to fully materialize, with retail inflation at 3.48%. Food inflation has remained subdued for a considerable period and has been a key factor in keeping overall inflation under control. However, the India Meteorological Department has forecast below-normal monsoon rainfall this year, which poses an upside risk to food inflation. Higher crude prices and weather-related disruptions could increase input costs across sectors, particularly for companies with high dependence on energy and commodity-linked raw materials. Oil marketing firms, building materials companies and consumer discretionary players are likely to be among the most impacted.

FPIs have sold cash shares so far in 2026, almost equal to what they sold in all of 2025. Is this concerning?

Foreign portfolio investors (FPIs) have sold aggressively during previous risk-off phases as well, so the trend by itself is not necessarily concerning. However, India runs a current account deficit and relies on foreign capital flows to help manage its balance of payments. The West Asia conflict is also widening India's trade deficit, and sustained FPI outflows are adding pressure on the currency, which is a concern in the current context.

What could be the impact on earnings if crude stays above $100 a barrel? Earnings recovery was already under pressure before the West Asia conflict. What changes now?

Markets were positioned for a swift resolution to the West Asia conflict, but the tensions have persisted for a couple of months, pushing crude prices above $100 a barrel. Broader market valuations have corrected as FPI outflows continued. However, crude oil above $100 a barrel is not factored into base-case market estimates and could lead to downward revisions in earnings and growth projections.

Should investors lower their expectations from equities now?

Yes. As the cost of capital rises, equity valuations will adjust lower. Corporate earnings growth has also moderated in recent years, which means investors may need to temper their return expectations. India's PE multiples are falling, but earnings estimates are also being cut.

Are valuations really becoming attractive?

India's valuation multiples have corrected meaningfully over the last 18-24 months. Valuations for large-cap companies are now at or below their long-term averages. Mid- and small-cap stocks, however, continue to trade at a premium, although bottom-up opportunities are available in select pockets at reasonable valuations.

Which sectors are you currently comfortable with?

We remain positive on private banks, the energy value chain, defence, commodities and information technology, including platform companies.

What are the key risks for markets?

India has remained an attractive investment destination and has commanded premium valuations primarily because of its relatively strong growth outlook. Geopolitical risks remain persistent, and India needs to ensure adequate measures are taken to build a more sustained, self-reliant and resilient growth story amid evolving global dynamics. Fiscal profligacy also remains a key risk, and India should continue to focus on fiscal prudence and capital expenditure over the medium term to maintain macroeconomic stability.`,
    mcqs: [
      {
        type: "Critical Reasoning",
        question:
          "Bharkhada argues that 'as the cost of capital rises, equity valuations will adjust lower.' Which of the following, if true, would most directly undermine this argument in the Indian market context?",
        choices: [
          "Indian domestic institutional investors (DIIs) such as mutual funds and insurance companies have been consistently increasing equity allocations, providing a structural demand floor that can absorb FPI outflows without significant valuation correction",
          "The RBI has signalled a rate cut cycle, which would lower the cost of capital and support equity valuations, contradicting the premise of rising capital costs",
          "Indian corporate earnings have historically recovered within two quarters of any crude oil price shock, limiting the duration of any earnings downgrade cycle",
          "Large-cap Indian companies have strong balance sheets with low debt-to-equity ratios, making them less sensitive to rising interest rates than their mid-cap peers",
        ],
        answer:
          "The RBI has signalled a rate cut cycle, which would lower the cost of capital and support equity valuations, contradicting the premise of rising capital costs",
        explanation:
          "Bharkhada's argument rests on the premise that capital costs are rising. If RBI signals rate cuts, the cost of capital will fall rather than rise, directly undermining the premise of his valuation pressure argument. A weakens the magnitude of impact (DII buying cushions corrections) but doesn't challenge the directional logic. C addresses earnings recovery speed, not the cost of capital mechanism. D limits the impact to mid-caps but doesn't challenge the core argument.",
      },
      {
        type: "Inference",
        question:
          "Bharkhada says large-cap valuations are 'at or below their long-term averages' while mid- and small-caps 'continue to trade at a premium'. What investment inference can most reasonably be drawn from this distinction?",
        choices: [
          "Large-caps offer a margin of safety at current valuations relative to historical norms, while mid- and small-caps carry elevated valuation risk — suggesting a tilt toward quality large-caps in a risk-off environment",
          "The valuation gap between large-caps and mid- and small-caps will narrow as mid-cap earnings growth accelerates, making mid-caps the superior investment choice in the near term",
          "Bharkhada is recommending investors exit mid- and small-cap stocks entirely and reallocate to large-cap indices to capitalise on below-average valuations",
          "The premium in mid- and small-cap stocks is driven by retail investor participation, which will persist as long as domestic liquidity conditions remain favourable",
        ],
        answer:
          "Large-caps offer a margin of safety at current valuations relative to historical norms, while mid- and small-caps carry elevated valuation risk — suggesting a tilt toward quality large-caps in a risk-off environment",
        explanation:
          "The interview context — temper expectations, rising capital costs, uncertainty — combined with large-caps at/below historical averages (cheap relative to history) and mid-/small-caps at a premium (expensive relative to history) logically supports preferring large-caps for risk-adjusted returns. B predicts mid-cap earnings acceleration not supported by the text. C overstates Bharkhada's recommendation to 'exit entirely' — he specifically notes 'bottom-up opportunities are available in select pockets'. D introduces retail liquidity as the driver, which is speculative.",
      },
      {
        type: "Strengthen",
        question:
          "Bharkhada argues that India's balance of payments position is under stress partly because of sustained FPI outflows. Which of the following, if true, would most strengthen this argument?",
        choices: [
          "India's current account deficit widened to 2.8% of GDP in Q4FY26, and foreign exchange reserves declined by $18 billion over the same quarter despite stable services exports",
          "FPI selling in Indian equities in the first half of 2026 has been concentrated in the financial sector, which has higher foreign institutional ownership than other sectors",
          "India's merchandise export growth decelerated to 4% year-on-year in April 2026 due to reduced demand from key trading partners affected by the West Asia conflict",
          "The Indian rupee depreciated 3% against the US dollar in the three months following the onset of the West Asia conflict, compared to a 1.5% depreciation in the prior three months",
        ],
        answer:
          "India's current account deficit widened to 2.8% of GDP in Q4FY26, and foreign exchange reserves declined by $18 billion over the same quarter despite stable services exports",
        explanation:
          "Bharkhada's argument is that FPI outflows are 'adding pressure on the currency' and the broader BoP. A widening current account deficit combined with declining forex reserves despite stable services income would directly confirm that capital outflows (including FPI) are creating BoP stress that cannot be offset by the current account. B narrows FPI selling to a specific sector but doesn't establish BoP impact. C shows export pressure but doesn't isolate FPI outflows as the cause. D shows currency impact but doesn't isolate FPI outflows from other factors.",
      },
    ],
  },

  {
    id: 211,
    page: 8,
    category: "FINANCE · COMMODITIES",
    headline: "Import curbs may raise silver ETF demand",
    subhead:
      "Government moved silver bars from 'free' to 'restricted' import category; SilverBees trading 1.3% below NAV could flip to a premium amid supply squeeze fears",
    body: `The government's decision to curb silver bar imports could push exchange-traded funds (ETFs) tracking the white metal from trading at a discount to moving into a premium over spot prices, after two weeks, amid concerns of an impending supply squeeze, analysts said. This would mark a shift from ETFs trading at a discount to net asset value (NAV), which is calculated from spot prices, to potentially trading at a premium. It implies that if spot prices rise, ETF prices could rise more, and if spot prices fall, they would fall less than the spot.

Premiums and discounts typically reflect demand conditions. When demand for ETF units is weak, they trade below NAV or MCX spot-linked silver prices. When demand strengthens, they can flip into a premium. Under normal conditions, ETF prices track NAV closely. But sharp swings in investor demand can cause temporary misalignment.

For instance, the most popular silver ETF, SilverBees, traded at ₹249.85 per unit as of Friday, about 1.3% below its then NAV of ₹253.12, reflecting subdued demand. That discount, analysts said, could quickly flip into a premium as investors rush in amid fears of a shortage of investment-grade silver following the government's curbs.

On Saturday, the government moved silver bars from the "free" to the "restricted" import category to rein in demand and conserve forex. Imports will now require a government licence.

Bullion dealers supplying asset management companies (AMCs) source a large part of silver bars from banks, which have sought clarity on whether they will also need licences to import on a consignment basis after the Saturday order. "Until now banks were authorized by the Reserve Bank of India (RBI) to import gold. Now, we have sought clarity from the DGFT (Directorate General of Foreign Trade) on whether lenders will need a licence," said a banker from a private bank's bullion desk.

"Silver ETFs traded at an average discount of ₹7,000 per kilo to MCX spot rates over the past fortnight," said Satish Dondapati, fund manager at Kotak Mahindra AMC. "They could move into a premium if investors believe sufficient silver may not be available for investment purposes after the government order." Dondapati added it was too early to estimate the extent of any potential premium.

The import curbs come as the government responds to pressures on India's current account deficit (CAD) and the rupee amid the West Asia war.`,
    mcqs: [
      {
        type: "Critical Reasoning",
        question:
          "The article argues that silver import curbs could push silver ETFs from a discount to a premium. Which of the following, if true, would most weaken this causal chain?",
        choices: [
          "Silver ETF units can be redeemed directly for physical silver held by the fund custodian, meaning ETF supply can be created by releasing custodian holdings without new import licences",
          "The government's import restriction applies only to silver bars above a minimum purity threshold, while ETF custodians primarily use lower-purity silver that remains unrestricted",
          "Retail investors constitute over 80% of silver ETF holders, and retail demand is historically insensitive to short-term import policy changes affecting bullion dealers",
          "MCX spot prices for silver are benchmarked to international prices and will continue to reflect global supply, making the NAV calculation independent of India's import curbs",
        ],
        answer:
          "Silver ETF units can be redeemed directly for physical silver held by the fund custodian, meaning ETF supply can be created by releasing custodian holdings without new import licences",
        explanation:
          "The premium scenario depends on a physical supply squeeze reaching ETF units. If ETF supply can be created by releasing existing custodian stock (without new imports), the import curb does not directly constrain ETF supply, weakening the premium thesis. B weakens the physical supply argument on purity grounds — plausible but requires specific knowledge not in the article. C challenges the demand side but doesn't address the supply mechanism. D addresses NAV calculation but not the ETF premium/discount dynamic.",
      },
      {
        type: "Inference",
        question:
          "The fund manager quoted says he 'was too early to estimate the extent of any potential premium.' What can most reasonably be inferred from this hedged statement?",
        choices: [
          "The magnitude of the premium depends on whether investors collectively decide to rush into silver ETFs — a behavioural dynamic that depends on sentiment and cannot be predicted with precision immediately after the import order",
          "The fund manager believes the import curb will be reversed before it takes full effect, making any premium estimate speculative",
          "The fund manager is reluctant to make a public forecast because it could create self-fulfilling investor behaviour that would benefit his own fund's assets under management",
          "Technical analysis of ETF premium/discount cycles requires at least two weeks of market data after a policy change, which is why the estimate is premature",
        ],
        answer:
          "The magnitude of the premium depends on whether investors collectively decide to rush into silver ETFs — a behavioural dynamic that depends on sentiment and cannot be predicted with precision immediately after the import order",
        explanation:
          "The fund manager confirms a premium is possible ('if investors believe sufficient silver may not be available') but cannot estimate its extent because the key variable is collective investor sentiment — how many investors panic-buy on supply fears. This is inherently uncertain immediately after a policy announcement. B introduces a prediction about policy reversal not stated in the article. C attributes a self-interested motive not supported by the text. D introduces a technical analysis timeframe not mentioned.",
      },
      {
        type: "Vocabulary",
        question:
          "In the context of this article, what does 'premium' mean when analysts say silver ETFs could 'move into a premium'?",
        choices: [
          "The ETF's market price per unit would exceed its net asset value, meaning investors would pay more than the fair value of the underlying silver the fund holds",
          "The ETF would offer a higher dividend yield than other fixed-income instruments, making it a premium investment option for risk-averse investors",
          "The ETF's expense ratio would increase to reflect higher custodial costs of storing restricted-import silver bars on behalf of unitholders",
          "The ETF would qualify for a premium listing on the BSE or NSE, giving it greater visibility and liquidity compared to regular category ETFs",
        ],
        answer:
          "The ETF's market price per unit would exceed its net asset value, meaning investors would pay more than the fair value of the underlying silver the fund holds",
        explanation:
          "The article explicitly defines the premium/discount dynamic: 'premiums and discounts reflect demand conditions... when demand for ETF units is weak they trade below NAV... when demand strengthens, they can flip into a premium.' A premium here means the ETF's traded price is above what the underlying silver is worth (NAV). B confuses premium with yield characteristics. C conflates premium with expense ratios. D confuses ETF pricing premium with a listing category.",
      },
    ],
  },
];
