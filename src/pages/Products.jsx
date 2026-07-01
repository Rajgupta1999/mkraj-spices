import { SPICES } from "../data";
import SpiceCard from "../components/SpiceCard";
import { Helmet } from "react-helmet-async";

export default function Products() {
  return (
    <>
    <Helmet>
  <title>Products | MK Raj Spices</title>
  <meta
    name="description"
    content="Explore MK Raj Spices products including Haldi Powder, Mirchi Powder and Dhaniya Powder."
  />
  <link rel="canonical" href="https://mkrajspices.netlify.app/products" />
</Helmet>
    <section style={{ padding: "60px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 style={{ fontSize: 34, fontWeight: 900, color: "#1a1a1a", margin: "0 0 10px" }}>Our Spices</h2>
          <p style={{ color: "#888", fontSize: 15 }}>Available in standup pouches · Select pack → WhatsApp to order</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: 24 }}>
          {SPICES.map(s => <SpiceCard key={s.id} spice={s} />)}
        </div>
      </div>
    </section>
    </>
  );
}