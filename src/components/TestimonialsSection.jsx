import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
    const { t } = useTranslation();
    const testimonials = t('testimonials.items', { returnObjects: true });

    return (
        <section className="testimonials-section">
            <h2>{t('testimonials.title')}</h2>
            <div className="testimonials-grid">
                {testimonials.map((testimonial, index) => (
                    <TestimonialItem key={index} testimonial={testimonial} />
                ))}
            </div>
        </section>
    );
};

const TestimonialItem = ({ testimonial }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={ref} className={`testimonial-item ${inView ? 'is-visible' : 'fade-in'}`}>
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <p className="testimonial-author">&mdash; {testimonial.author}</p>
        </div>
    );
};

export default TestimonialsSection;