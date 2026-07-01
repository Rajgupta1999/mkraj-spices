import { GOOGLE_REVIEW_URL,GOOGLE_QR_SRC, FSSAI_CERTIFICATE_URL,FSSAI_NO , FSSAI_QR_SRC,  INSTAGRAM_QR_SRC , INSTAGRAM_URL } from "../data";
import { Helmet } from "react-helmet-async";
export default function About() {
  return (
    <>
    <Helmet>
  <title>Products | MK Raj Spices</title>
  <meta
    name="description"
    content="Explore MK Raj Spices products including Haldi Powder, Mirchi Powder and Dhaniya Powder."
  />
  <link rel="canonical" href="https://mkrajspices.netlify.app/products" />
</Helmet>
      <section style={{ background: "#fff", padding: "60px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", gap: 48, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 300px" }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#C0392B", letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>About Us</div>
            <h2 style={{ fontSize: 30, fontWeight: 900, color: "#1a1a1a", marginBottom: 16 }}>Taste of Authentic<br />Indian Spices</h2>
            <p style={{ color: "#666", lineHeight: 1.8, marginBottom: 16 }}>
              MK Raj Company crafts premium quality spices from Rath, Hamirpur, Uttar Pradesh. Our spices are sourced from the finest farms, processed hygienically and packed to retain natural aroma and purity.
            </p>
            <p style={{ color: "#666", lineHeight: 1.8 }}>
              Every pack is FSSAI certified with zero added preservatives.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" style={{ background: "linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)", color: "#fff", padding: "10px 20px", borderRadius: 12, textDecoration: "none", fontWeight: 700, fontSize: 14 }}>📸 @mkrajvlog</a>
              <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noreferrer" style={{ background: "#4285F4", color: "#fff", padding: "10px 20px", borderRadius: 12, textDecoration: "none", fontWeight: 700, fontSize: 14 }}>⭐ Google Review</a>
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

      <section style={{ background: "linear-gradient(135deg, #f0f9ff, #e0f2fe)", padding: "48px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, color: "#1a1a1a", marginBottom: 24 }}>🏛️ FSSAI Certified</h2>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 20, flexWrap: "wrap", justifyContent: "center", background: "#fff", borderRadius: 20, padding: "28px 36px", boxShadow: "0 4px 24px rgba(0,0,0,0.09)", border: "2px solid #e0f2fe" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
              <div style={{ width: 70, height: 70, borderRadius: 14, background: "linear-gradient(135deg, #003087, #0057b7)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#fff", fontWeight: 900, fontSize: 18 }}>FSSAI</span>
              </div>
              <span style={{ fontSize: 11, color: "#888", fontWeight: 600 }}>Food Safety</span>
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 13, color: "#888", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>License Number</div>
              <div style={{ fontSize: 22, fontWeight: 900, color: "#003087", marginTop: 2 }}>{FSSAI_NO}</div>
              <div style={{ fontSize: 12, color: "#666", marginTop: 6 }}>
                ✅ FSSAI Recognised<br />
                ✅ Hygienically Processed & Packed<br />
                ✅ No Added Preservatives
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "60px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: 28, fontWeight: 900, color: "#1a1a1a" }}>Connect With Us</h2>
            <p style={{ color: "#888" }}>Scan QR codes to review, follow or order</p>
          </div>

          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
            <div style={{ background: "#f9f9f9", borderRadius: 20, padding: "28px 24px", textAlign: "center", flex: "1 1 220px", maxWidth: 260, boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#4285F4", marginBottom: 14 }}>⭐ GOOGLE REVIEW</div>
              <img src={GOOGLE_QR_SRC} alt="Google Review QR" style={{ width: 160, height: 160 }} />
              <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noreferrer" style={{
                       display: "inline-block", background: "#4285F4", color: "#fff",
                       padding: "8px 18px", borderRadius: 10, fontWeight: 700, fontSize: 13, textDecoration: "none"
                       }}>Rate Us on Google ↗</a>
            </div>

            
            <div style={{ background: "#f0fdf4", borderRadius: 20, padding: "28px 24px", textAlign: "center", flex: "1 1 220px", maxWidth: 260, boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#25D366", marginBottom: 14 }}>📄 FSSAI CERTIFICATE</div>
              <img src={FSSAI_QR_SRC} alt="FSSAI Certificate" style={{ width: 160, height: 160 }} />
              <a href={FSSAI_CERTIFICATE_URL} target="_blank" rel="noreferrer" style={{
                       display: "inline-block", background: "#25D366", color: "#fff",
                       padding: "8px 18px", borderRadius: 10, fontWeight: 700, fontSize: 13, textDecoration: "none"
                       }}>View FSSAI Certificate ↗</a>
            </div>
            <div style={{ background: "#fdf0ff", borderRadius: 20, padding: "28px 24px", textAlign: "center", flex: "1 1 220px", maxWidth: 260, boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#833ab4", marginBottom: 14 }}>📸 INSTAGRAM</div>
              <img src={INSTAGRAM_QR_SRC} alt="Instagram QR" style={{ width: 160, height: 160 }} />
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" style={{
                       display: "inline-block", background: "#833ab4", color: "#fff",
                       padding: "8px 18px", borderRadius: 10, fontWeight: 700, fontSize: 13, textDecoration: "none"
                       }}>Follow on Instagram ↗</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}