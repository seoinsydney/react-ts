import { Outlet } from "react-router-dom";


interface IPostLayoutProps {
    
}
 
const PostLayout: React.FunctionComponent<IPostLayoutProps> = props => {
    return ( 
        <div className="postLayout">
            <Outlet />
        </div>
     );
}
 
export default PostLayout;