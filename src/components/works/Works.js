/* eslint-disable no-unused-expressions */
import { useState } from 'react';
import './works.scss';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import worksData from '../../utils/worksData';
import SkillModal from './SkillModal';

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (way) => {
    way === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < worksData.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <h1>My Skills</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {worksData.map((d) => (
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>
                    <SkillModal SkillDetail={d} />
                  </span>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="arrow left"
        onClick={() => handleClick('left')}
        aria-hidden="true"
      >
        <ArrowLeftOutlined style={{ fontSize: '2rem' }} />
      </div>
      <div
        className="arrow right"
        onClick={() => handleClick()}
        aria-hidden="true"
      >
        <ArrowRightOutlined style={{ fontSize: '2rem' }} />
      </div>
    </div>
  );
}
