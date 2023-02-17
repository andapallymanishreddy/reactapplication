import { connect } from "react-redux";
import React from "react";
import { addtodo } from "./store/action";
function TodosList(props){
    console.log(props)
    const [newtodo,setnewtodo]=React.useState('')
    return (
        <div className="border border-4 border-primary p-2 m-2">
            <h1>Todos list</h1>
            <input type="text" onChange={(e)=>{setnewtodo(e.target.value)}} />
            <button onClick={()=>{props.Handlenewtodo(newtodo)}}>Add Todo</button>
            <ul>
                {
                    props.Alltodos.map((t)=>{
                        return <li>{t}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default connect(
    function(store){return store.todos},
    function(dispatch){
       return {
        Handlenewtodo:(nt)=>{dispatch(addtodo(nt))}
       }
    })(TodosList)