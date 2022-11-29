import { ADD, DIV, MUL, SUB } from "./actionTypes"

const initstate={
     output:0, 
}
export const calciReducer=(state=initstate,{type,payload})=>{
    switch(type){
        case ADD:
            return state;
        case SUB:
            return state;
        case MUL:
            return state;
        case DIV:
            return state;
        default:
            return state;
    }
}