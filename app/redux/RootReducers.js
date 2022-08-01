import { combineReducers } from "redux";

import RegisterReducer from "./slicers/RegisterSlicer";
import TodoReducer from "./slicers/ToDoSlicer";

const rootReducer = combineReducers({
  register: RegisterReducer,
  todo : TodoReducer
});

export default rootReducer;