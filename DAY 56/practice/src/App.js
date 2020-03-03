import React from 'react';
import logo from './logo.svg';
import './App.css';
import Loading from './Loading';

function App() {
  return (
    <div className="App">
    {
        console.log("Loading 3")
      }
      <Loading></Loading>
      
    </div>
  );
}

export default App;
