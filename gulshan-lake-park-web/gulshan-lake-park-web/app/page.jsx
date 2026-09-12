"use client";

import { useEffect, useState } from "react";

const interventions = [
  {
    no: "01",
    title: "Boardwalk Deck",
    image: "/assets/boardwalk-deck.webp",
    text: "Completes the promenade at the lake edge with reclaimed or lightly charred timber and a low-conductivity walking surface.",
  },
  {
    no: "02",
    title: "Lakeside Café",
    image: "/assets/lakeside-cafe.webp",
    text: "A shaded social anchor near the main entry, using CSEB walls with a bamboo–timber roof.",
  },
  {
    no: "03",
    title: "Boat Station",
    image: "/assets/boat-station.webp",
    text: "A compact timber landing that introduces low-impact water recreation without interrupting the planted edge.",
  },
  {
    no: "04",
    title: "Terraced Seating",
    image: "/assets/terraced-seating.webp",
    text: "Stepped lake-facing seating transforms an informal edge into a larger social and small-performance space.",
  },
  {
    no: "05",
    title: "Moon Bridge",
    image: "/assets/moon-bridge.webp",
    text: "A signature crossing that completes the loop, paired with parallel ramped access and pale finishes for heat comfort.",
  },
  {
    no: "06",
    title: "Flower Garden",
    image: "/assets/flower-garden.webp",
    text: "A quieter garden room with a perforated bamboo lattice that provides shade without becoming a heat-storing mass.",
  },
  {
    no: "07",
    title: "Dog Play Area",
    image: "/assets/dog-play-area.webp",
    text: "A dedicated off-leash space finished with cooler crushed-brick aggregate and a double-gated entry.",
  },
  {
    no: "08",
    title: "Outdoor Gym",
    image: "/assets/outdoor-gym.webp",
    text: "Exercise equipment sits beneath a lightweight bamboo shade canopy so high-touch surfaces stay safer in hot weather.",
  },
  {
    no: "09",
    title: "Lakeview Weekly Market",
    image: "/assets/weekly-market.webp",
    text: "A temporary market with lightweight construction and no permanent foundations, adding social use without locking the park into hardscape.",
  },
  {
    no: "10",
    title: "Rain Shade",
    image: "/assets/rain-shade.webp",
    text: "Distributed shelters offer quick monsoon cover and direct harvested rainwater into adjacent planting.",
  },
];

const redesigns = [
  {
    no: "11",
    title: "Amphitheater",
    image: "/assets/amphitheater-redesign.webp",
    text: "Retained in place, resurfaced with a cooler low-carbon material language and improved ramped stage access.",
  },
  {
    no: "12",
    title: "Badminton Court",
    image: "/assets/badminton-material.webp",
    text: "A lighter surface replaces the dark synthetic finish, with the court reoriented north–south for improved comfort.",
  },
  {
    no: "13",
    title: "Nursery",
    image: "/assets/existing-nursery.webp",
    text: "Preserved as a landscape-identity node rather than displaced by new programming.",
  },
  {
    no: "14",
    title: "Play Lot",
    image: "/assets/play-lot.webp",
    text: "Wood-mulch surfacing replaces heat-prone rubber tile, with safer and more inclusive play conditions.",
  },
];

const policyFrames = [
  {
    tag: "SDG 11.7",
    title: "Universal access to public space",
    text: "By 2030, cities should provide universal access to safe, inclusive and accessible green and public spaces, with particular attention to women and children, older persons and persons with disabilities.",
    href: "https://sdgs.un.org/2030agenda",
  },
  {
    tag: "WHO",
    title: "Parks as health infrastructure",
    text: "Urban green space can support physical activity, social cohesion and psychological restoration while reducing exposure to excessive heat, air pollution and noise.",
    href: "https://www.who.int/europe/publications/i/item/WHO-EURO-2016-3352-43111-60341",
  },
  {
    tag: "UN-HABITAT",
    title: "Measure more than park area",
    text: "Public-space assessment should examine distribution, accessibility, network, quality and use. At neighbourhood scale, UN-Habitat uses a 400 m — about five-minute — walkable radius for site-specific assessment.",
    href: "https://unhabitat.org/public-space-site-specific-assessment-guidelines-to-achieve-quality-public-spaces-at-neighbourhood",
  },
  {
    tag: "BANGLADESH · NUP 2025",
    title: "Translate policy into local action",
    text: "Bangladesh's National Urban Policy 2025 promotes inclusive, environmentally sustainable and climate-resilient urban development through stronger local governance and meaningful citizen participation.",
    href: "https://www.undp.org/bangladesh/news/government-approves-national-urban-policy-2025",
  },
];

