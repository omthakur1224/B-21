// import { useState } from "react";
// import "./App.css";
// import useDarkMode from "./hooks/useDarkMode";

import useToggle from "./hooks/useDarkMode";

// function App() {
//   //import the useDark mode hook here

//   // const [theme,setTheme]=useState(0)
//   // const [theme,setTheme]=useDarkMode(false)
//   const [theme]=useDarkMode()
//   return (
//     // add the dark-mode class name along with App depending on the boolean value of isDarkMode
//     <div data-testid="app-component" className="App">
//       {/* to toggle the darkMode value of the application */}
//       {/* Default value: Dark.  */}
//       <h1 style={{"backgroundColor":theme?'white':"black",color:theme?"black":"white"}} >{!theme?"DARK":"Light"}</h1>
//       <button onClick={()=>setTheme(!theme)}>ToggleTheme</button>

//       {/* use the UserCard component here */}

//       <br />
//       {/* use the Input component here */}

//       <div data-testid="input-value">Input value is</div>
//     </div>
//   );
// }


/*
imageURL for testing;
1. https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=1400&q=60
2. https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60
*/

const App = () => {
  const [visible, toggleVisibility, setVisibility] = useToggle(false);

  return (
    <div data-testid="app-component" className="App">
      <div>
        <button onClick={() => toggleVisibility()} 
                style={{
                  backgroundColor:visible?'black':"white",
                  color:!visible?'black':"white"
                }}>Toggle</button>
        {/* <button onClick={() => setVisibility(false)}>Hide</button> */}
      </div>

      <div>{visible ? "Visible" : "Hidden"}</div>
    </div>
  );
};
    export default App;