import { ThemeProvider } from "styled-components";
import Theme from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyles";
import HomePage from "./views/Home/HomePage";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <div className="layout">
          <main className="body">
            <HomePage />
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
