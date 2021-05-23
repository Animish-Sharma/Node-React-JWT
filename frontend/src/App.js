import './App.scss';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Layout from './hocs/Layout';
import Home from './containers/Home';
import Login from './containers/Login';
import Update from './containers/Update';
import Register from './containers/Register';
import React from 'react'
import { Provider } from 'react-redux'
import store from './store';

function App() {
  return(
  <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/update" component={Update} />
        </Switch>
      </Layout>
    </Router>
  </Provider>
  )
  
}

export default App;
