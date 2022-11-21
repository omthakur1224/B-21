import React, { useState } from 'react';

import './App.css';
import Button from './components/Button';

function App() {

  const [count,setCount]=useState<number>(0)

  return (

    <div className='App'>

      <h1>{count}</h1>

      <Button color="red" handleClick={()=>setCount(count-1)}>DEC</Button>

      <Button color={'green'} handleClick={()=>setCount(count+1)}>INC</Button>

      <Button>Reset</Button>
    </div>
  );
}

export default App;
