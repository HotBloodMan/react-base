import React from 'react';


export default class PlayList extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state= {
            items: ['foo','bar'],
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
   
    }

    componentDidUpdate(){
      console.log('componentDidUpdate');
    
    }

    handleClick() {
        console.log('handleClick');
        const items = this.state.items.slice();
        items.unshift('baz');
        this.setState({
            items,
        })
    }

    render() {
        return (
            <div>
              <ul>
              {this.state.items.map((item,index) => (
                  <li key={index}>{item}
                  <input type="text" />
                  </li>
              ))}
              </ul>
              <button onClick={this.handleClick}>+</button>
            </div>
        );
    }
}