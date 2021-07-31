import styled from "styled-components";

interface StyledButtonProps {
  isActive: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => (props.isActive ? "#ED1B24" : "transparent")};
  color: ${(props) => (props.isActive ? "#ffffff" : "#9B9B9B")};

  border: none;
  width: 2rem;
  height: 2rem;
`;
