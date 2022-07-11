import "./App.css";
import JokeCard from "./components/JokeCard";
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: `monospace`,
    fontSize: 28,
  },
  palette: {
    mode: "light",

    primary: {
      main: "#5ddef4",
    },
    secondary: {
      main: "#007c91",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <JokeCard />
      </div>
    </ThemeProvider>
  );
}

export default App;
