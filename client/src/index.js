import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom'
import App from './App';
import LogIn from './components/LogIn';
import CreateAccount from './components/CreateAccount';
import Cities from  "./components/Cities";
import Footer from './components/Footer'


class Index extends Component{
  render(){
    return(
      <BrowserRouter>
      <div className="Routing">
        <Route exact path="/" component={App} />
        <Route path="/LogIn" component={LogIn} />
        <Route path="/CreateAccount" component={CreateAccount} />
        <Route path="/Cities" component={Cities}/>
        <Footer/>
        
      </div>
    </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);