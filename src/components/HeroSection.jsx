import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HeroSection.css';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    const { t } = useTranslation(); 
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const photoRef = useRef(null); // Ref per la foto

    useLayoutEffect(() => {
        const title = titleRef.current;
        const photo = photoRef.current;
        
        // Animazione del titolo e della foto insieme
        gsap.to([title, photo], {
            scale: 0.8,
            opacity: 0,
            y: -50,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
            },
        });
    }, []);

    return (
        <section ref={sectionRef} className="hero-section">
            <div className="hero-content">
                <img 
                    ref={photoRef} 
                    src="/images/profile.jpg" // Il percorso del file che hai salvato
                    alt="Foto Profilo Ludovico Latini" 
                    className="profile-photo"
                />
                <h1 ref={titleRef}
                    dangerouslySetInnerHTML={{ __html: t('hero.title') }}
                />
            </div>
            <p className="hero-subtitle">
                {t('hero.subtitle')}
            </p>
        </section>
    );
};

export default HeroSection;