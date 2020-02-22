import React,{Fragment} from 'react'
import Child1 from '../src/child/Child1'
import Child2 from '../src/child/Child1'
import store from '../src/store'

export default class UseRedux extends React.Component {
    constructor(props){
        super(props);
        this.state = store.getState()
    }

    render() {
        return (
            <Fragment>
            <div>
            <div className="redux-title">
            <h1>使用Redux</h1>
        </div>
        <div className="redux-child1">
            <Child1></Child1>
        </div>
        <div className="redux-child2">
            <Child2></Child2>
        </div>
        {/*  直接使用store中的默认值 */}
        {this.state.list.map((item, index)=>{
            return <h5 key = {index}>{item}</h5>
        })}
            </div>
            </Fragment>
        );
    }
}