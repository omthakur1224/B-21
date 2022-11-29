import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import {Button,Stack} from '@chakra-ui/react'
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
            else if(data.includes("-")){
                let x=data;
                x=x.split("-");
                x=Number(Number(x[0])-Number(x[1]));
                setData(x)
            }
            else if(data.includes("*")){
                let x=data;
                x=x.split("*");
                x=Number(Number(x[0])*Number(x[1]));
                setData(x)
            }
            else if(data.includes("/")){
                let x=data;
                x=x.split("/");
                x=Number(Number(x[0])/Number(x[1]));
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
    <> 
        <div>{data}</div>
        <Stack direction='row' spacing={4} align='center'>
  <Button colorScheme='Facebook' value={0} onClick={(e)=>setInput(e.target.value)} variant='solid'>
    0
  </Button>
  <Button colorScheme='Facebook' value={1} onClick={(e)=>setInput(e.target.value)} variant='outline'>
    1
  </Button>
  <Button colorScheme='Facebook' value={2} onClick={(e)=>setInput(e.target.value)} variant='ghost'>
    2
  </Button>
  </Stack>
  <Stack direction='row' spacing={4} align='center'>
  <Button colorScheme='Facebook' value={3} onClick={(e)=>setInput(e.target.value)} variant='link'>
    3
  </Button>
  <Button colorScheme='Facebook' value={4} onClick={(e)=>setInput(e.target.value)} variant='solid'>
    4
  </Button>
  <Button colorScheme='Facebook' value={5} onClick={(e)=>setInput(e.target.value)} variant='outline'>
    5
  </Button>
 </Stack>
 <Stack direction='row' spacing={4} align='center'>
  <Button colorScheme='Facebook' value={6} onClick={(e)=>setInput(e.target.value)} variant='ghost'>
    6
  </Button>
  <Button colorScheme='Facebook' value={7} onClick={(e)=>setInput(e.target.value)} variant='link'>
    7
  </Button>
  <Button colorScheme='Facebook' value={8} onClick={(e)=>setInput(e.target.value)} variant='solid'>
    8
  </Button>
  </Stack>
  <Stack direction='row' spacing={4} align='center'>
  <Button colorScheme='Facebook' value={9} onClick={(e)=>setInput(e.target.value)} variant='outline'>
    9
  </Button>
  <Button colorScheme='Facebook' value={"="} onClick={(e)=>setInput(e.target.value)} variant='ghost'>
    =
  </Button>
  <Button colorScheme='Facebook' value={"c"} onClick={(e)=>setInput(e.target.value)} variant='link'>
    C
  </Button>
  </Stack>
  <Stack direction='row' spacing={4} align='center'>
  <Button colorScheme='Facebook' value={"+"} onClick={(e)=>setInput(e.target.value)} variant='link'>
    +
  </Button>
  <Button colorScheme='Facebook' value={"-"} onClick={(e)=>setInput(e.target.value)} variant='solid'>
    -
  </Button>
  <Button colorScheme='Facebook' value={"*"} onClick={(e)=>setInput(e.target.value)} variant='outline'>
    *
  </Button>
  </Stack>
  <Stack direction='row' spacing={4} align='center'>
  <Button colorScheme='Facebook' value={"/"} onClick={(e)=>setInput(e.target.value)} variant='ghost'>
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