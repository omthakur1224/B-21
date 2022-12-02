import React, { useEffect, useState } from 'react'

const Pages = ({todos}) => {
    // const [todos,setTodos]=useState([]);
    // const getTodos=async ()=>{
        
    // }
    // useEffect(()=>{
    //     getTodos();
    // },[])
  return (
    <div>
        {todos.map((todo)=>
        
            (<div key={todo.id}>{todo.title}</div>)
        
        )}
    </div>
  )
}
export async function getServerSideProps(){
    const  response= await fetch('http://localhost:8080/data')
    let data=response.json();
    return {
        props:{
            todos:data,
        }
    }
}
export default Pages