import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import { ROUTES } from './constants';
import MainView from './components/Main';
import AppBar from './components/AppBar';
import CompanyView from './components/Company';
import TeamView from './components/Team';
import SourceView from './components/Sources';
import Facebook from './components/Facebook';
import Amazon from './components/Amazon';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path={ROUTES.main} component={MainView} />
            <Route path='/company/facebook' component={Facebook} />
            <Route path='/company/amazon' component={Amazon} />
            <Route path={ROUTES.company} component={CompanyView} />
            <Route path={ROUTES.team} component={TeamView} />
            <Route path={ROUTES.sources} component={SourceView} />
            <Redirect to={ROUTES.main} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
