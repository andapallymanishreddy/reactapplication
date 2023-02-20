import counterReducer from "./counterReducer";
import likedislikeReducer from "./likedislikeReducer";
import todoReducer from "./todolistReducer";
import { combineReducers } from "redux";
import countryReducer from "./countriesReducer";
var reducer = combineReducers({ 
    counter: counterReducer, 
    likedislike: likedislikeReducer, 
    todos: todoReducer,
    countries:countryReducer })
export default reducer;