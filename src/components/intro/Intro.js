/* eslint-disable react/no-unescaped-entities */
import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Full-Stack Web Developer', 'Geoinformatics Enthusiast', 'Software Engineer'],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>El Laouzi Hamza</h1>
          <h3>
            Freelance
            {' '}
            <span ref={textRef} />
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/images/me2.png" alt="" />
        </div>
      </div>
    </div>
  );
}
