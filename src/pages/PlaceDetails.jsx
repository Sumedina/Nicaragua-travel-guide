import { useParams, Link } from "react-router-dom";
import { places } from "../data";
import CarouselWrapper from "../components/CarouselWrapper";

/* ────────────────────────────────────────────────────────────────────────
   DESIGN TOKENS
   Palette pulled from the country itself: deep Caribbean-night navy as the
   base, a turquoise lifted straight from the reef water, and a coral/sunset
   accent for prices & warmth. Fraunces (a warm editorial serif) carries the
   headings like a travel magazine; Inter stays for body copy; a monospace
   face gives the "Getting there" tickets a boarding-pass feel.
   ──────────────────────────────────────────────────────────────────────── */
const colors = {
  bg: "#0c1417",
  bgSoft: "#101a1e",
  panel: "#152025",
  panelAlt: "#1a262c",
  border: "#233036",
  borderSoft: "#1c2830",
  teal: "#3fd6c8",
  tealDim: "#2a9a90",
  tealSoft: "rgba(63,214,200,0.12)",
  coral: "#ff8c5a",
  coralSoft: "rgba(255,140,90,0.14)",
  amber: "#f0c34d",
  amberSoft: "rgba(240,195,77,0.12)",
  text: "#eef4f3",
  textMuted: "#94a8ac",
  textFaint: "#5f7378",
};

/* ────────────────────────────────────────────────────────────────────────
   CONTENT PARSER
   Existing place descriptions are one long string, hand-written with
   emoji section markers (🟡 section, ✈️/⛴ transport options, 🌊/🐟/🌅/🍲
   numbered experiences, ❌ mistakes, ⚠️ notes, 💰 costs). Rather than
   dumping that as one wall of text, this parser breaks it into real
   sections so each part gets the layout it deserves. It degrades
   gracefully: any place whose text doesn't follow the pattern still
   renders fine as plain paragraphs.
   ──────────────────────────────────────────────────────────────────────── */
function normalize(s = "") {
  return s
    .replace(/^\s*---\s*$/gm, " ") // strip standalone '---' divider lines used in the data
    .replace(/\s+/g, " ")
    .trim();
}

// Some descriptions come through with line breaks flattened into runs of
// spaces (copy/paste from a rendered page). Treat 2+ spaces as a line break
// so section/option boundaries can be found; real "\n" already survives.
function toLines(raw) {
  return raw.replace(/ {2,}/g, "\n");
}

function splitTitle(block) {
  const idx = block.indexOf("\n");
  if (idx > 0) {
    return { title: normalize(block.slice(0, idx)), body: block.slice(idx).trim() };
  }
  return { title: normalize(block), body: "" };
}

function classifySection(title) {
  const t = title.toLowerCase();
  if (t.includes("how to get") || t.includes("get to")) return "transport";
  if (t.includes("special") || t.includes("unique") || t.startsWith("what makes")) return "special";
  if (t.includes("experience") && !t.includes("insight")) return "experiences";
  if (t.includes("cost") || t.includes("budget")) return "budget";
  if (t.includes("safety") || t.includes("mistake")) return "safety";
  if (t.includes("personal") || t.includes("insight")) return "personal";
  return "generic";
}

// Cost lines are sometimes a single line ("💰 Cost: $25-60 USD") and
// sometimes a label followed by several "- ..." bullets on their own lines
// ("💰 Estimated costs:\n- Public bus: $3-8 USD\n- Private: $40-90 USD").
// This grabs either shape and folds it into one readable string.
function extractCost(chunk) {
  const m = chunk.match(/💰([^\n]*)((?:\n\s*-[^\n]*)*)/);
  if (!m) return { costText: null, stripped: chunk };
  const label = normalize(m[1]);
  const bullets = (m[2] || "")
    .split("\n")
    .map((l) => l.replace(/^\s*-+\s*/, "").trim())
    .filter(Boolean);
  const costText = bullets.length
    ? normalize(`${label}${label.endsWith(":") ? "" : ":"} ${bullets.join(", ")}`)
    : label || null;
  return { costText, stripped: chunk.replace(m[0], "") };
}

const TRANSPORT_LINE = /^\s*(?:✈️|⛴️?|🚗|🚘|🚕|🚌|🚍|🚢|🛥️?|🚤)[^\n]*/gmu;
const TRANSPORT_MODE = /✈️|⛴️?|🚗|🚘|🚕|🚌|🚍|🚢|🛥️?|🚤/u;
const LEADING_PICTOGRAPHIC = /^[\p{Extended_Pictographic}\uFE0F\s+]+/u;

