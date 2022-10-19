import { Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './index.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface IPostLayoutProps {
    
}
 
const PostLayout: React.FunctionComponent<IPostLayoutProps> = props => {

    const navigate = useNavigate();

    return ( 
        <div className="postCard">
            <Outlet />
            <div className="goBack">
                <a onClick={() => navigate(-1)}>
                    <ArrowBackIcon />
                    <span>Go back</span>
                </a>
            </div>
            {/* <button onClick={() => navigate(1)}>Go forward</button> */}
            {/* this is going forward */}
        </div>
     );
}
 
export default PostLayout;