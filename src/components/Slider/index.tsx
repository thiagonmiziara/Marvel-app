import SwiperCore, { Pagination, Navigation } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import { StyledContainer, StyledSwiper } from "./style";
SwiperCore.use([Pagination, Navigation]);

const Slider = () => {
  return (
    <StyledContainer>
      <div>
        <h3>PERSONAGENS EM DESTAQUE</h3>
      </div>

      <StyledSwiper>
        <Swiper
          slidesPerView={4.5}
          spaceBetween={10}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className='mySwiper'
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </StyledSwiper>
    </StyledContainer>
  );
};

export default Slider;
