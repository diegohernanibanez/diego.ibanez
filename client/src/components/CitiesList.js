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
  render() {
    return (
      <div>
        {
          this.props.data.map((ciudad)=>
          <Cities ciudad={ciudad} key={ciudad._id} />
          )
        }
      </div>
    )
  }
}