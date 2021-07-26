import styled from "styled-components";
import bannerImg from "../../../assets/images/banner.jpg";

export const StyledSection = styled.section`
  width: 100%;
  height: 38.313rem;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${bannerImg}) no-repeat;
  background-size: cover;
  margin-top: 6.5rem;
`;
