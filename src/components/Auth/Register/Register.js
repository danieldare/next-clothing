import React,  { Component } from "react";
import FormInput from "../../FormInput/FormInput";
import Button from "../../Button/Button";
import { auth, createUserProfileDocument } from "../../../firebase/firebase.utils";
import "./Register.scss";


class Register extends Component {
    state = {
        displayName:"",
        email: "",
        password: "",
        confirmPassword: ""
    }

    handleChange = (e) => {
        const { name, value } =  e.target;
        this.setState({ [name] : value });
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        const { displayName, email , password , confirmPassword } = this.state;
        if(password !== confirmPassword){
            alert("passwords don't match");
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });

            //Clear form
            this.setState({
                displayName:"",
                email: "",
                password: "",
                confirmPassword: ""
            })
        }catch(error){
            console.log(error);
        }
    }


    render(){
        const { displayName, email , password , confirmPassword } = this.state;
        return (
            <div className="Register">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="register-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        required
                        />
                        <FormInput
                        type="text"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required
                        />
                        <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label="Password"
                        required
                        />
                        <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="Confirm Password"
                        required
                        />
                        <Button type="submits">Register</Button>
                </form>
            </div>
        )
    }
}



export default Register;