
import { Link } from "react-router-dom";
import './index.scss';

interface ITopMenuProps {
    
}
 
const TopMenu: React.FunctionComponent<ITopMenuProps> = props => {
    return ( 
        <div className="topMenu">
            <ul>
                <li><Link to="/" >Home</Link></li>
                {/* <li><Link to="/about" >About</Link></li> */}
                <li>
                    <a
                        className="App-link"
                        href="http://seosydneyweb.com/"
                        rel="noopener noreferrer" 
                        >
                        Web
                    </a>
                </li>
            </ul>
        </div>
     );
}
 
export default TopMenu;