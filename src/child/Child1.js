import React, { Fragment } from 'react'
import store from './../store'

export default class Child1 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue: ''
        }
    }
    //将输入框的值放进store中
    send() {
        console.log('send 1 ')
        const action = {
            type: 'toChild2',
            value: this.state.inputValue
        }
        store.dispatch(action)
    }
    //获取input输入框的值
    inputValue(event){
        console.log('inputValue 1 ',event)
        this.state.inputValue = event.target.value;
    }

    render() {
        return(
            <Fragment>
            <div>
               <div>
                  <h3>我是child1</h3>
                  <input onChange ={this.inputValue.bind(this)}/><button onClick = {this.send.bind(this)}>发送</button>
               </div>
            </div>
          </Fragment>
        )
    }
}