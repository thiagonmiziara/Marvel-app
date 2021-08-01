import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background: var(--black-1000);
  margin-top: 16.75rem;
  height: 21.75rem;
  display: flex;

  div {
    width: 80%;
    display: flex;

    > article {
      margin: -4.313rem auto 5.25rem auto;
      background: var(--red-1000);

      h1 {
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 3.875rem;
        font-family: "Oswald", sans-serif;
        font-weight: 700;

        color: var(--white);
        padding: 1.875rem 3.75rem;
      }
    }
  }

  div.content {
    display: flex;
    flex-direction: column;

    p {
      padding: 3.75rem 0;
      font-size: 1.25rem;
      font-family: "Oswald", sans-serif;
      font-weight: 700;
      color: var(--white);
      span {
        color: var(--red-1000);
      }
    }

    form {
      label {
        font-family: "Open Sans", sans-serif;
        font-size: 0.813rem;
        font-weight: 700;
        color: var(--white);
      }
      div {
        margin-top: 0.313rem;
        input {
          height: 3.813rem;
          width: 24.75rem;
          font-family: "Open Sans", sans-serif;
          font-size: 0.875rem;
          font-weight: 700;
          padding: 0 1rem;
          border: 1px solid var(--gray-50);

          &::placeholder {
            color: var(--gray-400);
            opacity: 0.68;
          }
        }

        button {
          width: 7.5rem;
          padding: 0 1rem;

          background: var(--red-1000);
          color: var(--white);
          border: none;
          font-family: "Open Sans", sans-serif;
          font-weight: 700;
          font-size: 0.875rem;

          transition: filter 0.2s ease;

          &:hover {
            filter: brightness(0.9);
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;

    > div {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 auto;

      > article {
        padding: 0 0;

        h1 {
          padding: 1rem;
        }
      }
    }

    div.content {
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      width: 80%;

      p {
        width: 100%;
        padding: 0;
        margin-bottom: 1.5rem;
      }

      form {
        width: 100%;

        > div {
          width: 100%;
          margin-bottom: 1.5rem;

          input {
            width: 100%;
          }

          button {
            width: 40%;
          }
        }
      }
    }
  }
`;
