import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import './PortfolioSection.css';

const PortfolioSection = () => {
    const { t } = useTranslation();
    const projects = t('portfolio.projects', { returnObjects: true });

    return (
        <section className="portfolio-section">
            <h2>{t('portfolio.title')}</h2>
            <div className="portfolio-grid">
                {projects.map((project, index) => (
                    <PortfolioItem key={index} project={project} t={t} />
                ))}
            </div>
        </section>
    );
};

const PortfolioItem = ({ project, t }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={ref} className={`portfolio-item ${inView ? 'is-visible' : 'fade-in'}`}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">{t('portfolio.button')} &rarr;</a>
        </div>
    );
};

export default PortfolioSection;