import { createStore } from "redux";
import loremReducer from "../reducers/loremReducer";

const store = createStore(loremReducer);

export default store;
