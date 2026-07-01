import { NavLink } from "react-router-dom";
import { FSSAI_NO , MKRAJ_LOGO_SRC  } from "../data";

export default function Header() {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? "#8B0000" : "#555",
    fontWeight: 600,
    fontSize: 14,
    textDecoration: "none",
    borderBottom: isActive ? "2px solid #8B0000" : "2px solid transparent",
    paddingBottom: 4,
  });

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 1000,
      background: "rgba(255,255,255,0.97)", backdropFilter: "blur(12px)",
      boxShadow: "0 2px 20px rgba(0,0,0,0.08)", padding: "0 24px",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", height: 64, gap: 16 }}>
        <NavLink to="/" style={{ display: "flex", alignItems: "center", gap: 10, flex: 1, textDecoration: "none" }}>
          <img src={MKRAJ_LOGO_SRC} alt="MK Raj Logo" style={{
            width: 90, height: 90, borderRadius: 6, objectFit: "cover",
               }} />

          
          <div>
            <div style={{ fontWeight: 900, fontSize: 16, color: "#8B0000", lineHeight: 1 }}>MK Raj</div>
            <div style={{ fontSize: 10, color: "#888", letterSpacing: 1 }}>PREMIUM SPICES</div>
          </div>
        </NavLink>

        <nav style={{ display: "flex", gap: 24 }}>
          <NavLink to="/" end style={linkStyle}>Home</NavLink>
          <NavLink to="/products" style={linkStyle}>Products</NavLink>
          <NavLink to="/about" style={linkStyle}>About</NavLink>
          <NavLink to="/find-us" style={linkStyle}>Find Us</NavLink>
        </nav>

        <a href="https://wa.me/919794022167?text=Namaste%2C%20I%20want%20to%20order%20spices" target="_blank" rel="noreferrer" style={{
          background: "#25D366", color: "#fff", padding: "9px 18px",
          borderRadius: 20, fontWeight: 700, fontSize: 13, textDecoration: "none",
          display: "flex", alignItems: "center", gap: 6,
        }}>
          💬 Order Now
        </a>
      </div>
    </header>
  );
}