import React, { Component } from 'react';
import OutHeader from './OutHeader';
import { Button } from 'react-bootstrap';
import fire from './config/Fire';

class Login extends Component { 
    constructor(props) {
        super(props)
    
        this.state = {
             user: '',
             error: ''
        }
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this)
        this.google = this.google.bind(this)
    }
    
    login(){
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        fire.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            this.setState({user: email});
        }).catch((err) => {
            this.setState({error: err.toString()})
        })
    }
    
    signup(){
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        fire.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            this.setState({user: email});
        }).catch((err) => {
            this.setState({error: err.toString()})
        })
    }

    google(){
        let provider = new fire.auth.GoogleAuthProvider();
        
        fire.auth().signInWithPopup(provider)
        .catch(error => {
            let msg = error.message
            this.setState({error: msg})
        })
    }

    render() {
        return (
            <div>
                <OutHeader login={this.login} signup={this.signup}/>
                <div id="loginBG">
                    <div id="login">
                        <h1>LOG IN OR SIGN UP</h1>
                        <hr />
                        <input type="email" id="email" placeholder="Enter your email"/>
                        <br />
                        <br />
                        <input type="password" id="password" placeholder="Enter password" />
                        <br />
                        <p id="error">{this.state.error}</p>
                        <br />
                        <div className="row">
                            <div className="col-6">
                                <Button className="w-100" onClick={this.login}>Log In</Button>
                            </div>
                            <div className="col-6">
                                <Button className="w-100" onClick={this.signup}>Sign Up</Button>
                            </div>
                        </div>
                        <em>or</em>
                        <br />
                        <br />
                        <Button className="w-100 bg-danger" onClick={this.google}><i className="fa fa-google text-warning mr-4"></i>Sign in with Google</Button>
                    </div>
                </div>  
            </div>
        )
    }
}

export default Login;