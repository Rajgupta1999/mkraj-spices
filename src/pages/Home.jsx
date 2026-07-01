import { Link } from "react-router-dom";
import { GOOGLE_REVIEW_URL, FSSAI_NO } from "../data";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
     <Helmet>
        <title>MK Raj Spices | Pure Haldi, Mirchi & Dhaniya Powder</title>
        <meta
          name="description"
          content="MK Raj Spices offers pure Haldi Powder, Mirchi Powder and Dhaniya Powder. Hygienically packed, natural Indian spices from Hamirpur, UP."
        />
        <meta
          name="keywords"
          content="MK Raj Spices, haldi powder, mirchi powder, dhaniya powder, spices, masala, Hamirpur spices"
        />
        <link rel="canonical" href="https://mkrajspices.netlify.app/" />

        <meta property="og:title" content="MK Raj Spices" />
        <meta
          property="og:description"
          content="Pure Haldi, Mirchi and Dhaniya Powder by MK Raj Spices."
        />
        <meta
          property="og:image"
          content="https://mkrajspices.netlify.app/MkRaj_logo.png"
        />
        <meta property="og:url" content="https://mkrajspices.netlify.app/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section style={{
        background: "linear-gradient(135deg, #8B0000 0%, #5C1A00 45%, #2D1B00 100%)",
        color: "#fff", padding: "80px 24px 100px", textAlign: "center", position: "relative", overflow: "hidden"
      }}>
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
            <Link to="/products" style={{ background: "#D4A017", color: "#fff", padding: "14px 32px", borderRadius: 16, fontWeight: 800, textDecoration: "none", fontSize: 16 }}>See Products →</Link>
            <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noreferrer" style={{ background: "rgba(255,255,255,0.13)", color: "#fff", padding: "14px 32px", borderRadius: 16, fontWeight: 700, textDecoration: "none", fontSize: 16, border: "1px solid rgba(255,255,255,0.3)" }}>⭐ Rate Us</a>
          </div>
        </div>
      </section>

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

      <section style={{ background: "linear-gradient(135deg,#FFF8F0,#FFF5F5)", padding: "48px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 32 }}>🛒 How to Order</h2>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center" }}>
            {[
              ["1️⃣", "Choose Product", "Select your spice and pack size"],
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
    </>
  );
}