import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login, signup } from '../Store/actions/authAction'
import PropTypes from 'prop-types';


class AuthPage extends Component{
    
    constructor(props) {
        super(props);

        this.SUemail = React.createRef();
        this.SUname = React.createRef();
        this.SUpassword = React.createRef();

        this.SIemail = React.createRef();
        this.SIpassword =  React.createRef();
    }
    singup = (event) => {
        event.preventDefault();
        const email = this.SUemail.current.value;
        const name = this.SUname.current.value;
        const password = this.SUpassword.current.value;

        if (email.trim().length === 0 || password.trim().length === 0 || name.trim().length === 0) {
            return;
        }
        this.props.signup({ email, name, password });
        
    }
    singin = (event) => {
        event.preventDefault();
        const email = this.SIemail.current.value;
        const password = this.SIpassword.current.value;

        if (email.trim().length === 0 || password.trim().length === 0) {
            return;
        }
        this.props.login({ email, password });
    }
    render() {
        return (
            <div className="row mt-5">
                <div className="col-6 p-3 bg-info ">
                <h1  className="display-4 font-weight-bold" >Register </h1>
                 <form onSubmit = {this.singup}>
                <div className="form-group">
                    <label htmlFor="InputEmail">Email address</label>
                    <input ref={this.SUemail} type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="InputName">Name</label>
                    <input ref={this.SUname}  type="name" className="form-control" id="InputName" aria-describedby="nameHelp" placeholder="Enter your name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="InputPassword">Password</label>
                    <input ref={this.SUpassword} type="password" className="form-control" id="InputPassword" placeholder="Password"/>
                </div>
              
                <button type="submit" className="btn btn-primary w-25">Sign up</button>`
                </form>
                </div>

                <div className="col-6  p-3">
                <h1 className="display-4 text-center font-weight-bold">Sign In</h1>
                 <form onSubmit = {this.singin}>
                <div className="form-group">
                    <label htmlFor="InputEmail1">Email address</label>
                    <input  ref={this.SIemail} type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="InputPassword1">Password</label>
                    <input  ref={this.SIpassword} type="password" className="form-control" id="InputPassword1" placeholder="Password"/>
                </div>
               
                <button type="submit" className="btn btn-primary w-25">Sign in</button>`
                </form>
                </div>
                </div>
        );
        
    }
}
AuthPage.propTypes = {
    signup: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
};
export default connect(null, { signup , login })(AuthPage);