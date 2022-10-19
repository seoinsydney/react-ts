import * as React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import Home from './pages/home';
import About from './pages/about';
import PostCustomer from './posts/postCustomer';
import Menu from './components/topMenu/topMenu';
import PostLayout from './components/postLayout/postLayout';


export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = props => {
  return (
      <BrowserRouter>
        <div className="App-header">
        <Menu />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="layout" element={<PostLayout />} >
            <Route path="/layout/postCustomer" element={<PostCustomer />}/>
          </Route>
          <Route path="/about" element={<About />}/>
        </Routes>
        </div>
      </BrowserRouter>
  );
}


export default App;
