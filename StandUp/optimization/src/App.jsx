import logo from './logo.svg';
import './App.css';
import { useState ,useMemo, useCallback} from 'react';
import Todo from './components/Todo';

 const expensiveCalculation=(value)=>{
  for(let i=0;i<1000000000;i++){
    value=value+1
  }
  return value;
 }

function App() {

  const [todos,setTodos]=useState([]);

  const [count,setCount]=useState(0);
  
  // const calculation=useMemo(()=>expensiveCalculation(count),[count]);

//addtodo method
  const addTodos= useCallback( ()=>{
    setTodos((todo)=>[...todo, "NewTodo"])
},[todos] )
 
// counter increment method

const increment=()=>{

  setCount((prev)=>prev+1)
}

console.log("parents rendered")
  return (
    <div className="App">
     
      <Todo addTodos={addTodos} todos={todos} />
      <hr />

      <h2>{count}</h2>
      <button onClick={increment}>AddCount</button>

    </div>
  );
}

export default App;
