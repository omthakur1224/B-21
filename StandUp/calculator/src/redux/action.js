import { ADD, DIV, MUL, SUB } from "./actionTypes";

export const add=(data)=>{
               let x=data;
                x=x.split("+");
                x=Number(Number(x[0])+Number(x[1]));
                console.log(x)
                return {type:ADD, payload:x}
}

export const subtract=(data)=>{
    let x=data;
     x=x.split("-");
     x=Number(Number(x[0])-Number(x[1]));
     console.log(x)
     return {type:SUB, payload:x}
}
export const multiply=(data)=>{
    console.log(data,'mul')
    let x=data;
     x=x.split("*");
     x=(Number(x[0])*Number(x[1]));
     console.log(x)
     return {type:MUL, payload:x}
}
export const divide=(data)=>{
    let x=data;
     x=x.split("/");
     x=Number(Number(x[0])/Number(x[1]));
     console.log(x)
     return {type:DIV, payload:x}
}