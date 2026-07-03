import { GOOGLE_REVIEW_URL, FSSAI_NO } from "../data";
import OrderLink from "./OrderLink";

export default function Footer() {
  return (
    <footer style={{ background: "#111", color: "#ccc", padding: "40px 24px", textAlign: "center" }}>
      <div style={{ fontWeight: 800, color: "#fff", fontSize: 18, marginBottom: 4 }}>MK Raj Company</div>
      <div style={{ fontSize: 13, marginBottom: 6 }}>153/3, Pathanpura, Rath, Hamirpur, UP – 210431</div>
      <div style={{ fontSize: 12, color: "#555", marginBottom: 16 }}>FSSAI Lic. No. {FSSAI_NO}</div>
      <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap", fontSize: 13 }}>
        <a href="https://instagram.com/mkrajvlog" target="_blank" rel="noreferrer" style={{ color: "#D4A017" }}>📸 @mkrajvlog</a>
        <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noreferrer" style={{ color: "#4285F4" }}>⭐ Google Review</a>
        <OrderLink
          message={"Namaste! Mujhe MK Raj Spices ka order karna hai.\nPlease confirm karein."}
          style={{ color: "#25D366", textDecoration: "none" }}
        >
          💬 WhatsApp
        </OrderLink>
        <span>mkrajspices@gmail.com</span>
      </div>
      <div style={{ marginTop: 20, fontSize: 12, color: "#444" }}>© 2025 MK Raj Company · All rights reserved</div>
    </footer>
  );
}
