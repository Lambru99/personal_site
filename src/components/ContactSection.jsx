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
                        href="public/cv/Latini_Ludovico_CV.pdf"
                        download="L_Latini_CV.pdf"
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
        </section>
    );
};

export default ContactSection;