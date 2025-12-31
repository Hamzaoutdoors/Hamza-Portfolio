/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import styled from 'styled-components';
import {
  LinkedIn, Twitter, GitHub, MailOutline, Send,
} from '@mui/icons-material';

import './footer.scss';

const FooterContainer = styled.footer`
    width: 100%;
`;

const Footer = () => (
  <FooterContainer className="footer">
    <div className="footer-inner">
      <div className="footer-col footer-brand">
        <p className="footer-brandTitle">Hamza El Laouzi</p>
        <p className="footer-brandText">
          Full-Stack Web Developer building clean, modern web experiences.
        </p>

        <div className="footer-social">
          <a href="https://www.linkedin.com/in/hamzaellaouzi/?locale=en_US" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedIn />
          </a>
          <a href="https://twitter.com/EllaouziHamza" target="_blank" rel="noreferrer" aria-label="Twitter / X">
            <Twitter />
          </a>
          <a href="https://github.com/Hamzaoutdoors" target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHub />
          </a>
          <a href="mailto:ellaouzihamza@gmail.com" target="_blank" rel="noreferrer" aria-label="Email">
            <MailOutline />
          </a>
        </div>
      </div>

      <div className="footer-col">
        <p className="footer-heading">Quick Links</p>
        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#intro">Home</a>
          <a href="#intro">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#works">Skills</a>
          <a href="#contact">Contact</a>
          <a href="/assets/cv/Hamza_Ellaouzi_CV.pdf" target="_blank" rel="noreferrer">Resume</a>
        </nav>
      </div>

      <div className="footer-col">
        <p className="footer-heading">Services</p>
        <div className="footer-list">
          <span>UI/UX Design</span>
          <span>Web Development</span>
          <span>App Development</span>
          <span>Branding</span>
          <span>SEO Optimization</span>
          <span>Content Management</span>
        </div>
      </div>

      <div className="footer-col">
        <p className="footer-heading">Newsletter</p>
        <p className="footer-muted">
          Subscribe to get updates about my latest projects and articles.
        </p>

        <form
          className="footer-newsletter"
          onSubmit={(e) => e.preventDefault()}
          aria-label="Newsletter form"
        >
          <label className="sr-only" htmlFor="footer-email">Your email</label>
          <input id="footer-email" type="email" placeholder="Your email" autoComplete="email" />
          <button type="submit" aria-label="Subscribe">
            <Send fontSize="small" />
          </button>
        </form>
      </div>
    </div>

    <div className="footer-bottomBar">
      <div className="footer-divider" />
      <p className="footer-copy">
        ©
        {' '}
        {new Date().getFullYear()}
        {' '}
        Hamza El Laouzi. All rights reserved.
      </p>
    </div>
  </FooterContainer>
);

export default Footer;
