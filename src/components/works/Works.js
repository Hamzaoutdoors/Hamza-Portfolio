/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-expressions */
import { useRef, useState, useEffect } from 'react';
import './works.scss';
// import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import worksData from '../../utils/worksData';

export default function Works() {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (idx) => {
    const el = sliderRef.current;
    if (!el) return;
    const children = Array.from(el.children);
    const clamped = ((idx % children.length) + children.length) % children.length;
    children[clamped]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };

  const handleClick = (way) => {
    const next = way === 'left' ? currentIndex - 1 : currentIndex + 1;
    scrollToIndex(next);
  };

  const updateIndex = () => {
    const el = sliderRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    let nearest = { idx: 0, dist: Infinity };
    Array.from(el.children).forEach((child, idx) => {
      const r = child.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const d = Math.abs(centerX - cx);
      if (d < nearest.dist) nearest = { idx, dist: d };
    });
    setCurrentIndex(nearest.idx);
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') handleClick('left');
    if (e.key === 'ArrowRight') handleClick('right');
  };

  const onWheel = (e) => {
    const el = sliderRef.current;
    if (!el) return;
    // convert vertical wheel to horizontal scroll for better UX
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      el.scrollBy({ left: e.deltaY });
    }
  };

  useEffect(() => {
    updateIndex(); // initialize on mount
  }, []);

  return (
    <div className="works" id="works">
      <h1 className="section-title">Skills</h1>
      <p className="section-subtitle">Technologies and tools I use to build products.</p>

      <div
        className="slider"
        ref={sliderRef}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onWheel={onWheel}
        onScroll={updateIndex}
      >
        {worksData.map((d, i) => (
          <div className={`container ${currentIndex === i ? 'active' : ''}`} key={d.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <div className="bubble-cloud">
                  {d.skills && d.skills.map((skill) => (
                    <div className="skill-bubble" key={skill.id}>
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="bubble-logo"
                        loading="lazy"
                        decoding="async"
                        style={{
                          '--logo-opacity': skill.logoOpacity ?? undefined,
                          '--logo-scale': skill.logoScale ?? undefined,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* pagination dots */}
      <div className="pagination" role="tablist" aria-label="Skills slides">
        {worksData.map((_, i) => (
          <button
            key={`dot-${i}`}
            type="button"
            className={`dot ${currentIndex === i ? 'active' : ''}`}
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-selected={currentIndex === i}
            role="tab"
          />
        ))}
      </div>
      {/*
      <div
        className="arrow left"
        onClick={() => handleClick('left')}
        aria-hidden="true"
      >
        <ArrowLeftOutlined style={{ fontSize: '2rem' }} />
      </div>
      <div
        className="arrow right"
        onClick={() => handleClick('right')}
        aria-hidden="true"
      >
        <ArrowRightOutlined style={{ fontSize: '2rem' }} />
      </div> */}
    </div>
  );
}
