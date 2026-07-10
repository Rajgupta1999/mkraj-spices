import { useOrder } from "../context/OrderContext";

export default function AddressForm() {
  const { customer, updateCustomer, resetCustomer } = useOrder();

  const inputStyle = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 12,
    border: "1px solid #ead8c8",
    fontSize: 14,
    outline: "none",
    background: "#fff",
    color: "#222",
  };

  const labelStyle = {
    display: "block",
    fontSize: 12,
    fontWeight: 800,
    color: "#6b3b12",
    marginBottom: 7,
  };

  return (
    <div
      id="order-address-form"
      style={{
        background: "linear-gradient(135deg, #fff8ef, #fff)",
        border: "1px solid #f0ddc8",
        borderRadius: 20,
        padding: 22,
        margin: "0 auto 28px",
        boxShadow: "0 6px 24px rgba(92, 26, 0, 0.08)",
        textAlign: "left",
      }}
    >
      <div style={{ marginBottom: 16 }}>
        <h2 style={{ margin: 0, color: "#5C1A00", fontSize: 24, fontWeight: 900 }}>
          🛒 Delivery Address
        </h2>
        <p style={{ marginTop: 6, color: "#777", fontSize: 14 }}>
          Yahan address fill karein. Order button click karte hi ye address WhatsApp message me auto add ho jayega.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: 14,
        }}
      >
        <div>
          <label style={labelStyle}>Customer Name</label>
          <input
            style={inputStyle}
            type="text"
            placeholder="Apna naam"
            value={customer.name}
            onChange={(e) => updateCustomer("name", e.target.value)}
          />
        </div>

        <div>
          <label style={labelStyle}>Mobile Number</label>
          <input
            style={inputStyle}
            type="tel"
            placeholder="Mobile number"
            value={customer.phone}
            onChange={(e) => updateCustomer("phone", e.target.value)}
          />
        </div>

        <div style={{ gridColumn: "1 / -1" }}>
          <label style={labelStyle}>Full Address</label>
          <textarea
            style={{ ...inputStyle, minHeight: 82, resize: "vertical" }}
            placeholder="House no, street, area, landmark"
            value={customer.address}
            onChange={(e) => updateCustomer("address", e.target.value)}
          />
        </div>

        <div>
          <label style={labelStyle}>City / Village</label>
          <input
            style={inputStyle}
            type="text"
            placeholder="City / village"
            value={customer.city}
            onChange={(e) => updateCustomer("city", e.target.value)}
          />
        </div>

        <div>
          <label style={labelStyle}>Pincode</label>
          <input
            style={inputStyle}
            type="text"
            inputMode="numeric"
            placeholder="Pincode"
            value={customer.pincode}
            onChange={(e) => updateCustomer("pincode", e.target.value)}
          />
        </div>
      </div>

      <button
        type="button"
        onClick={resetCustomer}
        style={{
          marginTop: 14,
          border: 0,
          background: "transparent",
          color: "#8B0000",
          fontWeight: 800,
          cursor: "pointer",
          padding: 0,
        }}
      >
        Clear Address
      </button>
    </div>
  );
}
