import { useState } from "react";

// ── Data ──────────────────────────────────────────────────────────────────────
const SPICES = [
  {
    id: "mirchi",
    name: "Red Chilli Powder",
    hindi: "लाल मिर्च पाउडर",
    emoji: "🌶️",
    color: "#8B0000",
    accent: "#C0392B",
    desc: "Pure Red Chilli (Mirchi) · Vibrant colour · Authentic spicy taste",
    packs: [
      { weight: "15g", price: 10 },
      { weight: "30g", price: 20 },
      { weight: "100g", price: 70 },
      { weight: "200g", price: 130 },
      { weight: "500g", price: 310 },
      { weight: "1kg", price: 600 },
    ],
  },
  {
    id: "haldi",
    name: "Turmeric Powder",
    hindi: "हल्दी पाउडर",
    emoji: "🟡",
    color: "#7B5B00",
    accent: "#D4A017",
    desc: "Pure Turmeric (Haldi) · Rich colour · Authentic aroma",
    packs: [
      { weight: "20g", price: 10 },
      { weight: "40g", price: 20 },
      { weight: "100g", price: 46 },
      { weight: "200g", price: 90 },
      { weight: "500g", price: 222 },
      { weight: "1kg", price: 440 },
    ],
  },
  {
    id: "dhaniya",
    name: "Coriander Powder",
    hindi: "धनिया पाउडर",
    emoji: "🌿",
    color: "#2D5016",
    accent: "#4A7C1F",
    desc: "Pure Coriander Seeds (Dhaniya) · Fresh flavour · Natural aroma",
    packs: [
      { weight: "20g", price: 10 },
      { weight: "40g", price: 20 },
      { weight: "100g", price: 46 },
      { weight: "200g", price: 90 },
      { weight: "500g", price: 222 },
      { weight: "1kg", price: 440 },
    ],
  },
];

const GOOGLE_REVIEW_URL = "https://g.page/r/CeLP_Y0_IBCsEBM/review";
const GOOGLE_MAPS_EMBED = "https://maps.google.com/maps?q=Rath,+Hamirpur,+Uttar+Pradesh+210431&output=embed";
const FSSAI_NO = "22726220000035";

// Google Review QR - base64 placeholder; in production replace src with hosted URL
// We reference the uploaded file paths via relative name
const GOOGLE_QR_SRC = "./google-review-qr.png";
const INSTAGRAM_QR_SRC = "./instagram-qr.png";
const WHATSAPP_QR_SRC = "./whatsapp-qr.png";

