import styled from "styled-components";
import bannerImg from "../../../assets/images/banner.jpg";

export const StyledSection = styled.section`
  width: 100%;
  height: 613px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${bannerImg}) no-repeat;
  background-size: cover;
  margin-top: 6.5rem;
  position: relative;
  padding-bottom: 44.375rem;

  div {
    max-width: 37rem;
    position: absolute;
    top: 23.563rem;
    left: 8.438rem;
    h1 {
      font: bold 6.25rem/8.438rem Oswald;
      color: var(--white);
    }
  }
`;
