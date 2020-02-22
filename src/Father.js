
import React from 'react';
import  Child from './Child'
export default class Father extends React.Component { 
         
    constructor(props){
        super(props)
        this.state={
            name:'Father send 3 to Child'
        }
    }

    sendValueToFather(data){
        this.setState({childValue:data})
    }

    render(){
        return(
            <div>
            <h1>Father------{this.state.childValue}</h1>
            <Child goFather={this.sendValueToFather.bind(this)} 
            fathertoSend={this.state.name}
            ></Child>
            </div>
        );
    }

}