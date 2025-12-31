import './testimonials.scss';
import testimonialsData from '../../utils/testimonialsData';

const Testimonials = () => (
  <div className="testimonials" id="testimonials">
    <h1 className="section-title">Testimonials</h1>
    <p className="section-subtitle">A few words from people I&#39;ve worked with.</p>

    <div className="container">
      {testimonialsData.map((test) => (
        <div
          className={test.featured ? 'card featured' : 'card'}
          key={test.id}
        >
          <div className="top">
            <img
              src="assets/right-arrow.png"
              className="left"
              alt=""
              loading="lazy"
              decoding="async"
            />
            <img
              className="user"
              src={test.img}
              alt={`${test.name} avatar`}
              loading="lazy"
              decoding="async"
            />
            <img
              className="right"
              src={test.icon}
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="center">
            {test.desc}
          </div>
          <div className="bottom">
            <h3>{test.name}</h3>
            <h4>{test.title}</h4>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Testimonials;
