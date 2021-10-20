import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";
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
  filterParams: filterParams,
  selectedProgram: programsListWithID[0],
};

const programsSlice = createSlice({
  name: "programs",
  initialState: initialState,
  reducers: {
    filterCategory: (state, { payload }) => {
      if (payload === null) {
        state.filterParams.category = [];
      } else {
        state.filterParams.category = payload.value;
      }
    },
    filterType: (state, { payload }) => {
      if (payload === null) {
        state.filterParams.type = [];
      } else {
        state.filterParams.type = payload.value;
      }
    },
    filterPhase: (state, { payload }) => {
      if (payload === null) {
        state.filterParams.phase = [];
      } else {
        state.filterParams.phase = payload.value;
      }
    },
    filterTags: (state, { payload }) => {
      if (payload === null) {
        state.filterParams.tags = [];
      } else {
        state.filterParams.tags = payload;
      }
    },
    renderFilteredProgramsList: (state) => {
      state.filteredProgramsList = programsListWithID.filter(
        (program) =>
          (state.filterParams.category === []
            ? program["Program Category"]
            : program["Program Category"].includes(
                state.filterParams.category
              ) || program["Program Category"].includes("All")) &&
          (state.filterParams.type === []
            ? program["Program Type"]
            : program["Program Type"].includes(state.filterParams.type) ||
              program["Program Type"].includes("All")) &&
          (state.filterParams.phase === []
            ? program["Program Phase"]
            : program["Program Phase"].includes(state.filterParams.phase) ||
              program["Program Phase"].includes("All")) &&
          (state.filterParams.tags === []
            ? program.Tags
            : state.filterParams.tags.every((filteredTag) =>
                program.Tags.some((tag) => tag.includes(filteredTag.value))
              ))
      );
    },
    selectProgram: (state, { payload }) => {
      const selectedProgram = state.programsList.filter(
        ({ id }) => id === payload
      );
      state.selectedProgram = selectedProgram;
    },
  },
});

const { actions } = programsSlice;

export const {
  filterCategory,
  filterType,
  filterPhase,
  filterTags,
  renderFilteredProgramsList,
  selectProgram,
} = actions;

export default programsSlice.reducer;
