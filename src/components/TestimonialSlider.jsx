import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import slider from '../data';

const TestimonialSlider = () => (
  <Swiper breakpoints={{
    320: {
      slidesPerView: 1,
      spaceBetween: 18,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  }}
  >
    {slider.map((slide) => {
      const {
        message, image, name, email,
      } = slide;
      return (
        <SwiperSlide key={slide.id} className="rounded-lg p-4 lg:p-6 min-h-[240px] bg-gradient-to-t from-[#130613] via-[#2A1428] to-[#331A35]">
          <p className="mb-8 min-h-[100px] text-[15px] ">{message}</p>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <div className="w-14">
              <img className="mb-3 md:mb-0" src={image} alt="" />
            </div>
            <div>
              <div className="font-medium text-base">{name}</div>
              <div className="font-medium text-rose-600">{email}</div>
            </div>
          </div>
        </SwiperSlide>
      );
    })}
  </Swiper>
);
export default TestimonialSlider;
