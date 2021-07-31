import styled from "styled-components";

export const LoadingContainer = styled.div`
  width: 100%;
  overflow: hidden;

  & > div {
    @keyframes spinner {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    border: 16px solid var(--black-1000);
    border-radius: 50%;
    border-top: 16px solid var(--red-1000);
    animation: spinner 2s linear infinite;
    margin: 0 auto;
  }
`;
