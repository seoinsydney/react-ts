import * as React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import Menu from './components/topMenu/topMenu';
import PostLayout from './components/postLayout/postLayout';
import Home from './pages/home';
import TypeScriptInstallation from './posts/TypeScriptInstallation';
import BasicComponents from './posts/BasicComponents';
import EventsHandling from './posts/EventsHandling';
import ErrorPage from './posts/ErrorPage';


export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = props => {
  return (
      <BrowserRouter>
        <div className="App-header">
        <Menu />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="layout" element={<PostLayout />} >
            <Route path="/layout/TypeScriptInstallation" element={<TypeScriptInstallation />}/>
            <Route path="/layout/BasicComponents" element={<BasicComponents />}/>
            <Route path="/layout/EventsHandling" element={<EventsHandling />}/>
            <Route path="/layout/ErrorPage" element={<ErrorPage />}/>
          </Route>
        </Routes>
        </div>
      </BrowserRouter>
  );
}


export default App;
