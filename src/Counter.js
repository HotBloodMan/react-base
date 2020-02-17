import React from 'react';

 export default class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            // count: props.count,
            count: props.initialCount,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
          this.state.count ++
      
    }

    render() {
        return(
            <div>
            {this.state.count}
            <button onClick={this.handleClick}>+</button>
            <button onClick= { () => this.setState({foo:'bar'}) }>Update</button>
            </div>
        );
    }
}