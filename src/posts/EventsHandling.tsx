import './index.scss';
import React, {useState} from 'react';
// import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface EventsHandlingProps {
    
}
interface EventsHandlingState {
    number: number;
}
 
const EventsHandling: React.FunctionComponent<EventsHandlingProps> = () => {

    let [count, setCount] = useState<EventsHandlingState>({
        number: 0
    })

    let incr = () => {
        setCount({
            number: count.number + 1
        })
    }

    let decr = () => {
        setCount({
            number: count.number - 1
        })
    }

    return ( 
        <div>
            <h1>Events Handling in React Type Script</h1>
            <p>Let's have a look with a couple of simple examples.</p>
            <p>I'm going to create 2 buttons for increasing and decreasing number in the card.</p>
            <Grid item xs={6}>
                <Card>
                    <h3>Number {count.number}</h3>
                    <Button onClick={incr}>Increase</Button>
                    <Button onClick={decr}>Decrease</Button>
                </Card>
            </Grid>
            

        </div>
     );
}
 
export default EventsHandling;