import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 6.563rem;
  padding: 0 1.75rem;
  background: var(--black-1000);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 99;

  nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      width: 30%;
      display: flex;
      justify-content: space-between;

      a {
        font-size: 0.875rem;
        font-weight: bold;
        font-family: "Open Sans", sans-serif;
        text-decoration: none;
        text-transform: uppercase;
        color: var(--white);

        transition: all 0.2s ease-in-out;

        &:hover {
          color: var(--red-1000);
          text-decoration: underline;
        }
      }
      @media (max-width: 768px) {
        width: 10%;
        a {
          display: none;
        }
      }
    }
  }
  @media (max-width: 768px) {
    position: static;
  }
`;

export const ButtonMobile = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    background: transparent;
    border: 0;
  }
`;
