import Customer from '../components/Customer';
import { CustomerClass } from '../components/CustomerClass';
import CodeBlocks from '../components/codeBlocks';

interface IPostCustomer{

}
const PostCustomer: React.FunctionComponent<IPostCustomer> = props =>  {

    return (
      <div>
        <h1>Basic components</h1>

        <h2>Functional component</h2>
        <p>This is the basic function component</p>
        <Customer name={'Tom'} age={22} title={'IT'}/>
        <CodeBlocks 
        code={"<test>\n</test>"}
        language={"html"}
        showLineNumbers={true}
        startingLineNumber={1}
        />

        <h2>Class component</h2>
        <p>This is the basic class component</p>
        <CustomerClass name={'Tom'} age={22} title={'IT'}/>
      </div>
    );
  }
  
  
  export default PostCustomer;