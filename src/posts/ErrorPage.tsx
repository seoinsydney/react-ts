import { Link } from "react-router-dom";

interface ErrorPageProps {
    
}
 
const ErrorPage: React.FunctionComponent<ErrorPageProps> = () => {
    return ( 
        <div>
            <h1>Error Page 404</h1>
            <p>Something went wrong..</p>
            <p>Go back to <Link to="/" >Home</Link> page</p>
        </div>
     );
}
 
export default ErrorPage;