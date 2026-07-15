import { SPICES, FSSAI_NO } from "../data";
import SpiceCard from "../components/SpiceCard";
import { Helmet } from "react-helmet-async";

export default function Products() {
  const productSchema = SPICES.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: `MK Raj ${s.name}`,
    brand: {
      "@type": "Brand",
      name: "MK Raj Spices",
    },
    description: `MK Raj ${s.name} is a hygienically packed Indian spice product. Suitable for daily cooking and authentic Indian taste.`,
    image: s.image
      ? `https://mkrajspices.netlify.app${s.image}`
      : "https://mkrajspices.netlify.app/MkRaj_logo.png",
    category: "Spices",
    url: "https://mkrajspices.netlify.app/products",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      url: "https://mkrajspices.netlify.app/products",
    },
  }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which MK Raj Spices products are available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MK Raj Spices offers Haldi Powder, Mirchi Powder, Dhaniya Powder and Garam Masala.",
        },
      },
      {
        "@type": "Question",
        name: "What pack sizes are available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MK Raj Spices products are available in different pack sizes such as 20g, 40g, 100g and 200g depending on product availability.",
        },
      },
      {
        "@type": "Question",
        name: "How should I store MK Raj Spices?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Store MK Raj Spices in a cool and dry place. Keep the pack tightly closed after opening.",
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>MK Raj Products | Haldi, Mirchi, Dhaniya & Garam Masala</title>

        <meta
          name="description"
          content="Buy MK Raj Haldi Powder, Mirchi Powder, Dhaniya Powder and Garam Masala. Pure Indian spices, hygienically packed, FSSAI certified and available in multiple pack sizes."
        />

        <meta
          name="keywords"
          content="MK Raj products, haldi powder, mirchi powder, dhaniya powder, turmeric powder, chilli powder, coriander powder, Indian spices"
        />

        <link rel="canonical" href="https://mkrajspices.netlify.app/products" />

        <meta property="og:title" content="MK Raj Spices Products" />
        <meta
          property="og:description"
          content="Explore MK Raj Haldi, Mirchi, Dhaniya Powder and Garam Masala."
        />
        <meta
          property="og:image"
          content="https://mkrajspices.netlify.app/MkRaj_logo.png"
        />
        <meta
          property="og:url"
          content="https://mkrajspices.netlify.app/products"
        />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <section style={{ padding: "60px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h1
              style={{
                fontSize: 34,
                fontWeight: 900,
                color: "#1a1a1a",
                margin: "0 0 10px",
              }}
            >
              MK Raj Spices Products
            </h1>

            <p style={{ color: "#888", fontSize: 15 }}>
              Pure Haldi Powder, Mirchi Powder, Dhaniya Powder and Garam Masala · FSSAI Lic.
              No. {FSSAI_NO}
            </p>
          </div>


          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
              gap: 24,
            }}
          >
            {SPICES.map((s) => (
              <SpiceCard key={s.id} spice={s} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#e28e2d", padding: "50px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 900 }}>
            Product Details
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
              marginTop: 30,
            }}
          >
            {[
              {
                title: "Haldi Powder",
                ingredients: "Turmeric",
                uses: "Daily cooking, sabzi, dal, curry and traditional recipes.",
              },
              {
                title: "Mirchi Powder",
                ingredients: "Red chilli",
                uses: "For spicy flavour, curry, sabzi, chutney and masala recipes.",
              },
              {
                title: "Dhaniya Powder",
                ingredients: "Coriander seeds",
                uses: "For aroma and flavour in vegetables, curries and Indian dishes.",
              },
              {
                title: "Garam Masala",
                ingredients: "Tej Patta,Saunf,Shah Jeera,Jeera,Kali Mirch,Dalchini,Laung,Hari Elaichi,Saunth,Shah Jeera,Badi Elaichi,Jaiphal,Javitri,Kabab Chini,Safed Mirch,Pathar Phool,Choti Pipli",
                uses: "For rich aroma and flavour in curry, paneer, pulao, biryani and traditional dishes.",
              },
            ].map((p) => (
              <div
                key={p.title}
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  padding: 22,
                  boxShadow: "0 2px 14px rgba(0,0,0,0.06)",
                }}
              >
                {/* <h3 style={{ marginTop: 0, color: "#5C1A00" }}>
                  MK Raj {p.title}
                </h3>
                <p>
                  <b>Ingredients:</b> {p.ingredients}
                </p>
                <p>
                  <b>Uses:</b> {p.uses}
                </p>
                <p>
                  <b>Storage:</b> Store in a cool and dry place. Keep pack
                  tightly closed after opening.
                </p>
                <p>
                  <b>Pack Sizes:</b> 20g, 40g, 100g, 200g
                </p>
                <p>
                  <b>FSSAI:</b> {FSSAI_NO}
                </p> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "50px 24px" }}>
        <div style={{ maxWidth: 850, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 900 }}>
            Product FAQs
          </h2>

          {[
            [
              "Which MK Raj Spices products are available?",
              "MK Raj Spices offers Haldi Powder, Mirchi Powder, Dhaniya Powder and Garam Masala.",
            ],
            [
              "What pack sizes are available?",
              "MK Raj Spices products are available in 20g, 40g, 100g and 200g packs depending on availability.",
            ],
            [
              "How should I store MK Raj Spices?",
              "Store the spices in a cool and dry place. Keep the pack tightly closed after opening.",
            ],
          ].map(([q, a]) => (
            <div
              key={q}
              style={{
                background: "#FFF8F0",
                padding: "18px 22px",
                borderRadius: 14,
                marginTop: 14,
              }}
            >
              <h3 style={{ margin: "0 0 8px", color: "#5C1A00" }}>{q}</h3>
              <p style={{ margin: 0, color: "#666", lineHeight: 1.6 }}>{a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}