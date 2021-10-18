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
  const typeOptions = useSelector(({ programs }) => programs.typeOptions);
  const tagsOptions = useSelector(({ programs }) => programs.tagsOptions);
  console.log(categoryOptions);
  console.log(typeOptions);
  console.log(tagsOptions);
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <div className="layout">
          <main className="body">
            <Dropdown options={categoryOptions} />
            <Dropdown options={typeOptions} />
            <Dropdown options={tagsOptions} />
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
