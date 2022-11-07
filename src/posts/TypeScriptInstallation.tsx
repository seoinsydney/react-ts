import CodeBlocks from '../components/codeBlocks';

interface TypeScriptInstallationProps {
    
}
 
const TypeScriptInstallation: React.FunctionComponent<TypeScriptInstallationProps> = () => {
    return ( 
        <div>
            <h1>How to install React & TypeScript</h1>
            <p>To start a new application</p>
            <CodeBlocks 
                code={"npx create-react-app my-app --template typescript"}
                language={"bash"}
                showLineNumbers={true}
                startingLineNumber={1}
                />
            <p>If you want to install MUI (Material UI) with react type script</p>
            <CodeBlocks 
                code={"npx create react-app mui-app --template typescript"}
                language={"bash"}
                showLineNumbers={true}
                startingLineNumber={2}
                />
            <p>After create an App, I would like to install SASS/SCSS for better css coding for frontend, 
                so open TERMINAL from your VS code or whatever the IDE you are using and add this line for installing SASS/SCSS.</p>
            <CodeBlocks 
                code={"npm install node-sass --save"}
                language={"bash"}
                showLineNumbers={true}
                startingLineNumber={3}
                />
            <p>Use this script if you already have React application and you need typescript additionally</p>
            <CodeBlocks 
                code={"npm install --save typescript @types/node @types/react @types/react-dom @types/jest"}
                language={"bash"}
                showLineNumbers={true}
                startingLineNumber={4}
                />
            <h3>Now you've got a toy, lets discover React typeScript!</h3>
        </div>
     );
}
 
export default TypeScriptInstallation;