import axios from "axios"

export function addtodo(newtodo){
    return {type:'ADDTODO',payload:newtodo}
}
export function incCounter(){
    return {type:'INC'}
}
export function decCounter(){
    return {type:'DEC'}
}
export function rstCounter(){
    return {type:'RESET'}
}
