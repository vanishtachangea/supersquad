import { combineReducers } from "redux";
import characters from "../reducers/charactersReducer";
import heroes from "../reducers/heroesReducer";

const rootReducer = combineReducers({
  characters,
  heroes,
});

export default rootReducer;
