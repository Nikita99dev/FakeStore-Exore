import { useState } from 'react';
import './App.css';
import { MainHeader } from './components/Header/Header';

function App() {

  const [state, setState] = useState("one");

  const handleClick = (e: any) => {
    console.log("click ", e);
    setState(e.key);
  };

  return (
   <MainHeader handleClick={handleClick} state={state}/>
  );
}

export default App;
