import React, {useState} from 'react';


interface IProps{}
interface IState{
    name: string;
    age: number;
    title: string;
}

export let Employee:React.FC<IProps> = () => {

    let [state, setState] = useState<IState>({
        name: 'Seo',
        age: 31,
        title: 'Frontend Developer'
    }); 


    return(
        <React.Fragment>
            <h2>Employee Component</h2>
            <ul>
                <li>
                    name: {state.name}
                </li>
                <li>
                    age: {state.age}
                </li>
                <li>
                    title: {state.title}
                </li>
            </ul>
        </React.Fragment>
    )

};