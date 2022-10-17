
import PostCard from '../components/card/PostCard';
import TypeScriptJsonData from '../components/typeScript.json';
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
        <h1>HOME</h1>
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

        {/* <Grid container>
          <Grid item xs={12} md={6} >
            <Customer name={'Tom'} age={22} title={'IT'}/>
          </Grid>
          <Grid item >
            <CustomerClass name={'Tim'} age={23} title={'IT'}/>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} md={6} >
            <Employee />
          </Grid>
          <Grid item >
            <EmployeeClass />
          </Grid>
        </Grid> */}
    </div>
     );
}
 
export default Home;
