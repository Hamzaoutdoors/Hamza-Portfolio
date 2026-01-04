import { useState, useEffect } from 'react';
import TopBar from './components/header/TopBar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';
import GoUp from './components/goUp/GoUP';

import './app.scss';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // lock scroll when menu is open
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <div className={`app ${menuOpen ? 'menu-open' : ''}`}>
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <GoUp />
      <div
        className="sections"
        style={{
          filter: menuOpen ? 'blur(4px)' : 'none',
          transition: 'filter 150ms ease',
          pointerEvents: menuOpen ? 'none' : 'auto',
          userSelect: menuOpen ? 'none' : 'auto',
        }}
        aria-hidden={menuOpen}
      >
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
