import styled from 'styled-components';
import {
  GitHub, Twitter, ContactPage, FacebookRounded, LinkedIn,
} from '@mui/icons-material';
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
    margin: 10px 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    border-radius: 50%;
    display: ${(props) => (props.hideDesk ? 'none' : 'flex')};

    &:hover {
        transform: translateY(-3px);
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
        color: #0177b5;
    }
`;

const Social = () => (
  <Container>
    <SocialList>
      <SocialItem>
        <SocialLink href="https://github.com/Hamzaoutdoors" target="_blank" rel="noreferrer">
          <GitHub style={{ fontSize: '2rem' }} />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink href="https://www.linkedin.com/in/hamzaellaouzi/?locale=en_US" target="_blank" rel="noreferrer">
          <LinkedIn style={{ fontSize: '2rem', color: '#203983', borderRadius: '50%' }} />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink href="https://twitter.com/EllaouziHamza" target="_blank" rel="noreferrer">
          <Twitter style={{ fontSize: '2rem', color: '#1DA1F2' }} />
        </SocialLink>
      </SocialItem>
      <SocialItem hideMobile>
        <SocialLink href="https://web.facebook.com/profile.php?id=100008420561138" target="_blank" rel="noreferrer">
          <FacebookRounded style={{ fontSize: '2rem', color: '#3b5998' }} />
        </SocialLink>
      </SocialItem>
      <SocialItem hideDesk>
        <SocialLink href="https://drive.google.com/file/d/1ZP4CqrDBnGgCJMPAcoTD-GJiGErRMFqD/view" target="_blank" rel="noreferrer">
          <ContactPage style={{ fontSize: '2rem' }} />
        </SocialLink>
      </SocialItem>
    </SocialList>
  </Container>

);

export default Social;
