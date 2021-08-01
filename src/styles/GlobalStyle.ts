import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html{
  scroll-behavior: smooth;
}
  :root{
    --white: #FFFFFF;
    --black-1000: #000000;
    --black-800:#222222;
    --red-1000: #ED1B24;
    --gray-1000: #000000D5;
    --gray-900: #000000C4;
    --gray-400:#9B9B9B;
    --gray-300: #00000029;
    --gray-100: #0000000D;
    --gray-50:#F2F2F2;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }

  html{
    @media (max-width: 1080px){
      font-size: 93.75%; //15px
    }

    @media (max-width: 720px){
      font-size: 87.5%; //14px
    }
  }

  body{
    background: var(--white);
    -webkit-font-smoothing: antialiased;
  }

  border-style, input, textarea , button{
    font-family: 'Oswald', 'Open Sans' , sans-serif;
    font-weight: 400;
  }

  h1,h2,h3,h4,h5,h6,strong{
    font-weight: 600;
  }
  
  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }
 `;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
