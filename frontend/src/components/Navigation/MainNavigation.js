/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom'
// import './MainNavigation.css';

const mainNavigation = props => (
  <div>
    {/* {console.log("login" ,props.logout)} */}
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
    <NavLink className="navbar-brand" to="/">Logo</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
      <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav navbar-right ml-auto">
          
          <li className="nav-item">
                <NavLink className="nav-link" to="/home">Home</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" to="/blogs">Blogs</NavLink>
          </li>
          <li className="nav-item">
                <NavLink className="nav-link" to="/events">Events</NavLink>
              </li>
          {props.auth && (
            <React.Fragment>
            {/* <li className="nav-item">
                <NavLink className="nav-link" to="/events">Events</NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/bookings">Bookings</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" onClick={props.logout} to='/#'>LogOut</NavLink>
              </li>
              </React.Fragment>
              )}
              {!props.auth && <li className="nav-item">
                <NavLink className="nav-link" to="/auth">Sign in </NavLink>
          </li>}
          </ul>
      </div>
</nav>
  </div>
);

export default mainNavigation;