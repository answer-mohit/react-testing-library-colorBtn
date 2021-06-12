import './App.css';
import { useState } from 'react';

function App() {
  const [buttoncolor,setButtonColor]=useState('red');
  const newBtnColor=buttoncolor==='red'?'blue':'red';
    return (
    <div className="App"><h1>
      <button style={{backgroundColor:buttoncolor,padding:'10px'}} onClick={()=>setButtonColor(newBtnColor)}>Change to {newBtnColor}</button>
      </h1>
          </div>
  );
}

export default App;
