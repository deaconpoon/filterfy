import { ThemeProvider } from "styled-components";
import Theme from "./styles/Theme";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import GlobalStyle from "./styles/GlobalStyles";
import Card from "./components/Card/Card";

function App() {
  const dispatch = useDispatch();
  const programsList = useSelector((state) => state.programs.programsList);

  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <div className="layout">
          <main className="body">
            {programsList.map((program) => (
              <Card
                resourceName={program["Resource Name"]}
                resourceDescription={program["Resource Description"]}
              ></Card>
            ))}
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
