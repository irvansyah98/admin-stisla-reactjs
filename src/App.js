import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Login from './components/login';

class App extends Component{
  render(){
    return(
      <Switch>
          <Route exact path="/" render={props => <Login {...props}/>}/>
      </Switch>
    );
  }
}

export default App;
