import React, { Component } from 'react'
import Filter from './Filter'
import { Link } from 'react-router-dom';

export class Cities extends Component {
  render() {
    return (
      <li key={this.props.ciudad._id}>
        <Link to={`itinerarios/${this.props.ciudad._id }`}>{this.props.ciudad.name}, {this.props.ciudad.country}</Link>
      </li>
    )
  }
}

export default class CitiesList extends Component {

  constructor(props){
    super(props);
    this.state ={
      searchCity: ''
    }
    this.updateSearch= this.updateSearch.bind(this)
  }
  
  updateSearch(stringFilter) {
    this.setState({ searchCity: stringFilter.substr(0, 20) });

  };

  render() {
    let filteredContacts = this.props.data.filter(
      (city) => {
        return city.country.toLowerCase().indexOf(this.state.searchCity) !== -1 || city.name.toLowerCase().indexOf(this.state.searchCity) !== -1;
      }

    );
    return (
      <div>
        <Filter onChange={this.updateSearch} placeholder='Search Cities'/>
        
        {
          filteredContacts.map((ciudad) =>
            <Cities ciudad={ciudad} key={ciudad._id} />
          )
        }
      </div>
    )
  }
}