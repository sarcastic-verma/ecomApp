import React from 'react';
import FormInput from "../form-input/form-input.component";
import './sign-in.styles.scss'
import CustomButton from "../custom-button/custom-button.component";

class SignIn extends React.Component {
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

    constructor(props) {
        super(props);
        this.state = {
            password: '', email: ''
        }
    };

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
                    <CustomButton type="submit">
                        Submit Form
                    </CustomButton>
                </form>
            </div>
        )
    }

}

export default SignIn;