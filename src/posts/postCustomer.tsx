import React from 'react'
import Customer from '../components/Customer';



function PostCustomer() {
    return (
      <div>
        <p>post customer components</p>
        <Customer name={'Tom'} age={22} title={'IT'}/>
      </div>
    );
  }
  
  
  export default PostCustomer;