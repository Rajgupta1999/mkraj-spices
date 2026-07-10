<<<<<<< HEAD
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
=======
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
>>>>>>> 4387c785487e43dabfbea5d373e224336b7ccce1
import { useOrder } from "../context/OrderContext";

export default function Address() {
  const {
    customer,
    updateCustomer,
    resetCustomer,
<<<<<<< HEAD
    isAddressComplete,
    createWhatsAppLink,
    basketItems,
    basketCount,
    basketTotal,
    basketText,
    increaseBasketQty,
    decreaseBasketQty,
    removeFromBasket,
    clearBasket,
    buildBasketMessage,
=======
    pendingOrderMessage,
    createWhatsAppLink,
    isAddressComplete,
>>>>>>> 4387c785487e43dabfbea5d373e224336b7ccce1
  } = useOrder();

  const inputStyle = {
    width: "100%",
<<<<<<< HEAD
    border: "1px solid #ead7c5",
    background: "#fffaf5",
    borderRadius: 12,
    padding: "13px 14px",
    outline: "none",
    fontSize: 14,
=======
    padding: "13px 15px",
    borderRadius: 12,
    border: "1px solid #ead8c8",
    fontSize: 15,
    outline: "none",
    background: "#fff",
    color: "#222",
>>>>>>> 4387c785487e43dabfbea5d373e224336b7ccce1
    boxSizing: "border-box",
  };

  const labelStyle = {
    display: "block",
    fontSize: 13,
    fontWeight: 800,
    color: "#6b3b12",
    marginBottom: 7,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    window.open(createWhatsAppLink(buildBasketMessage()), "_blank", "noopener,noreferrer");
=======
    window.open(createWhatsAppLink(pendingOrderMessage), "_blank", "noopener,noreferrer");
>>>>>>> 4387c785487e43dabfbea5d373e224336b7ccce1
  };

  const addressSchema = {
    "@context": "https://schema.org",
<<<<<<< HEAD
    "@type": "CheckoutPage",
    name: "MK Raj Spices Basket and Address Page",
    url: "https://mkrajspices.netlify.app/address",
    description:
      "Review MK Raj Spices basket, calculate total amount, fill delivery address and send WhatsApp order.",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "MK Raj Spices",
      telephone: "+91 6398033582",
=======
    "@type": "ContactPage",
    name: "MK Raj Spices Order Address Page",
    url: "https://mkrajspices.netlify.app/address",
    description:
      "Fill delivery address for MK Raj Spices WhatsApp order. Order Haldi Powder, Mirchi Powder and Dhaniya Powder with address details.",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "MK Raj Spices",
      telephone: "+91 9794022167",
>>>>>>> 4387c785487e43dabfbea5d373e224336b7ccce1
      address: {
        "@type": "PostalAddress",
        streetAddress: "153/3, Pathanpura",
        addressLocality: "Rath, Hamirpur",
        addressRegion: "Uttar Pradesh",
        postalCode: "210431",
        addressCountry: "IN",
      },
      areaServed: "India",
      priceRange: "₹₹",
    },
<<<<<<< HEAD
=======
    potentialAction: {
      "@type": "OrderAction",
      target: "https://mkrajspices.netlify.app/address",
      result: {
        "@type": "Order",
        orderStatus: "https://schema.org/OrderPaymentDue",
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I place an MK Raj Spices WhatsApp order?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Click any Order Now or WhatsApp Order button, fill your delivery address, and submit to open WhatsApp with your order message and address details.",
        },
      },
      {
        "@type": "Question",
        name: "Which address details are required for delivery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Customer name, mobile number, full address, city or village and pincode are required for MK Raj Spices order confirmation.",
        },
      },
    ],
