import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import logojpg from './images/logojpg.jpg'
import PhoneIcon from '@mui/icons-material/Phone';
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';
import NotFoundPage from './pages/NotFoundPage';
import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("AKF Elektrik - Elektrik Mühendisliği ve Otomasyon Sistemleri");

  return (
    <>
      <a href="tel:05511348518" className="phone-button"><PhoneIcon/></a>
      <div className="App">
      <FloatingWhatsApp
        phoneNumber="05511348518"
        accountName="AKF Elektrik"
        chatMessage='Merhaba! Size nasıl yardımcı olabiliriz?'
        placeholder='Mesaj yazın...'
        avatar={logojpg}
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
      </div>

        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} /> 
            <Route path="*" component={NotFoundPage} />

          </Routes>
        </ScrollToTop>
    </>
  );
}


export default App;
