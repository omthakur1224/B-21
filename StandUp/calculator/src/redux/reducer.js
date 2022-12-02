import { ADD, DIV, MUL, SUB } from "./actionTypes"

const initstate={
     output:0,
}
export const calciReducer=(state=initstate,{type,payload})=>{
    switch(type){
        case ADD:
            console.log(payload,'ppayload')
           return {
                ...state,
                
                output:payload
            }
            
        case SUB:
            return {
                ...state,
                
                output:payload
            }
        case MUL:
            return {
                ...state,
                
                output:payload
            }
        case DIV:
            return {
                ...state,
                
                output:payload
            }
        default:
            return state;
    }
}