>>>>>>> 4387c785487e43dabfbea5d373e224336b7ccce1
  };

  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>Basket & Address | MK Raj Spices WhatsApp Order</title>
        <meta
          name="description"
          content="Review MK Raj Spices basket, calculate item total, fill delivery address and send Haldi, Mirchi and Dhaniya Powder order on WhatsApp."
        />
        <meta
          name="keywords"
          content="MK Raj basket, add to cart spices, WhatsApp spice order, haldi powder order, mirchi powder order, dhaniya powder order"
        />
        <link rel="canonical" href="https://mkrajspices.netlify.app/address" />
        <meta property="og:title" content="MK Raj Spices Basket & Address" />
        <meta property="og:description" content="Review basket, fill address and send your MK Raj Spices order on WhatsApp." />
=======
        <title>Order Address | MK Raj Spices WhatsApp Order</title>
        <meta
          name="description"
          content="Fill delivery address for MK Raj Spices WhatsApp order. Buy Haldi Powder, Mirchi Powder and Dhaniya Powder with name, mobile, address, city and pincode."
        />
        <meta
          name="keywords"
          content="MK Raj Spices order address, WhatsApp spice order, haldi powder order, mirchi powder order, dhaniya powder order, MK Raj delivery address"
        />
        <link rel="canonical" href="https://mkrajspices.netlify.app/address" />
        <meta property="og:title" content="MK Raj Spices Order Address" />
        <meta
          property="og:description"
          content="Fill your delivery address and submit your MK Raj Spices order on WhatsApp."
        />
>>>>>>> 4387c785487e43dabfbea5d373e224336b7ccce1
        <meta property="og:image" content="https://mkrajspices.netlify.app/MkRaj_logo.png" />
        <meta property="og:url" content="https://mkrajspices.netlify.app/address" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(addressSchema)}</script>
