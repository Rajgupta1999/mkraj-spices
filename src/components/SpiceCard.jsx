import { useState } from "react";

export default function SpiceCard({ spice }) {
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
              💬 WhatsApp Order
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