/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import styled from 'styled-components';
import {
  LinkedIn, Twitter, GitHub, LocationOn, Phone, MailOutline, Email,
} from '@mui/icons-material';

import './footer.scss';

const FooterContainer = styled.footer`
    width: 100%;
`;

const Footer = () => (
  <FooterContainer className="footer">
    <div className="footer-left col-md-4 col-sm-6">
      <p className="about">
        <span>Hamza El Laouzi</span>
        {' '}
        A Full-Stack Web Developer with a passion for building web applications
        and a love for new technologies.
      </p>
      <div className="icons">
        <a href="https://www.linkedin.com/in/hamzaellaouzi/?locale=en_US" target="_blank" rel="noreferrer">
          <LinkedIn />
        </a>
        <a href="https://twitter.com/EllaouziHamza" target="_blank" rel="noreferrer">
          <Twitter />
        </a>
        <a href="https://github.com/Hamzaoutdoors" target="_blank" rel="noreferrer">
          <GitHub />
        </a>
        <a href="mailto:ellaouzihamza@gmail.com?subject=subject&cc=cc@example.com" target="_blank" rel="noreferrer">
          <MailOutline />
        </a>
      </div>
    </div>
    <div className="footer-center col-md-4 col-sm-6">
      <div>
        <LocationOn className="i" />
        <p>
          <span>Val Fleuri district 90081</span>
          {' '}
          Tangier, Morocco
        </p>
      </div>
      <div>
        <Phone className="i" />
        <p> (+212) 691 475 161</p>
      </div>
      <div>
        <Email className="i" />
        <p><a href="mailto:ellaouzihamza@gmail.com"> ellaouzihamza@gmail.com</a></p>
      </div>
    </div>

    <div className="footer-right col-md-4 col-sm-6">
      <p className="footer-title">Available for freelance/CDI challenges</p>

      <div className="footer-linksBlock">
        <p className="footer-subtitle">Quick Links</p>
        <div className="footer-links">
          <a href="#intro">About / Intro</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#works">Skills / Works</a>
          <a href="#contact">Contact</a>
          <a
            href="/assets/cv/Hamza_Ellaouzi_CV.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          <a href="/assets/cv/Hamza_Ellaouzi_CV.pdf" download>
            Download PDF
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-meta">Made with React • SCSS • Framer Motion • MUI  with &#x2764;</p>
        <p className="footer-meta">
          ©
          {new Date().getFullYear()}
          {' '}
          Hamza El Laouzi
        </p>
      </div>
    </div>
  </FooterContainer>
);

export default Footer;