<<<<<<< HEAD
      </Helmet>

      <section style={{ padding: "60px 24px", background: "linear-gradient(135deg, #fff8ef, #fff)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Link to="/products" style={{ color: "#8B0000", fontWeight: 800, textDecoration: "none" }}>
            ← Continue Shopping
          </Link>

          <div style={{ textAlign: "center", margin: "22px 0 28px" }}>
            <div style={{ display: "inline-block", background: "#8B000014", color: "#8B0000", padding: "7px 18px", borderRadius: 999, fontWeight: 900, fontSize: 13 }}>
              Basket Checkout
            </div>
            <h1 style={{ fontSize: 34, fontWeight: 950, color: "#5C1A00", margin: "16px 0 10px" }}>
              Basket Review + Delivery Address
            </h1>
            <p style={{ color: "#666", lineHeight: 1.7, maxWidth: 720, margin: "0 auto" }}>
              Selected product upar calculate hoga, phir address fill karke WhatsApp order send box open hoga.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(320px, 0.8fr)", gap: 24, alignItems: "start" }} className="address-page-grid">
            <div style={{ display: "grid", gap: 20 }}>
              <section style={{ background: "#fff", border: "1px solid #f0ddc8", borderRadius: 22, padding: 22, boxShadow: "0 8px 34px rgba(92, 26, 0, 0.09)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
                  <div>
                    <h2 style={{ margin: 0, color: "#5C1A00", fontSize: 24 }}>Your Basket</h2>
                    <p style={{ margin: "6px 0 0", color: "#777", fontSize: 14 }}>{basketCount} item selected</p>
                  </div>
                  {basketItems.length > 0 && (
                    <button type="button" onClick={clearBasket} style={{ border: "1px solid #f1cfcf", background: "#fff7f7", color: "#8B0000", padding: "10px 14px", borderRadius: 12, fontWeight: 900, cursor: "pointer" }}>
                      Clear Basket
                    </button>
                  )}
                </div>

                {basketItems.length === 0 ? (
                  <div style={{ background: "#fff8ef", borderRadius: 16, padding: 20, color: "#6b3b12", fontWeight: 800 }}>
                    Basket empty hai. Product page par jaakar Add to Basket karein.
                  </div>
                ) : (
                  <div style={{ display: "grid", gap: 12 }}>
                    {basketItems.map((item) => (
                      <div key={item.key} style={{ display: "grid", gridTemplateColumns: "64px 1fr auto", gap: 12, alignItems: "center", border: "1px solid #f2e2d4", borderRadius: 16, padding: 12, background: "#fffdf9" }} className="basket-item-row">
                        <img src={item.image} alt={item.name} style={{ width: 64, height: 64, objectFit: "cover", borderRadius: 14, background: "#fff8ef" }} />
                        <div>
                          <h3 style={{ margin: "0 0 5px", color: "#5C1A00", fontSize: 16 }}>MK Raj {item.name}</h3>
                          <div style={{ color: "#777", fontSize: 13 }}>{item.weight} · ₹{item.price} per pack</div>
                          <b style={{ color: "#8B0000", fontSize: 14 }}>₹{item.price * item.qty}</b>
                        </div>
                        <div style={{ display: "grid", gap: 8, justifyItems: "end" }}>
                          <div style={{ display: "inline-flex", alignItems: "center", border: "2px solid #8B0000", borderRadius: 999, overflow: "hidden", background: "#fff" }}>
                            <button type="button" onClick={() => decreaseBasketQty(item.key)} style={qtyButtonStyle}>−</button>
                            <span style={{ minWidth: 36, textAlign: "center", fontWeight: 950 }}>{item.qty}</span>
                            <button type="button" onClick={() => increaseBasketQty(item.key)} style={qtyButtonStyle}>+</button>
                          </div>
                          <button type="button" onClick={() => removeFromBasket(item.key)} style={{ border: 0, background: "transparent", color: "#b00020", fontWeight: 800, cursor: "pointer", fontSize: 12 }}>
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap", background: "#5C1A00", color: "#fff", borderRadius: 16, padding: "16px 18px", marginTop: 4 }}>
                      <div style={{ fontWeight: 900 }}>Grand Total</div>
                      <div style={{ fontSize: 26, fontWeight: 950 }}>₹{basketTotal}</div>
                    </div>
                  </div>
                )}
              </section>

              <form
                onSubmit={handleSubmit}
                style={{
                  background: "#fff",
                  border: "1px solid #f0ddc8",
                  borderRadius: 22,
                  padding: 24,
                  boxShadow: "0 8px 34px rgba(92, 26, 0, 0.09)",
                }}
              >
                <h2 style={{ margin: "0 0 18px", color: "#5C1A00" }}>Delivery Address</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 15 }} className="address-form-grid">
                  <div>
                    <label style={labelStyle}>Customer Name *</label>
                    <input style={inputStyle} type="text" placeholder=" Name" value={customer.name} onChange={(e) => updateCustomer("name", e.target.value)} required />
                  </div>

                  <div>
                    <label style={labelStyle}>Mobile Number *</label>
                    <input style={inputStyle} type="tel" placeholder="Mobile number" value={customer.phone} onChange={(e) => updateCustomer("phone", e.target.value)} required />
                  </div>

                  <div style={{ gridColumn: "1 / -1" }}>
                    <label style={labelStyle}>Full Address *</label>
                    <textarea style={{ ...inputStyle, minHeight: 96, resize: "vertical" }} placeholder="House no, street, area, landmark" value={customer.address} onChange={(e) => updateCustomer("address", e.target.value)} required />
                  </div>

                  <div>
                    <label style={labelStyle}>City / Village *</label>
                    <input style={inputStyle} type="text" placeholder="City / village" value={customer.city} onChange={(e) => updateCustomer("city", e.target.value)} required />
                  </div>

                  <div>
                    <label style={labelStyle}>Pincode *</label>
                    <input style={inputStyle} type="text" inputMode="numeric" placeholder="Pincode" value={customer.pincode} onChange={(e) => updateCustomer("pincode", e.target.value)} required />
                  </div>
                </div>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 20 }}>
                  <button
                    type="submit"
                    disabled={basketItems.length === 0}
                    style={{
                      flex: "1 1 240px",
                      border: 0,
                      background: basketItems.length === 0 ? "#bbb" : "#25D366",
                      color: "#fff",
                      padding: "14px 20px",
                      borderRadius: 14,
                      fontWeight: 900,
                      fontSize: 15,
                      cursor: basketItems.length === 0 ? "not-allowed" : "pointer",
                      boxShadow: basketItems.length === 0 ? "none" : "0 4px 14px #25D36655",
                    }}
                  >
                    WhatsApp Order & Send
                  </button>

                  <button
                    type="button"
                    onClick={resetCustomer}
                    style={{
                      border: "1px solid #f1cfcf",
                      background: "#fff7f7",
                      color: "#8B0000",
                      padding: "14px 18px",
                      borderRadius: 14,
                      fontWeight: 900,
                      cursor: "pointer",
                    }}
                  >
                    Clear Address
                  </button>
                </div>
              </form>
            </div>

            <aside style={{ background: "#5C1A00", color: "#fff", borderRadius: 22, padding: 22, boxShadow: "0 8px 34px rgba(92, 26, 0, 0.16)", position: "sticky", top: 92 }}>
              <h2 style={{ marginTop: 0, fontSize: 22 }}>WhatsApp Preview</h2>
              <pre style={{ whiteSpace: "pre-wrap", fontFamily: "inherit", fontSize: 14, lineHeight: 1.7, background: "rgba(255,255,255,0.1)", padding: 14, borderRadius: 14 }}>
{`${buildBasketMessage()}\n\nCustomer Details:\nName: ${customer.name || "-"}\nMobile: ${customer.phone || "-"}\nAddress: ${customer.address || "-"}\nCity/Village: ${customer.city || "-"}\nPincode: ${customer.pincode || "-"}`}
              </pre>
              <div style={{ background: "rgba(255,255,255,0.1)", padding: 14, borderRadius: 14, marginTop: 12 }}>
                <b>Basket Summary</b>
                <pre style={{ whiteSpace: "pre-wrap", fontFamily: "inherit", fontSize: 13, lineHeight: 1.6, margin: "8px 0 0" }}>{basketText}</pre>
              </div>
              <p style={{ opacity: 0.82, fontSize: 13, lineHeight: 1.7 }}>
                {basketItems.length === 0
                  ? "Pehle basket me product add karein."
                  : isAddressComplete
                    ? "Address complete hai. WhatsApp order button se send box open hoga."
                    : "Sab required address fields fill karein, phir WhatsApp open hoga."}
=======
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section style={{ padding: "60px 24px", background: "linear-gradient(135deg, #fff8ef, #fff)" }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <Link to="/products" style={{ color: "#8B0000", fontWeight: 800, textDecoration: "none" }}>
            ← Back to Products
          </Link>

          <div style={{ textAlign: "center", margin: "22px 0 28px" }}>
            <div style={{ display: "inline-block", background: "#25D36618", color: "#128C3B", padding: "7px 18px", borderRadius: 999, fontWeight: 900, fontSize: 13 }}>
              WhatsApp Order Address
            </div>
            <h1 style={{ fontSize: 34, fontWeight: 950, color: "#5C1A00", margin: "16px 0 10px" }}>
              Delivery Address Fill Karein
            </h1>
            <p style={{ color: "#666", lineHeight: 1.7, maxWidth: 680, margin: "0 auto" }}>
              Address submit karte hi WhatsApp open hoga aur order message ke saath customer address auto add ho jayega.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.2fr) minmax(280px, 0.8fr)", gap: 24, alignItems: "start" }} className="address-page-grid">
            <form
              onSubmit={handleSubmit}
              style={{
                background: "#fff",
                border: "1px solid #f0ddc8",
                borderRadius: 22,
                padding: 24,
                boxShadow: "0 8px 34px rgba(92, 26, 0, 0.09)",
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 15 }} className="address-form-grid">
                <div>
                  <label style={labelStyle}>Customer Name *</label>
                  <input style={inputStyle} type="text" placeholder="Apna naam" value={customer.name} onChange={(e) => updateCustomer("name", e.target.value)} required />
                </div>

                <div>
                  <label style={labelStyle}>Mobile Number *</label>
                  <input style={inputStyle} type="tel" placeholder="Mobile number" value={customer.phone} onChange={(e) => updateCustomer("phone", e.target.value)} required />
                </div>

                <div style={{ gridColumn: "1 / -1" }}>
                  <label style={labelStyle}>Full Address *</label>
                  <textarea style={{ ...inputStyle, minHeight: 96, resize: "vertical" }} placeholder="House no, street, area, landmark" value={customer.address} onChange={(e) => updateCustomer("address", e.target.value)} required />
                </div>

                <div>
                  <label style={labelStyle}>City / Village *</label>
                  <input style={inputStyle} type="text" placeholder="City / village" value={customer.city} onChange={(e) => updateCustomer("city", e.target.value)} required />
                </div>

                <div>
                  <label style={labelStyle}>Pincode *</label>
                  <input style={inputStyle} type="text" inputMode="numeric" placeholder="Pincode" value={customer.pincode} onChange={(e) => updateCustomer("pincode", e.target.value)} required />
                </div>
              </div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 20 }}>
                <button
                  type="submit"
                  style={{
                    flex: "1 1 220px",
                    border: 0,
                    background: "#25D366",
                    color: "#fff",
                    padding: "14px 20px",
                    borderRadius: 14,
                    fontWeight: 900,
                    fontSize: 15,
                    cursor: "pointer",
                    boxShadow: "0 4px 14px #25D36655",
                  }}
                >
                  Submit & Open WhatsApp
                </button>

                <button
                  type="button"
                  onClick={resetCustomer}
                  style={{
                    border: "1px solid #f1cfcf",
                    background: "#fff7f7",
                    color: "#8B0000",
                    padding: "14px 18px",
                    borderRadius: 14,
                    fontWeight: 900,
                    cursor: "pointer",
                  }}
                >
                  Clear
                </button>
              </div>
            </form>

            <aside style={{ background: "#5C1A00", color: "#fff", borderRadius: 22, padding: 22, boxShadow: "0 8px 34px rgba(92, 26, 0, 0.16)" }}>
              <h2 style={{ marginTop: 0, fontSize: 22 }}>Order Preview</h2>
              <pre style={{ whiteSpace: "pre-wrap", fontFamily: "inherit", fontSize: 14, lineHeight: 1.7, background: "rgba(255,255,255,0.1)", padding: 14, borderRadius: 14 }}>
{`${pendingOrderMessage}\n\nCustomer Details:\nName: ${customer.name || "-"}\nMobile: ${customer.phone || "-"}\nAddress: ${customer.address || "-"}\nCity/Village: ${customer.city || "-"}\nPincode: ${customer.pincode || "-"}`}
              </pre>
              <p style={{ opacity: 0.82, fontSize: 13, lineHeight: 1.7 }}>
                {isAddressComplete ? "Address complete hai. Submit karte hi WhatsApp send box open hoga." : "Sab required fields fill karein, phir WhatsApp open hoga."}
>>>>>>> 4387c785487e43dabfbea5d373e224336b7ccce1
              </p>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
<<<<<<< HEAD

const qtyButtonStyle = {
  border: 0,
  background: "transparent",
  color: "#8B0000",
  width: 34,
  height: 32,
  fontSize: 20,
  fontWeight: 950,
  cursor: "pointer",
};
=======
>>>>>>> 4387c785487e43dabfbea5d373e224336b7ccce1
