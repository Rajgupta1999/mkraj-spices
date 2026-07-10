import { useState } from "react";
import { FSSAI_NO } from "../data";
import { Link } from "react-router-dom";
import { useOrder } from "../context/OrderContext";

export default function SpiceCard({ spice }) {
  const [sel, setSel] = useState(0);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToBasket } = useOrder();
  const pack = spice.packs[sel];
  const lineTotal = pack.price * qty;

  const handleAdd = () => {
    addToBasket(spice, pack, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <article
      aria-label={`MK Raj ${spice.name}`}
      style={{
        background: "#fff",
        borderRadius: 20,
        overflow: "hidden",
        boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      <div
        style={{
          background: `linear-gradient(135deg, ${spice.color}, ${spice.accent})`,
          padding: "28px 24px 20px",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ fontSize: 52, marginBottom: 40 }}>{spice.emoji}</div>

        <h2 style={{ fontSize: 20, fontWeight: 800, margin: 0 }}>
          MK Raj {spice.name}
        </h2>

        <div style={{ fontSize: 15, opacity: 0.85 }}>{spice.hindi}</div>

        <div
          style={{
            position: "absolute",
            right: -20,
            top: -20,
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.14)",
          }}
        />
      </div>

      <div
        style={{
          padding: "16px 20px 20px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <p style={{ fontSize: 13, color: "#666", margin: 0, lineHeight: 1.5 }}>
          {spice.desc}
        </p>

        <div style={{ fontSize: 12, color: "#666", lineHeight: 1.6 }}>
          <b>Quality:</b> Hygienically packed · No added preservatives · FSSAI
          Lic. No. {FSSAI_NO}
          <br />
          <b>Storage:</b> Keep in a cool and dry place.
        </div>

        <div>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "#888",
              marginBottom: 8,
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            Select Pack Size
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {spice.packs.map((p, i) => (
              <button
                key={p.weight}
                type="button"
                aria-label={`Select ${p.weight} pack of MK Raj ${spice.name}`}
                onClick={() => setSel(i)}
                style={{
                  padding: "5px 11px",
                  borderRadius: 20,
                  border: `2px solid ${sel === i ? spice.accent : "#e0e0e0"}`,
                  background: sel === i ? spice.accent : "#fafafa",
                  color: sel === i ? "#fff" : "#333",
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >
                {p.weight}
              </button>
            ))}
          </div>
        </div>

        <div
          style={{
            background: `${spice.accent}12`,
            borderRadius: 14,
            padding: "14px 16px",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
            <div>
              <div style={{ fontSize: 11, color: "#888", fontWeight: 600 }}>
                Rate
              </div>
              <div style={{ fontSize: 28, fontWeight: 900, color: spice.color }}>
                ₹{pack.price}
              </div>
              <div style={{ fontSize: 12, color: "#888" }}>{pack.weight} pack</div>
            </div>

            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 11, color: "#312f2f", fontWeight: 700, marginBottom: 6 }}>
                Quantity
              </div>
              <div style={{ display: "inline-flex", alignItems: "center", border: `2px solid ${spice.accent}`, borderRadius: 999, overflow: "hidden", background: "#fff" }}>
                <button type="button" onClick={() => setQty((value) => Math.max(1, value - 1))} style={qtyButtonStyle}>−</button>
                <span style={{ minWidth: 36, textAlign: "center", fontWeight: 900 }}>{qty}</span>
                <button type="button" onClick={() => setQty((value) => value + 1)} style={qtyButtonStyle}>+</button>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
            <b style={{ color: spice.color }}>Total: ₹{lineTotal}</b>
            <button
              type="button"
              onClick={handleAdd}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: added ? "#168f3a" : "#8B0000",
                color: "#fff",
                padding: "9px 16px",
                borderRadius: 10,
                fontWeight: 800,
                fontSize: 13,
                border: 0,
                cursor: "pointer",
                boxShadow: "0 3px 10px rgba(139,0,0,0.25)",
              }}
            >
              {added ? "✅ Added" : "🧺 Add to Basket"}
            </button>
          </div>
        </div>

        <Link
          to={`/${spice.slug}`}
          style={{
            display: "inline-block",
            marginTop: 10,
            color: spice.color,
            fontWeight: 800,
            textDecoration: "none",
            fontSize: 13,
          }}
        >
          View Details →
        </Link>

        <div style={{ fontSize: 12, color: "#aaa", textAlign: "center" }}>
          📞 Call: {" "}
          <a
            href="tel:+916398033582"
            aria-label="Call MK Raj Spices on 6398033582"
            style={{ color: "#888", fontWeight: 600 }}
          >
            +91 6398033582
          </a>
        </div>
      </div>
    </article>
  );
}

const qtyButtonStyle = {
  border: 0,
  background: "transparent",
  color: "#8B0000",
  width: 34,
  height: 32,
  fontSize: 20,
  fontWeight: 900,
  cursor: "pointer",
};
