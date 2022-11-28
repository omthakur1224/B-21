import logo from './logo.svg';
import './App.css';
import { Header } from './stories/Header';
import { Button } from './stories/Button';
import { Page } from './stories/Page';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Header/> */}

        <Button primary onClick={()=>alert('hello')} label={"Login"} />
        <Page onLogin={<Header/>}/>
      </header>
    </div>
  );
}

export default App;
