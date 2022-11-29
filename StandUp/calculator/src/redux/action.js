import { ADD, DIV, MUL, SUB } from "./actionTypes";
export const add=(payload)=>({type:ADD, payload:payload})
export const subtract=(value)=>({type:SUB,payload:value});
export const multiply=(value)=>({type:MUL,payload:value})
export const divide=(value)=>({type:DIV,payload:value})