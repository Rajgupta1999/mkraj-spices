import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { GOOGLE_REVIEW_URL, FSSAI_NO,BACKGROUND_IMAGE_SRC } from "../data";
import { Helmet } from "react-helmet-async";

export default function Home() {
   const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    
    <>
    
     <Helmet>
  <title>MK Raj Spices | Pure Haldi, Mirchi & Dhaniya Powder</title>
    
  <meta
    name="description"
    content="MK Raj Spices offers pure Haldi Powder, Mirchi Powder and Dhaniya Powder. Hygienically packed, natural Indian spices from Hamirpur, Uttar Pradesh."
  />

  <meta
    name="keywords"
    content="MK Raj Spices, haldi powder, mirchi powder, dhaniya powder, turmeric powder, chilli powder, coriander powder, spices, masala, Hamirpur spices"
  />

  <link rel="canonical" href="https://mkrajspices.netlify.app/" />

  <meta property="og:title" content="MK Raj Spices | Pure Indian Spices" />
  <meta
    property="og:description"
    content="Pure Haldi, Mirchi and Dhaniya Powder by MK Raj Spices. Hygienically packed and FSSAI certified."
  />
  <meta
    property="og:image"
    content="https://mkrajspices.netlify.app/MkRaj_logo.png"
  />
  <meta property="og:url" content="https://mkrajspices.netlify.app/" />
  <meta property="og:type" content="website" />

  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "MK Raj Spices",
      url: "https://mkrajspices.netlify.app/",
      logo: "https://mkrajspices.netlify.app/MkRaj_logo.png",
      description:
        "MK Raj Spices offers pure Haldi Powder, Mirchi Powder and Dhaniya Powder from Hamirpur, Uttar Pradesh.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hamirpur",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
      sameAs: [
        "https://mkrajspices.netlify.app/"
      ],
    })}
  </script>

  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "MK Raj Spices",
      url: "https://mkrajspices.netlify.app/",
      description:
        "Official website of MK Raj Spices for pure Haldi, Mirchi and Dhaniya Powder.",
    })}
  </script>

  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What products does MK Raj Spices sell?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MK Raj Spices sells Haldi Powder, Mirchi Powder and Dhaniya Powder.",
          },
        },
        {
          "@type": "Question",
          name: "Is MK Raj Haldi Powder pure?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, MK Raj Haldi Powder is hygienically packed and made for daily cooking use.",
          },
        },
        {
          "@type": "Question",
          name: "Does MK Raj Spices use preservatives?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, MK Raj Spices products are made without added preservatives.",
          },
        },
        {
          "@type": "Question",
          name: "Where is MK Raj Spices located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MK Raj Spices is based in Hamirpur, Uttar Pradesh, India.",
          },
        },
        {
          "@type": "Question",
          name: "How can I order MK Raj Spices products?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can order MK Raj Spices products through the website or WhatsApp order option.",
          },
        },
      ],
    })}
  </script>
</Helmet>



      {/* <section style={{
        // background: "linear-gradient(135deg, #22ca8c 0%, #5C1A00 45%, #2D1B00 100%)",
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
      </section> */}