const findings = [
  {
    no: "01",
    title: "Start with what already works.",
    evidence: "Gulshan's lake, mature perimeter canopy and near-continuous walking loop already provide the park's clearest spatial and ecological structure.",
    implication: "Dhaka implication: audit functioning ecological and social assets before adding new construction. Retention can be a design decision, not a lack of intervention.",
  },
  {
    no: "02",
    title: "Thermal comfort determines usability.",
    evidence: "The analysis found exposed hardscape, uneven shade, long daily sun exposure and a summer SE→NW airflow corridor that should remain open.",
    implication: "Dhaka implication: treat shade, ventilation, surface reflectance and low-conductivity touch materials as basic public-space infrastructure.",
  },
  {
    no: "03",
    title: "A connected route matters as much as a destination.",
    evidence: "The eastern bridge acts as a shortcut, leaving the far-east segment comparatively underused and creating a narrow public-service threshold.",
    implication: "Dhaka implication: evaluate parks as continuous movement systems — street, gate, path, activity, seating, toilet and exit — rather than as isolated facilities.",
  },
  {
    no: "04",
    title: "Water is infrastructure, not scenery.",
    evidence: "Runoff generally drains inward toward the lake, while soft planted edges and bioswale-like conditions already contribute to infiltration.",
    implication: "Dhaka implication: parks can function as blue-green infrastructure by retaining permeable ground, protecting drainage paths and using planting to manage monsoon water.",
  },
  {
    no: "05",
    title: "Retrofit can outperform replacement.",
    evidence: "Existing activity anchors — amphitheater, court, nursery and play areas — already support everyday use and can be improved in place.",
    implication: "Dhaka implication: prioritize focused correction where facilities work socially but fail on comfort, access, drainage or material performance.",
  },
];

const frameworkTests = [
  {
    no: "01",
    title: "ACCESS",
    question: "Can people reach, enter and continuously use the park?",
    measures: "Walkable catchment · gate conditions · continuous routes · ramps · tactile cues · toilet access",
  },
  {
    no: "02",
    title: "CLIMATE COMFORT",
    question: "Can the park be used safely and comfortably in Dhaka's heat and monsoon climate?",
    measures: "Canopy · shade gaps · airflow · surface heat · rain shelter · drinking/rest opportunities",
  },
  {
    no: "03",
    title: "BLUE-GREEN PERFORMANCE",
    question: "Does the park help the neighbourhood manage water and heat?",
    measures: "Permeability · drainage direction · planted edges · canopy · water retention · habitat continuity",
  },
  {
    no: "04",
    title: "SOCIAL INCLUSION",
    question: "Who can use the park — and who is missing?",
    measures: "Women · children · older people · caregivers · youth · persons with disabilities · low-cost everyday use",
  },
  {
    no: "05",
    title: "ACTIVITY + FLEXIBILITY",
    question: "Can different uses coexist without overbuilding the park?",
    measures: "Active recreation · passive use · social gathering · quiet use · temporary events · adaptable spaces",
  },
  {
    no: "06",
    title: "MANAGEMENT + MAINTENANCE",
    question: "Can the park remain functional after construction?",
    measures: "Lighting · planting · drainage · toilets · equipment · responsibilities · community participation",
  },
];

