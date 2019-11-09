import React, { Component } from "react";
import CitiesList from "./CitiesList";
import axios from "axios";

import { connect } from 'react-redux';
import updateEstado from '../actions/action'

const URL = "http://localhost:5000/cities";


const mapStateProps = state => {
  console.log(state);
  return {
      asdfasfdasfd: state.reduceMostrar.mostrar
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return {
      updateEstado: (data) => dispatch(updateEstado(data)),
  };
};

class Cities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: true,
      ciudades: []
    };
  }

  componentDidMount() {
    this.fetchQuotes();
  }
  
  fetchQuotes = () => {
    this.setState({ ...this.state, isFetching: true });
    axios
      .get(URL)
      .then(response => {
        console.log(response);
        this.setState({ ciudades: response.data, isFetching: false });
        console.log(this.state.ciudades);
      })
      .catch(e => console.log(e));
  };
  render() {
    const title = "Ciudades disponibles";
    return (
      <div className="App">
        <h2 className="App-title">{title}</h2>
        <div>
          {this.state.isFetching
            ? "Fetching quotes..."
            : <CitiesList data={this.state.ciudades} />
            }
        </div>
      </div>
    );
  }

}

export default Cities;

// <CitiesList data={this.state.ciudades} />