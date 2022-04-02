import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { photosReducer } from "./photosReducer";

export const rootReducer = combineReducers({
  photos: photosReducer,
  filter: filterReducer,
})

export type RootState = ReturnType<typeof rootReducer>;