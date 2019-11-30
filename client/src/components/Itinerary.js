import React, { Component } from "react";
import { connect } from 'react-redux';
import axios from "axios";
import getItineraries from '../actions/actionItinerary';

const mapStateProps = state => {
  return {
    item: state.reducerItinerary.mostrar
  }
}

const mapDispatchToProps = (dispatch) => {
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
    this.fetchQuotes();
  }

  fetchQuotes = () => {
    axios
      .get(this.props.match.params.id)
      .then(response => {
        this.props.getItineraries(this.props.match.params.id)
        this.setState({ itinerarios: response.data, isFetching: false });
        console.log(this.state.itinerarios);
      })
      .catch(e => console.log(e));
  }

  render() {
    let itin = this.state.itinerarios.map(
      (i) => {
        return <div className="card" className="justify-content-center" key={i._id}>
          <div className="card-header text-center" >{i.title}</div>
          <div className="card-body">City: {i.cityID.name}</div>
          <div className="card-body">Country: {i.cityID.country}</div>
          <div className="card-body">User: {i.username}</div>
          <div className="card-body">Rating: {i.rating}</div>
          <div className="card-body">Duration: {i.duration}</div>
          <div className="card-body">Price: {i.price}</div>
          <div className="card-body">Hashtags: {i.hashtags.join(" ")}</div>
        </div>
      });

    return (

      <div className="App">
        <h2 className="App-title">asd</h2>
        <div>
          {!this.props.item
            ? "Cargando..." : itin}
        </div>
      </div>
    );
  }

}

export default connect(mapStateProps, mapDispatchToProps)(Itinerary);