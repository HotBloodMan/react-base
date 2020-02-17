import React from 'react';
export default class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'我是子组件的值'
        }
    }
    //点击按钮将值通过props传给父组件
    sendValue() {
        this.props.goFather(this.state.name);
    }

    render() {
        return(
            <div>
            <h1>{this.props.fatherTochildValue}</h1>
            <button onClick={this.sendValue.bind(this)}>将值发送给父组件</button>
            </div>
        );
    }
}