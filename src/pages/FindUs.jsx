import { GOOGLE_REVIEW_URL } from "../data";

export default function FindUs() {
  return (
    <>
      <section style={{ padding: "60px 24px", background: "#f9f9f9" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, color: "#8B0000", textAlign: "center", marginBottom: 8 }}>📍 Find Us on Google</h2>
          <p style={{ textAlign: "center", color: "#666", marginBottom: 28 }}>
            MK Raj Company · 153/3, Pathanpura, Rath, Hamirpur, Uttar Pradesh – 210431
          </p>

          <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.12)", marginBottom: 24 }}>
            <iframe
              title="MK Raj Google Business"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14250.!2d79.5707!3d25.5774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a2f6f6f6f6f6f%3A0x0!2sRath%2C+Hamirpur%2C+Uttar+Pradesh+210431!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%" height="360" style={{ border: 0, display: "block" }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noreferrer" style={{ flex: "1 1 180px", background: "#4285F4", color: "#fff", padding: "14px 20px", borderRadius: 14, fontWeight: 700, fontSize: 14, textDecoration: "none", textAlign: "center" }}>⭐ Write a Google Review</a>
            <a href="https://www.google.com/maps/search/MK+Raj+Company+Rath+Hamirpur" target="_blank" rel="noreferrer" style={{ flex: "1 1 180px", background: "#34A853", color: "#fff", padding: "14px 20px", borderRadius: 14, fontWeight: 700, fontSize: 14, textDecoration: "none", textAlign: "center" }}>📍 Get Directions</a>
            <a href="https://wa.me/919794022167?text=Namaste%2C%20I%20want%20to%20place%20an%20order" target="_blank" rel="noreferrer" style={{ flex: "1 1 180px", background: "#25D366", color: "#fff", padding: "14px 20px", borderRadius: 14, fontWeight: 700, fontSize: 14, textDecoration: "none", textAlign: "center" }}>💬 WhatsApp Order</a>
          </div>
        </div>
      </section>

      <section style={{ background: "#8B0000", padding: "44px 24px", color: "#fff", textAlign: "center" }}>
        <h3 style={{ fontSize: 22, fontWeight: 900, marginBottom: 8 }}>📞 Customer Helpline</h3>
        <p style={{ opacity: 0.8, marginBottom: 24, fontSize: 14 }}>Order via call or WhatsApp — we're happy to help!</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
          {["+91 9794022167", "+91 6392836517"].map(n => (
            <a key={n} href={`tel:${n.replace(/\s/g,"")}`} style={{ background: "rgba(255,255,255,0.15)", color: "#fff", padding: "11px 24px", borderRadius: 20, fontWeight: 700, textDecoration: "none", fontSize: 15, border: "1px solid rgba(255,255,255,0.3)" }}>{n}</a>
          ))}
        </div>
      </section>
    </>
  );
}