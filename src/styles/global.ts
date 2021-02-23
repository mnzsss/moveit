import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@media (max-width: 1080px) {
  html{
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html{
    font-size: 87.5%;
  }
}

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box; 
}

img {
  max-width: 100%;
  height: auto;
}

body {
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  -webkit-font-smoothing: antialiased;
  width: 100%;
  overflow-x:hidden;
}

body, input, button, table, textarea {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: inherit;
}
`;
