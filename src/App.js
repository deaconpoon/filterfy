import { ThemeProvider } from "styled-components";
import Theme from "./styles/Theme";
import { useDispatch, useSelector } from "react-redux";
import GlobalStyle from "./styles/GlobalStyles";
import { Card, Dropdown } from "./components";
import { filterCategory } from "./store/reducer/programReducer";

function App() {
  const dispatch = useDispatch();
  const programsList = useSelector(({ programs }) => programs.programsList);
  const categoryOptions = useSelector(
    ({ programs }) => programs.categoryOptions
  );
  const typeOptions = useSelector(({ programs }) => programs.typeOptions);
  const tagsOptions = useSelector(({ programs }) => programs.tagsOptions);

  const handleOnChange = (value) => {
    dispatch(filterCategory(value));
  };
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <div className="layout">
          <main className="body">
            <Dropdown onChange={handleOnChange} options={categoryOptions} />
            <Dropdown options={typeOptions} />
            <Dropdown isMulti options={tagsOptions} />
            {programsList.map((program) => (
              <Card
                key={program.id}
                resourceName={program["Resource Name"]}
              ></Card>
            ))}
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
