/* eslint-disable react/prop-types */
import './topbar.scss';
import {
  Person, Mail,
} from '@material-ui/icons';

const TopBar = ({ menuOpen, setMenuOpen }) => {
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`topbar ${menuOpen && 'active'}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Hamza.
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
