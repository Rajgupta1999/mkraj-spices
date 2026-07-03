import { GOOGLE_REVIEW_URL } from "../data";
import { Helmet } from "react-helmet-async";
import OrderLink from "../components/OrderLink";

export default function FindUs() {
  const address =
    "153/3, Pathanpura, Rath, Hamirpur, Uttar Pradesh 210431";

  return (
    <>
      <Helmet>
        <title>Find MK Raj Spices | Rath Hamirpur Uttar Pradesh</title>

        <meta
          name="description"
          content="Find MK Raj Spices in Rath, Hamirpur, Uttar Pradesh. Contact us for Haldi Powder, Mirchi Powder and Dhaniya Powder orders through call or WhatsApp."
        />

        <meta
          name="keywords"
          content="MK Raj Spices address, MK Raj Rath Hamirpur, spices in Hamirpur, haldi powder Rath, mirchi powder Hamirpur, dhaniya powder Uttar Pradesh"
        />

        <link rel="canonical" href="https://mkrajspices.netlify.app/find-us" />

        <meta property="og:title" content="Find MK Raj Spices" />
        <meta
          property="og:description"
          content="Visit or contact MK Raj Spices in Rath, Hamirpur, Uttar Pradesh."
        />
        <meta
          property="og:image"
          content="https://mkrajspices.netlify.app/MkRaj_logo.png"
        />
        <meta
          property="og:url"
          content="https://mkrajspices.netlify.app/find-us"
        />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "MK Raj Spices",
            image: "https://mkrajspices.netlify.app/MkRaj_logo.png",
            url: "https://mkrajspices.netlify.app/find-us",
            description:
              "MK Raj Spices offers pure Haldi Powder, Mirchi Powder and Dhaniya Powder from Rath, Hamirpur, Uttar Pradesh.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "153/3, Pathanpura",
              addressLocality: "Rath, Hamirpur",
              addressRegion: "Uttar Pradesh",
              postalCode: "210431",
              addressCountry: "IN",
            },
            telephone: "+91 9794022167",
            areaServed: "India",
            priceRange: "₹₹",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "09:00",
                closes: "20:00",
              },
            ],
            sameAs: [GOOGLE_REVIEW_URL],
          })}
        </script>
      </Helmet>

      <section style={{ padding: "60px 24px", background: "#f9f9f9" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h1
            style={{
              fontSize: 30,
              fontWeight: 900,
              color: "#8B0000",
              textAlign: "center",
              marginBottom: 8,
            }}
          >
            📍 Find MK Raj Spices
          </h1>

          <p
            style={{
              textAlign: "center",
              color: "#666",
              marginBottom: 28,
              lineHeight: 1.7,
            }}
          >
            MK Raj Company · {address}
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: 18,
              padding: 22,
              marginBottom: 24,
              boxShadow: "0 4px 22px rgba(0,0,0,0.08)",
            }}
          >
            <h2 style={{ marginTop: 0, color: "#5C1A00", fontSize: 22 }}>
              Address & Contact
            </h2>

            <p style={{ color: "#666", lineHeight: 1.7 }}>
              <b>Business Name:</b> MK Raj Spices
              <br />
              <b>Address:</b> {address}
              <br />
              <b>Phone:</b> +91 9794022167, +91 6392836517
              <br />
              <b>WhatsApp:</b> +91 9794022167
              <br />
              <b>Opening Hours:</b> Monday to Sunday, 9:00 AM to 8:00 PM
            </p>
          </div>

          <div
            style={{
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              marginBottom: 24,
            }}
          >
            <iframe
              title="MK Raj Spices Google Map"
              src="https://www.google.com/maps?q=MK%20Raj%20Company%20153%2F3%20Pathanpura%20Rath%20Hamirpur%20Uttar%20Pradesh%20210431&output=embed"
              width="100%"
              height="360"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>


          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noreferrer"
              style={{
                flex: "1 1 180px",
                background: "#4285F4",
                color: "#fff",
                padding: "14px 20px",
                borderRadius: 14,
                fontWeight: 700,
                fontSize: 14,
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              ⭐ Write a Google Review
            </a>

            <a
              href="https://www.google.com/maps/search/MK+Raj+Company+153%2F3+Pathanpura+Rath+Hamirpur+Uttar+Pradesh+210431"
              target="_blank"
              rel="noreferrer"
              style={{
                flex: "1 1 180px",
                background: "#34A853",
                color: "#fff",
                padding: "14px 20px",
                borderRadius: 14,
                fontWeight: 700,
                fontSize: 14,
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              📍 Get Directions
            </a>

            <OrderLink
              message={"Namaste! Mujhe MK Raj Spices ka order place karna hai.\nPlease confirm karein."}
              style={{
                flex: "1 1 180px",
                background: "#25D366",
                color: "#fff",
                padding: "14px 20px",
                borderRadius: 14,
                fontWeight: 700,
                fontSize: 14,
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              💬 WhatsApp Order
            </OrderLink>
          </div>
        </div>
      </section>

      <section
        style={{
          background: "#8B0000",
          padding: "44px 24px",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 8 }}>
          📞 Customer Helpline
        </h2>

        <p style={{ opacity: 0.8, marginBottom: 24, fontSize: 14 }}>
          Order via call or WhatsApp — we are happy to help!
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 14,
            flexWrap: "wrap",
          }}
        >
          {["+91 9794022167", "+91 6392836517"].map((n) => (
            <a
              key={n}
              href={`tel:${n.replace(/\s/g, "")}`}
              style={{
                background: "rgba(255,255,255,0.15)",
                color: "#fff",
                padding: "11px 24px",
                borderRadius: 20,
                fontWeight: 700,
                textDecoration: "none",
                fontSize: 15,
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              {n}
            </a>
          ))}
        </div>
      </section>
    </>
  );
}