import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducer/rootReducer";
import { injectStore } from "../customize/axios";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
injectStore(store);

export default store;
