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

        font-size: 62px;
        font-family: "Oswald", sans-serif;
        font-weight: 700;

        color: var(--white);
        padding: 30px 60px;
      }
    }
  }

  div.content {
    display: flex;
    flex-direction: column;

    p {
      padding: 60px 0;
      font-size: 20px;
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
        font-size: 13px;
        font-weight: 700;
        color: var(--white);
      }
      div {
        margin-top: 5px;
        input {
          height: 61px;
          width: 369px;
          font-family: "Open Sans", sans-serif;
          font-size: 14px;
          font-weight: 700;
          padding: 0 16px;
          border: 1px solid var(--gray-50);

          &::placeholder {
            color: var(--gray-400);
            opacity: 0.68;
          }
        }

        button {
          width: 120px;
          padding: 0 16px;

          background: var(--red-1000);
          color: var(--white);
          border: none;
          font-family: "Open Sans", sans-serif;
          font-weight: 700;
          font-size: 14px;

          transition: filter 0.2s ease;

          &:hover {
            filter: brightness(0.9);
          }
        }
      }
    }
  }
`;
