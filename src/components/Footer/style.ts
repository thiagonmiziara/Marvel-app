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
    gap: 1.875rem;
    img {
      width: 1.875rem;
      height: 2.813rem;
    }

    ul {
      p {
        color: var(--white);
        font-family: "Oswald", sans-serif;
        font-weight: 600;
        font-size: 1.188rem;
      }
      li {
        font-size: 0.875rem;
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
    gap: 6.25rem;
    div {
      width: 100%;

      p {
        font-size: 1.188rem;
        font-family: "Oswald", sans-serif;
        color: var(--white);
        margin-bottom: 0.313rem;
      }
      div {
        margin-bottom: 0.313rem;
        display: flex;
        gap: 0.25rem;
        align-items: center;
        img.blog {
          width: 3.75rem;
          height: 3.75rem;

          @media (max-width: 768px) {
            display: none;
          }
        }
        span {
          color: var(--white);
          font-size: 0.875rem;
          font-family: "Open Sans", sans-serif;
        }
      }
      a {
        font-family: "Open Sans", sans-serif;
        color: var(--gray-400);
        margin-top: 0.625rem;
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
        gap: 0.938rem;
        img {
          width: 1.5rem;
          cursor: pointer;
        }
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;

    div.info {
      ul {
        width: 100%;

        li {
          margin-top: 0.3rem;
        }
      }
    }

    div.social {
      margin-top: 3rem;
      gap: 1rem;
    }
  }
`;
