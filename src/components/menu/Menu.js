/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import './menu.scss';
import styled from 'styled-components';
import links from '../../utils/menuLinks';

const Container = styled.div``;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 30px;
  font-weight: 300;
  color: white;
  width: 60%;
`;

const Item = styled.li`
   margin-bottom: 25px;
`;

const Link = styled.a`
    font-size: inherit;
    color: inherit;
    text-decoration: none;

    &:hover {
      font-weight: 500;
      color: white;
    }
`;

const Menu = ({ menuOpen, setMenuOpen }) => (
  <Container
    id="primary-navigation"
    className={`menu ${menuOpen && 'active'}`}
    role="navigation"
    aria-label="Primary"
    aria-hidden={!menuOpen}
  >
    <List>
      {
        links.map((link) => (
          <Item onClick={() => setMenuOpen(false)} key={link.name}>
            <Link href={link.href}>{link.name}</Link>
          </Item>
        ))
      }

    </List>
  </Container>
);

export default Menu;
