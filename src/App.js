import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import PhoneIcon from '@mui/icons-material/Phone';
import { FaWhatsapp } from 'react-icons/fa';
import {
  Routes,
  Route,
  BrowserRouter,
  useLocation
} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';
import { useDocTitle } from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import MobileBottomBar from './components/MobileBottomBar';
import PopupModal from './components/PopupModal';
import ReactGA from "react-ga4"; // ✅ GA4 importu

// ✅ Sayfa takibi için custom hook
function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
      title: document.title,
    });
  }, [location]);
}

function App() {
  useEffect(() => {
    // ✅ GA başlatma
    ReactGA.initialize("G-XF99HZXYQL");

    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    };

    window.addEventListener('load', aos_init);
  }, []);

  useDocTitle("AKF Elektrik - Elektrik Mühendisliği ve Otomasyon Sistemleri");

  return (
    <BrowserRouter>
      <a href="tel:05511348518" className="phone-button" onClick={() => gtag_report_conversion('tel:05511348518')}><PhoneIcon/></a>
      <a 
        href="https://wa.me/905511348518?text=Merhaba,%20elektrik%20ar%C4%B1zas%C4%B1%20i%C3%A7in%20yard%C4%B1m%20istiyorum" 
        className="whatsapp-button" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>
      <MobileBottomBar />
      <PopupModal />
      <div className="App"></div>
      <PageTrackingWrapper />
    </BrowserRouter>
  );
}

function PageTrackingWrapper() {
  usePageTracking(); // ✅ sayfa takibi burada

  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-demo" element={<DemoProduct />} />
      </Routes>
    </ScrollToTop>
  );
}

export default App;
