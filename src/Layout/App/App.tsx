import { Outlet } from "react-router-dom";
import { GlobalStyle } from "@styles";
import { THEME } from "@theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
