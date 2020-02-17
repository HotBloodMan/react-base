
import React from 'react';
import  Child from './Child'
export default class Father extends React.Component { 
    constructor(props) {
        super(props);
        this.state={
            name: '我是父组件的值,我将把我的值给子组件'
        }
    }
     childToFatherValue(data) {
         this.setState({
             childValue:data
         })
     }
    render() {
        return(
            <div>
               <h1>我是父组件</h1>
               <h1>我是来自子组件的值-{this.state.childValue} </h1>
               <Child fatherTochildValue = {this.state.name}
               goFather={this.childToFatherValue.bind(this)}
               ></Child>
            </div>
        );
    }
}