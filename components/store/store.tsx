import { legacy_createStore as createStore } from "redux";
import rootReducer from "./reducers/reducer";

let store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export default store;