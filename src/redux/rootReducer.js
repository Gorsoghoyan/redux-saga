import { combineReducers } from "redux";
import countriesReducer from "./slices/countriesSlice";

const rootReducer = combineReducers({
    countries: countriesReducer
});

export default rootReducer;