<section
  className="home-hero"
  style={{
    backgroundImage: `url(${BACKGROUND_IMAGE_SRC})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "#fff",
    minHeight: "520px",
    padding: "80px 24px 100px",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
  }}
>
  <div
    style={{
      position: "relative",
      maxWidth: 700,
      marginLeft: "5%",
      textAlign: "left",
      zIndex: 2,
    }}
  >
    <div
      style={{
        display: "inline-block",
        background: "rgba(255,255,255,0.12)",
        borderRadius: 20,
        padding: "8px 20px",
        fontSize: 12,
        letterSpacing: 2,
        textTransform: "uppercase",
        marginBottom: 24,
      }}
    >
      🌿 Pure · Natural · Authentic · FSSAI Certified
    </div>

    <h1
      style={{
        fontSize: "clamp(42px,6vw,68px)",
        fontWeight: 900,
        letterSpacing: -1,
        margin: "0 0 18px",
        lineHeight: 1.05,
        color: "#fff",
      }}
    >
      MK Raj Premium
      <br />
      <span style={{ color: "#D4A017" }}>Spices</span>
    </h1>

    <p
      style={{
        fontSize: 18,
        opacity: 0.95,
        lineHeight: 1.6,
        maxWidth: 620,
        margin: "0 0 34px",
      }}
    >
      Hygienically processed spices from the heart of Hamirpur, UP.
      <br />
      No added preservatives · FSSAI Lic. No. {FSSAI_NO}
    </p>

    <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
      <Link
        to="/products"
        style={{
          background: "#D4A017",
          color: "#fff",
          padding: "16px 36px",
          borderRadius: 16,
          fontWeight: 800,
          textDecoration: "none",
          fontSize: 16,
        }}
      >
        See Products →
      </Link>

      <a
        href={GOOGLE_REVIEW_URL}
        target="_blank"
        rel="noreferrer"
        style={{
          background: "rgba(255,255,255,0.13)",
          color: "#fff",
          padding: "16px 36px",
          borderRadius: 16,
          fontWeight: 700,
          textDecoration: "none",
          fontSize: 16,
          border: "1px solid rgba(255,255,255,0.3)",
        }}
      >
        ⭐ Rate Us
      </a>
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
<section
  style={{
    padding: "90px 20px",
    background:
      "linear-gradient(135deg,#fff8f0,#fff2e5,#fffaf8)",
    display: "flex",
    justifyContent: "center",
  }}
>
  <div
    style={{
      background: "#7e81c7",
      borderRadius: "30px",
      padding: "10px",
      boxShadow: "0 25px 60px rgba(0,0,0,.12)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      transition: "all 0.4s ease",
    }}
    onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-10px) scale(1.03)";
    e.currentTarget.style.boxShadow = "0 40px 80px rgba(0,0,0,.25)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0) scale(1)";
    e.currentTarget.style.boxShadow = "0 25px 60px rgba(0,0,0,.12)";
  }}
  >
    <img
      src="/public/dhaniya.jpg"
      alt="MK Raj Premium Spices"
      style={{
        width: "300px",
        maxWidth: "70%",
        display: "block",
        transition: "transform .4s ease",
      }}
      onMouseEnter={(e) => {
      e.currentTarget.style.transform = "scale(1.08) rotate(-2deg)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "scale(1) rotate(0deg)";
    }}
    />
  </div>
  <div
    style={{
      background: "#7e81c7",
      borderRadius: "30px",
      padding: "10px",
      boxShadow: "0 25px 60px rgba(0,0,0,.12)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      transition: "all 0.4s ease",
    }}
     onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-10px) scale(1.03)";
    e.currentTarget.style.boxShadow = "0 40px 80px rgba(0,0,0,.25)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0) scale(1)";
    e.currentTarget.style.boxShadow = "0 25px 60px rgba(0,0,0,.12)";
  }}
  >
    <img
      src="/public/haldi.jpg"
      alt="MK Raj Premium Spices"
      style={{
         width: "300px",
        maxWidth: "70%",
        display: "block",
        transition: "transform .4s ease",
       }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "scale(1.08) rotate(-2deg)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "scale(1) rotate(0deg)";
    }}
    />
  </div>
   <div
    style={{
      background: "#7e81c7",
      borderRadius: "30px",
      padding: "10px",
      boxShadow: "0 25px 60px rgba(0,0,0,.12)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      transition: "all 0.4s ease",
    }}
    onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-10px) scale(1.03)";
    e.currentTarget.style.boxShadow = "0 40px 80px rgba(0,0,0,.25)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0) scale(1)";
    e.currentTarget.style.boxShadow = "0 25px 60px rgba(0,0,0,.12)";
  }}
  >
    <img
      src="/public/mirchi.jpg"
      alt="MK Raj Premium Spices"
      style={{
        width: "300px",
        maxWidth: "70%",
        display: "block",
        transition: "transform .4s ease",
      }}
      onMouseEnter={(e) => {
      e.currentTarget.style.transform = "scale(1.08) rotate(-2deg)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "scale(1) rotate(0deg)";
    }}
    />
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

      <section style={{ background: "#fff", padding: "50px 24px" }}>
  <div style={{ maxWidth: 900, margin: "0 auto" }}>
    <h2 style={{ fontSize: 28, fontWeight: 900, textAlign: "center", marginBottom: 16 }}>
      Why Choose MK Raj Spices?
    </h2>

    <p style={{ textAlign: "center", color: "#666", lineHeight: 1.7, maxWidth: 700, margin: "0 auto 30px" }}>
      MK Raj Spices provides pure, natural and hygienically packed Indian spices including Haldi Powder,
      Mirchi Powder and Dhaniya Powder. Our spices are suitable for daily cooking and made with a focus
      on quality, freshness and authentic Indian taste.
    </p>

    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
      {[
        "Pure Indian Spices",
        "No Added Preservatives",
        "Hygienically Packed",
        "FSSAI Certified",
        "Natural Taste",
        "Made in Uttar Pradesh"
      ].map((item) => (
        <div key={item} style={{
          background: "#FFF8F0",
          padding: "14px 20px",
          borderRadius: 14,
          fontWeight: 700,
          color: "#5C1A00"
        }}>
          ✅ {item}
        </div>
      ))}
    </div>
  </div>
</section>

<section style={{ background: "linear-gradient(135deg,#FFF8F0,#FFF5F5)", padding: "50px 24px" }}>
  <div style={{ maxWidth: 850, margin: "0 auto" }}>
    <h2 style={{ fontSize: 28, fontWeight: 900, textAlign: "center", marginBottom: 28 }}>
      Frequently Asked Questions
    </h2>

    {[
      [
        "What products does MK Raj Spices sell?",
        "MK Raj Spices sells Haldi Powder, Mirchi Powder and Dhaniya Powder."
      ],
      [
        "Is MK Raj Haldi Powder pure?",
        "Yes, MK Raj Haldi Powder is hygienically packed and made for daily cooking use."
      ],
      [
        "Does MK Raj Spices use preservatives?",
        "No, MK Raj Spices products are made without added preservatives."
      ],
      [
        "Where is MK Raj Spices located?",
        "MK Raj Spices is based in Hamirpur, Uttar Pradesh, India."
      ],
      [
        "How can I order MK Raj Spices products?",
        "You can order MK Raj Spices products through the website or WhatsApp order option."
      ]
    ].map(([q, a]) => (
      <div key={q} style={{
        background: "#fff",
        padding: "20px 22px",
        borderRadius: 16,
        marginBottom: 14,
        boxShadow: "0 2px 14px rgba(0,0,0,0.06)"
      }}>
        <h3 style={{ margin: "0 0 8px", fontSize: 17, color: "#5C1A00" }}>{q}</h3>
        <p style={{ margin: 0, color: "#666", lineHeight: 1.6 }}>{a}</p>
      </div>
    ))}
  </div>
</section>

<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MK Raj Spices",
    image: "https://mkrajspices.netlify.app/MkRaj_logo.png",
    url: "https://mkrajspices.netlify.app/",
    description:
      "MK Raj Spices offers pure Haldi Powder, Mirchi Powder and Dhaniya Powder from Hamirpur, Uttar Pradesh.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hamirpur",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN"
    },
    areaServed: "India",
    priceRange: "₹₹"
  })}
</script>

    </>
  );
}