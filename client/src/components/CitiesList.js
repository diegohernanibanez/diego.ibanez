import React, { Component } from 'react'

export class Cities extends Component {
  render() {
    return (
      <li key={this.props.ciudad._id}>
        {this.props.ciudad.name}, {this.props.ciudad.country}
      </li>
    )
  }
}

export default class CitiesList extends Component {

  constructor(props){
    super(props);
    this.state ={
      search: ""
    }
  }
  
  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  };

  render() {
    let filteredContacts = this.props.data.filter(
      (city) => {
        return city.name.toLowerCase().indexOf(this.state.search) !== -1;
      }
    );
    return (
      <div>
        <p>Buscar Por Ciudad</p>
        <input type='text' value={this.state.search} onChange={this.updateSearch.bind(this)}/>
        {
          filteredContacts.map((ciudad) =>
            <Cities ciudad={ciudad} key={ciudad._id} />
          )
        }
      </div>
    )
  }
}