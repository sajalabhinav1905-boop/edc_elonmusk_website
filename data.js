/**
 * Structured Data Layer for Elon Musk Entrepreneur Showcase
 * 
 * Provides verifiable, structured data for all dynamic sections:
 * - Profile and quick metrics
 * - Chronological milestones (Journey)
 * - Ventures & Companies with roles, metrics, and official links
 * - Major achievements and actionable entrepreneurial takeaways
 * - Reliable sources and citations
 */

const SHOWCASE_DATA = {
  profile: {
    name: "Elon Musk",
    subtitle: "Engineer, Industrial Designer & Serial Tech Entrepreneur",
    portrait: {
      url: "images/elon-musk.jpg",
      alt: "Elon Musk portrait",
      attribution: "Photo: Wikimedia Commons / CC BY-SA 4.0"
    },
    bio: "Elon Musk is a visionary entrepreneur, engineer, and investor known for fundamentally disrupting multiple global industries simultaneously—including aerospace, automotive manufacturing, clean energy, neurotechnology, satellite telecommunications, and artificial intelligence. Born in Pretoria, South Africa, he pursued physics and economics at the University of Pennsylvania before pioneering online publishing (Zip2), digital payments (X.com / PayPal), reusable space exploration (SpaceX), and mass-market electric mobility (Tesla).",
    stats: [
      { label: "Major Ventures Led", value: "7+" },
      { label: "Orbital Booster Landings", value: "350+" },
      { label: "Active Starlink Satellites", value: "6,000+" },
      { label: "Global Tesla Deliveries", value: "5M+ Units" }
    ],
    corePhilosophy: "When something is important enough, you do it even if the odds are not in your favor. Boil things down to their most fundamental truths and reason up from there."
  },

  milestones: [
    {
      id: "m-1995",
      year: "1995",
      title: "Co-founded Zip2 Corporation",
      company: "Zip2",
      category: "Software & Web",
      summary: "Founded an online city guide software company with brother Kimbal Musk.",
      details: "Zip2 provided and licensed online city guide software to major newspapers including The New York Times and the Chicago Tribune. In February 1999, Compaq acquired Zip2 for $307 million in cash. Musk received approximately $22 million for his 7% share, providing the initial capital for his next bold venture.",
      icon: "code"
    },
    {
      id: "m-1999",
      year: "1999",
      title: "Founded X.com (later PayPal)",
      company: "X.com / PayPal",
      category: "FinTech",
      summary: "Pioneered early online banking and secure person-to-person email money transfers.",
      details: "Musk invested $12 million from Zip2 to co-found X.com, one of the world's first online banking services. In 2000, X.com merged with Confinity, which developed PayPal. In October 2002, eBay acquired PayPal for $1.5 billion in stock, earning Musk $175.8 million after taxes.",
      icon: "credit-card"
    },
    {
      id: "m-2002",
      year: "2002",
      title: "Founded SpaceX",
      company: "SpaceX",
      category: "Aerospace",
      summary: "Established SpaceX to revolutionize space technology and enable human life on Mars.",
      details: "With $100 million of his own capital, Musk founded Space Exploration Technologies Corp. After three successive rocket launch failures brought the company to the edge of ruin, Falcon 1 Flight 4 succeeded on September 28, 2008, becoming the first privately developed liquid-fuel rocket to reach Earth orbit.",
      icon: "rocket"
    },
    {
      id: "m-2004",
      year: "2004",
      title: "Led Tesla Series A & Became Chairman",
      company: "Tesla Motors",
      category: "Clean Energy & EV",
      summary: "Invested $6.5 million in Tesla, steering vehicle design and long-term electrification vision.",
      details: "Musk joined Tesla founders Martin Eberhard and Marc Tarpenning, becoming Chairman of the Board. He assumed the post of CEO and Product Architect in October 2008 during the global recession, leading the rollout of the high-performance Roadster and the flagship Model S sedan.",
      icon: "battery-charging"
    },
    {
      id: "m-2015",
      year: "2015",
      title: "Historic Orbital Booster Landing",
      company: "SpaceX",
      category: "Aerospace",
      summary: "Falcon 9 achieved the world's first vertical propulsive landing of an orbital booster.",
      details: "On December 21, 2015, the first stage of Falcon 9 touched down softly at Landing Zone 1, Cape Canaveral, after launching 11 communications satellites into orbit. This milestone fundamentally validated reusable rocketry and changed the economics of space exploration forever.",
      icon: "shield-check"
    },
    {
      id: "m-2016",
      year: "2016",
      title: "Founded Neuralink & The Boring Company",
      company: "Neuralink & Boring Co.",
      category: "Neuro & Infrastructure",
      summary: "Launched brain-computer interface research and high-speed underground tunneling.",
      details: "Musk co-founded Neuralink to create high-bandwidth neural implants restoring autonomy to people with paralysis. Concurrently, he founded The Boring Company to conquer traffic congestion through high-density 3D electric tunnel networks.",
      icon: "cpu"
    },
    {
      id: "m-2020",
      year: "2020",
      title: "Crew Dragon Demo-2 Mission",
      company: "SpaceX & NASA",
      category: "Aerospace",
      summary: "First commercial mission to launch NASA astronauts to the International Space Station.",
      details: "Astronauts Bob Behnken and Doug Hurley launched aboard SpaceX Crew Dragon to the ISS. This restored US domestic human orbital launch capability for the first time since the Space Shuttle retirement in 2011, establishing commercial spaceflight legitimacy.",
      icon: "users"
    },
    {
      id: "m-2022",
      year: "2022",
      title: "Acquisition of Twitter & Rebrand to X",
      company: "X Corp",
      category: "Social & Media",
      summary: "Acquired Twitter for $44 billion to create an integrated multimedia and finance platform.",
      details: "In October 2022, Musk completed the acquisition of Twitter, taking it private. He open-sourced the recommendation algorithm, instituted Community Notes for collaborative truth verification, launched creator monetization, and expanded into live video and voice calling.",
      icon: "globe"
    },
    {
      id: "m-2023",
      year: "2023",
      title: "Founded xAI & Deployed Colossus Supercomputer",
      company: "xAI",
      category: "Artificial Intelligence",
      summary: "Created frontier AI laboratory dedicated to deep reasoning and understanding the universe.",
      details: "Launched xAI to build safe, curious, and truth-seeking AI models. The team assembled the massive 100,000 liquid-cooled NVIDIA H100 Colossus cluster in Memphis in just 122 days, powering the advanced Grok model series.",
      icon: "sparkles"
    }
  ],

  ventures: [
    {
      id: "spacex",
      name: "SpaceX",
      tagline: "Making humanity a multi-planetary species through reusable rocketry",
      industry: "Aerospace & Telecommunications",
      category: "aerospace",
      role: "Founder, CEO & Chief Engineer (2002–Present)",
      yearFounded: "2002",
      status: "Active (Private)",
      officialUrl: "https://www.spacex.com",
      badgeColor: "#0284c7",
      image: "images/spacex.jpg",
      summary: "World leader in commercial rocket launches, reusable orbital boosters, and low-Earth orbit satellite internet.",
      description: "SpaceX manufactures and operates the Falcon 9 and Falcon Heavy rockets, the Dragon spacecraft, the next-generation Starship super heavy-lift rocket, and the Starlink satellite network. By recovering and reusing rocket first stages and payload fairings, SpaceX radically lowered the cost of orbital payload delivery, capturing the majority of worldwide commercial satellite launches.",
      keyInnovations: [
        "Falcon 9 Reusability: First orbital rocket first stage engineered for rapid reflight, having safely completed over 350+ landings.",
        "Starship Super Heavy: The largest and most powerful flying rocket in human history, designed for 100% full reusability for lunar and Martian expeditions.",
        "Starlink Constellation: A global mesh network of 6,000+ low-latency orbital satellites delivering broadband to 4 million+ active subscribers worldwide."
      ],
      stats: [
        { label: "Booster Landings", value: "350+" },
        { label: "Missions Flown", value: "400+" },
        { label: "Active Starlink Users", value: "4M+" }
      ],
      connection: "Elon Musk conceived SpaceX in 2002 after discovering the excessive costs of legacy rockets while trying to purchase ICBMs in Russia. He funded the company with $100M from his PayPal exit and serves as Chief Engineer, actively designing engine plumbing, heat shields, and staging mechanics."
    },
    {
      id: "tesla",
      name: "Tesla, Inc.",
      tagline: "Accelerating the world's transition to sustainable energy",
      industry: "Automotive & Clean Energy",
      category: "automotive",
      role: "CEO & Product Architect (2004–Present)",
      yearFounded: "2003 (Musk joined 2004)",
      status: "Active (NASDAQ: TSLA)",
      officialUrl: "https://www.tesla.com",
      badgeColor: "#e11d48",
      image: "images/tesla.jpg",
      summary: "Pioneer of mass-market premium electric vehicles, utility-scale battery energy storage, and AI robotics.",
      description: "Tesla disrupted the global internal-combustion automotive industry by engineering EVs with sports-car acceleration, industry-leading safety ratings, and class-leading battery range. Tesla also builds commercial energy storage (Megapack), residential solar, AI vision neural networks (Full Self-Driving), and the Optimus humanoid robot.",
      keyInnovations: [
        "Model Y Global Sales: Became the world's bestselling vehicle across all drivetrains and fuel types in 2023 (~1.22M units sold).",
        "Global Supercharger Network: 55,000+ ultra-fast charging stalls worldwide that have become the de facto North American Charging Standard (NACS).",
        "Megapack Grid Storage: Massive multi-megawatt-hour utility batteries enabling regional power grids to integrate renewable wind and solar reliably."
      ],
      stats: [
        { label: "Total EVs Delivered", value: "5M+" },
        { label: "Global Superchargers", value: "55,000+" },
        { label: "Annual Storage Deployed", value: "15+ GWh" }
      ],
      connection: "Musk led Tesla's Series A funding in 2004 with $6.5M and became Chairman. He authored the famous 'Secret Tesla Master Plan' (build luxury sports car, use money to build affordable car, use that money to build even more affordable car, while providing zero-emission electric power). He assumed CEO leadership in 2008."
    },
    {
      id: "neuralink",
      name: "Neuralink",
      tagline: "Creating generalized high-bandwidth brain-computer interfaces to restore autonomy",
      industry: "Neurotechnology & Biotechnology",
      category: "neurotech",
      role: "Co-Founder & Lead Investor (2016–Present)",
      yearFounded: "2016",
      status: "Active (Private)",
      officialUrl: "https://neuralink.com",
      badgeColor: "#8b5cf6",
      image: "images/neuralink.jpg",
      summary: "Developing fully implantable, wireless brain-computer interfaces (BCIs) to treat neurological trauma and disease.",
      description: "Neuralink is engineering medical implants capable of translating cortical electrical spikes into computer control. Designed to assist individuals with quadriplegia, ALS, or spinal cord injuries, the device allows users to control cursors, robotic limbs, and smartphones using only intention.",
      keyInnovations: [
        "The N1 Implant: A coin-sized implant with 1,024 microscopic electrode channels spread over 64 flexible polyimide threads.",
        "The R1 Surgical Robot: A robotic microneedle system designed to insert threads into brain tissue without puncturing capillary blood vessels.",
        "Human Clinical Trials: In 2024, the first human quadriplegic recipient successfully played video games and surfed the web via thought control."
      ],
      stats: [
        { label: "Electrode Channels", value: "1,024" },
        { label: "Insertion Depth", value: "Cerebral Cortex" },
        { label: "Clinical Phase", value: "FDA IDE Trial" }
      ],
      connection: "Musk co-founded Neuralink in 2016, investing over $100M. He guides the product definition toward completely invisible, cosmetically sealed wireless implants rather than clumsy percutaneous skull plugs used in legacy academic research."
    },
    {
      id: "xai",
      name: "xAI",
      tagline: "Building artificial intelligence to understand the universe and pursue objective truth",
      industry: "Artificial Intelligence & Deep Learning",
      category: "ai",
      role: "Founder & Director (2023–Present)",
      yearFounded: "2023",
      status: "Active (Private)",
      officialUrl: "https://x.ai",
      badgeColor: "#10b981",
      image: "images/xai.jpg",
      summary: "Frontier AI lab building transparent, curiosity-driven models equipped with real-time world knowledge.",
      description: "xAI was launched in March 2023 to pioneer frontier foundation models centered on maximum truthfulness, mathematical rigor, and alignment with scientific discovery. xAI built the Colossus supercomputer in Memphis, Tennessee—featuring 100,000 liquid-cooled NVIDIA H100 GPUs—which trained the Grok-2 and Grok-3 model generations.",
      keyInnovations: [
        "Colossus AI Supercluster: Constructed in just 122 days, recognized as one of the fastest and largest enterprise GPU deployments on Earth.",
        "Grok LLM Architecture: High-parameter multimodal AI model featuring chain-of-thought reasoning, code execution, and real-time news synthesis.",
        "Scientific Truth Alignment: Research directed toward uncovering new physics discoveries and verifying mathematical conjectures."
      ],
      stats: [
        { label: "NVIDIA H100 GPUs", value: "100,000+" },
        { label: "Cluster Setup Time", value: "122 Days" },
        { label: "Context Length", value: "128k Tokens" }
      ],
      connection: "Having co-founded OpenAI in 2015 before departing over governance differences in 2018, Musk founded xAI in 2023 to provide an independent, truth-seeking alternative. He directly directs compute provisioning, hardware scaling, and safety criteria."
    },
    {
      id: "boring",
      name: "The Boring Company",
      tagline: "Transforming urban transit through rapid electric tunneling networks",
      industry: "Civil Engineering & Infrastructure",
      category: "infrastructure",
      role: "Founder (2016–Present)",
      yearFounded: "2016",
      status: "Active (Private)",
      officialUrl: "https://www.boringcompany.com",
      badgeColor: "#f97316",
      image: "images/boring.jpg",
      summary: "Constructing high-throughput, low-cost underground transit tunnels to eliminate surface gridlock.",
      description: "The Boring Company designs electric, automated tunnel boring machines (TBMs) capable of digging 10x faster than conventional methods. Its operational flagship, the Las Vegas Convention Center (LVCC) Loop, ferries passengers beneath convention centers in zero-emission Tesla vehicles.",
      keyInnovations: [
        "Prufrock TBM: Next-generation all-electric boring machine designed to burrow directly from the surface without requiring deep launch pits.",
        "LVCC Loop: Commercial underground transit system in Las Vegas that has securely moved over 2 million passengers with zero emissions.",
        "Continuous Mining: Synchronized excavation and concrete segment installation to achieve continuous tunneling velocity."
      ],
      stats: [
        { label: "Passengers Carried", value: "2M+" },
        { label: "Operational Miles", value: "3+ Miles" },
        { label: "Vegas Expansion Plan", value: "68+ Miles" }
      ],
      connection: "Frustrated by Los Angeles traffic in December 2016, Musk founded The Boring Company to explore 3D subterranean transport. He personally provided initial funding and equipment for the test tunnels behind SpaceX headquarters."
    },
    {
      id: "xcorp",
      name: "X (formerly Twitter)",
      tagline: "The global digital town square and interactive everything app",
      industry: "Social Media, Communications & Payments",
      category: "ai",
      role: "Owner, Executive Chairman & CTO (2022–Present)",
      yearFounded: "2006 (Acquired 2022)",
      status: "Active (Private)",
      officialUrl: "https://x.com",
      badgeColor: "#475569",
      image: "images/xcorp.jpg",
      summary: "Real-time global communication platform evolving into an integrated platform for video, audio, and payments.",
      description: "Musk acquired Twitter for $44 billion in October 2022, transforming it into X. The company restructured its software stack, open-sourced its feed recommendation algorithm, replaced legacy verification with subscriber privileges, launched Community Notes, and enabled direct creator ad-revenue sharing.",
      keyInnovations: [
        "Community Notes: Open-source, collaborative crowd-sourced context system that requires agreement from users of diverse perspectives before notes appear.",
        "Creator Monetization: Direct payouts to independent journalists, podcasters, and content creators based on verified impressions.",
        "P2P Financial Infrastructure: Securing money transmitter licenses across the US to enable instant digital peer-to-peer payments."
      ],
      stats: [
        { label: "Global Active Users", value: "500M+" },
        { label: "Algorithm Status", value: "Open Sourced" },
        { label: "Video Consumption", value: "Billions daily" }
      ],
      connection: "Musk acquired Twitter to safeguard open public discourse and accelerate his long-standing ambition (dating back to X.com in 1999) of creating a unified 'everything app' integrating communication, commerce, and digital identity."
    }
  ],

  impact: {
    achievements: [
      {
        id: "spaceflight-reusability",
        title: "Commercial Orbital Reusability & Democratizing Space Access",
        domain: "Aerospace & Exploration",
        image: "images/falcon-landing.jpg",
        metric: ">80% Launch Cost Reduction",
        metricDetail: "From ~$10,000/kg down to ~$1,500/kg on Falcon 9",
        summary: "Prior to SpaceX, every orbital rocket stage was discarded into oceans or burned up upon atmospheric reentry. Musk proved that vertical rocket propulsive landing was not only physically possible, but economically transformative.",
        details: "SpaceX's Falcon 9 booster fleet has flown hundreds of missions with boosters flying as many as 20+ times each. Reusability gave SpaceX unmatched launch cadence: in 2023–2024, SpaceX launched approximately 80% to 90% of all payload mass sent to orbit worldwide, restoring America's ability to transport astronauts to the ISS and launching Starlink to bridge the digital divide for millions in isolated and underserved regions.",
        verification: "Verified via NASA Commercial Crew Program reports, FAA commercial launch manifests, and aerospace cost analysis from the Center for Strategic and International Studies (CSIS)."
      },
      {
        id: "sustainable-energy-pivot",
        title: "Mainstreaming Electric Vehicles & Forcing a Global Industry Pivot",
        domain: "Automotive & Clean Energy",
        image: "images/tesla-modely.jpg",
        metric: "1st EV to become #1 Car Globally",
        metricDetail: "Tesla Model Y reached #1 global sales in 2023 (~1.22M units)",
        summary: "In the early 2000s, major automakers viewed electric vehicles as slow, golf-cart-like compliance cars destined to lose money. Musk demonstrated that an EV could out-accelerate a supercar, boast a 5-star safety rating, and achieve profitable mass production.",
        details: "Through Tesla's open-patent initiative, extensive Supercharging network, and large-scale Gigafactories, Musk forced legacy titans (GM, Ford, Volkswagen, Toyota, Mercedes-Benz) to commit hundreds of billions of dollars toward EV transitions. Today, every major automaker manufactures electric models and has adopted Tesla's North American Charging Standard (NACS).",
        verification: "Verified via Tesla's SEC Form 10-K filings, JATO Dynamics global sales registries, and BloombergNEF Electric Vehicle Outlook."
      }
    ],
    takeaways: [
      {
        id: "first-principles-thinking",
        title: "First Principles Thinking: Strip Problems Down to Physics",
        subtitle: "Break complex issues into fundamental physical truths rather than copying standard industry analogies.",
        concept: "Most businesses operate by analogy: 'Everyone else does it this way, with standard margins, so that must be what it costs.' Musk rejects this by asking: What are the fundamental physical limits? What are the raw materials? What is their spot market price? If raw steel, aluminum, and fuel cost 2% of a rocket's retail price, the remainder is human inefficiency, overhead, and engineering choice—which can be solved.",
        actionableSteps: [
          "Identify and question your core assumptions: List things you believe must be true because 'that's how it's always done.'",
          "Deconstruct the problem into atomic constituents: Raw material, basic compute, fundamental physics laws.",
          "Reconstruct the solution from scratch: Build upward only using facts that cannot be reduced further."
        ],
        quote: "Boil things down to their most fundamental truths and then reason up from there. That takes a lot more mental energy, but it's the only way to innovate."
      },
      {
        id: "rapid-iteration-velocity",
        title: "Iterative Engineering: Build, Test to Failure, and Tighten the Loop",
        subtitle: "Prioritize fast real-world feedback over prolonged theoretical planning and bureaucratic paralysis.",
        concept: "Traditional aerospace projects spend decades designing on paper, creating 10,000-page specifications, and testing components in isolation to avoid any public failure. Musk embraced the rapid iterative ethos of software in physical hardware: build prototypes rapidly, test them to destruction, gather telemetry, fix the root cause, and fly the next iteration within weeks.",
        actionableSteps: [
          "Tighten your iteration cycle: The rate of improvement is determined by how fast you complete one design-build-test-learn cycle.",
          "Embrace informative failure: A rocket exploding on a test stand during prototype development is not a failure; it is data that accelerates the final design.",
          "Delete requirements relentlessly: Every requirement must come with a name, not a department, and must be challenged until proven necessary."
        ],
        quote: "If things are not failing, you are not innovating enough. The best part is no part. The best process is no process."
      }
    ]
  },

  sources: [
    {
      id: "src-spacex",
      name: "SpaceX Official Flight & Mission Manifests",
      organization: "Space Exploration Technologies Corp.",
      category: "Primary Corporate Portal",
      url: "https://www.spacex.com/launches/",
      notes: "Verified historical records of Falcon 1, Falcon 9, Falcon Heavy, Dragon, and Starship launches, landing telemetry, and reuse statistics."
    },
    {
      id: "src-sec-tesla",
      name: "Tesla, Inc. Annual Reports (Form 10-K Filings)",
      organization: "U.S. Securities and Exchange Commission (EDGAR)",
      category: "Official Regulatory Filing",
      url: "https://www.sec.gov/edgar/browse/?CIK=0001318605",
      notes: "Authoritative data on Tesla vehicle deliveries, Supercharger installations, Megapack energy storage deployments, and audited financial statements."
    },
    {
      id: "src-britannica",
      name: "Elon Musk: Biography, Business Ventures, and SpaceX",
      organization: "Encyclopædia Britannica",
      category: "Peer-Reviewed Reference",
      url: "https://www.britannica.com/money/Elon-Musk",
      notes: "Comprehensive biographical timeline, early education at Pretoria Boys High School and University of Pennsylvania, Zip2, and PayPal acquisition history."
    },
    {
      id: "src-nasa-crew",
      name: "NASA Commercial Crew Program - SpaceX Crew Dragon",
      organization: "National Aeronautics and Space Administration (NASA)",
      category: "Government Agency Documentation",
      url: "https://www.nasa.gov/commercial-crew-program/",
      notes: "Verification of Demo-2 crewed launch, certification of commercial crew transport to the ISS, and NASA Commercial Resupply Services contracts."
    },
    {
      id: "src-bloomberg",
      name: "Bloomberg Billionaires Index - Elon Musk Profile",
      organization: "Bloomberg L.P.",
      category: "Financial Market Intelligence",
      url: "https://www.bloomberg.com/billionaires/profiles/elon-r-musk/",
      notes: "Market capitalization data, venture valuations, equity stakes in private entities (SpaceX, Neuralink, xAI, The Boring Company, X Corp)."
    },
    {
      id: "src-neuralink",
      name: "PRIME Study: First Human Brain-Computer Interface Clinical Trial",
      organization: "Neuralink Corp / ClinicalTrials.gov (NCT06429735)",
      category: "Clinical Research Registry",
      url: "https://neuralink.com/blog/first-human-clinical-trial/",
      notes: "Clinical trial details for the N1 implant, Telepathy wireless telecommunications, and initial human clinical outcomes."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SHOWCASE_DATA;
}