// ── SpiceCard ─────────────────────────────────────────────────────────────────
function SpiceCard({ spice }) {
  const [sel, setSel] = useState(0);
  const pack = spice.packs[sel];

  const whatsappMsg = encodeURIComponent(
    `Namaste! Mujhe MK Raj ${spice.name} (${pack.weight}) - ₹${pack.price} ka order karna hai.\nPlease confirm karein.`
  );
  const whatsappLink = `https://wa.me/919794022167?text=${whatsappMsg}`;

  return (
    <div style={{
      background: "#fff", borderRadius: 20, overflow: "hidden",
      boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
      display: "flex", flexDirection: "column",
      transition: "transform 0.2s",
    }}
      onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
      onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
    >
      <div style={{
        background: `linear-gradient(135deg, ${spice.color}, ${spice.accent})`,
        padding: "28px 24px 20px", color: "#fff", position: "relative", overflow: "hidden",
      }}>
        <div style={{ fontSize: 52, marginBottom: 6 }}>{spice.emoji}</div>
        <div style={{ fontSize: 20, fontWeight: 800 }}>{spice.name}</div>
        <div style={{ fontSize: 15, opacity: 0.85 }}>{spice.hindi}</div>
        <div style={{ position: "absolute", right: -20, top: -20, width: 100, height: 100, borderRadius: "50%", background: "rgba(255,255,255,0.08)" }} />
      </div>

      <div style={{ padding: "16px 20px 20px", flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
        <p style={{ fontSize: 13, color: "#666", margin: 0, lineHeight: 1.5 }}>{spice.desc}</p>

        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#888", marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>Select Pack Size</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {spice.packs.map((p, i) => (
              <button key={i} onClick={() => setSel(i)} style={{
                padding: "5px 11px", borderRadius: 20,
                border: `2px solid ${sel === i ? spice.accent : "#e0e0e0"}`,
                background: sel === i ? spice.accent : "#fafafa",
                color: sel === i ? "#fff" : "#333",
                fontSize: 12, fontWeight: 600, cursor: "pointer", transition: "all 0.15s",
              }}>{p.weight}</button>
            ))}
          </div>
        </div>

        {/* Price display — no add-to-cart, no basket */}
        <div style={{
          background: `${spice.accent}12`, borderRadius: 14,
          padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div>
            <div style={{ fontSize: 11, color: "#888", fontWeight: 600 }}>MRP Price</div>
            <div style={{ fontSize: 28, fontWeight: 900, color: spice.color }}>₹{pack.price}</div>
            <div style={{ fontSize: 12, color: "#888" }}>{pack.weight} pack</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 11, color: "#888", fontWeight: 600, marginBottom: 4 }}>Order via</div>
            <a href={whatsappLink} target="_blank" rel="noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "#25D366", color: "#fff", padding: "8px 16px",
              borderRadius: 10, fontWeight: 700, fontSize: 13, textDecoration: "none",
              boxShadow: "0 3px 10px #25D36655",
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Order
            </a>
          </div>
        </div>

        <div style={{ fontSize: 12, color: "#aaa", textAlign: "center" }}>
          📞 Call: <a href="tel:+919794022167" style={{ color: "#888", fontWeight: 600 }}>+91 9794022167</a>
        </div>
      </div>
    </div>
  );
}

