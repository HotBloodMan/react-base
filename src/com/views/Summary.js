import React, { Component } from 'react';

import SummaryStore from '../stores/SummaryStore.js';



class Summary extends Component {

    constructor(props) {
        super(props);

        this.onUppdate = this.onUppdate.bind(this);

        this.state = {
            sum: SummaryStore.getSummary()
        }
    }
   
      componentDidMount() {
          SummaryStore.addChangeListener(this.onUppdate);
      }
      componentWillUnmount() {
          SummaryStore.removeAllListeners(this.onUppdate);
      }

      onUppdate() {
          this.setState({
              sum:SummaryStore.getSummary()
          })
      }

      render(){
          return(
              <div>Total Count:{this.state.sum}</div>
          )
      }

    }
    
    export default Summary;
    