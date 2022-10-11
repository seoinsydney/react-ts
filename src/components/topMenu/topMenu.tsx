import React, { useRef } from "react"
import { Link } from "react-router-dom";
import Menu from  '@material-ui/core/Menu'
import MenuItem from  '@material-ui/core/MenuItem'
import Home from '../../pages/home';
import Post from '../../posts/postCustomer';
import './index.scss';

function TopMenu() {
  // const menuRef = useRef()
  return (
    <div className="topMenu">
    <ul>
      <li>
        <a
          className="App-link"
          href="../../pages/home"
          rel="noopener noreferrer"
        >
          HOME
        </a>
      </li>
      <li>
      <a
          className="App-link"
          href="../../posts/postCustomer"
          rel="noopener noreferrer"
        >
          POST
        </a>
      </li>
      <li>
        <a
          className="App-link"
          href="http://seosydneyweb.com/"
          rel="noopener noreferrer"
        >
          WEB
        </a>
      </li>
    </ul>

      {/* <Link to="../../pages/home" >Home</Link> */}
      {/* <Link to="/postCustomer">Customer</Link> */}

      {/* <Menu
          id="top-menu"
          anchorEl={annchorEl}
          keepMountedopen={Boolean(anchorEl)}
          onClose={handleClose}
      >
        <MenuItem onClick={handleClose} >Home</MenuItem>
        <MenuItem>Posts</MenuItem>
      </Menu> */}


      {/* <Link to="/home"></Link> */}
    </div>
  );
}

export default TopMenu;
