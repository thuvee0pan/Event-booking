import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from './Store/actions/authAction'
import PropTypes from 'prop-types';

import AuthPage from './pages/Auth'
import EventsPage from './pages/Events'
import Bookingsage from './pages/Bookings'
import Blogs from './pages/Blogs'
import MainNavigation from './components/Navigation/MainNavigation'
import Home from './pages/Home'
import LoadingBar from 'react-redux-loading-bar'

class App extends Component {
  loggedIn() {
    return !! this.props.auth.token
  }
  logOut = () => {
    this.props.logout()
  }
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <MainNavigation auth={this.loggedIn()} logout={this.logOut} />

          <main className="container ">
          <LoadingBar />

        <Switch>
              {!this.loggedIn() && <Redirect from="/" to="auth" exact />}
              {/* {!this.loggedIn() && <Redirect from="/events" to="auth" exact />} */}
              {!this.loggedIn() && <Redirect from="/bookings" to="auth" exact />}
              {this.loggedIn() && <Redirect from="/auth" to="events" exact />}
      
          {!this.loggedIn() && (<Route path="/auth" component={AuthPage} />)}
              {this.loggedIn() &&( <Route path="/events" component={EventsPage} />)}
             <Route path="/events" component={EventsPage}/>

          {this.loggedIn() &&( <Route path="/bookings" component={Bookingsage} />)}
              <Route path="/blogs" component={Blogs} />
              <Route path="/home" component= {Home}/>


        </Switch> 
        </main>
        </React.Fragment>
      </BrowserRouter>
    
    );
  }
}

App.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  auth : state.auth
}) 
export default connect(mapStateToProps, { logout })(App);