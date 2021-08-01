import styled from "styled-components";

export const Container = styled.div`
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

  .swiper-slide span {
    position: absolute;
    bottom: 1.625rem;
    color: var(--white);
    transform: translate(7%, 0%);
    font-size: 1.125rem;
    font-family: "Oswald", sans-serif;
    text-shadow: 0px 3px 6px #00000029;
  }

  .swiper-slide img {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-bottom: 4px solid var(--red-1000);
  }

  .swiper-button-next,
  .swiper-button-prev {
    height: 1.188rem;
    border: 0.188rem solid var(--white);
    padding: 1.25rem;
    color: var(--white) !important;
    fill: black !important;
    stroke: black !important;
    top: -2.5rem;
  }

  .swiper-button-prev {
    left: 69.375rem;
  }

  .swiper-button-next {
    right: 0;
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 1.25rem !important;
    font-weight: bold !important;
  }

  .swiper-container-horizontal
    > .swiper-pagination-bullets
    .swiper-pagination-bullet {
    background: var(--red-1000);
  }

  @media (max-width: 768px) {
    padding: 0;
    div {
      .swiper-container {
        position: relative !important;
      }

      .swiper-button-next {
        display: none;
      }
      .swiper-button-prev {
        display: none;
      }
    }
  }
`;
