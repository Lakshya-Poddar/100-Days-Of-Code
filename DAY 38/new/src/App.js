import React from 'react';
import logo from './logo.svg';
import './App.css';
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'
import PureComp from './components/PureComp'
import Parentcomp from './components/Parentcomp';

function App() {
  return (
    <div className="App">
    <Table></Table>
    {/* <PureComp></PureComp> */}
    <Parentcomp></Parentcomp>
    </div>
  );
}

export default App;
