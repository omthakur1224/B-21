import React from 'react'

const Todo = ({todos,addTodos}) => {
    console.log('child component')
  return (
    <div>
        <h2>{todos.map((todo,index)=>(<p key={index}>{todo}</p>))}</h2>

<button onClick={addTodos}>AddTodo</button>
    </div>
  )
}

export default React.memo(Todo)