import React, { Component } from 'react'

class filterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: ""
    }
  }
  
  handleChange = (e) => {
    this.setState({
      filter: e.target.value
    })
    this.props.onChange(e.target.value)
  }
  
  render() {
    return (
      <div>
        <label htmlFor="filter">{this.props.title} </label>
        <input type="text" id="filter" placeholder={this.props.placeholder}
          value={this.state.filter} 
          onChange={this.handleChange}/>
      </div>
      )
  }
}

export default filterForm