import React, { Component } from "react";
import "./Login.scss";
import FormInput from "../../FormInput/FormInput";
import Button from "../../Button/Button";
import { signInWIthGoogle } from "../../../firebase/firebase.utils"
class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: ""
        }    
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render(){
        return (
            <div className="login">
                <h2>I already have an account</h2>
                <span>Login with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" label="email" handleChange={this.handleChange} value={this.state.email}  required/>
                    <FormInput name="password" type="password" label="password" handleChange={this.handleChange} value={this.state.password} required />
                    <div className="buttons">
                        <Button type="submit" value="submit">Sign in</Button>
                        <Button onClick={signInWIthGoogle} isGoogleSignIn>Sign in with Google</Button>
                    </div>
                </form>
            </div>
        )
    }
 

}

export default Login;