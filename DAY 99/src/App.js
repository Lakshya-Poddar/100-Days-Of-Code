import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Visible from './components/Visible';

function App() {
  return (
    <div className="container-fluid mt-1  bg-secondary text-light pb-3 pt-3">
    <h1 className="text-center mx-auto" style={{background:'#000'}} >E-Housie</h1>
    <Visible />
    </div>
  );
}

export default App;
