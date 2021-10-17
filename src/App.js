import { ThemeProvider } from "styled-components";
import Theme from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyles";
import Card from "./components/Card/Card";
function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <div className="layout">
          <main className="body">
            <Card></Card>
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
