import PostCard from '../components/card/PostCard';
import Customer from '../components/Customer';
import { CustomerClass } from '../components/CustomerClass';
import { Employee } from '../components/employee';
import { EmployeeClass } from '../components/employeeClass';
import JsonData from '../components/jsonData.json';
import Grid from '@material-ui/core/Grid';
import imageToAdd from "./../images/ReactTS.png";
import reactImage from './../images/react.png';
import nodeImage from './../images/node.png';
import './index.scss';

function Home() {
    let CardData = JsonData.PostCardList
    // console.log(JsonData.PostCardList)
    return (
      <div className="homeClass">
        <h1>HOME</h1>
        <h2>React & TS</h2>
        <Grid container spacing={2}
        >
          {
            CardData.map(cardList=>
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
            CardData.map(cardList=>
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