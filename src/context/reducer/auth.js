const auth = (state = null, action) => {
    switch(action.type){
        case "LOG_IN":
            return state = action.payload // action.payload -> object
        case "LOG_OUT":
            return state = null
        default:
            return state
    }
}
export default auth