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
    console.log(value);
    dispatch(renderFilteredProgramsList());
  };
  return (
    <>
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
      {filteredProgramsList.length !== 0 ? (
        <div className="grid">
          {filteredProgramsList.map((program) => (
            <Card
              key={program.id}
              resourceName={program["Resource Name"]}
            ></Card>
          ))}
        </div>
      ) : (
        <div className="block">opasdfasasdfp</div>
      )}
    </>
  );
};

export default HomePage;
