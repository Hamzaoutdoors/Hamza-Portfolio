import styled from 'styled-components';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { PreviewOutlined, GitHub } from '@mui/icons-material';
import { mobile } from '../../responsive';
import './portfolio.scss';

const Info = styled.div`
   opacity: 0;
   width: 100%;
   height: 100%;
   position: absolute;
   top: 0;
   left: 0;
   background-color: rgba(0, 0, 0, 0.2);
   z-index: 3;
   display: flex;
   justify-content: center;
   align-items: center;
   transition: all 0.5s ease;
   cursor: pointer;
   border-radius: 25px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    margin: 10px;
    width: 25%;
    height: auto;
    aspect-ratio: ${(props) => props.ratio || 16 / 9};
    border-radius: 25px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    border: 1px solid rgb(240, 239, 239);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    position: relative;
    overflow: hidden;
    transition: background 0.4s ease;
    &:hover ${Info}{
        opacity: 1;
    }
    &:hover {
      background: linear-gradient(135deg, #a0e7ff 0%, #ffa0c3 100%);
    }
    &:hover img.card-image {
      filter: none;
      opacity: 1;
    }
    ${mobile({
    width: '35%',
  })};
`;

const Title = styled.h3`
  font-size: 1rem;
  position: absolute;
  top: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  z-index: 1;
  border-radius: 25px;
  filter: grayscale(1) brightness(1.06) contrast(0.92);
  transition: filter 0.4s ease, opacity 0.4s ease;
`;

const Badge = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  z-index: 4; /* above Info overlay */
  pointer-events: none;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
  ${mobile({
    width: '44px',
    height: '44px',
    top: '8px',
    right: '8px',
  })};
`;

const Icon = styled.div`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
    margin: 7px;
    transition: all 0.5s ease;
    cursor: pointer;
    &:hover {
        background-color: #${(props) => props.bg};
        transform: scale(1.1);
    }
    a {
        text-decoration: none;
        color: black;
    }

    ${mobile({
    maxWidth: '30px',
    maxHeight: '30px',
  })};

`;

const CredentialButton = styled.a`
    font-size: 1.1rem;
    text-decoration: none;
    color: #3a3b3c;
    background-color: #fff;
    border: 1px solid #3a3b3c;
    border-radius: 25px;
    padding: 5px 10px;
    margin: 5px;
    transition: all 0.5s ease;
    cursor: pointer;
    &:hover {
      border: 1px solid #333;
      color: #333;
      transform: scale(1.1);
    }

    ${mobile({
    fontSize: '0.9rem',
    padding: '3px 6px',
  })};
`;

const PortfolioCard = (props) => {
  const [ratio, setRatio] = useState(16 / 9);
  const { item } = props;
  const {
    id,
    img,
    badgeImg,
    fullStack,
    title,
    credentialUrl, sourceUrl, liveUrl,
  } = item;

  return (
    <Container
      ratio={ratio}
      as={motion.div}
      initial={{
        opacity: 0,
        translateY: 70,
      }}
      animate={{
        opacity: 1.2,
        translateY: 0,
      }}
      transition={{
        duration: 0.4,
        delay: id * 0.35,
      }}
      className="item"
    >
      <Title>{title}</Title>
      <Image
        className="card-image"
        src={img}
        alt={`${title} preview`}
        loading="lazy"
        decoding="async"
        onLoad={(e) => {
          const { naturalWidth, naturalHeight } = e.target;
          if (naturalWidth && naturalHeight) {
            setRatio(naturalWidth / naturalHeight);
          }
        }}
      />
      {fullStack
            && (
            <Badge
              src={badgeImg}
              alt="Full-stack badge"
              loading="lazy"
              decoding="async"
            />
            )}
      <Info>
        {
        credentialUrl ? (
          <CredentialButton
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            See credential
          </CredentialButton>
        ) : (
          <>
            {liveUrl ? (
              <Icon bg="e9f5f5">
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PreviewOutlined />
                </a>
              </Icon>
            ) : null}
            {sourceUrl ? (
              <Icon bg="d86a77">
                <a
                  href={sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHub />
                </a>
              </Icon>
            ) : null}
          </>
        )
        }

      </Info>
    </Container>
  );
};

export default PortfolioCard;

PortfolioCard.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
};
