/* eslint-disable react/no-unescaped-entities */
import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Social from './Social';
import { phone } from '../../responsive';

const ResumeButton = styled.a`
  display: block;
  ${phone({
    display: 'none',
  })};
`;

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: [' Mobile / React Native', ' Full-Stack / MERN', ' Frontend / React.js'],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <motion.div
        className="left"
        initial={{
          opacity: 0,
          translateX: 70,
        }}
        animate={{
          opacity: 1.2,
          translateX: -5,
        }}
        transition={{
          duration: 0.6,
          delay: 0.4,
        }}
      >
        <div className="imgContainer">
          <img
            src="assets/images/me1.webp"
            alt="Portrait of Me"
            loading="eager"
            decoding="async"
          />
        </div>
      </motion.div>
      <motion.div
        className="right"
        initial={{
          opacity: 0,
          translateX: -70,
        }}
        animate={{
          opacity: 1.2,
          translateX: 0,
        }}
        transition={{
          duration: 0.3,
          delay: 0.2,
        }}
      >
        <Social />
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>El LAOUZI Hamza</h1>
          <h3>
            Engineer
            <span ref={textRef} />
          </h3>
          <div className="cta-group">
            <a href="#contact" className="btn" aria-label="Contact Me">
              Contact Me
            </a>
            <ResumeButton
              href="/assets/cv/Hamza_Ellaouzi_CV.pdf"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Get My Resume
            </ResumeButton>
          </div>
        </div>
        <a href="#portfolio" className="down">
          <img
            src="assets/down.png"
            alt="Scroll down to portfolio"
            width="30"
            height="30"
            decoding="async"
          />
        </a>
      </motion.div>
    </div>
  );
}
