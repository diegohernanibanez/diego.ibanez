import React, { Component } from 'react'

class filterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      citiesFilter: ""
    }
  }
  
  handleChange = (e) => {
    this.setState({
      citiesFilter: e.target.value
    })
    this.props.onChange(event.target.value)
  }
  
  render() {
    return (
      <div>
        <label htmlFor="filter">Filter by City: </label>
        <input type="text" id="filter" 
          value={this.state.citiesFilter} 
          onChange={this.handleChange}/>
      </div>
      )
  }
}

export default filterForm