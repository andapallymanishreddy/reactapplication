import counterReducer from "./counterReducer";
import likedislikeReducer from "./likedislikeReducer";
import todoReducer from "./todolistReducer";
import { combineReducers } from "redux";
import CountryReducer from "./countriesReducer";
var reducer = combineReducers({ 
    counter: counterReducer, 
    likedislike: likedislikeReducer, 
    todos: todoReducer,
    countries:CountryReducer })
export default reducer;