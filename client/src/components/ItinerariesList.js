import React, { Component } from "react";
import axios from "axios";
import { connect } from 'react-redux';
import getItineraries from '../actions/actionItinerary';


const URL = "http://localhost:5000/cities";


const mapStateProps = state => {
  return {
    item: state.reducer.mostrar
  }
}

const mapDispatchToProps = (dispatch, getState) => {
    return {
        getItineraries: () => dispatch(getItineraries(getState.match.params.id))
    };
};

class ItinerariesList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isFetching: true,
      itinearios: [],
    };
  }

  componentDidMount() {
    this.fetchQuotes();
  }
  
  fetchQuotes = () => {
    axios
      .get(URL)
      .then(response => {
        console.log(response);
        this.props.updateEstado(true)
        this.setState({ itinearios: response.data, isFetching: false });
        console.log(this.state.itinearios);
      })
      .catch(e => console.log(e));
  };

  render() {

    const title = "Itineraries";

    return (
      
      <div className="App">
        <h2 className="App-title">{title}</h2>
        <div>
          {!this.props.item
            ? " " :  this.state.itinearios
          }
        </div>
      </div>
    );
  }

}

export default connect(mapStateProps, mapDispatchToProps)(ItinerariesList);