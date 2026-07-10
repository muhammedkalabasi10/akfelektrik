import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { MdInfoOutline, MdMiscellaneousServices, MdPeopleOutline, MdMailOutline } from 'react-icons/md';

const MobileBottomBar = () => {
    return (
        <>
            <div className="mobile-nav-menu">
                <HashLink smooth to="/#about" className="mobile-nav-item">
                    <MdInfoOutline className="mobile-nav-icon" />
                    <span>Hakkımızda</span>
                </HashLink>
                <HashLink smooth to="/#services" className="mobile-nav-item">
                    <MdMiscellaneousServices className="mobile-nav-icon" />
                    <span>Hizmetler</span>
                </HashLink>
                <HashLink smooth to="/#clients" className="mobile-nav-item">
                    <MdPeopleOutline className="mobile-nav-icon" />
                    <span>Müşteriler</span>
                </HashLink>
                <HashLink to="/contact#contact" className="mobile-nav-item">
                    <MdMailOutline className="mobile-nav-icon" />
                    <span>İletişim</span>
                </HashLink>
            </div>

            <div className="mobile-bottom-bar">
                <a href="tel:05511348518" className="mobile-bottom-bar-button mobile-bottom-bar-call" onClick={() => window.gtag_report_conversion?.('tel:05511348518')}>
                    📞 Ara
                </a>
                <a 
                    href="https://wa.me/905511348518?text=Merhaba,%20elektrik%20ar%C4%B1zas%C4%B1%20i%C3%A7in%20yard%C4%B1m%20istiyorum" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mobile-bottom-bar-button mobile-bottom-bar-whatsapp"
                >
                    💬 WhatsApp
                </a>
            </div>
        </>
    );
};

export default MobileBottomBar;
