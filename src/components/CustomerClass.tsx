import React from 'react'

interface IState{}
interface IProps{
    name:string;
    age: number;
    title:string;
}

export class CustomerClass extends React.Component<any, any>{
    constructor(props:IProps) {
        super(props);
    }

    render() {
        // let {name, age, title} = this.props;
        // you can use above line if you want to make it shorter code if it's long list of items
        return (
            <React.Fragment>
                <h2>customer Class Component</h2>
                <ul>
                    <li>Name: {this.props.name}</li>
                    {/* <li>Name: {name}</li> */}
                    <li>Age: {this.props.age}</li>
                    <li>Title: {this.props.title}</li>
                </ul>
            </React.Fragment>
        )
    }

}