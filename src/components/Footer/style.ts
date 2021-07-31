import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  background: var(--black-800);
  padding: 80px;
`;

export const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;

  div.info {
    width: 50%;
    display: flex;
    gap: 30px;
    img {
      width: 30px;
      height: 45px;
    }

    ul {
      p {
        color: var(--white);
        font-family: "Oswald", sans-serif;
        font-weight: 600;
        font-size: 19px;
      }
      li {
        font-size: 14px;
        font-family: "Open Sans", sans-serif;
        list-style: none;
        color: var(--gray-400);
        cursor: pointer;

        &:hover {
          color: var(--red-1000);
        }
      }
    }
  }

  div.social {
    display: flex;
    align-items: flex-start;
    gap: 100px;
    div {
      width: 100%;

      p {
        font-size: 19px;
        font-family: "Oswald", sans-serif;
        color: var(--white);
        margin-bottom: 5px;
      }
      div {
        margin-bottom: 5px;
        display: flex;
        gap: 4px;
        align-items: center;
        img {
          width: 60px;
          height: 60px;
        }
        span {
          color: var(--white);
          font-size: 14px;

          font-family: "Open Sans", sans-serif;
        }
      }
      a {
        font-family: "Open Sans", sans-serif;
        color: var(--gray-400);
        margin-top: 10px;
        &:hover {
          color: var(--red-1000);
        }
      }
    }

    div.social__redes {
      width: 50%;

      div {
        display: flex;
        align-items: center;
        gap: 15px;
        img {
          width: 24px;
          cursor: pointer;
        }
      }
    }
  }
`;
