
import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(()=> {
    const webgazer = window.webgazer
    webgazer.setGazeListener((data, clock)=>{
      console.log(data, clock)
    }).begin()
  }, []);
  return (
    <div className="App">
      Hello Yuri
    </div>
  );
}

export default App;
