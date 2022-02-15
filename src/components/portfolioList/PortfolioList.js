/* eslint-disable react/prop-types */
import './portfolioList.scss';

const PortfolioList = ({
  id, title, active, setSelected,
}) => (
  <li
    className={active ? 'portfolioList active' : 'portfolioList'}
    onClick={() => setSelected(id)}
    aria-hidden="true"
  >
    {title}
  </li>
);

export default PortfolioList;
