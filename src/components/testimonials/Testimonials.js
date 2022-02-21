import './testimonials.scss';
import testimonialsData from '../../utils/testimonialsData';

const Testimonials = () => (
  <div className="testimonials" id="testimonials">
    <h1>Testimonials</h1>
    <div className="container">
      {testimonialsData.map((test) => (
        <div
          className={test.featured ? 'card featured' : 'card'}
          key={test.id}
        >
          <div className="top">
            <img src="assets/right-arrow.png" className="left" alt="" />
            <img
              className="user"
              src={test.img}
              alt=""
            />
            <img className="right" src={test.icon} alt="" />
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
