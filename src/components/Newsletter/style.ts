import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background: var(--black-1000);
  margin-top: 268px;
  padding: 174px 0;
  display: flex;

  div {
    width: 80%;
    /* margin: 0 auto; */
    display: flex;

    > article {
      width: 408px;
      height: 329px;
      background: var(--red-1000);
      padding: 38px 43px;
      margin-top: -250px;
      margin-left: 229px;
      h1 {
        width: 288px;
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 62px;
        font-family: "Oswald", sans-serif;
        font-weight: 700;

        color: var(--white);
      }
    }
  }

  div.content {
    display: flex;
    flex-direction: column;

    p {
      width: 274px;
      margin-top: -100px;
      padding-bottom: 40px;
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
