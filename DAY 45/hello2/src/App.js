import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer'
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
function App() {

  return (
    <div className="App">
    <NavBar></NavBar>
    <MainContent></MainContent>
    <Footer></Footer>
    </div>
  );
}

export default App;
