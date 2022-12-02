import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import {Button,Stack} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { add, divide, multiply, subtract } from '../redux/action';
const Calculator = () => {

    const [input,setInput]=useState("");

    const dispatch=useDispatch()

    const output=useSelector((store)=>store.output)
     console.log(output,"output")
    const [data,setData]=useState(0);

    useEffect(()=>{
      // setValue(output)
      setData(output)
    },[output])

    useEffect(()=>{
      console.log('event',data,input)
      if(input==='='){
            if(data.includes("+")){
              dispatch(add(data))
              // setData(output)
                // let x=data;
                // x=x.split("+");
                // x=Number(Number(x[0])+Number(x[1]));
                // setData(x)
            }
            else if(data.includes("-")){
              
              dispatch(subtract(data));
                // let x=data;
                // x=x.split("-");
                // x=Number(Number(x[0])-Number(x[1]));
                // setData(output)
            }
            else if(data.includes("*")){
              dispatch(multiply(data))
                // let x=data;
                // x=x.split("*");
                // x=Number(Number(x[0])*Number(x[1]));
                // setData(x)
            }
            else if(data.includes("/")){
              dispatch(divide(data))
                // let x=data;
                // x=x.split("/");
                // x=Number(Number(x[0])/Number(x[1]));
                // setData(x)
            }
        }
        else if(data[data.length-1]==="+"){
           //11+
          //  let x=data.split("+");

            setData(data+input)
        }
        else if(data[data.length-1]==="-"){
          // console.log("minus",typeof(data))
            setData((data)+(input))
        }
        else if(data[data.length-1]==="*"){
          
            setData((data)+(input))
        }
        else if(data[data.length-1]==="/" ){
          
            setData((data)+(input))
        }else{

            setData(data+input);
        }
    },[input])
    // console.log(data)

    const handleInput=(e)=>{
      // if(data==="")
    //  console.log(input)
    //   if(input[input.length-1]===e.target.value){
    //     let newVal=e.target.value+"";
    //     setInput(newVal)
    //   }
    //   else
      setInput(e.target.value)
    }
  return (
    <> 
        <div>{data}</div>
  <Stack direction='row' spacing={4} align='center'>
  <Button colorScheme='Facebook' value={0} onClick={(e)=>handleInput(e)} variant='solid'>
    0
  </Button>
  <Button colorScheme='Facebook' value={1} onClick={(e)=>handleInput(e)} variant='outline'>
    1
  </Button>
  <Button colorScheme='Facebook' value={2} onClick={(e)=>handleInput(e)} variant='ghost'>
    2
  </Button>
  </Stack>
  <Stack direction='row' spacing={4} align='center'>
  <Button colorScheme='Facebook' value={3} onClick={(e)=>handleInput(e)} variant='link'>
    3
  </Button>
  <Button colorScheme='Facebook' value={4} onClick={(e)=>handleInput(e)} variant='solid'>
    4
  </Button>
  <Button colorScheme='Facebook' value={5} onClick={(e)=>handleInput(e)} variant='outline'>
    5
  </Button>
 </Stack>
 <Stack direction='row' spacing={4} align='center'>
  <Button colorScheme='Facebook' value={6} onClick={(e)=>handleInput(e)} variant='ghost'>
    6
  </Button>
  <Button colorScheme='Facebook' value={7} onClick={(e)=>handleInput(e)} variant='link'>
    7
  </Button>
  <Button colorScheme='Facebook' value={8} onClick={(e)=>handleInput(e)} variant='solid'>
    8
  </Button>
  </Stack>
  <Stack direction='row' spacing={4} align='center'>
  <Button colorScheme='Facebook' value={9} onClick={(e)=>handleInput(e)} variant='outline'>
    9
  </Button>
  <Button colorScheme='Facebook' value={"="} onClick={(e)=>handleInput(e)} variant='ghost'>
    =
  </Button>
  <Button colorScheme='Facebook' value={"c"} onClick={(e)=>handleInput(e)} variant='link'>
    C
  </Button>
  </Stack>
  <Stack direction='row' spacing={4} align='center'>
  <Button colorScheme='Facebook' value={"+"} onClick={(e)=>handleInput(e)} variant='link'>
    +
  </Button>
  <Button colorScheme='Facebook' value={"-"} onClick={(e)=>handleInput(e)} variant='solid'>
    -
  </Button>
  <Button colorScheme='Facebook' value={"*"} onClick={(e)=>handleInput(e)} variant='outline'>
    *
  </Button>
  </Stack>
  <Stack direction='row' spacing={4} align='center'>
  <Button colorScheme='Facebook' value={"/"} onClick={(e)=>handleInput(e)} variant='ghost'>
    /
  </Button>
  
</Stack>
        {/* <Button value={0} onClick={(e)=>setInput(e.target.value)}/>
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
        <input type='button' value={9} onClick={(e)=>setInput(e.target.value)} /> */}
    </>
  )
}

export default Calculator