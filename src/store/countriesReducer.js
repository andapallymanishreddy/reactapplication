const initialState={
    countries:[]
}
function CountryReducer(state=initialState,action){
    if(action.type==='INITCOUNTRIES'){
        return {...state,countries:action.payload}
    }
    return state
}
export default CountryReducer;