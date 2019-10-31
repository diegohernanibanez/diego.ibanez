//import React from 'react';
import React, { Component } from 'react';
import logo from './MYtineraryLogo.png';
import Button from './components/Button.js';
import circledArrow from './circled-right-2.png';
import Account from './components/Account'


//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';




/*function App() {
  return (
    
    <div className="App text-center">
      <header className="App-header">
        <img src={logo} className="App-logo w-50 p-3" alt="logo" />
        <p className="font-weight-bold">
          Find your perfect trip, designed by<br >
          </br>insiders who know and love their cities.
        </p>
      </header>
      <main>
        <div className="mt-5 mb-5" >
          <h3>Start Browsing</h3>
          <Button url="/Cities" className="img-fluid w-30 m-5" image={circledArrow} altText="arrow"/>
        </div>
        <Account/>
      </main>
    </div>
  );
}*/
class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };
  
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };
  
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    
    this.setState({ responseToPost: body });
  };
  
render() {
    return (
      <div className="App text-center">
      <header className="App-header">
        <img src={logo} className="App-logo w-50 p-3" alt="logo" />
        <p className="font-weight-bold">
          Find your perfect trip, designed by<br >
          </br>insiders who know and love their cities.
        </p>
      </header>
      <main>
        <div className="mt-5 mb-5" >
          <h3>Start Browsing</h3>
          <Button url="/Cities" className="img-fluid w-30 m-5" image={circledArrow} altText="arrow"/>
        </div>
        <Account/>
      </main>
    </div>
    );
  }
}

export default App;

