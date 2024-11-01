import { legacy_createStore as createStore } from "redux";
import rootReducer from "./reducers/reducer";
import { create } from "react-test-renderer";

let store = createStore(rootReducer);

export default store;