import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <NameList/> */}

      <HookCounter/>

      {/* <ClassCounter/> */}

      {/* <LifeCycleA/> */}

      {/* <Form></Form> */}

        {/* <UserGreeting/> */}
        {/* <ParentComponent/> */}
        {/* <FunctionClick></FunctionClick> */}
        {/* <ClassClick/> */}
        {/* <EventBind></EventBind> */}
        {/* <Counter/> */}
      {/* <Message/> */}
        {/* <Greet name='Bruce' heroName="BatMan"><p>This is children props</p></Greet>
        <Greet name='Clarke' heroName="SuperMan"><button>Click</button></Greet>
        <Greet name='Diana'  heroName="Wonder Woman"/>
        <Welcome name='Bruce' heroName="BatMan"><p>This is children props</p></Welcome>
        <Welcome name='Clarke' heroName="SuperMan"/>
        <Welcome name='Diana'  heroName="Wonder Woman"/> */}
        
      </header>
    </div>
  );
}

export default App;
