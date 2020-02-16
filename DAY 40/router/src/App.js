import React from 'react';
import './App.css';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Menu ></Menu>
      <Switch>
      <Route path='/' exact component={Home}></Route>      
      <Route path='/about' component={About}></Route>
      <Route path='/contact' component={Contact}></Route>  
      </Switch>
        </div>
    
    </BrowserRouter>
  );
}
function Home() {
  return (
      <div className="Contactstyle">
          <h2>Welcome To Home Page</h2>
      </div>
  )
}

export default App;
