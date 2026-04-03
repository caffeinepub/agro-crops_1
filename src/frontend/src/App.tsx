import { useEffect, useState } from "react";
import CartPanel from "./components/CartPanel";
import CheckoutModal from "./components/CheckoutModal";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import { CartProvider } from "./contexts/CartContext";
import { LangProvider } from "./contexts/LangContext";
import AboutPage from "./pages/AboutPage";
import CattlePage from "./pages/CattlePage";
import ContactPage from "./pages/ContactPage";
import CropSuggestionsPage from "./pages/CropSuggestionsPage";
import EquipmentPage from "./pages/EquipmentPage";
import FarmPage from "./pages/FarmPage";
import HomePage from "./pages/HomePage";
import SchemesPage from "./pages/SchemesPage";
import ShopPage from "./pages/ShopPage";
import SignupPage from "./pages/SignupPage";

type Page =
  | "home"
  | "about"
  | "farm"
  | "shop"
  | "cattle"
  | "equipment"
  | "cropSuggestions"
  | "schemes"
  | "contact";

export default function App() {
  const [loading, setLoading] = useState(
    () => !localStorage.getItem("agro-visited"),
  );
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => !!localStorage.getItem("agro-auth"),
  );
  const [page, setPage] = useState<Page>("home");
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: scroll on page change is intentional
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  if (loading) {
    return (
      <LangProvider>
        <LoadingScreen onDone={() => setLoading(false)} />
      </LangProvider>
    );
  }

  if (!isLoggedIn) {
    return (
      <LangProvider>
        <SignupPage onSignup={() => setIsLoggedIn(true)} />
      </LangProvider>
    );
  }

  const handleLogout = () => {
    localStorage.removeItem("agro-auth");
    setIsLoggedIn(false);
  };

  const renderPage = () => {
    switch (page) {
      case "home":
        return <HomePage onNavigate={setPage} />;
      case "about":
        return <AboutPage />;
      case "farm":
        return <FarmPage />;
      case "shop":
        return <ShopPage />;
      case "cattle":
        return <CattlePage />;
      case "equipment":
        return <EquipmentPage />;
      case "cropSuggestions":
        return <CropSuggestionsPage />;
      case "schemes":
        return <SchemesPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setPage} />;
    }
  };

  return (
    <LangProvider>
      <CartProvider>
        <div className="min-h-screen" style={{ background: "#f9f6f1" }}>
          <Navbar
            currentPage={page}
            onNavigate={setPage}
            onLogout={handleLogout}
          />
          {renderPage()}
          <Footer onNavigate={setPage} />
          <CartPanel onCheckout={() => setCheckoutOpen(true)} />
          <CheckoutModal
            open={checkoutOpen}
            onClose={() => setCheckoutOpen(false)}
          />
        </div>
      </CartProvider>
    </LangProvider>
  );
}
