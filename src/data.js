import googleQr from "./assets/google-review-qr.png";
import instagramQr from "./assets/instagram-qr.png";
import fssaiQr from "./assets/fssai-qr.png";
import mkrajlogo from "./assets/MkRaj_logo.png";

export const SPICES = [
  {
    id: "mirchi",
    name: "Red Chilli Powder",
    hindi: "लाल मिर्च पाउडर",
    emoji: "🌶️",
    color: "#8B0000",
    accent: "#C0392B",
    desc: "Pure Red Chilli (Mirchi) · Vibrant colour · Authentic spicy taste",
    packs: [
      { weight: "15g", price: 10 },
      { weight: "30g", price: 20 },
      { weight: "100g", price: 70 },
      { weight: "200g", price: 130 },
      { weight: "500g", price: 310 },
      { weight: "1kg", price: 600 },
    ],
  },
  {
    id: "haldi",
    name: "Turmeric Powder",
    hindi: "हल्दी पाउडर",
    emoji: "🟡",
    color: "#7B5B00",
    accent: "#D4A017",
    desc: "Pure Turmeric (Haldi) · Rich colour · Authentic aroma",
    packs: [
      { weight: "20g", price: 10 },
      { weight: "40g", price: 20 },
      { weight: "100g", price: 46 },
      { weight: "200g", price: 90 },
      { weight: "500g", price: 222 },
      { weight: "1kg", price: 440 },
    ],
  },
  {
    id: "dhaniya",
    name: "Coriander Powder",
    hindi: "धनिया पाउडर",
    emoji: "🌿",
    color: "#2D5016",
    accent: "#4A7C1F",
    desc: "Pure Coriander Seeds (Dhaniya) · Fresh flavour · Natural aroma",
    packs: [
      { weight: "20g", price: 10 },
      { weight: "40g", price: 20 },
      { weight: "100g", price: 46 },
      { weight: "200g", price: 90 },
      { weight: "500g", price: 222 },
      { weight: "1kg", price: 440 },
    ],
  },
];

export const GOOGLE_REVIEW_URL = "https://g.page/r/CeLP_Y0_IBCsEBM/review";
export const GOOGLE_QR_SRC = googleQr;
export const FSSAI_QR_SRC = fssaiQr;
export const FSSAI_CERTIFICATE_URL = "https://foscos.fssai.gov.in/display-details/124265375/REG/517663794";
export const FSSAI_NO = "22726220000035";
export const INSTAGRAM_QR_SRC = instagramQr; 
export const INSTAGRAM_URL = "https://instagram.com/mkrajvlog";
export const MKRAJ_LOGO_SRC = mkrajlogo;