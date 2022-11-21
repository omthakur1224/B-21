//genrics
//it will give error when we will declare usestate for string ,arr,obj etc
// const useState=(arg:number):[number,(a:number)=>void]=>{
    
//     let x:typeof arg=arg;
//     const setX=(newVal:number):void=>{
//         x=newVal;
//     }
//     return [x,setX]
// }

// const [count,setCount]=useState(0);

//this is accepted by all values now 

const useState=<A>(arg:A):[A,(a:A)=>void]=>{
    
    let x:typeof arg=arg;
    const setX=(newVal:A):void=>{
        x=newVal;
    }
    return [x,setX]
}
const [val,setVal]=useState("");

const [obj,setObj]=useState({});