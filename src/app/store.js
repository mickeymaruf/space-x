import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import dataReducer from "../services/reducers/dataReducer";

const store = createStore(dataReducer, applyMiddleware(thunk));

export default store;