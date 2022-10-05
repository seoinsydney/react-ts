import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import { CustomerClass } from './components/CustomerClass';

function App() {


  return (
    <div className="App">
      <header className="App-header">

        <Customer name={'Tom'} age={22} title={'IT'}/>
        <CustomerClass name={'Tim'} age={23} title={'IT'}/>

{/* 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
