import {
  GOOGLE_REVIEW_URL,
  GOOGLE_QR_SRC,
  FSSAI_CERTIFICATE_URL,
  FSSAI_NO,
  FSSAI_QR_SRC,
  INSTAGRAM_QR_SRC,
  INSTAGRAM_URL,
} from "../data";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About MK Raj Spices | Pure Indian Spices from Hamirpur UP</title>

        <meta
          name="description"
          content="Learn about MK Raj Spices, a pure Indian spices brand from Rath, Hamirpur, Uttar Pradesh offering hygienically packed Haldi Powder, Mirchi Powder and Dhaniya Powder."
        />

        <meta
          name="keywords"
          content="about MK Raj Spices, MK Raj company, spices from Hamirpur, Rath spices, pure haldi powder, mirchi powder, dhaniya powder"
        />

        <link rel="canonical" href="https://mkrajspices.netlify.app/about" />

        <meta property="og:title" content="About MK Raj Spices" />
        <meta
          property="og:description"
          content="MK Raj Spices offers pure, natural and hygienically packed Indian spices from Hamirpur, Uttar Pradesh."
        />
        <meta
          property="og:image"
          content="https://mkrajspices.netlify.app/MkRaj_logo.png"
        />
        <meta property="og:url" content="https://mkrajspices.netlify.app/about" />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About MK Raj Spices",
            url: "https://mkrajspices.netlify.app/about",
            description:
              "About MK Raj Spices, a pure Indian spices brand from Rath, Hamirpur, Uttar Pradesh.",
            mainEntity: {
              "@type": "Organization",
              name: "MK Raj Spices",
              url: "https://mkrajspices.netlify.app/",
              logo: "https://mkrajspices.netlify.app/MkRaj_logo.png",
              description:
                "MK Raj Spices offers pure Haldi Powder, Mirchi Powder and Dhaniya Powder.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Rath, Hamirpur",
                addressRegion: "Uttar Pradesh",
                addressCountry: "IN",
              },
              sameAs: [INSTAGRAM_URL, GOOGLE_REVIEW_URL],
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is MK Raj Spices?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "MK Raj Spices is an Indian spices brand from Rath, Hamirpur, Uttar Pradesh offering Haldi Powder, Mirchi Powder and Dhaniya Powder.",
                },
              },
              {
                "@type": "Question",
                name: "Is MK Raj Spices FSSAI certified?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Yes, MK Raj Spices is FSSAI certified with license number ${FSSAI_NO}.`,
                },
              },
              {
                "@type": "Question",
                name: "Does MK Raj Spices add preservatives?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, MK Raj Spices products are made without added preservatives.",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      <section style={{ background: "#fff", padding: "60px 24px" }}>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "flex",
            gap: 48,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "1 1 300px" }}>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#C0392B",
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              About Us
            </div>

            <h1
              style={{
                fontSize: 30,
                fontWeight: 900,
                color: "#1a1a1a",
                marginBottom: 16,
              }}
            >
              Taste of Authentic Indian Spices
            </h1>

            <p style={{ color: "#666", lineHeight: 1.8, marginBottom: 16 }}>
              MK Raj Spices is a growing Indian spice brand from Rath, Hamirpur,
              Uttar Pradesh. We provide Haldi Powder, Mirchi Powder and Dhaniya
              Powder for daily cooking with a focus on purity, aroma and
              authentic Indian taste.
            </p>

            <p style={{ color: "#666", lineHeight: 1.8 }}>
              Our spices are hygienically processed and packed to retain natural
              freshness. Every pack is connected with our commitment to quality
              and food safety. FSSAI Lic. No. {FSSAI_NO}
            </p>

            <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)",
                  color: "#fff",
                  padding: "10px 20px",
                  borderRadius: 12,
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: 14,
                }}
              >
                📸 @mkrajvlog
              </a>

              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "#4285F4",
                  color: "#fff",
                  padding: "10px 20px",
                  borderRadius: 12,
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: 14,
                }}
              >
                ⭐ Google Review
              </a>
            </div>
          </div>

          <div
            style={{
              flex: "1 1 240px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
            }}
          >
            {[
              ["3+", "Spice Varieties"],
              ["4+", "Pack Sizes"],
              ["100%", "Natural Taste"],
              ["FSSAI", "Certified"],
            ].map(([num, label]) => (
              <div
                key={label}
                style={{
                  background: "#fafafa",
                  borderRadius: 16,
                  padding: "20px 16px",
                  textAlign: "center",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                <div style={{ fontSize: 26, fontWeight: 900, color: "#8B0000" }}>
                  {num}
                </div>
                <div style={{ fontSize: 12, color: "#888", marginTop: 4 }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#FFF8F0", padding: "50px 24px" }}>
        <div style={{ maxWidth: 950, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 28, fontWeight: 900 }}>Our Quality Process</h2>
          <p style={{ color: "#666", lineHeight: 1.8, maxWidth: 720, margin: "12px auto 30px" }}>
            MK Raj Spices focuses on clean processing, careful packing and
            customer trust. Our aim is to deliver natural Indian taste in every
            kitchen through reliable spice products.
          </p>

          <div style={{ display: "flex", gap: 18, flexWrap: "wrap", justifyContent: "center" }}>
            {[
              ["🌾", "Selected Raw Material"],
              ["🧼", "Hygienic Processing"],
              ["📦", "Safe Packaging"],
              ["✅", "FSSAI Certified"],
            ].map(([icon, text]) => (
              <div
                key={text}
                style={{
                  background: "#fff",
                  padding: "20px",
                  borderRadius: 16,
                  width: 190,
                  boxShadow: "0 2px 14px rgba(0,0,0,0.06)",
                  fontWeight: 800,
                  color: "#5C1A00",
                }}
              >
                <div style={{ fontSize: 30, marginBottom: 8 }}>{icon}</div>
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* बाकी आपका FSSAI Certified और Connect With Us section same रख सकते हो */}
      
      <section style={{ background: "#fff", padding: "60px 24px" }}>
  <div style={{ maxWidth: 1000, margin: "0 auto" }}>
    <div style={{ textAlign: "center", marginBottom: 40 }}>
      <h2 style={{ fontSize: 28, fontWeight: 900, color: "#1a1a1a" }}>
        Connect With Us
      </h2>
      <p style={{ color: "#888" }}>Scan QR codes to review, follow or verify</p>
    </div>

    <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
      <div style={{ background: "#f9f9f9", borderRadius: 20, padding: "28px 24px", textAlign: "center", flex: "1 1 220px", maxWidth: 260, boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#4285F4", marginBottom: 14 }}>
          ⭐ GOOGLE REVIEW
        </div>
        <img
          src={GOOGLE_QR_SRC}
          alt="MK Raj Spices Google Review QR Code"
          style={{ width: 160, height: 160, objectFit: "contain", marginBottom: 16 }}
        />
        <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noreferrer" style={{
          display: "inline-block",
          background: "#4285F4",
          color: "#fff",
          padding: "8px 18px",
          borderRadius: 10,
          fontWeight: 700,
          fontSize: 13,
          textDecoration: "none"
        }}>
          Rate Us on Google ↗
        </a>
      </div>

      <div style={{ background: "#f0fdf4", borderRadius: 20, padding: "28px 24px", textAlign: "center", flex: "1 1 220px", maxWidth: 260, boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#25D366", marginBottom: 14 }}>
          📄 FSSAI CERTIFICATE
        </div>
        <img
          src={FSSAI_QR_SRC}
          alt="MK Raj Spices FSSAI Certificate QR Code"
          style={{ width: 160, height: 160, objectFit: "contain", marginBottom: 16 }}
        />
        <a href={FSSAI_CERTIFICATE_URL} target="_blank" rel="noreferrer" style={{
          display: "inline-block",
          background: "#25D366",
          color: "#fff",
          padding: "8px 18px",
          borderRadius: 10,
          fontWeight: 700,
          fontSize: 13,
          textDecoration: "none"
        }}>
          View FSSAI Certificate ↗
        </a>
      </div>

      <div style={{ background: "#fdf0ff", borderRadius: 20, padding: "28px 24px", textAlign: "center", flex: "1 1 220px", maxWidth: 260, boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#833ab4", marginBottom: 14 }}>
          📸 INSTAGRAM
        </div>
        <img
          src={INSTAGRAM_QR_SRC}
          alt="MK Raj Spices Instagram QR Code"
          style={{ width: 160, height: 160, objectFit: "contain", marginBottom: 16 }}
        />
        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" style={{
          display: "inline-block",
          background: "#833ab4",
          color: "#fff",
          padding: "8px 18px",
          borderRadius: 10,
          fontWeight: 700,
          fontSize: 13,
          textDecoration: "none"
        }}>
          Follow on Instagram ↗
        </a>
      </div>
    </div>
  </div>
</section>
    </>
  );
}