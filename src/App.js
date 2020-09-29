import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Login from './components/login';
import Layout from './components/containers/layout';

class App extends Component{
  render(){
    return(
      <Switch>
          <Route exact path="/" render={props => <Login {...props}/>}/>
          <Route path="/dashboard" render={props => <Layout {...props}/>}/>
      </Switch>
    );
  }
}

export default App;
