import reducer from "./redusers";
import { createStore ,applyMiddleware} from "redux";
import thunk from "redux-thunk";
var store = createStore(reducer,applyMiddleware(thunk));
export default store;