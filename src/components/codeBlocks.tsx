import * as React from 'react';
import { CodeBlock, nord } from "react-code-blocks";

interface ICodeBlocksProps {
    code: string;
    language: string;
    showLineNumbers: boolean;
    startingLineNumber: number;
}
 
const CodeBlocks: React.FunctionComponent<ICodeBlocksProps> = props => {
    return ( 
        <div>
            <CodeBlock
            text={props.code}
            language={props.language}
            showLineNumbers={props.showLineNumbers}
            startingLineNumber={props.startingLineNumber}
            theme={nord}
            />
        </div>
     );
}
 
export default CodeBlocks;