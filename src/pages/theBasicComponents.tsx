import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

interface ITheBasicComponentsProps {
    
}
 
const TheBasicComponents: React.FunctionComponent<ITheBasicComponentsProps> = props => {

    const [message, setMessage] = useState('');
    const { number } = useParams();

    useEffect(() => {
        if (number)
        {
            setMessage('The number is' + number);
        } else {
            setMessage('No number was provided');
        }
    }, []);

    return ( 
        <div>
            <h1>this is Basic Component page</h1>
            <h2>{message}</h2>
        </div>
     );
}
 
export default TheBasicComponents;