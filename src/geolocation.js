import React from 'react';


class Geolocation extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            latitude: null,
            longitude: null,
        }
        this.handleSuccess = this.handleSuccess.bind(this)
    }

    componentDidMount() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.handleSuccess)
        }
    }
    handleSuccess({ coords }) {
        this.setState({
            latitude:coords.latitude,
            longitude: coords.longitude,
        })
    }

   const FunctionAsChild = ({ children }) => children() 
   FunctionAsChild.propTypes = {
       children: React.PropTypes.func.isRequired,
   }

   <FunctionAsChild>
   { () => <div>Hello,World!</div>}
   </FunctionAsChild>

    render() {
        return (
         <div>
         <div>Latitude: {this.state.latitude}</div>
         <div>Longitude: {this.state.longitude}</div>
         </div>
        );
    }
}