/* eslint-disable react/prop-types */
import './topbar.scss';
import {
  Person, Mail,
} from '@material-ui/icons';
import { motion } from 'framer-motion';

const TopBar = ({ menuOpen, setMenuOpen }) => {
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`topbar ${menuOpen && 'active'}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <motion.img
              src="./assets/images/2.png"
              alt="logo"
              initial={{
                opacity: 0,
                translateX: -10,

              }}
              animate={{
                opacity: 1,
                translateX: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: 'easeOut',
                yoyo: Infinity,
              }}
            />
            Hamza
            <motion.img
              src="./assets/images/1.png"
              alt="logo"
              initial={{
                opacity: 0,
                translateX: 10,

              }}
              animate={{
                opacity: 1,
                translateX: 0,
              }}
              transition={{
                duration: 2,
                delay: 1,
                ease: 'easeOut',
                yoyo: Infinity,
              }}
            />
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>(+212) 691 47 51 61</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>ellaouzihamza@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={handleMenuClick} role="button" tabIndex={0} aria-hidden="true">
            <span className="line1" />
            <span className="line2" />
            <span className="line3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
