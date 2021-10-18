import { ThemeProvider } from "styled-components";
import Theme from "./styles/Theme";
import { useDispatch, useSelector } from "react-redux";
import GlobalStyle from "./styles/GlobalStyles";
import { Card, Dropdown } from "./components";

function App() {
  const dispatch = useDispatch();
  const programsList = useSelector(({ programs }) => programs.programsList);
  const categoryOptions = useSelector(
    ({ programs }) => programs.categoryOptions
  );
  console.log(categoryOptions);
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <div className="layout">
          <main className="body">
            <Dropdown options={categoryOptions} />
            {programsList.map((program) => (
              <Card resourceName={program["Resource Name"]}></Card>
            ))}
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
