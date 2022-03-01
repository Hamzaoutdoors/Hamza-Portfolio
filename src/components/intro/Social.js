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
      transform: rotate(360deg) scale(1.1);
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
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: #1e1e1e;

    &:hover {
      transform: rotate(360deg) scale(1.3);
    }
`;

const Social = () => (
  <Container>
    <SocialList class="socials">
      <SocialItem>
        <SocialLink
          href="https://github.com/Hamzaoutdoors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="assets/socials/github.svg" alt="github icon" />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink
          href="https://www.linkedin.com/in/hamzaellaouzi/?locale=en_US"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="assets/socials//linkedin.svg" alt="linkedIn icon" />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink
          href="https://angel.co/u/hamza-ellaouzi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="assets/socials/angelist.svg" alt="angelist icon" />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink
          href="https://twitter.com/EllaouziHamza"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="assets/socials/twitter.svg" alt="twitter icon" />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink
          href="https://medium.com/@hamzaellaouzi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="assets/socials/medium.svg" alt="medium icon" />
        </SocialLink>
      </SocialItem>
    </SocialList>
  </Container>

);

export default Social;
