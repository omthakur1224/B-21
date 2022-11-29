import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Calculator = () => {
    const [input,setInput]=useState(0);
    var [data,setData]=useState("");
    useEffect(()=>{
        if(input==='='){
            if(data.includes("+")){
                let x=data;
                x=x.split("+");
                x=Number(Number(x[0])+Number(x[1]));
                setData(x)
            }
        }
        else if(data.length-1==="+" ){
            setData(Number(data)+Number(input))
        }
        else if(data.length-1==="-" ){
            setData(Number(data)-Number(input))
        }
        else if(data.length-1==="*" ){
            setData(Number(data)*Number(input))
        }
        else if(data.length-1==="/" ){
            setData(Number(data)/Number(input))
        }else{

            setData(data+input)
        }
    },[input])
    console.log(data)
  return (
    <div> 
        <div>{data}</div> 
        <input type='button' value={1} onClick={(e)=>setInput(e.target.value)} />
        <input type='button' value={2} onClick={(e)=>setInput(e.target.value)} />
        <input type='button' value={3} onClick={(e)=>setInput(e.target.value)} />
        <input type='button' value={4} onClick={(e)=>setInput(e.target.value)} />
        <input type='button' value={5} onClick={(e)=>setInput(e.target.value)} />
        <input type='button' value={6} onClick={(e)=>setInput(e.target.value)} />
        <input type='button' value={7} onClick={(e)=>setInput(e.target.value)} />
        <input type='button' value={8} onClick={(e)=>setInput(e.target.value)} />
        <input type='button' value={9} onClick={(e)=>setInput(e.target.value)} />
        <input type='button' value={"+"} onClick={(e)=>setInput(e.target.value)} />
        <input type='button' value={"-"} onClick={(e)=>setInput(e.target.value)} />
        <input type='button' value={"*"} onClick={(e)=>setInput(e.target.value)} />
        <input type='button' value={"/"} onClick={(e)=>setInput(e.target.value)} />
        <input type='button' value={"="} onClick={(e)=>setInput(e.target.value)} />
        {/* <input type='button' value={9} onClick={(e)=>setInput(e.target.value)} /> */}
    </div>
  )
}

export default Calculator