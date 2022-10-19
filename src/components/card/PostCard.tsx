import './index.scss';
import * as React from 'react';
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface CardProps {
  id: number;
  date: string;
  img: string;
  alt: string;
  title: string;
  description: string;
  link: string;
}

let PostCard:React.FC<CardProps> = ({ id, date, img, alt,  title, description, link }) => {

  return (
    <div>
      <Card key={id}>
        <CardMedia
          component="img"
          height="140"
          image={img}
          // image={imageToAdd}
          alt={alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          {/* <p className="date">{date}</p> */}
          <Typography variant="body2" color="text.secondary"
          style={{overflow: "hidden", textOverflow: "ellipsis", width: '20rem'}}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small"><Link to={link}>Read</Link></Button>

        </CardActions>
      </Card>
    </div>
  );
}

export default PostCard;
