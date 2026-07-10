import React, { useState, useEffect } from 'react';
import { MdClose } from 'react-icons/md';

const PopupModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 2500); // 2.5 saniye sonra açılır

        return () => clearTimeout(timer);
    }, []);

    const closeModal = () => {
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="popup-overlay" onClick={closeModal}>
            <div className="popup-modal" onClick={(e) => e.stopPropagation()}>
                <button className="popup-close-btn" onClick={closeModal}>
                    <MdClose />
                </button>

                <div className="popup-content">
                    <h2 className="popup-title">
                        Elektrik Çözümleri İçin Hemen İletişime Geçin!
                    </h2>
                    <p className="popup-description">
                        Ücretsiz danışmanlık al, sorularını soruştur ve hemen başla.
                    </p>

                    <div className="popup-buttons">
                        <a 
                            href="tel:05511348518"
                            className="popup-btn popup-btn-red"
                            onClick={(e) => {
                                closeModal();
                                return gtag_report_conversion('tel:05511348518');
                            }}
                        >
                            📞 Ücretsiz Fiyat Teklifi Al
                        </a>
                        <a 
                            href="https://wa.me/905511348518?text=Merhaba,%20elektrik%20ar%C4%B1zas%C4%B1%20i%C3%A7in%20yard%C4%B1m%20istiyorum"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="popup-btn popup-btn-green"
                            onClick={closeModal}
                        >
                            💬 WhatsApp'tan Bilgi Al
                        </a>
                        <button 
                            className="popup-btn popup-btn-blue"
                            onClick={closeModal}
                        >
                            📋 Detaylı Bilgi
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupModal;
