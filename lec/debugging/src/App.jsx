import { useState } from "react";

import "./App.css";

import { decrementValue, incrementValue } from "./utils/math.utilis";
import Child from "./utils/components/Child";;

function App() {
  let random = 0;
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(incrementValue(count));
  };
  const handleDecrement = () => {
    for (let i = 0; i < 500000000; i++) {
      random += 1;
    }
    setCount(decrementValue(count));
  };
  return (
    <div className="App">
      <h1>Count - {count}</h1>
      <div>
        <button onClick={handleDecrement}> DECREMENT </button>
        <button onClick={handleIncrement}> INCREMENT </button>
      </div>
      <Child />
    </div>
  );
}

export default App;