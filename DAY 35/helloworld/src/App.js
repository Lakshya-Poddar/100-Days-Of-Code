import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import FunctionClick from './components/FunctionClick'
import Counter from './components/Counter'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'
import UserGreeting from './components/UserGreeting'
class App extends Component {
  render() {
    return (
      <div className="App">
<Form></Form>
      {/* <h1 className='error'>ERROR</h1>
      <h1 className={styles.success}>SUCCESS</h1>
      <Inline></Inline>
      <Stylesheet></Stylesheet> */}
      {/* <NameList></NameList>
      <UserGreeting></UserGreeting> */}
      {/* <ParentComponent></ParentComponent> */}
        {/* <EventBind></EventBind>
        <FunctionClick></FunctionClick>     
        <ClassClick></ClassClick> */}
        {/* <Counter/>
        <Message/> */}
        {/* <Greet></Greet> */}
        {/* <Welcome name='Lakshya'></Welcome> */}
        {/* <Hello></Hello>
       */}
       {/* <Greet name="Lakshya">Heya!! Whatsup!</Greet>
       <Greet name="Mukund">
         <button>HELLO</button>
       </Greet>
       <Greet name="Poddar"></Greet>

       <Welcome name="Lakshya"></Welcome>
       <Welcome name="Mukund"></Welcome>
       <Welcome name="Poddar"></Welcome> */}

      </div>
    );
  }
}

export default App;
