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
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Ruby on Rails Developer', 'ReactJS Enthusiast', 'obile development'],
    });
  }, []);

  return (
    <div className="intro" id="intro">
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
          <h1>El Laouzi Hamza</h1>
          <h3>
            Freelance
            {' '}
            <span ref={textRef} />
          </h3>
          <ResumeButton href="https://drive.google.com/file/d/1A2ifffhVdJ9nl4aWCAXGLMOrGUEf2uPs/view?usp=sharing" className="btn" target="_blank" rel="noreferrer">
            Get My Resume
          </ResumeButton>
        </div>
        <a href="#portfolio" className="down">
          <img src="assets/down.png" alt="" />
        </a>
      </motion.div>
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
          <img src="assets/images/me2.png" alt="" />
        </div>
      </motion.div>
    </div>
  );
}
