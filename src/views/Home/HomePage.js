import { useEffect, useState } from "react";
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
        <h3>{selectedProgram["Resource Name"]}</h3>
        <p>{selectedProgram["Resource Description"]}</p>
      </div>
      <Dropdown
        className="dropdown"
        placeholder="Select Program Category"
        onChange={handleCategoryFilter}
        options={categoryOptions}
      />
      <Dropdown
        className="dropdown"
        placeholder="Select Program Type"
        onChange={handleTypeFilter}
        options={typeOptions}
      />
      <Dropdown
        className="dropdown"
        placeholder="Select Program Phase"
        onChange={handlePhaseFilter}
        options={phaseOptions}
      />
      <Dropdown
        className="dropdown"
        isMulti
        placeholder="Select Program Tags"
        onChange={handleTagsFilter}
        options={tagsOptions}
      />
      {filteredProgramsList.length !== 0 ? (
        <div layout className="grid">
          {filteredProgramsList.map((program) => (
            <Card
              key={program.id}
              id={program.id}
              resourceName={program["Resource Name"]}
            ></Card>
          ))}
        </div>
      ) : (
        <div className="block">Ops! Cannot find the program ¯\_(ツ)_/¯</div>
      )}
    </>
  );
};

export default HomePage;
