import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import Dashboard from '../pages/dashboard';

class Content extends Component{
  render(){
    return(
      <Switch>
          <Route exact path="/dashboard" render={props => <Dashboard {...props}/>}/>
      </Switch>
    );
  }
}

export default Content;