function parseTransport(body) {
  const marks = [...body.matchAll(TRANSPORT_LINE)].map((m) => ({
    start: m.index,
    len: m[0].length,
    header: m[0].trim(),
  }));
  // No recognizable transport-mode lines: caller falls back to plain body text.
  if (!marks.length) return { intro: "", options: [] };
  const intro = normalize(body.slice(0, marks[0].start));
  const options = marks.map((o, i) => {
    const end = i + 1 < marks.length ? marks[i + 1].start : body.length;
    let chunk = body.slice(o.start + o.len, end);
    // Warnings aren't always labeled "Important:" — capture whatever follows ⚠️.
    const noteMatch = chunk.match(/⚠️\s*(?:Important:?\s*)?([^]*)$/i);
    const note = noteMatch ? normalize(noteMatch[1]) : null;
    if (noteMatch) chunk = chunk.slice(0, noteMatch.index);
    const durationMatch = chunk.match(/(?:Duration|Travel time):\s*([^\n]+)/i);
    const labeledPrice = chunk.match(/(?:Price range|Cost|Price):\s*([^\n]+)/i);
    const clean = (s) => (s ? normalize(s).replace(/^-+\s*/, "") : null);
    let price = clean(labeledPrice?.[1]);
    let rawChunk = chunk.replace(/(?:Duration|Travel time|Price range|Cost|Price):[^\n]+/gi, "");
    if (!price) {
      const { costText, stripped } = extractCost(rawChunk);
      price = costText;
      rawChunk = stripped;
    }
    const icon = o.header.match(TRANSPORT_MODE)?.[0] || "🧭";
    const headerText = normalize(o.header.replace(LEADING_PICTOGRAPHIC, "")) || "Route option";
    return {
      header: headerText,
      icon,
      duration: clean(durationMatch?.[1]),
      price,
      note: note || null,
      raw: normalize(rawChunk),
    };
  });
  return { intro, options };
}

const EXPERIENCE_LINE = /^\s*\p{Extended_Pictographic}\uFE0F?\s*\d+\.\s*[^\n]+/gmu;
const MISTAKE_MARK = /❌\s*Mistake\s*\d+:[^\n]*/g;

function parseExperiences(body) {
  const marks = [...body.matchAll(EXPERIENCE_LINE)].map((m) => ({
    start: m.index,
    len: m[0].length,
    header: m[0].trim(),
  }));
  if (!marks.length) return { intro: normalize(body), items: [] };
  const intro = normalize(body.slice(0, marks[0].start));
  const items = marks.map((o, i) => {
    const end = i + 1 < marks.length ? marks[i + 1].start : body.length;
    const chunk = body.slice(o.start + o.len, end);
    // Cost labels vary wildly across entries (Cost, Costs, Estimated costs,
    // Meals, Tours, Rentals, Entrance, Guide cost, or no label at all), and
    // the value is sometimes on the same line, sometimes in bullets below.
    const { costText, stripped } = extractCost(chunk);
    const text = normalize(stripped);
    const titleText = normalize(
      o.header.replace(/^\p{Extended_Pictographic}\uFE0F?\s*\d+\.\s*/u, "")
    );
    const icon = o.header.match(/\p{Extended_Pictographic}/u)?.[0] || "✨";
    return {
      icon,
      title: titleText,
      text,
      cost: costText,
    };
  });
  return { intro, items };
}

function parseSafety(body) {
  const marks = [...body.matchAll(MISTAKE_MARK)].map((m) => ({
    start: m.index,
    header: m[0].trim(),
  }));
  const mistakes = marks.map((o, i) => {
    const end = i + 1 < marks.length ? marks[i + 1].start : body.length;
    let chunk = body.slice(o.start, end);
    chunk = chunk.split("⚠️")[0];
    const label = o.header.match(/Mistake\s*\d+/i)?.[0] || "Mistake";
    const rest = normalize(chunk.replace(MISTAKE_MARK, ""));
    const titleGuess = o.header.replace(/❌\s*Mistake\s*\d+:\s*/i, "");
    return { label, text: normalize(`${titleGuess} ${rest}`) };
  });
  const safetyMatch = body.match(/⚠️\s*Safety level:\s*([^]*)$/i);
  return {
    mistakes,
    safetyNote: safetyMatch ? normalize(safetyMatch[1]) : null,
  };
}

