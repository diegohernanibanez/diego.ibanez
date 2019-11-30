import React, { Component } from "react";
import { connect } from 'react-redux';
import axios from "axios";
import getActivities from '../actions/actionActivity'
import Itinerary from "./Itinerary"

const mapStateProps = state => {
  return {
    item: state.reducerActivity.mostrar
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getActivities: (id) => dispatch(getActivities(id))

  };
};

class Activity extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isFetching: true,
      actividades: [],
    };
  }

  componentDidMount() {
    this.fetchQuotes();
  }

  fetchQuotes = () => {
    axios
      .get(this.props.match.params.id)
      .then(response => {
        this.props.getActivities(this.props.match.params.id)
        this.setState({ actividades: response.data, isFetching: false });
        console.log(this.state.actividades);
      })
      .catch(e => console.log(e));
  }

  render() {
    let acti = this.state.actividades.map(
      (i) => {
        return <div key={i._id}>
          <Itinerary />
          <div>{i.title}</div>
          <div>Title: {i.title}</div>
          <div>Duration: {i.duration}</div>
          <div>Price: {i.price}</div>
          <div>Description: {i.description}</div>
        </div>
      });

    return (

      <div className="App">
        <h2 className="App-title"></h2>
        <div>
          
          {!this.props.item
            ? "Cargando..." : acti}
        </div>
      </div>
    );
  }

}

export default connect(mapStateProps, mapDispatchToProps)(Activity);