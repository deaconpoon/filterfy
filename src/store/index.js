import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import programsReducer from "./reducer/programReducer";

const store = configureStore({
  reducer: { programs: programsReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