function parseBudget(body) {
  const lines = body
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  const tiers = [];
  const rest = [];
  const tierRe = /^-\s*([^:\n]+):\s*(\$[^\n]+)$/;
  lines.forEach((line) => {
    const m = line.match(tierRe);
    if (m) tiers.push({ label: normalize(m[1]), range: normalize(m[2]) });
    else rest.push(line);
  });
  return { tiers, note: normalize(rest.join(" ")) };
}

function parsePlaceContent(description) {
  if (!description) return { intro: "", sections: [] };
  const fixed = toLines(description.trim());
  const topParts = fixed.split("🟡").map((s) => s.trim()).filter(Boolean);
  if (topParts.length < 2) {
    // No recognizable structure — plain paragraphs fallback.
    return { intro: normalize(description), sections: [] };
  }
  const intro = normalize(topParts[0]);
  const sections = topParts.slice(1).map((raw) => {
    const { title, body } = splitTitle(raw);
    const type = classifySection(title);
    let data = {};
    if (type === "transport") data = parseTransport(body);
    else if (type === "experiences") data = parseExperiences(body);
    else if (type === "safety") data = parseSafety(body);
    else if (type === "budget") data = parseBudget(body);
    else data = { text: normalize(body) };
    return { title, type, body, ...data };
  });
  return { intro, sections };
}

/* ────────────────────────────────────────────────────────────────────────
   SMALL PRESENTATIONAL PIECES
   ──────────────────────────────────────────────────────────────────────── */
function Eyebrow({ children }) {
  return <div style={styles.eyebrow}>{children}</div>;
}

function SectionHeading({ children }) {
  return <h2 style={styles.sectionHeading}>{children}</h2>;
}

function TransportCard({ option }) {
  const budgetLike = /budget/i.test(option.header);
  return (
    <div style={styles.ticket}>
      <div style={styles.ticketStub}>
        <span style={{ fontSize: 26 }}>{option.icon}</span>
        <span style={styles.ticketStubLabel}>{budgetLike ? "BUDGET" : "FAST"}</span>
      </div>
      <div style={styles.ticketPerforation} aria-hidden="true" />
      <div style={styles.ticketBody}>
        <div style={styles.ticketHeader}>{option.header}</div>
        {(option.duration || option.price) && (
          <div style={styles.ticketStats}>
            {option.duration && (
              <div>
                <div style={styles.ticketStatLabel}>DURATION</div>
                <div style={styles.ticketStatValue}>{option.duration}</div>
              </div>
            )}
            {option.price && (
              <div>
                <div style={styles.ticketStatLabel}>PRICE</div>
                <div style={styles.ticketStatValue}>{option.price}</div>
              </div>
            )}
          </div>
        )}
        {option.raw && <p style={styles.ticketText}>{option.raw}</p>}
        {option.note && (
          <div style={styles.noteBox}>
            <strong style={{ color: colors.amber }}>Note — </strong>
            {option.note}
          </div>
        )}
      </div>
    </div>
  );
}

function ExperienceCard({ item }) {
  return (
    <div style={styles.expCard}>
      <div style={styles.expIcon}>{item.icon}</div>
      <h3 style={styles.expTitle}>{item.title}</h3>
      <p style={styles.expText}>{item.text}</p>
      {item.cost && <span style={styles.pricePill}>{item.cost}</span>}
    </div>
  );
}

