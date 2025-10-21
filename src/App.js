import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import logojpg from './images/logojpg.jpg'
import PhoneIcon from '@mui/icons-material/Phone';
import {
  Routes,
  Route,
  BrowserRouter,
  useLocation
} from 'react-router-dom';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';
import { useDocTitle } from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
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
    <>
      <a href="tel:05511348518" className="phone-button"><PhoneIcon/></a>
      <div className="App">
        <FloatingWhatsApp
          phoneNumber="05511348518"
          accountName="AKF Elektrik"
          chatMessage="Merhaba! Size nasıl yardımcı olabiliriz?"
          placeholder="Mesaj yazın..."
          avatar={logojpg}
          allowEsc
          allowClickAway
          notification
          notificationSound
        />
      </div>

      <BrowserRouter>
        <PageTrackingWrapper />
      </BrowserRouter>
    </>
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
