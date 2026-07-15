import googleQr from "./assets/google-review-qr.png";
import instagramQr from "./assets/instagram-qr.png";
import fssaiQr from "./assets/fssai-qr.png";
import mkrajlogo from "./assets/MkRaj_logo.png";
import backgroundImage from "./assets/herobg.png";
import  mirchi  from "./assets/mirch.png";
import  haldi  from "./assets/haldi.png";
import  dhaniya  from "./assets/dhaniya.png";
import garam_masala from "./assets/garam.png";


// export const SPICES = [
//   {
//     id: "mirchi",
//     name: "Red Chilli Powder",
//     hindi: "लाल मिर्च पाउडर",
//     emoji: "🌶️",
//     color: "#8B0000",
//     accent: "#C0392B",
//     desc: "Pure Red Chilli (Mirchi) · Vibrant colour · Authentic spicy taste",
//     packs: [
//       { weight: "15g", price: 10 },
//       { weight: "30g", price: 20 },
//       { weight: "100g", price: 70 },
//       { weight: "200g", price: 130 },
//       { weight: "500g", price: 310 },
//       { weight: "1kg", price: 600 },
//     ],
//   },
//   {
//     id: "haldi",
//     name: "Turmeric Powder",
//     hindi: "हल्दी पाउडर",
//     emoji: "🟡",
//     color: "#7B5B00",
//     accent: "#D4A017",
//     desc: "Pure Turmeric (Haldi) · Rich colour · Authentic aroma",
//     packs: [
//       { weight: "20g", price: 10 },
//       { weight: "40g", price: 20 },
//       { weight: "100g", price: 46 },
//       { weight: "200g", price: 90 },
//       { weight: "500g", price: 222 },
//       { weight: "1kg", price: 440 },
//     ],
//   },
//   {
//     id: "dhaniya",
//     name: "Coriander Powder",
//     hindi: "धनिया पाउडर",
//     emoji: "🌿",
//     color: "#2D5016",
//     accent: "#4A7C1F",
//     desc: "Pure Coriander Seeds (Dhaniya) · Fresh flavour · Natural aroma",
//     packs: [
//       { weight: "20g", price: 10 },
//       { weight: "40g", price: 20 },
//       { weight: "100g", price: 46 },
//       { weight: "200g", price: 90 },
//       { weight: "500g", price: 222 },
//       { weight: "1kg", price: 440 },
//     ],
//   },
// ];

export const SPICES = [
  {
    id: "mirchi",
    slug: "mirchi-powder",
    image: "/mirchi.jpg",
    name: "Red Chilli Powder",
    hindi: "लाल मिर्च पाउडर",
    emoji: "🌶️",
    color: "#d12525",
    accent: "#C0392B",
    desc: "Pure Red Chilli Powder (Mirchi) with vibrant colour and authentic spicy taste.",
    ingredient: "Red Chilli",
    uses: "Sabzi, curry, chutney, snacks and masala recipes.",
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
    slug: "haldi-powder",
    image: "/haldi.jpg",
    name: "Turmeric Powder",
    hindi: "हल्दी पाउडर",
    emoji: "🟡",
    color: "#7B5B00",
    accent: "#D4A017",
    desc: "Pure Turmeric Powder (Haldi) with rich colour and authentic aroma.",
    ingredient: "Turmeric",
    uses: "Dal, sabzi, curry, pickle and daily Indian cooking.",
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
    slug: "dhaniya-powder",
    image: "/dhaniya.jpg",
    name: "Coriander Powder",
    hindi: "धनिया पाउडर",
    emoji: "🌿",
    color: "#2D5016",
    accent: "#4A7C1F",
    desc: "Pure Coriander Powder (Dhaniya) with fresh flavour and natural aroma.",
    ingredient: "Coriander Seeds",
    uses: "Vegetables, curries, dal, gravy and traditional Indian dishes.",
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
    id: "garam-masala",
    slug: "garam-masala",
    image: "/garam.jpg",
    name: "Garam Masala",
    hindi: "गरम मसाला",
    emoji: "🌰",
    color: "#6B2D1A",
    accent: "#B56A2D",
    desc: "Aromatic MK Raj Garam Masala blend prepared to add rich flavour and traditional aroma to Indian dishes.",
    ingredient: "Selected whole spices",
    uses: "Sabzi, curry, dal, paneer, pulao, biryani and traditional Indian recipes.",
    packs: [
      { weight: "12g", price: 10 },
      { weight: "23g", price: 20 },
      { weight: "100g", price: 110 },
      { weight: "200g", price: 210 },
      { weight: "500g", price: 515 },
      { weight: "1kg", price: 1000 },
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
export const BACKGROUND_IMAGE_SRC = backgroundImage;
export const MIRCHI_IMAGE_SRC = mirchi;
export const HALDI_IMAGE_SRC = haldi;
export const DHANIYA_IMAGE_SRC = dhaniya;
export const GARAM_MASALA_IMAGE_SRC = garam_masala;