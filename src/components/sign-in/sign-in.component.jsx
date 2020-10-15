import React from 'react';
import FormInput from "../form-input/form-input.component";
import './sign-in.styles.scss'
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle} from "../../firebase/firebase.utils";

class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            password: '', email: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState(
            {
                email: "",
                password: ""
            }
        )
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState(
            {[name]: value}
        )
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account!</h2>
                <p>Sign in with your email and password</p>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" handleChange={this.handleChange} type="email" required
                               value={this.state.email} label={"Email"}/>
                    <FormInput name="password" handleChange={this.handleChange} type="password" required
                               value={this.state.password} label={"Password"}/>
                    <div className={"buttons"}>
                        <CustomButton type="submit">
                            Submit Form
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>
                            Sign in with google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;