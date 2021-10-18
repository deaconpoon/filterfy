import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import ProgramsList from "../../utils/csvjson.json";

const programsList = JSON.parse(JSON.stringify(ProgramsList));

const programsListWithID = programsList.map((program) => {
  const id = uuidv4();
  return { ...program, id: id };
});
const categoryOptions = programsList.reduce((option, program) => {
  return [
    ...option,
    {
      value: program["Program Category"],
      label: program["Program Category"],
    },
  ]
    .filter(
      (option, index, array) =>
        array.findIndex((o) => o.value === option.value) == index
    )
    .sort((a, b) => a.value.localeCompare(b.value));
}, []);
const typeOptions = programsList.reduce((option, program) => {
  return [
    ...option,
    {
      value: program["Program Type"],
      label: program["Program Type"],
    },
  ]
    .filter(
      (option, index, array) =>
        array.findIndex((o) => o.value === option.value) == index
    )
    .sort((a, b) => a.value.localeCompare(b.value));
}, []);
const phaseOptions = programsList.reduce((option, program) => {
  return [
    ...option,
    {
      value: program["Program Phase"],
      label: program["Program Phase"],
    },
  ]
    .filter(
      (option, index, array) =>
        array.findIndex((o) => o.value === option.value) == index
    )
    .sort((a, b) => a.value.localeCompare(b.value));
}, []);
const tagsOptions = programsList.reduce((option, program) => {
  let tags = program.Tags.map((tag) => {
    return {
      value: tag,
      label: tag,
    };
  });
  return [...option, tags]
    .flat()
    .filter(
      (option, index, array) =>
        array.findIndex((o) => o.value === option.value) == index
    )
    .sort((a, b) => a.value.localeCompare(b.value));
}, []);
const filterParams = {
  category: [],
  type: [],
  phase: [],
  tags: [],
};

const initialState = {
  programsList: programsListWithID,
  categoryOptions: categoryOptions,
  typeOptions: typeOptions,
  phaseOptions: phaseOptions,
  tagsOptions: tagsOptions,
  filteredProgramsList: programsListWithID,
};

const programsSlice = createSlice({
  name: "programs",
  initialState: initialState,
  reducers: {
    filterCategory: (state, { payload }) => {
      if (payload.value === "All") {
        console.log(payload);
      }
    },
  },
});

const { actions } = programsSlice;

export const { filterCategory } = actions;

export default programsSlice.reducer;
