import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 6.563rem;
  padding: 0 1rem;
  background: var(--black-1000);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;

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
      }
    }
  }

  section {
    top: 104px;
  }
`;
