import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { FaLinux, FaPython, FaWindows } from 'react-icons/fa';
import { SiBurpsuite, SiMacos } from "react-icons/si";
import { BsListColumnsReverse } from "react-icons/bs";
import { GiCctvCamera,GiSherlockHolmes } from "react-icons/gi";
import './SkillsSection.css';

// Mappa le chiavi delle competenze alle loro icone
const skillIcons = {
  WebAttack: <SiBurpsuite />,
  ReverseEngineering: <BsListColumnsReverse />,
  Scripting: <FaPython />,
  OSINT: <GiCctvCamera />,
  SocialEngineering: <GiSherlockHolmes />,
  Linux: <FaLinux />,
  Windows: <FaWindows />,
  MacOs: <SiMacos />,
};

const SkillsSection = () => {
  const { t } = useTranslation();
  // Legge l'array di competenze dai file di traduzione
  const skills = t('about.skills.items', { returnObjects: true });

  return (
    <section className="skills-section">
      <h2>{t('about.skills.heading')}</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
};

const SkillItem = ({ skill }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Trova l'icona corrispondente dalla mappa
  const icon = skillIcons[skill.name];

  return (
    <div ref={ref} className={`skill-item ${inView ? 'is-visible' : 'fade-in'}`}>
      <div className="skill-icon">{icon}</div>
      <h3>{skill.title}</h3>
    </div>
  );
};

export default SkillsSection;