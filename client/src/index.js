import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom'
import App from './App';
import LogIn from './components/LogIn';
import CreateAccount from './components/CreateAccount';
import Cities from  "./components/Cities";
import  Activity  from "./components/Activity"
import Footer from './components/Footer'
import store from './store'; 
import { Provider } from 'react-redux';


class Index extends Component{
  render(){
    return(
      <Provider store={store}>
      <BrowserRouter>
      <div className="Routing">
        <Route exact path="/" component={App} />
        <Route path="/LogIn" component={LogIn} />
        <Route path="/CreateAccount" component={CreateAccount} />
        <Route path="/itinerarios/:id" component={Activity} />
        <Route path="/Cities" component={Cities}/>
        <Footer/>
        
      </div>
    </BrowserRouter>
    </Provider>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);