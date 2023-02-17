import { connect} from "react-redux";
import { decCounter, incCounter , rstCounter} from "./store/action";
function Counter(props){
    console.log(props)
    return (
        <div className="border border-4 border-primary p-2 m-2">
            <h1>Counter:{props.count}</h1>
            <button onClick={props.inc}>Increment</button>
            <button onClick={props.dec}>Decrement</button>
            <button onClick={props.rst}>Reset</button>
        </div>
    )
}
function mapStateToProps(store){return store.counter}
function mapDispatchToProps(dispatch){
    return {
       inc:()=>{dispatch(incCounter())},
       dec:()=>{dispatch(decCounter())},
       rst:()=>{dispatch(rstCounter())},
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)