import React from 'react';

interface IProps{}
interface IState{
    name: string;
    age: number;
    title: string;
}

export class EmployeeClass extends React.Component<IProps, IState>{

    constructor(props:IProps) {
        super(props);
        this.state = {
            name: 'Boris',
            age: 35,
            title: 'Solution Architecture',
        } as IState
    }
    render() {
        // let {name, age, title} = this.state;
        return (
            <React.Fragment>
                <h2>Employee Class Component</h2>
                <ul>
                    <li>
                        name: {this.state.name}
                    {/* <li>Name: {name}</li> */}

                    </li>
                    <li>
                        age: {this.state.age}
                    </li>
                    <li>
                        title: {this.state.title}
                    </li>
                </ul>
            </React.Fragment>
        )
    }
}