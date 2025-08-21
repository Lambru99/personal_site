import React, { useRef, useLayoutEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import './ContactSection.css';

const ContactSection = () => {
    const { t } = useTranslation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <section ref={ref} className={`contact-section ${inView ? 'is-visible' : 'fade-in'}`}>
            <h2>{t('contact.title')}</h2>
            <p>
                {t('contact.subtitle')}
            </p>
            <div className="contact-buttons-container">
                <div className="contact-button-group">
                    <a href="mailto:latiniludovico@gmail.com" className="contact-button">{t('contact.email')}</a>
                    <a 
                        href="/cv/Latini_Ludovico_CV.pdf"
                        download="Ludovico_Latini_CV.pdf"
                        className="contact-button download-button"
                    >
                        {t('contact.cv')}
                    </a>
                </div>
            </div>
            
            <div className="social-links">
                <a href="https://www.linkedin.com/in/ludovico-latini-b962b5226/">LinkedIn</a>
                <a href="https://www.github.com/Lambru99">GitHub</a>
                <a href="https://www.instagram.com/ludolambru/">Instagram</a>
            </div>
            <div className="tryhackme-container">
                <iframe 
                    src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=538086"
                    style={{ border: 'none' }}
                    title="TryHackMe Badge"
                    className="tryhackme-badge"
                ></iframe>
            </div>
        </section>
    );
};

export default ContactSection;