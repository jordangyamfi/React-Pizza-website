import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { Order } from './components/Order';
import { Locations } from './components/Locations';
import { Layout } from './components/Design';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Banner';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={Order} />
              <Route path="/contact" component={Locations} />
            </Switch>
          </Layout>
        </Router>  
      </React.Fragment>
    )
  }
}

export default App; 