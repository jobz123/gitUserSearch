import {createStore, applyMiddleware} from "redux"
import dataGithubReducer from "./reducers/dataGithubReducer"
import thunk from "redux-thunk"

const store = createStore(dataGithubReducer, applyMiddleware(thunk));

export default store;
