import React, { Component } from "react";
import { connect } from 'react-redux';
import getItineraries from '../actions/actionItinerary'


const mapStateProps = state => {
  return {
    item: state.reducerItinerary.mostrar
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    getItineraries: (id) => dispatch(getItineraries(id))

  };
};

class Itinerary extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isFetching: true,
      itinerarios: [],
    };
  }

  componentDidMount() {
    this.props.getItineraries(this.props.match.params.id)
  }
  
  render() {
    return (

      <div className="App">
        <h2 className="App-title">asd</h2>
        <div>
        </div>
      </div>
    );
  }

}

export default connect(mapStateProps, mapDispatchToProps)(Itinerary);