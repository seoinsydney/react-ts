import * as React from 'react';
import PostCard from '../components/card/PostCard';
import TypeScriptJsonData from '../components/typeScript.json';
import Pagination from '../components/pagination/pagination';
import NodeJsonData from '../components/node.json';
import Grid from '@material-ui/core/Grid';
import imageToAdd from "./../images/ReactTS.png";
import nodeImage from './../images/node.png';
import './index.scss';

interface IHomeProps {
    
}
 
const Home: React.FunctionComponent<IHomeProps> = props => {

  let TypeScriptCardData = TypeScriptJsonData.PostCardList
  let NodeCardData = NodeJsonData.PostCardList

    return ( 
      <div>
        <h1>Study Room</h1>
        <h2>React & TS</h2>
        <Grid container spacing={2}
        >

          {
            TypeScriptCardData.map(cardList=>
              <Grid item xs={12} sm={6} md={4} 
              key={cardList.PostCard.id}
              >
                <PostCard 
                id={cardList.PostCard.id}
                date={cardList.PostCard.date}
                img={imageToAdd} 
                alt={cardList.PostCard.alt}
                title={cardList.PostCard.title} 
                description={cardList.PostCard.description} 
                link={cardList.PostCard.link}  
                />
                </Grid>
                )
        }
        </Grid>
        {
          TypeScriptCardData.length > 3 &&
          <Pagination />
        }

        <h2>Node.js</h2>
        <Grid container spacing={2}
        >
          {
            NodeCardData.map(cardList=>
              <Grid item xs={12} sm={6} md={4} 
              key={cardList.PostCard.id}
              >
                <PostCard 
                id={cardList.PostCard.id}
                date={cardList.PostCard.date}
                img={nodeImage} 
                alt={cardList.PostCard.alt}
                title={cardList.PostCard.title} 
                description={cardList.PostCard.description} 
                link={cardList.PostCard.link}  
                />
                </Grid>
                )
          }
        </Grid>
        {
          NodeCardData.length > 3 &&
          <><Pagination /></>
        }
    </div>
     );
}
 
export default Home;
