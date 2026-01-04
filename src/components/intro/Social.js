import styled from 'styled-components';
import { phone } from '../../responsive';

const Container = styled.div``;

const SocialList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 0;
    list-style: none;

    ${phone({
    margin: '10px 0 0 0',
    flexDirection: 'row',
    justifyContent: 'space-between',
  })};
`;

const SocialItem = styled.li`
    margin: 2px 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    border-radius: 50%;
    display: ${(props) => (props.hideDesk ? 'none' : 'flex')};
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.08);
    }

    ${phone({
    margin: '10px',
    display: 'flex',
  })};
`;

const SocialLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 34px;
    height: 34px;
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: #1e1e1e;

    &:hover {
      transform: scale(1.06);
    }
`;

const SocialIcon = styled.img`
    width: 20px;
    height: 20px;
    object-fit: contain;
    display: block;

    /* match "skills icons" tint */
    filter: grayscale(1) saturate(0) contrast(1.2) brightness(0.25);
    opacity: 0.9;

    /* allow per-icon scaling (default 1) */
    transform: scale(var(--icon-scale, 1));
    transform-origin: center;

    transition: opacity 160ms ease, transform 160ms ease;

    ${phone({
    width: '20px',
    height: '20px',
  })};

    ${SocialLink}:hover & {
      opacity: 1;
      transform: scale(var(--icon-scale, 1)) translateY(-1px);
    }
`;

const Social = () => (
  <Container>
    <SocialList className="socials">
      <SocialItem>
        <SocialLink
          href="https://github.com/Hamzaoutdoors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <SocialIcon src="assets/socials/github.svg" alt="" />
        </SocialLink>
      </SocialItem>

      <SocialItem>
        <SocialLink
          href="https://www.linkedin.com/in/hamzaellaouzi/?locale=en_US"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          {/* fix double slash */}
          <SocialIcon src="assets/socials/linkedin.svg" alt="" />
        </SocialLink>
      </SocialItem>

      <SocialItem>
        <SocialLink
          href="https://twitter.com/EllaouziHamza"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
        >
          {/* X tends to have more visual weight; scale it down slightly */}
          <SocialIcon src="assets/socials/x.svg" alt="" style={{ '--icon-scale': 0.85 }} />
        </SocialLink>
      </SocialItem>

      <SocialItem>
        <SocialLink
          href="https://medium.com/@hamzaellaouzi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Medium"
        >
          <SocialIcon src="assets/socials/medium.svg" alt="" />
        </SocialLink>
      </SocialItem>
    </SocialList>
  </Container>
);

export default Social;
