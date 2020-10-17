import React from 'react';
import FormInput from "../form-input/form-input.component";
import './sign-up.styles.scss'
import CustomButton from "../custom-button/custom-button.component";
import {createUserProfileDocument,auth} from "../../firebase/firebase.utils";

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            password: '',
            email: '',
            confirmPassword: '',
            displayName: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert("password doesn't match");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});

            this.setState(
                {
                    email: "",
                    password: "",
                    confirmPassword: '',
                    displayName: ''
                }
            )
        } catch (error) {
            console.log(error);
        }

    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState(
            {[name]: value}
        )
    }

    render() {
        return (
            <div className="sign-up">
                <h2>I don't have an account!</h2>
                <p>Sign up with your email and password</p>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="displayName" handleChange={this.handleChange} type="text" required
                               value={this.state.displayName} label={"Display Name"}/>
                    <FormInput name="email" handleChange={this.handleChange} type="email" required
                               value={this.state.email} label={"Email"}/>
                    <FormInput name="password" handleChange={this.handleChange} type="password" required
                               value={this.state.password} label={"Password"}/>
                    <FormInput name="confirmPassword" handleChange={this.handleChange} type="password" required
                               value={this.state.confirmPassword} label={"Confirm Password"}/>
                    <div className={"buttons"}>
                        <CustomButton type="submit">
                            Submit Form
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;