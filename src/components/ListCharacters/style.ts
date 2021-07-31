import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  margin-top: 8.125rem;

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
  gap: 1.25rem;

  .card {
    width: 10.625rem;
    overflow: hidden;
    img {
      width: 100%;
      height: 10.625rem;
      transition: transform 0.3s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
    }

    div {
      width: 10.625rem;
      height: 4.938rem;
      background: var(--black-1000);
      display: flex;
      align-items: center;
      justify-content: left;
      padding: 0 0.938rem;
      margin-top: -05px;
      z-index: 10;
      border-top: 0.25rem solid var(--red-1000);
      span {
        font-family: "Open Sans", sans-serif;
        font-weight: 400;
        font-size: 0.875rem;
        text-align: left;
        color: var(--white);
      }
    }
  }
`;
