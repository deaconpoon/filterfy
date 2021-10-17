import { createSlice } from "@reduxjs/toolkit";
import ProgramsList from "../../utils/csvjson.json";

const programsList = JSON.parse(JSON.stringify(ProgramsList));

const initialState = {
  programsList: programsList,
};

const programsSlice = createSlice({
  name: "programs",
  initialState: initialState,
  reducers: {},
});

const { actions } = programsSlice;

export default programsSlice.reducer;
