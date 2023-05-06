import { combineReducers } from "redux";
import heart from "./heart";
import cart from "./Cart";
import auth from "./auth";

const rootReducer = combineReducers({
    water: () => "Redux Water",
    heart,
    cart,
    auth
})

export default rootReducer