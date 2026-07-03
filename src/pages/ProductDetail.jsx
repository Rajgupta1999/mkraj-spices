import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FSSAI_NO } from "../data";

const productData = {
  "haldi-powder": {
    name: "Haldi Powder",
    hindi: "हल्दी पाउडर",
    ingredient: "Turmeric",
    image: "/haldi.jpg",
    description:
      "MK Raj Haldi Powder is hygienically packed turmeric powder for daily Indian cooking.",
    uses: "Dal, sabzi, curry, pickle, traditional recipes and daily cooking.",
    benefits: [
      "Natural colour and aroma",
      "Useful for daily cooking",
      "No added preservatives",
      "FSSAI certified",
    ],
    keywords:
      "MK Raj Haldi Powder, pure haldi powder, turmeric powder, haldi powder in India",
  },
  "mirchi-powder": {
    name: "Mirchi Powder",
    hindi: "मिर्च पाउडर",
    ingredient: "Red Chilli",
    image: "/mirchi.jpg",
    description:
      "MK Raj Mirchi Powder gives spicy taste and rich colour to Indian dishes.",
    uses: "Sabzi, curry, chutney, namkeen, snacks and masala recipes.",
    benefits: [
      "Spicy flavour",
      "Rich colour",
      "Hygienically packed",
      "No added preservatives",
    ],
    keywords:
      "MK Raj Mirchi Powder, red chilli powder, lal mirch powder, mirchi powder in India",
  },
  "dhaniya-powder": {
    name: "Dhaniya Powder",
    hindi: "धनिया पाउडर",
    ingredient: "Coriander Seeds",
    image: "/dhaniya.jpg",
    description:
      "MK Raj Dhaniya Powder adds natural aroma and flavour to Indian food.",
    uses: "Vegetables, curries, dal, gravy, masala mix and traditional recipes.",
    benefits: [
      "Natural aroma",
      "Fresh taste",
      "Hygienically packed",
      "FSSAI certified",
    ],
    keywords:
      "MK Raj Dhaniya Powder, coriander powder, dhaniya powder in India, pure dhaniya powder",
  },
};

export default function ProductDetail() {
  const { slug } = useParams();
  const product = productData[slug];

  if (!product) {
    return (
      <section style={{ padding: 60, textAlign: "center" }}>
        <h1>Product Not Found</h1>
        <Link to="/products">Back to Products</Link>
      </section>
    );
  }

  const pageUrl = `https://mkrajspices.netlify.app/${slug}`;

  return (
    <>
      <Helmet>
        <title>MK Raj {product.name} | Pure {product.name}</title>

        <meta name="description" content={product.description} />
        <meta name="keywords" content={product.keywords} />
        <link rel="canonical" href={pageUrl} />

        <meta property="og:title" content={`MK Raj ${product.name}`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={`https://mkrajspices.netlify.app${product.image}`} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="product" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: `MK Raj ${product.name}`,
            image: `https://mkrajspices.netlify.app${product.image}`,
            description: product.description,
            brand: {
              "@type": "Brand",
              name: "MK Raj Spices",
            },
            category: "Spices",
            url: pageUrl,
            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              url: pageUrl,
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
                name: `What is MK Raj ${product.name}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: product.description,
                },
              },
              {
                "@type": "Question",
                name: `How to use ${product.name}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: product.uses,
                },
              },
              {
                "@type": "Question",
                name: `How to store ${product.name}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Store in a cool and dry place. Keep the pack tightly closed after opening.",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      <section style={{ padding: "60px 24px", background: "#FFF8F0" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Link to="/products" style={{ color: "#8B0000", fontWeight: 700 }}>
            ← Back to Products
          </Link>

          <div style={{ display: "flex", gap: 40, flexWrap: "wrap", alignItems: "center", marginTop: 30 }}>
            <div style={{ flex: "1 1 320px" }}>
              <img
                src={product.image}
                alt={`MK Raj ${product.name}`}
                style={{
                  width: "100%",
                  maxWidth: 420,
                  borderRadius: 24,
                  background: "#fff",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                }}
              />
            </div>

            <div style={{ flex: "1 1 360px" }}>
              <h1 style={{ fontSize: 38, fontWeight: 900, color: "#5C1A00" }}>
                MK Raj {product.name}
              </h1>

              <h2 style={{ color: "#8B0000", fontSize: 22 }}>
                {product.hindi}
              </h2>

              <p style={{ color: "#666", lineHeight: 1.8, fontSize: 16 }}>
                {product.description}
              </p>

              <p>
                <b>Ingredients:</b> {product.ingredient}
              </p>

              <p>
                <b>Uses:</b> {product.uses}
              </p>

              <p>
                <b>Pack Sizes:</b> 20g, 40g, 100g, 200g
              </p>

              <p>
                <b>FSSAI License No:</b> {FSSAI_NO}
              </p>

              <a
                href={`https://wa.me/919794022167?text=Namaste%2C%20I%20want%20to%20order%20MK%20Raj%20${encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: 16,
                  background: "#25D366",
                  color: "#fff",
                  padding: "14px 28px",
                  borderRadius: 14,
                  fontWeight: 800,
                  textDecoration: "none",
                }}
              >
                💬 Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "50px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontSize: 28, fontWeight: 900 }}>
            Benefits of MK Raj {product.name}
          </h2>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 20 }}>
            {product.benefits.map((b) => (
              <div
                key={b}
                style={{
                  background: "#FFF8F0",
                  padding: "14px 20px",
                  borderRadius: 14,
                  fontWeight: 700,
                  color: "#5C1A00",
                }}
              >
                ✅ {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "50px 24px", background: "#f9f9f9" }}>
        <div style={{ maxWidth: 850, margin: "0 auto" }}>
          <h2 style={{ fontSize: 28, fontWeight: 900 }}>FAQs</h2>

          {[
            [`What is MK Raj ${product.name}?`, product.description],
            [`How to use ${product.name}?`, product.uses],
            [
              `How to store ${product.name}?`,
              "Store in a cool and dry place. Keep the pack tightly closed after opening.",
            ],
          ].map(([q, a]) => (
            <div
              key={q}
              style={{
                background: "#fff",
                padding: 20,
                borderRadius: 16,
                marginTop: 14,
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              }}
            >
              <h3 style={{ margin: "0 0 8px", color: "#5C1A00" }}>{q}</h3>
              <p style={{ margin: 0, color: "#666", lineHeight: 1.7 }}>{a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}