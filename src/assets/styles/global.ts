import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Saira:wght@400;500;700&display=swap');
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Saira', sans-serif;
  }

  body {
    background-color: ${({ theme }: any) => theme.colors.background};
    color: #fefefe;
  }
`;