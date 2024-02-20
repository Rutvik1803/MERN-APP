import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/router";
import { ThemeProvider, createTheme } from "@mui/material";
import { themeSettings } from "./theme";
import { useMemo } from "react";
import { useSelector } from "react-redux";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