function BudgetBars({ tiers, note }) {
  if (!tiers.length) return null;
  const maxima = tiers.map((t) => {
    const nums = t.range.match(/[\d,]+/g) || ["0"];
    return parseInt(nums[nums.length - 1].replace(/,/g, ""), 10);
  });
  const max = Math.max(...maxima, 1);
  return (
    <div>
      <div style={styles.budgetGrid}>
        {tiers.map((t, i) => (
          <div key={i} style={styles.budgetRow}>
            <div style={styles.budgetLabel}>{t.label}</div>
            <div style={styles.budgetTrack}>
              <div
                style={{
                  ...styles.budgetFill,
                  width: `${Math.max(12, (maxima[i] / max) * 100)}%`,
                }}
              />
            </div>
            <div style={styles.budgetRange}>{t.range}</div>
          </div>
        ))}
      </div>
      {note && <p style={styles.budgetNote}>{note}</p>}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────
   MAIN COMPONENT
   ──────────────────────────────────────────────────────────────────────── */
export default function PlaceDetails() {
  const { id } = useParams();
  const place = places.find((p) => p.id === Number(id));

  if (!place) {
    return (
      <div style={{ ...styles.page, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: colors.text, fontFamily: "'Fraunces', serif" }}>Place not found</h1>
          <Link to="/" style={styles.backLink}>← Back to all places</Link>
        </div>
      </div>
    );
  }

  const { intro, sections } = parsePlaceContent(place.description);
  const heroImage = place.extraPhotos?.[0] || place.image;

  return (
    <div style={styles.page}>
      <style>{fontImport}</style>

      {/* HERO */}
      <div style={styles.hero}>
        {heroImage && (
          <img src={heroImage} alt={place.name} style={styles.heroImage} />
        )}
        <div style={styles.heroOverlay} />
        <Link to="/" style={styles.backLink}>← Back</Link>
        <div style={styles.heroContent}>
          {place.location && <Eyebrow>{place.location}</Eyebrow>}
          <h1 style={styles.title}>{place.name}</h1>
          <div style={styles.chipRow}>
            {place.rating && (
              <span style={styles.chip}>★ {place.rating}</span>
            )}
            {place.duration && <span style={styles.chip}>{place.duration}</span>}
            {place.distance && <span style={styles.chip}>{place.distance}</span>}
          </div>
        </div>
      </div>

      <div style={styles.container}>
        {/* INTRO */}
        {intro && <p style={styles.lede}>{intro}</p>}

        {/* PHOTO GALLERY */}
        {place.extraPhotos?.length > 0 && (
          <div style={styles.gallerySection}>
            <Eyebrow>Gallery</Eyebrow>
            <div style={styles.galleryFrame}>
              <CarouselWrapper photos={place.extraPhotos} />
            </div>
          </div>
        )}

        {/* PARSED SECTIONS */}
        {sections.map((section, i) => {
          if (section.type === "transport") {
            return (
              <section key={i} style={styles.section}>
                <Eyebrow>Logistics</Eyebrow>
                <SectionHeading>{section.title}</SectionHeading>
                {section.intro && <p style={styles.bodyText}>{section.intro}</p>}
                {section.options?.length > 0 ? (
                  <div style={styles.ticketRow}>
                    {section.options.map((opt, idx) => (
                      <TransportCard key={idx} option={opt} />
                    ))}
                  </div>
                ) : (
                  <p style={styles.bodyText}>{section.body}</p>
                )}
              </section>
            );
          }

          if (section.type === "special") {
            return (
              <section key={i} style={styles.section}>
                <div style={styles.callout}>
                  <Eyebrow>Why it's different</Eyebrow>
                  <SectionHeading>{section.title.replace(/:\s*$/, "")}</SectionHeading>
                  <p style={styles.bodyText}>{section.text || section.body}</p>
                </div>
              </section>
            );
          }

          if (section.type === "experiences") {
            return (
              <section key={i} style={styles.section}>
                <Eyebrow>What to actually do</Eyebrow>
                <SectionHeading>{section.title}</SectionHeading>
                {section.intro && <p style={styles.bodyText}>{section.intro}</p>}
                {section.items?.length > 0 ? (
                  <div style={styles.expGrid}>
                    {section.items.map((item, idx) => (
                      <ExperienceCard key={idx} item={item} />
                    ))}
                  </div>
                ) : (
                  <p style={styles.bodyText}>{section.body}</p>
                )}
              </section>
            );
          }

          if (section.type === "budget") {
            return (
              <section key={i} style={styles.section}>
                <Eyebrow>Daily budget</Eyebrow>
                <SectionHeading>{section.title.split(" - ")[0]}</SectionHeading>
                {section.tiers?.length > 0 ? (
                  <BudgetBars tiers={section.tiers} note={section.note} />
                ) : (
                  <p style={styles.bodyText}>{section.body}</p>
                )}
              </section>
            );
          }

          if (section.type === "safety") {
            return (
              <section key={i} style={styles.section}>
                <Eyebrow>Before you go</Eyebrow>
                <SectionHeading>{section.title}</SectionHeading>
                {section.mistakes?.length > 0 ? (
                  <div style={styles.mistakeList}>
                    {section.mistakes.map((m, idx) => (
                      <div key={idx} style={styles.mistakeRow}>
                        <span style={styles.mistakeMark}>✕</span>
                        <p style={styles.mistakeText}>{m.text}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p style={styles.bodyText}>{section.body}</p>
                )}
                {section.safetyNote && (
                  <div style={styles.safetyBadge}>
                    <strong style={{ color: colors.teal }}>Safety — </strong>
                    {section.safetyNote}
                  </div>
                )}
              </section>
            );
          }

          if (section.type === "personal") {
            return (
              <section key={i} style={styles.section}>
                <div style={styles.quoteBlock}>
                  <span style={styles.quoteMark}>&ldquo;</span>
                  <p style={styles.quoteText}>{section.text || section.body}</p>
                </div>
              </section>
            );
          }

          // generic fallback
          return (
            <section key={i} style={styles.section}>
              <SectionHeading>{section.title}</SectionHeading>
              <p style={styles.bodyText}>{section.text || section.body}</p>
            </section>
          );
        })}

        {/* Fallback for places with no structured markers at all */}
        {sections.length === 0 && !intro && place.description && (
          <p style={styles.bodyText}>{place.description}</p>
        )}

        <div style={styles.footerNav}>
          <Link to="/" style={styles.footerLink}>← Explore more places in Nicaragua</Link>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────
   STYLES
   ──────────────────────────────────────────────────────────────────────── */
const fontImport = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;600&display=swap');
`;

const styles = {
  page: {
    minHeight: "100vh",
    background: colors.bg,
    fontFamily: "'Inter', sans-serif",
    color: colors.text,
  },
  hero: {
    position: "relative",
    height: "56vh",
    minHeight: 360,
    overflow: "hidden",
  },
  heroImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    filter: "saturate(1.05)",
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    background:
      `linear-gradient(180deg, rgba(12,20,23,0.15) 0%, rgba(12,20,23,0.35) 55%, ${colors.bg} 100%)`,
  },
  backLink: {
    position: "absolute",
    top: 24,
    left: 24,
    color: "#fff",
    textDecoration: "none",
    fontSize: 14,
    fontWeight: 500,
    background: "rgba(12,20,23,0.45)",
    backdropFilter: "blur(6px)",
    padding: "8px 14px",
    borderRadius: 999,
    border: `1px solid rgba(255,255,255,0.15)`,
  },
  heroContent: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: "0 24px 36px",
    maxWidth: 1100,
    margin: "0 auto",
  },
  eyebrow: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 12,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: colors.teal,
    marginBottom: 10,
    fontWeight: 600,
  },
  title: {
    fontFamily: "'Fraunces', serif",
    fontSize: "clamp(32px, 5vw, 56px)",
    fontWeight: 600,
    color: "#fff",
    margin: "0 0 14px",
    lineHeight: 1.05,
  },
  chipRow: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
  },
  chip: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 13,
    color: "#fff",
    background: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.2)",
    padding: "6px 12px",
    borderRadius: 999,
  },
  container: {
    maxWidth: 880,
    margin: "0 auto",
    padding: "48px 24px 100px",
  },
  lede: {
    fontFamily: "'Fraunces', serif",
    fontSize: 22,
    lineHeight: 1.6,
    color: "#dce7e6",
    fontWeight: 400,
    marginBottom: 48,
  },
  gallerySection: {
    marginBottom: 56,
  },
  galleryFrame: {
    borderRadius: 20,
    overflow: "hidden",
    border: `1px solid ${colors.border}`,
    boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
  },
  section: {
    marginBottom: 56,
  },
  sectionHeading: {
    fontFamily: "'Fraunces', serif",
    fontSize: 28,
    fontWeight: 600,
    color: "#fff",
    margin: "0 0 16px",
  },
  bodyText: {
    fontSize: 16.5,
    lineHeight: 1.75,
    color: colors.textMuted,
    marginBottom: 12,
  },

  // Transport tickets
  ticketRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 20,
    marginTop: 20,
  },
  ticket: {
    display: "flex",
    background: colors.panel,
    border: `1px solid ${colors.border}`,
    borderRadius: 16,
    overflow: "hidden",
  },
  ticketStub: {
    width: 76,
    flexShrink: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    background: colors.tealSoft,
    padding: "16px 8px",
  },
  ticketStubLabel: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 10,
    letterSpacing: "0.08em",
    color: colors.teal,
    fontWeight: 600,
  },
  ticketPerforation: {
    width: 0,
    borderLeft: `2px dashed ${colors.border}`,
    margin: "14px 0",
  },
  ticketBody: {
    padding: "18px 20px",
    flex: 1,
  },
  ticketHeader: {
    fontFamily: "'Fraunces', serif",
    fontSize: 17,
    fontWeight: 600,
    color: "#fff",
    marginBottom: 12,
  },
  ticketStats: {
    display: "flex",
    gap: 24,
    marginBottom: 12,
  },
  ticketStatLabel: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 10,
    letterSpacing: "0.08em",
    color: colors.textFaint,
    marginBottom: 4,
  },
  ticketStatValue: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 14,
    color: colors.coral,
    fontWeight: 600,
  },
  ticketText: {
    fontSize: 14.5,
    lineHeight: 1.6,
    color: colors.textMuted,
    marginBottom: 10,
  },
  noteBox: {
    fontSize: 13.5,
    lineHeight: 1.55,
    color: colors.textMuted,
    background: colors.amberSoft,
    border: `1px solid rgba(240,195,77,0.25)`,
    borderRadius: 10,
    padding: "10px 12px",
    marginTop: 8,
  },

  // Special callout
  callout: {
    borderLeft: `3px solid ${colors.teal}`,
    background: colors.panelAlt,
    borderRadius: "0 16px 16px 0",
    padding: "24px 28px",
  },

  // Experiences
  expGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 18,
    marginTop: 20,
  },
  expCard: {
    background: colors.panel,
    border: `1px solid ${colors.border}`,
    borderRadius: 16,
    padding: "22px 20px",
    position: "relative",
  },
  expIcon: {
    fontSize: 26,
    marginBottom: 10,
  },
  expTitle: {
    fontFamily: "'Fraunces', serif",
    fontSize: 17,
    fontWeight: 600,
    color: "#fff",
    margin: "0 0 8px",
  },
  expText: {
    fontSize: 14.5,
    lineHeight: 1.65,
    color: colors.textMuted,
    marginBottom: 16,
  },
  pricePill: {
    display: "inline-block",
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 12.5,
    fontWeight: 600,
    color: colors.coral,
    background: colors.coralSoft,
    padding: "5px 12px",
    borderRadius: 999,
  },

  // Budget
  budgetGrid: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    marginTop: 20,
  },
  budgetRow: {
    display: "grid",
    gridTemplateColumns: "140px 1fr 150px",
    alignItems: "center",
    gap: 16,
  },
  budgetLabel: {
    fontSize: 14,
    color: colors.text,
    fontWeight: 500,
  },
  budgetTrack: {
    height: 10,
    background: colors.panelAlt,
    borderRadius: 999,
    overflow: "hidden",
  },
  budgetFill: {
    height: "100%",
    background: `linear-gradient(90deg, ${colors.tealDim}, ${colors.teal})`,
    borderRadius: 999,
  },
  budgetRange: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 13,
    color: colors.textMuted,
    textAlign: "right",
  },
  budgetNote: {
    fontSize: 14,
    color: colors.textFaint,
    marginTop: 18,
    fontStyle: "italic",
  },

  // Safety / mistakes
  mistakeList: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    marginTop: 16,
  },
  mistakeRow: {
    display: "flex",
    gap: 14,
    alignItems: "flex-start",
    background: colors.panel,
    border: `1px solid ${colors.border}`,
    borderRadius: 12,
    padding: "14px 16px",
  },
  mistakeMark: {
    color: colors.coral,
    fontWeight: 700,
    fontSize: 15,
    lineHeight: 1.6,
  },
  mistakeText: {
    fontSize: 14.5,
    lineHeight: 1.6,
    color: colors.textMuted,
    margin: 0,
  },
  safetyBadge: {
    marginTop: 16,
    fontSize: 14.5,
    lineHeight: 1.6,
    color: colors.textMuted,
    background: colors.tealSoft,
    border: `1px solid rgba(63,214,200,0.25)`,
    borderRadius: 12,
    padding: "14px 16px",
  },

  // Personal quote
  quoteBlock: {
    position: "relative",
    padding: "12px 0 12px 44px",
  },
  quoteMark: {
    position: "absolute",
    left: -6,
    top: -20,
    fontFamily: "'Fraunces', serif",
    fontSize: 90,
    color: colors.tealDim,
    opacity: 0.5,
    lineHeight: 1,
  },
  quoteText: {
    fontFamily: "'Fraunces', serif",
    fontStyle: "italic",
    fontSize: 21,
    lineHeight: 1.65,
    color: "#dce7e6",
  },

  footerNav: {
    marginTop: 64,
    paddingTop: 32,
    borderTop: `1px solid ${colors.border}`,
    textAlign: "center",
  },
  footerLink: {
    color: colors.teal,
    textDecoration: "none",
    fontSize: 15,
    fontWeight: 500,
  },
};