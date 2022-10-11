import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.scss';
import Home from './pages/home';
import Customer from './posts/postCustomer';
import Menu from './components/topMenu/topMenu';

function App() {
  return (
    <div>
      <header className="App-header">
      <Menu />

      <Router>
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/postCustomer" element={<Customer />}/>
        </Routes>
      </Router>

      <Home />

      </header>
    </div>
  );
}


export default App;
