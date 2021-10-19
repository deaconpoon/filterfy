import { ThemeProvider } from "styled-components";
import Theme from "./styles/Theme";
import { useDispatch, useSelector } from "react-redux";
import GlobalStyle from "./styles/GlobalStyles";
import { Card, Dropdown } from "./components";
import {
  filterCategory,
  filterType,
  filterPhase,
  filterTags,
  renderFilteredProgramList,
} from "./store/reducer/programReducer";

function App() {
  const dispatch = useDispatch();
  const filteredProgramsList = useSelector(
    ({ programs }) => programs.filteredProgramsList
  );
  const categoryOptions = useSelector(
    ({ programs }) => programs.categoryOptions
  );
  const typeOptions = useSelector(({ programs }) => programs.typeOptions);
  const phaseOptions = useSelector(({ programs }) => programs.phaseOptions);
  const tagsOptions = useSelector(({ programs }) => programs.tagsOptions);

  const handleCategoryFilter = (value) => {
    dispatch(filterCategory(value));
    dispatch(renderFilteredProgramList());
  };

  const handleTypeFilter = (value) => {
    dispatch(filterType(value));
    dispatch(renderFilteredProgramList());
  };

  const handlePhaseFilter = (value) => {
    dispatch(filterPhase(value));
    dispatch(renderFilteredProgramList());
  };
  const handleTagsFilter = (value) => {
    dispatch(filterTags(value));
    console.log(value);
    dispatch(renderFilteredProgramList());
  };

  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <div className="layout">
          <main className="body">
            <Dropdown
              placeholder="Select Program Category"
              onChange={handleCategoryFilter}
              options={categoryOptions}
            />
            <Dropdown
              placeholder="Select Program Type"
              onChange={handleTypeFilter}
              options={typeOptions}
            />
            <Dropdown
              placeholder="Select Program Phase"
              onChange={handlePhaseFilter}
              options={phaseOptions}
            />
            <Dropdown
              isMulti
              onChange={handleTagsFilter}
              placeholder="Select Program Tags"
              options={tagsOptions}
            />
            {filteredProgramsList.map((program) => (
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
