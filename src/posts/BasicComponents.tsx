import Customer from '../components/Customer';
import { CustomerClass } from '../components/CustomerClass';
import CodeBlocks from '../components/codeBlocks';

interface BasicComponentsProps {
    
}
 
const BasicComponents: React.FunctionComponent<BasicComponentsProps> = () => {
    return ( 
        <div>
        <h1>Basic components</h1>
        <p>We are going to check the difference between functional and class component.</p>

        <h2>Functional component</h2>
        <p>This is the basic function component</p>
        <CodeBlocks 
        code={"<test>\n</test>"}
        language={"html"}
        showLineNumbers={true}
        startingLineNumber={1}
        />
        <h3>Result</h3>
        <Customer name={'Tom'} age={22} title={'IT'}/>

        <h2>Class component</h2>
        <p>This is the basic class component</p>
        <CustomerClass name={'Tom'} age={22} title={'IT'}/>
      </div>
     );
}
 
export default BasicComponents;