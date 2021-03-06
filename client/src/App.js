import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {setCurrentUser, logoutUser} from './actions/authActions';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import About from './components/About';

import './App.css';

if(localStorage.jwtToken) {
    // Set auth token header auth
    setAuthToken(localStorage.jwtToken);
    // Decode token and get user info an exp
    const decoded = jwt_decode(localStorage.jwtToken);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));

    // Check for expired token

    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        store.dispatch(logoutUser());
    }
}

function App() {
  return (
      <Provider store = {store}>
          <Router>
              <div className="App">
                  <Navbar/>
                  <Route exact path="/" component={Landing}/>
                  <div className="container">
                      <Route exact path="/about" component={About}/>
                      <Route exact path="/dashboard" component={Dashboard} />
                      <Route exact path="/register" component={Register}/>
                      <Route exact path="/login" component={Login}/>
                  </div>
                  <Footer/>
              </div>
          </Router>
      </Provider>
  );
}

export default App;
