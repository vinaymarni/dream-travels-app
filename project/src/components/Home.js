import React, {memo} from 'react';
import '../styles/home.css';
import { tripImages } from '../data/commonData';

import '../styles/snapCarousel.css'; // CSS comes after this code
import CarouselBox from '../commonElements/CarouselBox';

const SnapCarousel = () => {
  const slides = [...tripImages];

  return (
    <section className="carousel" aria-label="Gallery">
      <ol className="carousel__viewport">
        {slides.map((slide, index) => {
          const prev = slides[(index - 1 + slides.length) % slides.length];
          const next = slides[(index + 1) % slides.length];
          return (
            <li
              key={"li"+index}
              id={`carousel__slide${index}`}
              tabIndex="0"
              className="carousel__slide"
            >
              <div className="carousel__snapper">
                <img alt="" src={slide} className='carouselEachImage' />
              </div>
            </li>
          );
        })}
        {/* <div>
          <a href={`#carousel__slide${prev}`} className="carousel__prev">
                  previous
                </a>
                <a href={`#carousel__slide${next}`} className="carousel__next">
                  next
          </a>
        </div> */}
      </ol>

      <aside className="carousel__navigation">
        <ol className="carousel__navigation-list">
          {slides.map((slide, index) => (
            <li key={"image_li_"+index} className="carousel__navigation-item">
              <a
                href={`#carousel__slide${index}`}
                className="carousel__navigation-button"
              >
                Go to slide {index}
              </a>
              {/* <img alt="" src={slide} className='carouselEachImage' /> */}
            </li>
          ))}
        </ol>
      </aside>
    </section>
  );
};



const Home = () => {
    return (
      <div className='homeMainContainer'>

        <CarouselBox>
          {tripImages.map((eachImage, index)=>{
            return(
              <div className='CarouselEachImageCon' key={"images_"+index}>
                <img alt="" src={eachImage} className='carouselEachImage' />
              </div>
            )
          })}
        </CarouselBox>
      </div>
    )
};

export default memo(Home);