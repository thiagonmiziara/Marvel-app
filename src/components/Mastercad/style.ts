import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  div {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      padding: 0.625rem 0;
      font-size: 3.875rem;
      font-weight: 700;
      font-family: "Oswald", sans-serif;
      color: var(--black-1000);
    }

    span {
      font-size: 1.25rem;
      font-family: "Open Sans", sans-serif;
      font-weight: 400;
      color: var(--gray-400);
    }

    img {
      width: 80%;
      padding: 1.25rem 0;
    }

    button {
      font-family: "Open Sans", sans-serif;
      font-weight: 700;
      font-size: 0.875rem;
      padding: 1.313rem 5.625rem;
      color: var(--white);
      background: var(--red-1000);
      border: 0;
    }

    a {
      padding: 0.938rem 0;
      text-decoration: none;
      color: var(--red-1000);
      font-weight: 700;
      font-family: "Open Sans", sans-serif;
      font-size: 0.875rem;
    }
  }
`;
