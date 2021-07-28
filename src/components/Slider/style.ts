import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 9.25rem 0;
  background: var(--black-1000);

  > div {
    width: 80%;
    margin: 0 auto;
    h3 {
      color: var(--white);
      margin-bottom: 1.25rem;
    }
  }
`;

export const StyledSwiper = styled.div`
  width: 80%;
  margin: 0 auto;
  position: relative;
  height: 18.75rem;

  .swiper-container {
    width: 100%;
    height: 100%;
    position: static !important;
  }

  .swiper-slide {
    text-align: center;
    font-size: 1.125rem;
    background: pink;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-button-next,
  .swiper-button-prev {
    height: 19px;
    border: 3px solid var(--white);
    padding: 20px;
    color: var(--white) !important;
    fill: black !important;
    stroke: black !important;
  }

  .swiper-button-prev {
    left: 69.375rem;
    top: -40px;
  }

  .swiper-button-next {
    right: 0;
    top: -40px;
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 20px !important;
    font-weight: bold !important;
  }
`;