const responseGroups = [
  {
    label: "CLIMATE COMFORT",
    nodes: "Rain Shade · Amphitheater · Badminton Court · Outdoor Gym",
    text: "Shade, cooler surfaces, ventilation and rain protection respond directly to exposure identified during site analysis.",
  },
  {
    label: "ACCESS + CONNECTIVITY",
    nodes: "Boardwalk Deck · Moon Bridge · Terraced Seating · Continuous Loop",
    text: "The proposal completes the promenade and integrates ramped, tactile and continuous access into the main movement system.",
  },
  {
    label: "BLUE-GREEN PERFORMANCE",
    nodes: "Permeable Loop · Rain Harvesting · Flower Garden · Lake Edge",
    text: "New elements work with existing drainage, planted edges and canopy rather than sealing or replacing them.",
  },
  {
    label: "INCLUSIVE SOCIAL LIFE",
    nodes: "Weekly Market · Dog Play Area · Café · Play Lot",
    text: "Different reasons to visit are distributed around the loop so social, recreational and everyday uses are not concentrated in one zone.",
  },
  {
    label: "LOW-CARBON RETROFIT",
    nodes: "CSEB · Bamboo · Reclaimed Timber · Retain-and-Upgrade",
    text: "Material choice and selective reuse reduce unnecessary replacement while supporting passive comfort in a hot-humid climate.",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M38 8C22 8 10 16 10 29c0 7 5 11 11 11 13 0 20-14 17-32Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 37c8-11 15-17 25-24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    document.body.classList.add("modal-open");
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("modal-open");
    };
  }, [lightbox]);

  return (
    <main>
      <header className="site-nav">
        <a className="brand" href="#top" aria-label="Gulshan Lake Park home">
          <span className="brand-mark"><LeafIcon /></span>
          <span>GULSHAN / DHAKA PARKS</span>
        </a>
        <nav>
          <a href="#standards">Standards</a>
          <a href="#case">Case study</a>
          <a href="#findings">Findings</a>
          <a href="#dhaka-framework">Dhaka framework</a>
          <a href="#proposal">Application</a>
        </nav>
      </header>

      <section id="top" className="hero research-hero">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">URBAN PARK RESEARCH · GULSHAN LAKE PARK · DHAKA</p>
          <h1>
            Designing Better Parks<br />
            <em>for Dhaka.</em>
          </h1>
          <p className="hero-copy">
            Gulshan Lake Park is used as a case study to ask a larger question: how can climate, ecology, accessibility and everyday use inform a replicable framework for healthier, more inclusive and climate-responsive neighbourhood parks across Dhaka?
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#findings">
              Explore the findings <ArrowIcon />
            </a>
            <a className="text-link" href="#dhaka-framework">See the Dhaka framework</a>
          </div>
        </div>
        <div className="hero-caption">Evidence from a 9.45-acre lake park · Gulshan, Dhaka</div>
      </section>

      <section className="stats-shell">
        <div className="stats-grid" data-reveal>
          <div><strong>9.45</strong><span>acres studied</span></div>
          <div><strong>30+</strong><span>years of climate records</span></div>
          <div><strong>7+</strong><span>user groups observed</span></div>
          <div><strong>6</strong><span>tests proposed for Dhaka parks</span></div>
        </div>
      </section>

      <section className="intro section-pad research-question-section">
        <div className="section-kicker" data-reveal>01 · RESEARCH POSITION</div>
        <div className="intro-grid">
          <h2 data-reveal>Gulshan is the case study.<br /><em>Dhaka is the question.</em></h2>
          <div data-reveal>
            <p className="lead">
              The aim is not to produce a one-off beautification scheme. It is to understand which site conditions make an urban park usable, healthy and resilient — and which lessons can be transferred to other neighbourhood parks in Dhaka.
            </p>
            <p>
              The study combines field observation, environmental data and spatial analysis, then tests the findings through a design proposal. International public-space and health frameworks are used as reference points rather than treated as decorative labels.
            </p>
          </div>
        </div>
        <div className="research-question" data-reveal>
          <span>RESEARCH QUESTION</span>
          <p>How can site-level evidence on climate, ecology, accessibility and user behaviour be translated into practical principles for improving neighbourhood parks across Dhaka?</p>
        </div>
      </section>

      <section id="standards" className="section-pad dark-section standards-section">
        <div className="section-head" data-reveal>
          <div>
            <div className="section-kicker light">02 · GLOBAL + NATIONAL REFERENCE FRAME</div>
            <h2>What should a good urban park deliver?</h2>
          </div>
          <p>
            The project is read against four complementary frames: access and inclusion, public health, public-space quality and Bangladesh's current urban-policy direction.
          </p>
        </div>
        <div className="policy-grid">
          {policyFrames.map((item) => (
            <a className="policy-card" href={item.href} target="_blank" rel="noreferrer" key={item.tag} data-reveal>
              <span>{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <b>Open source ↗</b>
            </a>
          ))}
        </div>
        <div className="benchmark-note" data-reveal>
          <strong>Citywide benchmark, not a site quota.</strong>
          <p>
            UN-Habitat's citywide public-space guidance uses a benchmark of about 45% of urban land for public space — approximately 30% for streets and sidewalks and 15% for public open space. This is an urban-structure benchmark, not a requirement that 15% of every individual development or park site be open space.
          </p>
          <a href="https://unhabitat.org/sites/default/files/2020/03/cwpss_guidebook_20200116.pdf" target="_blank" rel="noreferrer">UN-Habitat City-Wide Public Space Assessment ↗</a>
        </div>
      </section>

      <section id="case" className="analysis section-pad dark-section case-section">
        <div className="section-head" data-reveal>
          <div>
            <div className="section-kicker light">03 · GULSHAN AS A LIVING LABORATORY</div>
            <h2>The site is read before it is redesigned.</h2>
          </div>
          <p>
            Users, circulation, canopy, wind, sun, terrain, drainage, surfaces and lake-edge conditions were interpreted together to distinguish functioning systems from weaknesses that require intervention.
          </p>
        </div>

        <button className="image-stage analysis-plan" onClick={() => setLightbox("/assets/existing-plan.webp")} aria-label="Open existing plan">
          <img src="/assets/existing-plan.webp" alt="Existing site plan of Gulshan Lake Park" />
          <span className="image-stage-label">Existing condition · click to enlarge</span>
        </button>

        <div className="evidence-grid">
          <article className="evidence-card" data-reveal>
            <span className="evidence-number">18%</span>
            <h3>Summer wind from the SE sector</h3>
            <p>Protect the SE→NW airflow corridor and avoid heavy structures that obstruct ventilation through the park.</p>
            <img src="/assets/wind-analysis.webp" alt="Wind analysis diagram" />
          </article>
          <article className="evidence-card" data-reveal>
            <span className="evidence-number">~30°C</span>
            <h3>July mean temperature</h3>
            <p>Heat stress and exposed activity areas make shade and low-conductivity touch surfaces core design criteria.</p>
            <img src="/assets/temperature.webp" alt="Temperature analysis chart" />
          </article>
          <article className="evidence-card" data-reveal>
            <span className="evidence-number">9+ hrs</span>
            <h3>Daily sun exposure</h3>
            <p>Open central areas carry the highest exposure; lightweight shelter is needed where mature canopy cannot provide shade.</p>
            <img src="/assets/solar-analysis.webp" alt="Solar analysis diagram" />
          </article>
        </div>

        <div className="site-observations">
          <div className="observation-copy" data-reveal>
            <div className="section-kicker light">EVERYDAY USE</div>
            <h3>The park is already socially active.</h3>
            <p>
              Nearby residents, walkers and joggers, families with children, elderly users, women and caregivers, office workers, young adults and pet owners use the park differently across the day.
            </p>
            <p>
              That matters methodologically: improvement should strengthen existing social life rather than assume an empty site waiting for new programming.
            </p>
          </div>
          <div className="photo-stack" data-reveal>
            <img src="/assets/existing-amphitheater.webp" alt="Existing amphitheater" />
            <img src="/assets/existing-play.webp" alt="Existing children's play area" />
            <img src="/assets/existing-nursery.webp" alt="Existing nursery path" />
          </div>
        </div>
      </section>

      <section id="findings" className="section-pad findings-section">
        <div className="section-head" data-reveal>
          <div>
            <div className="section-kicker">04 · FIVE FINDINGS</div>
            <h2>What Gulshan teaches us about park improvement.</h2>
          </div>
          <p>
            These findings separate the case-specific evidence from the broader planning implication. The second column is not a universal rule; it is the transferable lesson generated from this site.
          </p>
        </div>
        <div className="findings-list">
          {findings.map((item) => (
            <article className="finding-row" key={item.no} data-reveal>
              <span>{item.no}</span>
              <h3>{item.title}</h3>
              <div>
                <b>Gulshan evidence</b>
                <p>{item.evidence}</p>
              </div>
              <div>
                <b>Transferable lesson</b>
                <p>{item.implication}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad sand-section benchmark-section">
        <div className="section-kicker" data-reveal>05 · BENCHMARKING THE CASE</div>
        <div className="sustainability-title" data-reveal>
          <h2>From global commitments to local design questions.</h2>
          <p>International frameworks are most useful when they become questions that can be observed, mapped and acted on at neighbourhood scale.</p>
        </div>
        <div className="benchmark-table-wrap" data-reveal>
          <table className="benchmark-table">
            <thead>
              <tr>
                <th>Reference</th>
                <th>What it asks for</th>
                <th>Gulshan reading</th>
                <th>Dhaka planning implication</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SDG 11.7</td>
                <td>Safe, inclusive and accessible green and public space for all.</td>
                <td>Continuous access and node-level usability become design criteria, not add-ons.</td>
                <td>Audit access by gender, age, disability and route continuity.</td>
              </tr>
              <tr>
                <td>WHO</td>
                <td>Green space that supports physical activity, social cohesion and protection from environmental stressors.</td>
                <td>Shade, walking, quiet use, recreation and heat-sensitive materials are treated together.</td>
                <td>Evaluate parks as health-supporting infrastructure, not only landscaped land.</td>
              </tr>
              <tr>
                <td>UN-Habitat</td>
                <td>Assess accessibility, quality, distribution, connectivity and use of public space.</td>
                <td>A strong park can still contain internal gaps in comfort, movement and usability.</td>
                <td>Create citywide inventories plus neighbourhood-level quality audits.</td>
              </tr>
              <tr>
                <td>NUP 2025 / UNDP</td>
                <td>Inclusive, climate-resilient, environmentally sustainable and locally implemented urban development.</td>
                <td>Canopy, water, permeability, participation and maintainability become planning concerns.</td>
                <td>Use parks as locally led climate-adaptation and liveability infrastructure.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="dhaka-framework" className="section-pad framework-section">
        <div className="section-head" data-reveal>
          <div>
            <div className="section-kicker">06 · DHAKA PARK IMPROVEMENT FRAMEWORK</div>
            <h2>Six tests for every neighbourhood park.</h2>
          </div>
          <p>
            This is the project's main transferable output: a practical checklist that can be used before design begins. Until multiple parks are surveyed consistently, it should be used qualitatively — Strong / Moderate / Weak / Not assessed — rather than as a pseudo-precise numerical index.
          </p>
        </div>
        <div className="framework-grid">
          {frameworkTests.map((item) => (
            <article className="framework-card" key={item.no} data-reveal>
              <span>{item.no}</span>
              <h3>{item.title}</h3>
              <p className="framework-question">{item.question}</p>
              <p className="framework-measures">{item.measures}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="proposal" className="proposal section-pad sand-section">
        <div className="section-head proposal-head" data-reveal>
          <div>
            <div className="section-kicker">07 · APPLYING THE FINDINGS BACK TO GULSHAN</div>
            <h2>The proposal becomes a test of the framework.</h2>
          </div>
          <p>
            Ten new activity nodes and four redesigned features demonstrate how the findings can become physical interventions without replacing the park's lake-canopy core.
          </p>
        </div>

        <button className="image-stage masterplan" onClick={() => setLightbox("/assets/proposed-plan.webp")} aria-label="Open proposed masterplan">
          <img src="/assets/proposed-plan.webp" alt="Proposed site plan of Gulshan Lake Park" />
          <span className="image-stage-label dark-label">Proposed masterplan · click to enlarge</span>
        </button>

        <div className="response-grid">
          {responseGroups.map((item) => (
            <article className="response-card" key={item.label} data-reveal>
              <span>{item.label}</span>
              <h3>{item.nodes}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="nodes" className="nodes section-pad">
        <div className="section-head" data-reveal>
          <div>
            <div className="section-kicker">08 · DESIGN DEMONSTRATION</div>
            <h2>Fourteen nodes,<br />each tied to a finding.</h2>
          </div>
          <p>
            The intervention gallery remains part of the project, but the design is now read as evidence of how climate comfort, access, ecology, inclusion and retrofit principles can be translated into site form.
          </p>
        </div>

        <div className="node-grid">
          {interventions.map((item, i) => (
            <article className={`node-card ${i === 0 || i === 3 || i === 8 ? "node-card-wide" : ""}`} key={item.no} data-reveal>
              <button className="node-image" onClick={() => setLightbox(item.image)} aria-label={`Open ${item.title} image`}>
                <img src={item.image} alt={item.title} />
              </button>
              <div className="node-meta">
                <span>{item.no}</span>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="redesign section-pad dark-section">
        <div className="section-head" data-reveal>
          <div>
            <div className="section-kicker light">09 · RETAIN + CORRECT</div>
            <h2>Retrofit what already carries social value.</h2>
          </div>
          <p>
            Four existing features are improved in place rather than demolished. This is the physical expression of the project's retain → correct → add approach.
          </p>
        </div>
        <div className="redesign-grid">
          {redesigns.map((item) => (
            <article className="redesign-card" key={item.no} data-reveal>
              <button onClick={() => setLightbox(item.image)} aria-label={`Open ${item.title} image`}>
                <img src={item.image} alt={item.title} />
              </button>
              <span>{item.no}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad dhaka-actions-section">
        <div className="section-head" data-reveal>
          <div>
            <div className="section-kicker">10 · FROM GULSHAN TO DHAKA</div>
            <h2>What should happen next?</h2>
          </div>
          <p>
            One case study cannot represent every neighbourhood. The next step is comparative application: use the same framework across different park types, income contexts and management systems in Dhaka.
          </p>
        </div>
        <div className="actions-list">
          <article data-reveal><span>01</span><h3>MAP</h3><p>Build a citywide inventory of parks, open spaces and their walkable catchments.</p></article>
          <article data-reveal><span>02</span><h3>AUDIT</h3><p>Measure access, shade, canopy, drainage, user diversity, safety, facilities and management condition.</p></article>
          <article data-reveal><span>03</span><h3>PRIORITIZE</h3><p>Direct investment toward underserved and climate-vulnerable neighbourhoods, not only flagship spaces.</p></article>
          <article data-reveal><span>04</span><h3>RETROFIT</h3><p>Retain mature trees, functioning drainage and established social uses before considering wholesale replacement.</p></article>
          <article data-reveal><span>05</span><h3>MONITOR</h3><p>Track post-project use, thermal comfort, accessibility, permeability and maintenance so design performance can be tested over time.</p></article>
        </div>
      </section>

      <section className="sources-section section-pad sand-section">
        <div className="section-kicker" data-reveal>REFERENCE FRAMEWORKS</div>
        <div className="sources-grid" data-reveal>
          <div>
            <h3>United Nations · SDG 11.7</h3>
            <p>Universal access to safe, inclusive and accessible green and public spaces.</p>
            <a href="https://sdgs.un.org/2030agenda" target="_blank" rel="noreferrer">2030 Agenda ↗</a>
          </div>
          <div>
            <h3>World Health Organization</h3>
            <p>Evidence linking urban green space with physical, mental and social health and reduced environmental exposure.</p>
            <a href="https://www.who.int/europe/publications/i/item/WHO-EURO-2016-3352-43111-60341" target="_blank" rel="noreferrer">Urban green spaces and health ↗</a>
          </div>
          <div>
            <h3>UN-Habitat</h3>
            <p>Citywide and site-specific public-space assessment tools, including the 400 m neighbourhood walkable radius.</p>
            <a href="https://unhabitat.org/public-space-site-specific-assessment-guidelines-to-achieve-quality-public-spaces-at-neighbourhood" target="_blank" rel="noreferrer">Site-specific assessment ↗</a>
          </div>
          <div>
            <h3>National Urban Policy 2025</h3>
            <p>Bangladesh policy direction for planned, inclusive, environmentally sustainable and climate-resilient urban development.</p>
            <a href="https://www.undp.org/bangladesh/news/government-approves-national-urban-policy-2025" target="_blank" rel="noreferrer">UNDP Bangladesh summary ↗</a>
          </div>
        </div>
      </section>

      <section className="closing research-closing">
        <div className="closing-image" aria-hidden="true" />
        <div className="closing-shade" />
        <div className="closing-content" data-reveal>
          <div className="section-kicker light">EVIDENCE → PRINCIPLES → ACTION</div>
          <h2>A better park is not just more designed. It is more usable, more inclusive and more responsive to its city.</h2>
          <p>Gulshan Lake Park is the starting point for a wider conversation about how Dhaka improves everyday public space.</p>
        </div>
      </section>

      <footer>
        <div className="footer-title">Department of Urban and Regional Planning · BUET</div>
        <div className="footer-grid">
          <div>
            <span>Presented by</span>
            <p>Nazifa Binte Hassan · Farhan Parvez Waris · Ruhul Amin Sharkar · Shahidul Hasan · Mahathir Ali Saad</p>
          </div>
          <div>
            <span>Supervised by</span>
            <p>Dr. Meher Nigar Neema · Tasirul Hasan · Md. Ahnaf Zaman</p>
          </div>
          <div>
            <span>Studio</span>
            <p>PLAN 214 · Level II, Term II · 2026</p>
          </div>
        </div>
        <a href="#top" className="back-top">Back to top ↑</a>
      </footer>

      {lightbox && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close image">×</button>
          <img src={lightbox} alt="Expanded project visual" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      <style>{`
        .research-question {
          margin-top: 76px;
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 40px;
          padding: 34px 0;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          align-items: start;
        }
        .research-question span,
        .policy-card > span,
        .response-card > span {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .15em;
          text-transform: uppercase;
        }
        .research-question span { color: #6d796a; padding-top: 8px; }
        .research-question p {
          margin: 0;
          max-width: 940px;
          font-family: var(--serif);
          font-size: clamp(27px, 3.5vw, 48px);
          line-height: 1.14;
          letter-spacing: -.025em;
        }
        .policy-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 1px;
          border: 1px solid var(--white-line);
          background: var(--white-line);
        }
        .policy-card {
          display: flex;
          flex-direction: column;
          min-height: 330px;
          padding: 36px;
          background: var(--forest-2);
          transition: background .25s ease, transform .25s ease;
        }
        .policy-card:hover { background: #123726; }
        .policy-card > span { color: var(--lime); }
        .policy-card h3 {
          margin: 26px 0 12px;
          font-family: var(--serif);
          font-size: clamp(28px,3vw,40px);
          line-height: 1.02;
          font-weight: 500;
        }
        .policy-card p { margin: 0; max-width: 620px; color: rgba(255,255,255,.62); line-height: 1.7; }
        .policy-card b { margin-top: auto; padding-top: 28px; font-size: 11px; letter-spacing: .06em; color: #b9c9b6; }
        .benchmark-note {
          margin-top: 54px;
          display: grid;
          grid-template-columns: .45fr 1.25fr auto;
          gap: 36px;
          align-items: start;
          border-top: 1px solid var(--white-line);
          padding-top: 28px;
        }
        .benchmark-note strong { font-family: var(--serif); font-size: 24px; font-weight: 500; color: var(--lime); }
        .benchmark-note p { margin: 0; color: rgba(255,255,255,.62); line-height: 1.7; font-size: 13px; }
        .benchmark-note a { font-size: 11px; line-height: 1.5; color: #c6d2c3; border-bottom: 1px solid rgba(255,255,255,.25); padding-bottom: 4px; }
        .findings-section { background: var(--paper); }
        .findings-list { border-top: 1px solid var(--line); }
        .finding-row {
          display: grid;
          grid-template-columns: 52px 1.05fr 1fr 1fr;
          gap: 34px;
          padding: 38px 0;
          border-bottom: 1px solid var(--line);
          align-items: start;
        }
        .finding-row > span { font-size: 10px; letter-spacing: .14em; color: #748070; padding-top: 9px; }
        .finding-row h3 { margin: 0; font-family: var(--serif); font-size: clamp(28px,3vw,42px); font-weight: 500; line-height: 1.02; letter-spacing: -.025em; }
        .finding-row b { display: block; margin-bottom: 9px; font-size: 10px; letter-spacing: .12em; text-transform: uppercase; color: #73806f; }
        .finding-row p { margin: 0; color: #5f6960; font-size: 13px; line-height: 1.7; }
        .benchmark-table-wrap { overflow-x: auto; border-top: 1px solid var(--line); }
        .benchmark-table { width: 100%; min-width: 900px; border-collapse: collapse; }
        .benchmark-table th,
        .benchmark-table td { text-align: left; vertical-align: top; padding: 22px 22px 22px 0; border-bottom: 1px solid var(--line); }
        .benchmark-table th { font-size: 10px; letter-spacing: .12em; text-transform: uppercase; color: #707b6c; }
        .benchmark-table td { color: #59645a; font-size: 13px; line-height: 1.65; }
        .benchmark-table td:first-child { width: 140px; font-family: var(--serif); font-size: 22px; color: var(--ink); }
        .framework-section { background: var(--cream); }
        .framework-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 1px; background: var(--line); border: 1px solid var(--line); }
        .framework-card { min-height: 330px; padding: 32px; background: var(--cream); display: flex; flex-direction: column; }
        .framework-card > span { font-size: 10px; letter-spacing: .14em; color: #73806f; }
        .framework-card h3 { margin: 24px 0 15px; font-family: var(--serif); font-size: 34px; font-weight: 500; }
        .framework-question { margin: 0; font-size: 16px; line-height: 1.55; color: var(--ink); }
        .framework-measures { margin: auto 0 0; padding-top: 30px; font-size: 11px; line-height: 1.65; text-transform: uppercase; letter-spacing: .06em; color: #6d786b; }
        .response-grid { margin-top: 64px; display: grid; grid-template-columns: repeat(5,minmax(0,1fr)); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .response-card { padding: 28px 24px 32px 0; border-right: 1px solid var(--line); }
        .response-card + .response-card { padding-left: 24px; }
        .response-card:last-child { border-right: 0; }
        .response-card > span { color: #697765; }
        .response-card h3 { margin: 17px 0 12px; font-family: var(--serif); font-size: 23px; line-height: 1.12; font-weight: 500; }
        .response-card p { margin: 0; color: #606a60; font-size: 12px; line-height: 1.65; }
        .dhaka-actions-section { background: var(--paper); }
        .actions-list { border-top: 1px solid var(--line); }
        .actions-list article { display: grid; grid-template-columns: 62px 160px 1fr; gap: 28px; padding: 28px 0; border-bottom: 1px solid var(--line); align-items: baseline; }
        .actions-list span { font-size: 10px; letter-spacing: .14em; color: #748070; }
        .actions-list h3 { margin: 0; font-family: var(--serif); font-size: 28px; font-weight: 500; }
        .actions-list p { margin: 0; max-width: 820px; color: #5f6960; line-height: 1.65; }
        .sources-grid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 28px; border-top: 1px solid var(--line); padding-top: 30px; }
        .sources-grid h3 { font-family: var(--serif); font-size: 24px; font-weight: 500; margin: 0 0 10px; }
        .sources-grid p { color: #626c61; font-size: 12px; line-height: 1.65; }
        .sources-grid a { display: inline-block; margin-top: 7px; font-size: 11px; color: #51634e; border-bottom: 1px solid var(--line); padding-bottom: 3px; }
        .research-closing .closing-content { width: min(1100px, 86vw); }
        .research-closing .closing-content h2 { font-size: clamp(46px,6.4vw,90px); }
        @media (max-width: 1100px) {
          .finding-row { grid-template-columns: 44px 1fr 1fr; }
          .finding-row > div:last-child { grid-column: 2 / 4; }
          .response-grid { grid-template-columns: repeat(2,minmax(0,1fr)); border-bottom: 0; }
          .response-card { border-bottom: 1px solid var(--line); }
          .response-card:nth-child(2n) { border-right: 0; }
          .framework-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .sources-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
        }
        @media (max-width: 760px) {
          .research-question { grid-template-columns: 1fr; gap: 14px; }
          .policy-grid { grid-template-columns: 1fr; }
          .policy-card { min-height: 290px; padding: 27px; }
          .benchmark-note { grid-template-columns: 1fr; gap: 14px; }
          .finding-row { grid-template-columns: 38px 1fr; gap: 16px; }
          .finding-row > div { grid-column: 2; }
          .finding-row > div:last-child { grid-column: 2; }
          .framework-grid { grid-template-columns: 1fr; }
          .framework-card { min-height: 285px; }
          .response-grid { grid-template-columns: 1fr; }
          .response-card,
          .response-card + .response-card { padding: 24px 0; border-right: 0; }
          .actions-list article { grid-template-columns: 42px 1fr; gap: 14px; }
          .actions-list p { grid-column: 2; }
          .sources-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}
