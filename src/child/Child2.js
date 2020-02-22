import React, { Component, Fragment } from 'react'
import store from './../store'

export default class Child2 extends React.Component{
    constructor(props){
        super(props)
        this.state = store.getState();
        this.storeChange = this.storeChange.bind(this);
        store.subscribe(this.storeChange);
    }


    render(){
        return(
            <Fragment>
                <div>
                   <h3>我是child2</h3>
                   <sapn>{this.state.value}</sapn>
                </div> 
            </Fragment>
        )
    }
}