import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import { EffectFlip } from 'swiper/modules';

const SwiperComponent = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;
    if (!swiperInstance) return;

    const handleMouseEnter = () => swiperInstance.slideNext();
    const handleMouseLeave = () => swiperInstance.slidePrev();

    const swiperEl = swiperRef.current;
    swiperEl.addEventListener("mouseenter", handleMouseEnter);
    swiperEl.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      swiperEl.removeEventListener("mouseenter", handleMouseEnter);
      swiperEl.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Swiper
      ref={swiperRef}
      effect="flip"
      modules={[EffectFlip]}
      flipEffect={{ slideShadows: false }}
    >
      <SwiperSlide>
        <img src="/images/erdsemi.png" alt="Slide 2" className="swiper-image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="favicon.png" alt="Slide 3" className="swiper-image" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;