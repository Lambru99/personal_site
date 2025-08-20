import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';
import './AboutSection.css';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    const { t } = useTranslation();
    const sectionRef = useRef(null);
    const mainTitleRef = useRef(null);
    const contentContainerRef = useRef(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const title = mainTitleRef.current;
        const content = contentContainerRef.current;
        
        // Animazione di scomparsa e rimpicciolimento del titolo (allo scroll)
        gsap.to(title, {
            scale: 0.9,
            opacity: 0,
            y: -20,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: section,
                start: 'center center',
                end: 'bottom top',
                scrub: true,
            },
        });

        // Animazione del contenuto: appare una volta all'ingresso
        gsap.fromTo(content,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: content,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );

    }, []);

    return (
        <section ref={sectionRef} className="about-section">
            <h2 ref={mainTitleRef}>{t('about.title')}</h2>
            
            <div ref={contentContainerRef}>
                <div className="about-block">
                    <h3>{t('about.background.heading')}</h3>
                    <p>{t('about.background.text')}</p>
                </div>
                
                <div className="about-block">
                    <h3>{t('about.skills.heading')}</h3>
                    <p>{t('about.skills.text')}</p>
                </div>

                <div className="about-block">
                    <h3>{t('about.tools.heading')}</h3>
                    <p>{t('about.tools.text')}</p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;