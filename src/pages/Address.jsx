import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useOrder } from "../context/OrderContext";

export default function Address() {
  const {
    customer,
    updateCustomer,
    resetCustomer,
    pendingOrderMessage,
    createWhatsAppLink,
    isAddressComplete,
  } = useOrder();

  const inputStyle = {
    width: "100%",
    padding: "13px 15px",
    borderRadius: 12,
    border: "1px solid #ead8c8",
    fontSize: 15,
    outline: "none",
    background: "#fff",
    color: "#222",
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
    window.open(createWhatsAppLink(pendingOrderMessage), "_blank", "noopener,noreferrer");
  };

  const addressSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "MK Raj Spices Order Address Page",
    url: "https://mkrajspices.netlify.app/address",
    description:
      "Fill delivery address for MK Raj Spices WhatsApp order. Order Haldi Powder, Mirchi Powder and Dhaniya Powder with address details.",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "MK Raj Spices",
      telephone: "+91 9794022167",
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
  };

  return (
    <>
      <Helmet>
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
        <meta property="og:image" content="https://mkrajspices.netlify.app/MkRaj_logo.png" />
        <meta property="og:url" content="https://mkrajspices.netlify.app/address" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(addressSchema)}</script>
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
              </p>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
