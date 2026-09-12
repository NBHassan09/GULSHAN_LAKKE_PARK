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

const directions = [
  "Preserve the lake–canopy structure",
  "Rework sensitive thresholds",
  "Strengthen active social nodes",
  "Create comfort-led public spaces",
  "Refine the promenade loop",
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
          <span>GULSHAN / LAKE PARK</span>
        </a>
        <nav>
          <a href="#analysis">Analysis</a>
          <a href="#proposal">Proposal</a>
          <a href="#nodes">Nodes</a>
          <a href="#sustainability">Sustainability</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">PLAN 214 · SITE PLANNING & DESIGN STUDIO · BUET</p>
          <h1>
            Better Site Planning<br />
            <em>for a Greener Dhaka.</em>
          </h1>
          <p className="hero-copy">
            A low-carbon, climate-responsive redesign of Gulshan Lake Park that works with the existing lake, canopy and everyday life of the park—not against them.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#proposal">
              Explore the proposal <ArrowIcon />
            </a>
            <a className="text-link" href="#analysis">See how the site was read</a>
          </div>
        </div>
        <div className="hero-caption">Gulshan, Dhaka · 23°48′05″N / 90°24′35″E</div>
      </section>

      <section className="stats-shell">
        <div className="stats-grid" data-reveal>
          <div><strong>9.45</strong><span>acres of lake park</span></div>
          <div><strong>30+</strong><span>years of climate records</span></div>
          <div><strong>14</strong><span>design nodes</span></div>
          <div><strong>3</strong><span>core low-carbon materials</span></div>
        </div>
      </section>

      <section className="intro section-pad">
        <div className="section-kicker" data-reveal>01 · DESIGN POSITION</div>
        <div className="intro-grid">
          <h2 data-reveal>Focused correction,<br /><em>not wholesale redesign.</em></h2>
          <div data-reveal>
            <p className="lead">
              The park already has a strong organizing idea: an elongated lake, a near-continuous walking loop and a mature green edge. The proposal keeps that blue-green core intact and directs intervention toward the places where comfort, access and activity break down.
            </p>
            <p>
              The design therefore behaves less like a replacement plan and more like a series of precise adjustments—completing the promenade, resolving the eastern threshold, shading exposed nodes and adding programs where they reinforce existing use.
            </p>
          </div>
        </div>
      </section>

      <section id="analysis" className="analysis section-pad dark-section">
        <div className="section-head" data-reveal>
          <div>
            <div className="section-kicker light">02 · READING THE SITE</div>
            <h2>The design begins with evidence.</h2>
          </div>
          <p>
            Field observation was combined with open environmental data and layered spatial analysis: users, circulation, canopy, wind, sun, terrain, drainage and surfaces were read together before design decisions were made.
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
            <p>Keep the SE→NW corridor open and avoid heavy structures that block airflow through the site.</p>
            <img src="/assets/wind-analysis.webp" alt="Wind analysis diagram" />
          </article>
          <article className="evidence-card" data-reveal>
            <span className="evidence-number">~30°C</span>
            <h3>July mean temperature</h3>
            <p>Heat stress peaks before the monsoon, making shade and low-conductivity touch surfaces central design criteria.</p>
            <img src="/assets/temperature.webp" alt="Temperature analysis chart" />
          </article>
          <article className="evidence-card" data-reveal>
            <span className="evidence-number">9+ hrs</span>
            <h3>Daily sun exposure</h3>
            <p>Open central areas carry the highest exposure; lightweight shade is placed where existing canopy cannot do the work.</p>
            <img src="/assets/solar-analysis.webp" alt="Solar analysis diagram" />
          </article>
        </div>

        <div className="site-observations">
          <div className="observation-copy" data-reveal>
            <div className="section-kicker light">EXISTING LIFE OF THE PARK</div>
            <h3>A park that is already heavily used.</h3>
            <p>
              Nearby residents, walkers and joggers, families with children, elderly users, women and caregivers, office workers, young adults and pet owners already occupy the park differently across the day.
            </p>
            <p>
              The existing amphitheater, court, play area, nursery and shaded seating remain important anchors. The design expands this activity mix without displacing the park&apos;s established identity.
            </p>
          </div>
          <div className="photo-stack" data-reveal>
            <img src="/assets/existing-amphitheater.webp" alt="Existing amphitheater" />
            <img src="/assets/existing-play.webp" alt="Existing children's play area" />
            <img src="/assets/existing-nursery.webp" alt="Existing nursery path" />
          </div>
        </div>
      </section>

      <section className="directions section-pad">
        <div className="section-kicker" data-reveal>03 · FIVE DESIGN DIRECTIONS</div>
        <div className="direction-list">
          {directions.map((item, i) => (
            <div className="direction-row" key={item} data-reveal>
              <span>0{i + 1}</span>
              <h3>{item}</h3>
              <div className="direction-line" />
            </div>
          ))}
        </div>
      </section>

      <section id="proposal" className="proposal section-pad sand-section">
        <div className="section-head proposal-head" data-reveal>
          <div>
            <div className="section-kicker">04 · PROPOSED SITE PLAN</div>
            <h2>Activate the lake edge.</h2>
          </div>
          <p>
            Ten new activity nodes and four redesigned existing features are stitched together by one continuous, universally accessible pedestrian loop.
          </p>
        </div>

        <button className="image-stage masterplan" onClick={() => setLightbox("/assets/proposed-plan.webp")} aria-label="Open proposed masterplan">
          <img src="/assets/proposed-plan.webp" alt="Proposed site plan of Gulshan Lake Park" />
          <span className="image-stage-label dark-label">Proposed masterplan · click to enlarge</span>
        </button>

        <div className="proposal-callout" data-reveal>
          <span className="big-number">14</span>
          <div>
            <h3>One continuous loop, fourteen design nodes.</h3>
            <p>New destinations are inserted only where they solve a site problem, strengthen an existing route, or make an exposed edge more useful.</p>
          </div>
        </div>
      </section>

      <section id="nodes" className="nodes section-pad">
        <div className="section-head" data-reveal>
          <div>
            <div className="section-kicker">05 · NEW ACTIVITY NODES</div>
            <h2>Small interventions,<br />different reasons to stay.</h2>
          </div>
          <p>
            The proposal balances active recreation, everyday social life, quiet retreat, movement and climate shelter—rather than treating every part of the lake edge the same way.
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
            <div className="section-kicker light">06 · REDESIGNED IN PLACE</div>
            <h2>Keep what already works.</h2>
          </div>
          <p>
            Four existing features are retained and improved instead of demolished—reducing material demand while preserving familiar uses and the park&apos;s local identity.
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

      <section id="sustainability" className="sustainability section-pad">
        <div className="section-kicker" data-reveal>07 · CARBON, ECOLOGY & WATER</div>
        <div className="sustainability-title" data-reveal>
          <h2>Low-carbon is treated as a design language, not a label.</h2>
          <p>
            Material choice, placement and water behavior are considered together so the new interventions remain compatible with Dhaka&apos;s hot, humid climate and the park&apos;s existing ecological systems.
          </p>
        </div>

        <div className="sustainability-grid">
          <article data-reveal>
            <div className="eco-icon"><LeafIcon /></div>
            <span>01</span>
            <h3>Embodied carbon</h3>
            <p>CSEB, bamboo and reclaimed timber take the place of more material-intensive steel and concrete wherever feasible. Temporary uses avoid permanent foundations.</p>
            <div className="material-tags"><b>CSEB</b><b>BAMBOO</b><b>RECLAIMED TIMBER</b></div>
          </article>
          <article data-reveal>
            <div className="eco-icon"><LeafIcon /></div>
            <span>02</span>
            <h3>Ecological preservation</h3>
            <p>New structures stay within the existing green envelope, sensitive planted edges remain clear, and climbing vegetation adds habitat rather than replacing mature canopy.</p>
          </article>
          <article data-reveal>
            <div className="eco-icon"><LeafIcon /></div>
            <span>03</span>
            <h3>Water & passive performance</h3>
            <p>Permeable paving, planted transitions and rainwater-harvesting shelters reduce concentrated runoff while shade, ventilation and light finishes improve outdoor comfort.</p>
          </article>
        </div>

        <div className="amenities-row" data-reveal>
          <img src="/assets/solar-lamp.webp" alt="Solar-powered street lamp precedent" />
          <div>
            <div className="section-kicker">PARK-WIDE AMENITIES</div>
            <h3>Quiet infrastructure that does more.</h3>
            <p>Solar-powered lamps, green façade gates, a permeable universal-access loop and additional washroom provision complete the proposal without competing with the landscape.</p>
          </div>
          <img src="/assets/green-facade.webp" alt="Green facade precedent" />
        </div>
      </section>

      <section className="access section-pad sand-section">
        <div className="section-head" data-reveal>
          <div>
            <div className="section-kicker">08 · UNIVERSAL ACCESS & SAFETY</div>
            <h2>Access is built into each node.</h2>
          </div>
          <p>Universal access is not treated as a separate route added at the end. It is integrated into the bridge, boardwalk, terraces, play spaces and the continuous loop itself.</p>
        </div>
        <div className="access-grid">
          <div data-reveal><strong>2.4 m</strong><span>clear boardwalk width with tactile edge strip</span></div>
          <div data-reveal><strong>90 / 65 cm</strong><span>dual handrail heights at the Moon Bridge ramp</span></div>
          <div data-reveal><strong>100%</strong><span>continuous permeable pedestrian loop</span></div>
          <div data-reveal><strong>1</strong><span>wheelchair-reach play element specified</span></div>
        </div>
      </section>

      <section className="closing">
        <div className="closing-image" aria-hidden="true" />
        <div className="closing-shade" />
        <div className="closing-content" data-reveal>
          <div className="section-kicker light">GULSHAN LAKE PARK · DHAKA</div>
          <h2>A greener future can begin by designing more carefully with what is already there.</h2>
          <p>Better Site Planning and Design of Gulshan Lake Park for a Greener Future of Dhaka City.</p>
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
    </main>
  );
}
