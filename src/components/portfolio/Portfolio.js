import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PortfolioList from '../portfolioList/PortfolioList';
import PortfolioCard from './PortfolioCard';
import './portfolio.scss';
import {
  webPortfolio,
  mobilePortfolio,
  credentials,
} from '../../utils/portfolioData';

const Container = styled.div``;

export default function Portfolio() {
  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);
  const list = [
    {
      id: 'web',
      title: 'Web Applications',
    },
    {
      id: 'mobile',
      title: 'Mobile Applications',
    },
    {
      id: 'credentials',
      title: 'Credentials',
    },
  ];

  useEffect(() => {
    switch (selected) {
      case 'web':
        setData(webPortfolio);
        break;
      case 'mobile':
        setData(mobilePortfolio);
        break;
      case 'credentials':
        setData(credentials);
        break;
      default:
        setData(webPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio & Credentials</h1>
      <h2>
        Here are some of my projects and credentials that I have worked on.
      </h2>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            key={item.id}
          />
        ))}
      </ul>
      <Container className="container" key={selected}>
        {data.map((d) => (
          <PortfolioCard item={d} key={`${selected}-${d.id}`} />
        ))}
      </Container>
    </div>
  );
}
