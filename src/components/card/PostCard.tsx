// import React, { Component } from 'react';
import './index.scss';
import JsonData from '../jsonData.json';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface CardProps {
  img: string;
  alt: string;
  title: string;
  description: string;
  link: string;
}

let PostCard:React.FC<CardProps> = ({ img, alt,  title, description, link }) => {
// console.log(img, title, description, link)

  return (
    <div className="App">
      <Card sx={{ maxWidth: 345 }} key={title}>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt={alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">See More {link}</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default PostCard;
