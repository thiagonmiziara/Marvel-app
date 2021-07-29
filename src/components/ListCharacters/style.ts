import styled from "styled-components";

export const Container = styled.section`
  max-width: 1400px;
  width: 100%;
  margin-top: 130px;

  > div {
    width: 80%;
    margin: 0 auto;
    h2 {
      margin-bottom: 40px;
    }
  }
`;

export const StyledDiv = styled.div`
  width: 80%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;

  img {
    width: 170px;
  }
`;
