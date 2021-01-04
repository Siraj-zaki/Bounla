import React from 'react';
import Header from './Header';
import Footer from './Footer';
import homepic from '../assets/home_index-1606861565.png';
import '../bootstrap.min.css'
import '../index.css'
import '../smartphoto.min.css'
import '../styles.css'
import '../plyr.css'
import '../core.min.css'
export default class Login extends React.Component {
    state={
        email:'',
        password:'',
        checked:''
    }


    render() {
        console.log(this.state.checked);
        return (
            <div>
                <Header Creators />
                <div class="jumbotron home m-0 bg-gradient">
                    <div class="container pt-lg-md">
                        <div class="row new-flex">
                            <div class="col-lg-7">
                                <img src={homepic} class="img-center img-fluid"></img>
                            </div>
                            <div class="col-lg-5">
                                <div class="card bg-light shadow border-0">

                                    <div class="card-header bg-white py-4">
                                        <h4 class="text-center mb-0 font-weight-bold">
                                            Welcome Back!
            </h4>
                                        <small class="btn-block text-center mt-2">Happy to see you again!</small>
                                    </div>

                                    <div class="card-body px-lg-5 py-lg-5">
                                        <form method="POST" action="https://bounla.com/login">
                                            <input type="hidden" name="_token" value="NFojGkpqwlJANgEikRX3IecKD7tXEQNP46CIwyjY"></input>
                                            <input type="hidden" name="return" value="http://bounla.com/"></input>
                                            <div class="form-group mb-3">
                                                <div class="input-group input-group-alternative">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text"><i class="fa fa-envelope"></i></span>
                                                    </div>
                                                    <input class="form-control" value={this.state.email} required onChange={(e) => this.setState({email:e.target.value})}   placeholder="Username or Email" name="username_email" type="text"></input>

                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="input-group input-group-alternative">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text"><i class="fa fa-key"></i></span>
                                                    </div>
                                                    <input name="password" required value={this.state.password} onChange={(e) => this.setState({password:e.target.value})} type="password" class="form-control" placeholder="Password"></input>
                                                </div>

                                            </div>
                                            <div class="custom-control custom-control-alternative custom-checkbox">
                                                <input class="custom-control-input" id=" customCheckLogin" onChange={(e) => this.setState({checked:e.target.checked})} type="checkbox" name="remember" ></input>
                                                <label class="custom-control-label" for=" customCheckLogin">
                                                    <span>Remember me</span>
                                                </label>
                                            </div>
                                            <div class="text-center">
                                                <button type="submit" class="btn btn-primary my-4 w-100">Login</button>
                                            </div>
                                        </form>


                                        <small class="btn-block text-center">Protected by reCAPTCHA <a href="https://policies.google.com/privacy" target="_blank">Privacy</a> - <a href="https://policies.google.com/terms" target="_blank">Terms</a></small>

                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-6">
                                        <a href="password/reset.html" class="text-light">
                                            <small>Forgot Password?</small>
                                        </a>
                                    </div>
                                    <div class="col-6 text-right">
                                        <a href="signup.html" class="text-light">
                                            <small>Don&#039;t have an account?</small>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}