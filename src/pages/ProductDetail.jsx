import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FSSAI_NO, SPICES } from "../data";
import { useOrder } from "../context/OrderContext";

const benefitsBySlug = {
  "haldi-powder": [
    "Natural colour and aroma",
    "Useful for daily cooking",
    "No added preservatives",
    "FSSAI certified",
  ],
  "mirchi-powder": [
    "Spicy flavour",
    "Rich colour",
    "Hygienically packed",
    "No added preservatives",
  ],
  "dhaniya-powder": [
    "Natural aroma",
    "Fresh taste",
    "Hygienically packed",
    "FSSAI certified",
  ],
  "garam-masala": [
    "Rich traditional aroma",
    "Balanced spice blend",
    "Ideal for curries and biryani",
    "Hygienically packed",
  ],
};

export default function ProductDetail() {
  const { slug } = useParams();
  const product = SPICES.find((item) => item.slug === slug);
  const [sel, setSel] = useState(0);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToBasket } = useOrder();

  if (!product) {
    return (
      <section style={{ padding: 60, textAlign: "center" }}>
        <h1>Product Not Found</h1>
        <Link to="/products">Back to Products</Link>
      </section>
    );
  }

  const pack = product.packs[sel];
  const lineTotal = pack.price * qty;
  const pageUrl = `https://mkrajspices.netlify.app/${slug}`;
  const benefits = benefitsBySlug[slug] || [
    "Hygienically packed",
    "No added preservatives",
    "FSSAI certified",
  ];

  const handleAdd = () => {
    addToBasket(product, pack, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <>
      <Helmet>
        <title>
          MK Raj {product.name} | Pure {product.name}
        </title>
        <meta name="description" content={product.desc} />
        <meta
          name="keywords"
          content={`MK Raj ${product.name}, ${product.ingredient}, Indian spices, buy spice online`}
        />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={`MK Raj ${product.name}`} />
        <meta property="og:description" content={product.desc} />
        <meta
          property="og:image"
          content={`https://mkrajspices.netlify.app${product.image}`}
        />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="product" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: `MK Raj ${product.name}`,
            image: `https://mkrajspices.netlify.app${product.image}`,
            description: product.desc,
            brand: { "@type": "Brand", name: "MK Raj Spices" },
            category: "Spices",
            url: pageUrl,
            offers: product.packs.map((p) => ({
              "@type": "Offer",
              priceCurrency: "INR",
              price: p.price,
              availability: "https://schema.org/InStock",
              url: pageUrl,
            })),
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
                acceptedAnswer: { "@type": "Answer", text: product.desc },
              },
              {
                "@type": "Question",
                name: `How to use ${product.name}?`,
                acceptedAnswer: { "@type": "Answer", text: product.uses },
              },
              {
                "@type": "Question",
                name: `How to order ${product.name}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Select pack size and quantity, add to basket, fill address and send order on WhatsApp.",
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

          <div
            style={{
              display: "flex",
              gap: 40,
              flexWrap: "wrap",
              alignItems: "center",
              marginTop: 30,
            }}
          >
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
              <h1
                style={{
                  fontSize: 38,
                  fontWeight: 900,
                  color: "#5C1A00",
                  marginBottom: 8,
                }}
              >
                MK Raj {product.name}
              </h1>

              <h2 style={{ color: "#8B0000", fontSize: 22 }}>
                {product.hindi}
              </h2>

              <p style={{ color: "#666", lineHeight: 1.8, fontSize: 16 }}>
                {product.desc}
              </p>

              <p>
                <b>Ingredients:</b> {product.ingredient}
              </p>
              <p>
                <b>Uses:</b> {product.uses}
              </p>
              <p>
                <b>FSSAI License No:</b> {FSSAI_NO}
              </p>

              <div
                style={{
                  background: "#fff",
                  border: "1px solid #f0ddc8",
                  borderRadius: 18,
                  padding: 18,
                  marginTop: 18,
                  boxShadow: "0 8px 24px rgba(92,26,0,0.08)",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 900,
                    color: "#777",
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    marginBottom: 10,
                  }}
                >
                  Select Pack Size
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                    marginBottom: 16,
                  }}
                >
                  {product.packs.map((p, i) => (
                    <button
                      key={p.weight}
                      type="button"
                      onClick={() => setSel(i)}
                      style={{
                        padding: "8px 14px",
                        borderRadius: 999,
                        border: `2px solid ${sel === i ? product.accent : "#e8ddd2"}`,
                        background: sel === i ? product.accent : "#fff",
                        color: sel === i ? "#fff" : "#4b3524",
                        fontWeight: 900,
                        cursor: "pointer",
                      }}
                    >
                      {p.weight} - ₹{p.price}
                    </button>
                  ))}
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <div
                      style={{ color: "#888", fontWeight: 800, fontSize: 12 }}
                    >
                      Rate
                    </div>
                    <div
                      style={{
                        color: product.color,
                        fontSize: 30,
                        fontWeight: 950,
                      }}
                    >
                      ₹{pack.price}
                    </div>
                    <div style={{ color: "#777", fontSize: 13 }}>
                      Total: ₹{lineTotal}
                    </div>
                  </div>

                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      border: `2px solid ${product.accent}`,
                      borderRadius: 999,
                      overflow: "hidden",
                      background: "#fff",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setQty((value) => Math.max(1, value - 1))}
                      style={qtyButtonStyle}
                    >
                      −
                    </button>
                    <span
                      style={{
                        minWidth: 42,
                        textAlign: "center",
                        fontWeight: 950,
                      }}
                    >
                      {qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQty((value) => value + 1)}
                      style={qtyButtonStyle}
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleAdd}
                    style={{
                      background: added ? "#168f3a" : "#8B0000",
                      color: "#fff",
                      padding: "14px 24px",
                      borderRadius: 14,
                      fontWeight: 900,
                      border: 0,
                      cursor: "pointer",
                      boxShadow: "0 4px 14px rgba(139,0,0,0.22)",
                    }}
                  >
                    {added ? "✅ Added to Basket" : "🧺 Add to Basket"}
                  </button>

                  <Link
                    to="/address"
                    style={{
                      background: "#25D366",
                      color: "#fff",
                      padding: "14px 22px",
                      borderRadius: 14,
                      fontWeight: 900,
                      textDecoration: "none",
                    }}
                  >
                    Go to Basket →
                  </Link>

                  <a
                    href={`https://wa.me/916398033582?text=${encodeURIComponent(
                      "Namaste! Mujhe MK Raj Spices ke liye bulk order/place karna hai.\nKripya product catalog, wholesale price list aur minimum order quantity (MOQ) share karein.",
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#000000",
                      textDecoration: "none",
                      backgroundColor: "#08d269",
                      padding: "8px 8px",
                      borderRadius: 10,
                      fontWeight: 600,
                      border: "2px solid #4df60a",
                    }}
                  >
                    📦 Bulk Order on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "50px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontSize: 28, fontWeight: 900 }}>
            Benefits of MK Raj {product.name}
          </h2>
          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              marginTop: 20,
            }}
          >
            {benefits.map((b) => (
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
            [`What is MK Raj ${product.name}?`, product.desc],
            [`How to use ${product.name}?`, product.uses],
            [
              `How to order ${product.name}?`,
              "Select pack size and quantity, add to basket, fill address and submit order on WhatsApp.",
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

const qtyButtonStyle = {
  border: 0,
  background: "transparent",
  color: "#8B0000",
  width: 38,
  height: 36,
  fontSize: 22,
  fontWeight: 950,
  cursor: "pointer",
};
