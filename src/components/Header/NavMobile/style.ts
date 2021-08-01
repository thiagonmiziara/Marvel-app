import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 99;
  margin-top: 90px;

  nav {
    width: 50%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    gap: 15px;
    background: var(--black-800);
    position: relative;

    animation: translate 0.4s ease-in-out;

    a {
      margin-top: 15px;
      font-size: 1.3rem;
      color: var(--white);
      text-decoration: dashed;
      display: flex;
      align-items: center;
      padding: 1rem;
      border-bottom: 2px solid var(--red-1000);
      &:hover {
        color: var(--red-1000);
      }
    }

    & > div {
      @keyframes translate {
        0% {
          margin-left: -200px;
        }
        100% {
          margin-left: 0;
        }
      }
    }
  }
`;
