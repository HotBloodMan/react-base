import React from 'react';
export default class Child extends React.Component {

    constructor(props){
        super(props)
        this.state={
            name:'Child to fff'
        }
    }

    send(){
        this.props.goFather(this.state.name);
    }
    render() {
        return(
            <div>
            <h1>Child show :{this.props.fathertoSend}</h1>
            <button onClick={this.send.bind(this)}>KKKKK</button>
            </div>
        );
    }
   
}