// ── QR Section ────────────────────────────────────────────────────────────────
function QRSection() {
  return (
    <section style={{ background: "#fff", padding: "60px 24px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, color: "#1a1a1a", margin: "0 0 8px" }}>Connect With Us</h2>
          <p style={{ color: "#888" }}>Scan QR codes to review, follow or order</p>
        </div>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>

          {/* Google Review */}
          <div style={{
            background: "#f9f9f9", borderRadius: 20, padding: "28px 24px",
            textAlign: "center", flex: "1 1 220px", maxWidth: 260,
            boxShadow: "0 4px 20px rgba(0,0,0,0.07)", border: "1px solid #f0f0f0"
          }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#4285F4", letterSpacing: 1, textTransform: "uppercase", marginBottom: 14 }}>⭐ Google Review</div>
            <img src={GOOGLE_QR_SRC} alt="Google Review QR" style={{ width: 160, height: 160, objectFit: "contain", borderRadius: 12 }} />
            <div style={{ marginTop: 14 }}>
              <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noreferrer" style={{
                display: "inline-block", background: "#4285F4", color: "#fff",
                padding: "8px 18px", borderRadius: 10, fontWeight: 700, fontSize: 13, textDecoration: "none"
              }}>Rate Us on Google ↗</a>
            </div>
            <p style={{ fontSize: 12, color: "#aaa", marginTop: 10 }}>Scan to leave a review</p>
          </div>

          {/* WhatsApp Order */}
          <div style={{
            background: "#f0fdf4", borderRadius: 20, padding: "28px 24px",
            textAlign: "center", flex: "1 1 220px", maxWidth: 260,
            boxShadow: "0 4px 20px rgba(0,0,0,0.07)", border: "1px solid #dcfce7"
          }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#25D366", letterSpacing: 1, textTransform: "uppercase", marginBottom: 14 }}>📦 WhatsApp Order</div>
            <img src={WHATSAPP_QR_SRC} alt="WhatsApp QR" style={{ width: 160, height: 160, objectFit: "contain", borderRadius: 12, background: "#fff", padding: 8 }} />
            <div style={{ marginTop: 14 }}>
              <a href="https://wa.me/919794022167" target="_blank" rel="noreferrer" style={{
                display: "inline-block", background: "#25D366", color: "#fff",
                padding: "8px 18px", borderRadius: 10, fontWeight: 700, fontSize: 13, textDecoration: "none"
              }}>Open WhatsApp ↗</a>
            </div>
            <p style={{ fontSize: 12, color: "#aaa", marginTop: 10 }}>Scan to order directly</p>
          </div>

          {/* Instagram */}
          <div style={{
            background: "#fdf0ff", borderRadius: 20, padding: "28px 24px",
            textAlign: "center", flex: "1 1 220px", maxWidth: 260,
            boxShadow: "0 4px 20px rgba(0,0,0,0.07)", border: "1px solid #f3e8ff"
          }}>
            <div style={{ fontSize: 13, fontWeight: 700, background: "linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: 1, textTransform: "uppercase", marginBottom: 14 }}>📸 Instagram</div>
            <img src={INSTAGRAM_QR_SRC} alt="Instagram QR" style={{ width: 160, height: 160, objectFit: "contain", borderRadius: 12 }} />
            <div style={{ marginTop: 14 }}>
              <a href="https://instagram.com/mkrajvlog" target="_blank" rel="noreferrer" style={{
                display: "inline-block",
                background: "linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)",
                color: "#fff", padding: "8px 18px", borderRadius: 10,
                fontWeight: 700, fontSize: 13, textDecoration: "none"
              }}>@mkrajvlog ↗</a>
            </div>
            <p style={{ fontSize: 12, color: "#aaa", marginTop: 10 }}>Follow for updates</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── FSSAI Certificate ─────────────────────────────────────────────────────────
function FSSAIBadge() {
  return (
    <section style={{ background: "linear-gradient(135deg, #f0f9ff, #e0f2fe)", padding: "48px 24px" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: 24, fontWeight: 900, color: "#1a1a1a", marginBottom: 24 }}>🏛️ FSSAI Certified</h2>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 20, flexWrap: "wrap", justifyContent: "center",
          background: "#fff", borderRadius: 20, padding: "28px 36px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.09)", border: "2px solid #e0f2fe"
        }}>
          {/* FSSAI Logo SVG */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <div style={{
              width: 70, height: 70, borderRadius: 14,
              background: "linear-gradient(135deg, #003087, #0057b7)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 14px rgba(0,48,135,0.3)"
            }}>
              <span style={{ color: "#fff", fontWeight: 900, fontSize: 18, letterSpacing: -1 }}>FSSAI</span>
            </div>
            <span style={{ fontSize: 11, color: "#888", fontWeight: 600 }}>Food Safety</span>
          </div>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: 13, color: "#888", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>License Number</div>
            <div style={{ fontSize: 22, fontWeight: 900, color: "#003087", letterSpacing: 1, marginTop: 2 }}>{FSSAI_NO}</div>
            <div style={{ fontSize: 12, color: "#666", marginTop: 6 }}>
              ✅ Food Safety & Standards Authority of India<br />
              ✅ Hygienically Processed & Packed<br />
              ✅ No Added Preservatives
            </div>
          </div>
        </div>
        <p style={{ fontSize: 13, color: "#888", marginTop: 16 }}>
          All MK Raj products are manufactured under strict FSSAI guidelines at our facility in Hamirpur, UP.
        </p>
      </div>
    </section>
  );
}

// ── Map Section ───────────────────────────────────────────────────────────────
function MapSection() {
  return (
    <section id="findus" style={{ padding: "60px 24px", background: "#f9f9f9" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ fontSize: 28, fontWeight: 900, color: "#8B0000", textAlign: "center", marginBottom: 8 }}>📍 Find Us on Google</h2>
        <p style={{ textAlign: "center", color: "#666", marginBottom: 28 }}>
          MK Raj Company · 153/3, Pathanpura, Rath, Hamirpur, Uttar Pradesh – 210431
        </p>

        {/* Google Business Map */}
        <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.12)", marginBottom: 24 }}>
          <iframe
            title="MK Raj Google Business"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14250.!2d79.5707!3d25.5774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a2f6f6f6f6f6f%3A0x0!2sRath%2C+Hamirpur%2C+Uttar+Pradesh+210431!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%" height="360" style={{ border: 0, display: "block" }}
            allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noreferrer" style={{
            flex: "1 1 180px", background: "#4285F4", color: "#fff", padding: "14px 20px",
            borderRadius: 14, fontWeight: 700, fontSize: 14, textDecoration: "none",
            textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: 8
          }}>
            ⭐ Write a Google Review
          </a>
          <a href="https://www.google.com/maps/search/MK+Raj+Company+Rath+Hamirpur" target="_blank" rel="noreferrer" style={{
            flex: "1 1 180px", background: "#34A853", color: "#fff", padding: "14px 20px",
            borderRadius: 14, fontWeight: 700, fontSize: 14, textDecoration: "none",
            textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: 8
          }}>
            📍 Get Directions
          </a>
          <a href="https://wa.me/919794022167?text=Namaste%2C%20I%20want%20to%20place%20an%20order" target="_blank" rel="noreferrer" style={{
            flex: "1 1 180px", background: "#25D366", color: "#fff", padding: "14px 20px",
            borderRadius: 14, fontWeight: 700, fontSize: 14, textDecoration: "none",
            textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: 8
          }}>
            💬 WhatsApp Order
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Main App ──────────────────────────────────────────────────────────────────
export default function App() {
  const [activeNav, setActiveNav] = useState("home");

  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", minHeight: "100vh", background: "#FAFAFA" }}>

      {/* ── Header ── */}
      <header style={{
        position: "sticky", top: 0, zIndex: 1000,
        background: "rgba(255,255,255,0.97)", backdropFilter: "blur(12px)",
        boxShadow: "0 2px 20px rgba(0,0,0,0.08)", padding: "0 24px",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", height: 64, gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, flex: 1 }}>
            <div style={{
              width: 40, height: 40, borderRadius: 12,
              background: "linear-gradient(135deg, #8B0000, #D4A017)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20
            }}>🌶️</div>
            <div>
              <div style={{ fontWeight: 900, fontSize: 16, color: "#8B0000", lineHeight: 1 }}>MK Raj</div>
              <div style={{ fontSize: 10, color: "#888", letterSpacing: 1 }}>PREMIUM SPICES</div>
            </div>
          </div>
          <nav style={{ display: "flex", gap: 24 }}>
            {[["products","Products"],["about","About"],["findus","Find Us"]].map(([href,label]) => (
              <a key={href} href={`#${href}`} style={{ color: "#555", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>{label}</a>
            ))}
          </nav>
          <a href={`https://wa.me/919794022167?text=Namaste%2C%20I%20want%20to%20order%20spices`} target="_blank" rel="noreferrer" style={{
            background: "#25D366", color: "#fff", padding: "9px 18px",
            borderRadius: 20, fontWeight: 700, fontSize: 13, textDecoration: "none",
            display: "flex", alignItems: "center", gap: 6,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Order Now
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section style={{
        background: "linear-gradient(135deg, #8B0000 0%, #5C1A00 45%, #2D1B00 100%)",
        color: "#fff", padding: "80px 24px 100px", textAlign: "center", position: "relative", overflow: "hidden"
      }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.07, backgroundImage: "radial-gradient(circle at 20% 50%, #D4A017 0%, transparent 50%), radial-gradient(circle at 80% 20%, #C0392B 0%, transparent 40%)" }} />
        <div style={{ position: "relative", maxWidth: 700, margin: "0 auto" }}>
          <div style={{ display: "inline-block", background: "rgba(255,255,255,0.12)", borderRadius: 20, padding: "6px 18px", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", marginBottom: 20 }}>
            🌿 Pure · Natural · Authentic · FSSAI Certified
          </div>
          <h1 style={{ fontSize: "clamp(32px,6vw,58px)", fontWeight: 900, letterSpacing: -1, margin: "0 0 16px", lineHeight: 1.1 }}>
            MK Raj Premium<br /><span style={{ color: "#D4A017" }}>Spices</span>
          </h1>
          <p style={{ fontSize: 17, opacity: 0.85, lineHeight: 1.6, maxWidth: 500, margin: "0 auto 32px" }}>
            Hygienically processed spices from the heart of Hamirpur, UP.<br />
            No added preservatives · FSSAI Lic. No. {FSSAI_NO}
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#products" style={{ background: "#D4A017", color: "#fff", padding: "14px 32px", borderRadius: 16, fontWeight: 800, textDecoration: "none", fontSize: 16, boxShadow: "0 4px 20px rgba(212,160,23,0.4)" }}>See Products →</a>
            <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noreferrer" style={{ background: "rgba(255,255,255,0.13)", color: "#fff", padding: "14px 32px", borderRadius: 16, fontWeight: 700, textDecoration: "none", fontSize: 16, border: "1px solid rgba(255,255,255,0.3)" }}>⭐ Rate Us</a>
          </div>
        </div>
        {["🌶️","🟡","🌿","✨","🫙","🌾"].map((e,i) => (
          <div key={i} style={{ position: "absolute", fontSize: 28, opacity: 0.12, top: `${10+i*14}%`, left: i%2===0 ? `${5+i*3}%` : `${75+i*2}%`, animation: `float${i} ${3+i}s ease-in-out infinite` }}>{e}</div>
        ))}
      </section>

      {/* ── Trust bar ── */}
      <section style={{ background: "#fff", padding: "18px 24px", borderBottom: "1px solid #f0f0f0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 24 }}>
          {[["✅","FSSAI Certified"],["🌿","100% Natural"],["🚫","No Preservatives"],["🧼","Hygienically Packed"],["🇮🇳","Pure Taste of India"]].map(([icon,label]) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <span style={{ fontSize: 16 }}>{icon}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#555" }}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Products ── */}
      <section id="products" style={{ padding: "60px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: 34, fontWeight: 900, color: "#1a1a1a", margin: "0 0 10px" }}>Our Spices</h2>
            <p style={{ color: "#888", fontSize: 15 }}>Available in standup pouches · Select pack → WhatsApp to order</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: 24 }}>
            {SPICES.map(s => <SpiceCard key={s.id} spice={s} />)}
          </div>
        </div>
      </section>

      {/* ── How to Order ── */}
      <section style={{ background: "linear-gradient(135deg,#FFF8F0,#FFF5F5)", padding: "48px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 32 }}>🛒 How to Order</h2>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center" }}>
            {[
              ["1️⃣", "Choose Product", "Select your spice and pack size above"],
              ["2️⃣", "Click WhatsApp", "Tap the WhatsApp Order button"],
              ["3️⃣", "Confirm Order", "Our team will confirm and dispatch"],
            ].map(([num, title, desc]) => (
              <div key={title} style={{ background: "#fff", borderRadius: 16, padding: "24px 20px", flex: "1 1 180px", maxWidth: 220, boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}>
                <div style={{ fontSize: 32, marginBottom: 10 }}>{num}</div>
                <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 6 }}>{title}</div>
                <div style={{ fontSize: 13, color: "#888", lineHeight: 1.5 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FSSAI ── */}
      <FSSAIBadge />

      {/* ── About ── */}
      <section id="about" style={{ background: "#fff", padding: "60px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", gap: 48, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 300px" }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#C0392B", letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>About Us</div>
            <h2 style={{ fontSize: 30, fontWeight: 900, color: "#1a1a1a", marginBottom: 16 }}>Taste of Authentic<br />Indian Spices</h2>
            <p style={{ color: "#666", lineHeight: 1.8, marginBottom: 16 }}>
              MK Raj Company crafts premium quality spices from Rath, Hamirpur, Uttar Pradesh. Our spices are sourced from the finest farms, processed hygienically and packed to retain natural aroma and purity.
            </p>
            <p style={{ color: "#666", lineHeight: 1.8 }}>
              Every pack is FSSAI certified with zero added preservatives — because we believe your food deserves only the best.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
              <a href="https://instagram.com/mkrajvlog" target="_blank" rel="noreferrer" style={{
                display: "flex", alignItems: "center", gap: 8,
                background: "linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)",
                color: "#fff", padding: "10px 20px", borderRadius: 12,
                textDecoration: "none", fontWeight: 700, fontSize: 14,
              }}>📸 @mkrajvlog</a>
              <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noreferrer" style={{
                display: "flex", alignItems: "center", gap: 8,
                background: "#4285F4", color: "#fff", padding: "10px 20px", borderRadius: 12,
                textDecoration: "none", fontWeight: 700, fontSize: 14,
              }}>⭐ Google Review</a>
            </div>
          </div>
          <div style={{ flex: "1 1 240px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[["3+","Spice Varieties"],["6","Pack Sizes"],["100%","Natural"],["FSSAI","Certified"]].map(([num,label]) => (
              <div key={label} style={{ background: "#fafafa", borderRadius: 16, padding: "20px 16px", textAlign: "center", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                <div style={{ fontSize: 26, fontWeight: 900, color: "#8B0000" }}>{num}</div>
                <div style={{ fontSize: 12, color: "#888", marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QR Codes ── */}
      <QRSection />

      {/* ── Helpline ── */}
      <section style={{ background: "#8B0000", padding: "44px 24px", color: "#fff", textAlign: "center" }}>
        <h3 style={{ fontSize: 22, fontWeight: 900, marginBottom: 8 }}>📞 Customer Helpline</h3>
        <p style={{ opacity: 0.8, marginBottom: 24, fontSize: 14 }}>Order via call or WhatsApp — we're happy to help!</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
          {["+91 9794022167", "+91 8858695665", "+91 6392836517"].map(n => (
            <a key={n} href={`tel:${n.replace(/\s/g,"")}`} style={{
              background: "rgba(255,255,255,0.15)", color: "#fff", padding: "11px 24px",
              borderRadius: 20, fontWeight: 700, textDecoration: "none", fontSize: 15,
              border: "1px solid rgba(255,255,255,0.3)",
            }}>{n}</a>
          ))}
        </div>
        <div style={{ marginTop: 20 }}>
          <a href="https://wa.me/919794022167" target="_blank" rel="noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "#25D366", color: "#fff", padding: "12px 28px",
            borderRadius: 16, fontWeight: 800, textDecoration: "none", fontSize: 15
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp Order Now
          </a>
        </div>
      </section>

      {/* ── Map ── */}
      <MapSection />

      {/* ── Footer ── */}
      <footer style={{ background: "#111", color: "#ccc", padding: "40px 24px", textAlign: "center" }}>
        <div style={{ fontSize: 28, marginBottom: 10 }}>🌶️</div>
        <div style={{ fontWeight: 800, color: "#fff", fontSize: 18, marginBottom: 4 }}>MK Raj Company</div>
        <div style={{ fontSize: 13, marginBottom: 6 }}>153/3, Pathanpura, Rath, Hamirpur, UP – 210431</div>
        <div style={{ fontSize: 12, color: "#555", marginBottom: 16 }}>FSSAI Lic. No. {FSSAI_NO}</div>
        <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap", fontSize: 13 }}>
          <a href="https://instagram.com/mkrajvlog" target="_blank" rel="noreferrer" style={{ color: "#D4A017" }}>📸 @mkrajvlog</a>
          <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noreferrer" style={{ color: "#4285F4" }}>⭐ Google Review</a>
          <a href="https://wa.me/919794022167" target="_blank" rel="noreferrer" style={{ color: "#25D366" }}>💬 WhatsApp</a>
          <span>mkraj@gmail.com</span>
        </div>
        <div style={{ marginTop: 20, fontSize: 12, color: "#444" }}>© 2025 MK Raj Company · All rights reserved</div>
      </footer>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { margin: 0; }
        @keyframes float0 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes float1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes float2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-15px)} }
        @keyframes float3 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes float4 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        @keyframes float5 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-18px)} }
        a { transition: opacity 0.15s; }
        a:hover { opacity: 0.82; }
        @media (max-width: 680px) {
          nav { display: none !important; }
        }
      `}</style>
    </div>
  );
}
