const initialState={
    Alltodos:["gym","tiffin","read news"]
}
function todoReducer(state=initialState,action){
    if(action.type==='ADDTODO'){
        return {...state,Alltodos:[...state.Alltodos,action.payload]}
    }
    return state
}
export default todoReducer