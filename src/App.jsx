import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import FindUs from "./pages/FindUs";
import ProductDetail from "./pages/ProductDetail";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", minHeight: "100vh", background: "#FAFAFA" }}>
        <Header />

        {/* Yahi pe page badalta hai — URL ke hisaab se sirf matching <Route> ka component render hoga */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/find-us" element={<FindUs />} />
          {/* <Route path="/haldi-powder" element={<ProductDetail />} />
          <Route path="/mirchi-powder" element={<ProductDetail />} />
          <Route path="/dhaniya-powder" element={<ProductDetail />} /> */}
          <Route path="/:slug" element={<ProductDetail />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}