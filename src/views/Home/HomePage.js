import { useDispatch, useSelector } from "react-redux";
import { Card, Dropdown } from "../../components";
import {
  filterCategory,
  filterType,
  filterPhase,
  filterTags,
  renderFilteredProgramsList,
} from "../../store/reducer/programReducer";

const HomePage = () => {
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
  const filterParams = useSelector(({ programs }) => programs.filterParams);
  const tags = filterParams.tags;
  const selectedProgram = useSelector(
    ({ programs }) => programs.selectedProgram
  );
  const handleCategoryFilter = (value) => {
    dispatch(filterCategory(value));
    dispatch(renderFilteredProgramsList());
  };

  const handleTypeFilter = (value) => {
    dispatch(filterType(value));
    dispatch(renderFilteredProgramsList());
  };

  const handlePhaseFilter = (value) => {
    dispatch(filterPhase(value));
    dispatch(renderFilteredProgramsList());
  };
  const handleTagsFilter = (value) => {
    dispatch(filterTags(value));
    dispatch(renderFilteredProgramsList());
  };

  return (
    <>
      <div className="info">
        <h3 data-testid="title-program">{selectedProgram["Resource Name"]}</h3>
        <p data-testid="description-program">
          {selectedProgram["Resource Description"]}
        </p>
      </div>
      <Dropdown
        testid="dropdown-program-category"
        className="dropdown"
        placeholder="Select Program Category"
        onChange={handleCategoryFilter}
        options={categoryOptions}
      />
      <Dropdown
        testid="dropdown-program-type"
        className="dropdown"
        placeholder="Select Program Type"
        onChange={handleTypeFilter}
        options={typeOptions}
      />
      <Dropdown
        testid="dropdown-program-phase"
        className="dropdown"
        placeholder="Select Program Phase"
        onChange={handlePhaseFilter}
        options={phaseOptions}
      />
      <Dropdown
        testid="dropdown-program-tags"
        className="dropdown"
        isMulti
        placeholder="Select Program Tags"
        onChange={handleTagsFilter}
        options={tagsOptions}
      />
      <p className="count">
        {tags.length !== 0 ? `Tag count: ${filteredProgramsList.length}` : ""}
      </p>
      {filteredProgramsList.length !== 0 ? (
        <div className="grid">
          {filteredProgramsList.map((program) => (
            <Card
              testid="card-program"
              key={program.id}
              id={program.id}
              resourceName={program["Resource Name"]}
            ></Card>
          ))}
        </div>
      ) : (
        <div className="block">Oops! Cannot find the program ??\_(???)_/??</div>
      )}
    </>
  );
};

export default HomePage;
