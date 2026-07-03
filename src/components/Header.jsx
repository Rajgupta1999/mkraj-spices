import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MKRAJ_LOGO_SRC } from "../data";
import OrderLink from "./OrderLink";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const linkStyle = ({ isActive }) => ({
    color: isActive ? "#8B0000" : "#555",
    fontWeight: 700,
    fontSize: 14,
    textDecoration: "none",
    borderBottom: isActive ? "2px solid #8B0000" : "2px solid transparent",
    paddingBottom: 4,
  });

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink to="/" onClick={closeMenu} className="site-brand">
          <img src={MKRAJ_LOGO_SRC} alt="MK Raj Logo" className="site-brand__logo" />
          <div>
            <div className="site-brand__title">MK Raj</div>
            <div className="site-brand__tagline">PREMIUM SPICES</div>
          </div>
        </NavLink>

        <button
          type="button"
          className="site-menu-btn"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`site-header__menu ${isOpen ? "is-open" : ""}`}>
          <nav className="site-nav">
            <NavLink to="/" end style={linkStyle} onClick={closeMenu}>Home</NavLink>
            <NavLink to="/products" style={linkStyle} onClick={closeMenu}>Products</NavLink>
            <NavLink to="/about" style={linkStyle} onClick={closeMenu}>About</NavLink>
            <NavLink to="/find-us" style={linkStyle} onClick={closeMenu}>Find Us</NavLink>
          </nav>

          <OrderLink
            message={"Namaste! Mujhe MK Raj Spices ka order karna hai.\nPlease confirm karein."}
            className="site-order-btn"
            onClick={closeMenu}
          >
            💬 Order Now
          </OrderLink>
        </div>
      </div>
    </header>
  );
}
