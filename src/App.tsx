import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import Home from './pages/home';
import Posts from './pages/posts';
import About from './pages/about';
import BasicComponents from './pages/basicComponents';
import PostCustomer from './posts/postCustomer';
import Menu from './components/topMenu/topMenu';


export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = props => {
  return (
      <BrowserRouter>
        <div className="App-header">
        <Menu />
        <Routes>
          <Route path="/" element={<Home />}/>
          {/* <Route path="/posts" element={<Posts />}/> */}
          <Route path="posts">
            <Route index element={<Posts />} />
            <Route path=":number" element={<Posts />} />
          </Route>
          <Route path="/about" element={<About />}/>
          <Route path="/postCustomer" element={<PostCustomer />}/>

          {/* <Route path="posts">
            <Route index element={<BasicComponents />} />
            <Route path=":number" element={<BasicComponents />} />
          </Route> */}
        </Routes>
        </div>
      </BrowserRouter>
  );
}


export default App;
