/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
// import { phone } from '../../responsive';

const GoUpButton = styled.a`
text-decoration: none;
color: black;
background-color: lightgray;
display: ${(props) => (props.show ? 'flex' : 'none')};
position: fixed;
bottom: 30px;
right: 20px;
width: 50px;
height: 50px;
border-radius: 50%;
align-items: center;
justify-content: center;
z-index: 1000;
cursor: pointer;
animation: fadeIn 0.3s;
transition: opacity 0.4s;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
opacity: 0.5;

    &:hover {
        opacity: 1;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const GoUp = () => {
  const [showGoUp, setShowGoUp] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 100) {
        setShowGoUp(true);
      } else {
        setShowGoUp(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <GoUpButton href="#intro" show={showGoUp}>
        <KeyboardDoubleArrowUpIcon />
      </GoUpButton>
    </>

  );
};

export default GoUp;
