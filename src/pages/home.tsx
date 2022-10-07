import PostCard from '../components/card/PostCard';
import Customer from '../components/Customer';
import { CustomerClass } from '../components/CustomerClass';
import JsonData from '../components/jsonData.json';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {Menu, Link} from "@material-ui/core";

function Home() {
    let CardData = JsonData.PostCardList
    console.log(JsonData.PostCardList)

    return (
      <div className="App">
        <header className="App-header">
        <p>HOME</p>

        {
            CardData.map(cardList=>
                <PostCard 
                img={cardList.PostCard.img} 
                alt={cardList.PostCard.alt}
                title={cardList.PostCard.title} 
                description={cardList.PostCard.description} 
                link={cardList.PostCard.link}  
                />
                )
        }
     
        <Customer name={'Tom'} age={22} title={'IT'}/>
        <CustomerClass name={'Tim'} age={23} title={'IT'}/>

        {/* <a
          className="App-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          HOME
        </a> */}

        {/* <Link to="/home"></Link> */}
        </header>
      </div>
    );
  }
  
  export default Home;