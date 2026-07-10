import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MKRAJ_LOGO_SRC } from "../data";
<<<<<<< HEAD
import { useOrder } from "../context/OrderContext";
import { ShoppingBasket } from "lucide-react";
import "./Header.css";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { basketCount, basketTotal } = useOrder();

=======
import OrderLink from "./OrderLink";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
>>>>>>> 4387c785487e43dabfbea5d373e224336b7ccce1
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

<<<<<<< HEAD
          {/* <NavLink
            to="/address"
            onClick={closeMenu}
            aria-label={`Open basket. ${basketCount} item selected. Total ₹${basketTotal}`}
            className="site-basket-btn"
          >
            <span className="site-basket-btn__icon">🧺</span>
            <span className="site-basket-btn__text">
              Basket
              <small>₹{basketTotal}</small>
            </span>
            <span className="site-basket-btn__count">{basketCount}</span>
          </NavLink> */}
          <NavLink
  to="/address"
  onClick={closeMenu}
  aria-label={`Open basket. ${basketCount} item selected. Total ₹${basketTotal}`}
  className="site-basket-btn"
>
  <div className="site-basket-btn__glow"></div>

  <ShoppingBasket
    size={24}
    strokeWidth={2.3}
    className="site-basket-btn__icon"
  />

  <div className="site-basket-btn__content">
    {/* <span className="site-basket-btn__title">
      My Basket
    </span> */}

    <span className="site-basket-btn__price">
      ₹{basketTotal}
    </span>
  </div>

  <span className="site-basket-btn__count">
    {basketCount}
  </span>
</NavLink>
=======
          <OrderLink
            message={"Namaste! Mujhe MK Raj Spices ka order karna hai.\nPlease confirm karein."}
            className="site-order-btn"
            onClick={closeMenu}
          >
            💬 Order Now
          </OrderLink>
>>>>>>> 4387c785487e43dabfbea5d373e224336b7ccce1
        </div>
      </div>
    </header>
  );
}
