import { GlobalStyle } from "@styles";
import { THEME } from "@theme";
import { Outlet } from "react-router-dom";
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
