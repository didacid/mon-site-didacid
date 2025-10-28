import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Pricing from './pages/Pricing';
import PricingDetail from './pages/PricingDetail';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Contact from './pages/Contact';
import AISupport from './pages/AISupport';
import PremiumSupport from './pages/PremiumSupport';
import Booking from './pages/Booking';
import Legal from './pages/Legal';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import FAQ from './pages/FAQ';
import ClientArea from './pages/ClientArea';
import Subscribe from './pages/Subscribe';
import UnlockPremium from './pages/UnlockPremium';
import PurchaseSuccess from './pages/PurchaseSuccess';
import SessionResolved from './pages/SessionResolved';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import PremiumRoute from './components/PremiumRoute';
import CookieBanner from './components/CookieBanner';
import StructuredData from './components/StructuredData';

// Scrolls to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};


const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <StructuredData />
        <div className="flex flex-col min-h-screen bg-background text-text-primary font-sans">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/pricing/:planId" element={<PricingDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/ai-support" element={<AISupport />} />
              <Route path="/premium-support" element={
                <PremiumRoute>
                  <PremiumSupport />
                </PremiumRoute>
              } />
              <Route path="/client-area" element={
                <ProtectedRoute>
                  <ClientArea />
                </ProtectedRoute>
              } />
              <Route path="/booking" element={<Booking />} />
              <Route path="/subscribe" element={<Subscribe />} />
              <Route path="/unlock-premium" element={<UnlockPremium />} />
              <Route path="/purchase-success" element={<PurchaseSuccess />} />
              <Route path="/session-resolved" element={<SessionResolved />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
          <Footer />
          <CookieBanner />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;