import { ThemeProvider } from "styled-components";
import Theme from "./styles/Theme";
import { useDispatch, useSelector } from "react-redux";
import GlobalStyle from "./styles/GlobalStyles";
import HomePage from "./views/Home/HomePage";
import { Card, Dropdown } from "./components";
import {
  filterCategory,
  filterType,
  filterPhase,
  filterTags,
  renderFilteredProgramsList,
} from "./store/reducer/programReducer";

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
