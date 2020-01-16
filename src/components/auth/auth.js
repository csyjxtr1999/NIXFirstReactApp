import React, {PureComponent} from "react";
import SignIn from "./signIn";
import SignUp from "./signUp";
import './auth.css'

export default class Auth extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: "",
                password: "",
                passwordRepeat: "",
                role: 'user'
            },
            authStatus: {
                signIn: true,
                signUp: false
            },
            logged: false
        }
    }

    users = [];

    authStatusChange = () => {
        this.setState({
            ...this.state,
            authStatus: {
                ...this.state.authStatus,
                signIn: !this.state.authStatus.signIn,
                signUp: !this.state.authStatus.signUp
            }
        });
    };

    loggedChange = () => {
        this.setState({
            ...this.state,
            logged: !this.state.logged
        });
    };

    addUserToUsers = (e) => {
        e.preventDefault();
        if (this.state.user.password === this.state.user.passwordRepeat) {
            this.users.push(this.state.user);
            this.loggedChange();
            console.log(this.state.logged);
        } else {
            console.log('error')
        }
        console.log(this.users);
    };

    userSignIn = (e) => {
        e.preventDefault();
        this.users.forEach(item => {
            if (item.email === this.state.user.email) {
                console.log('hi', this.state.user.email);
                this.loggedChange();
                console.log(this.state.logged);
            } else {
                console.log('Enter correct value in fields');
            }
        });
    };

    handleChange = e => {
        this.setState({
            ...this.state,
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value
            }
        });
    };

    render() {
        if (this.state.logged) {
            return (
                <div className="logged">
                    <h2>Hello, {this.state.user.email}</h2>
                    <button className="logout base-btn" onClick={this.loggedChange}>Logout</button>
                </div>
            )
        } else {
            return (
                <div className="auth">
                    <SignIn
                        authStatus={this.state.authStatus.signIn}
                        changeStatus={this.authStatusChange}
                        handleChange={this.handleChange}
                        user={this.state.user}
                        userSignIn={this.userSignIn} />
                    <SignUp
                        authStatus={this.state.authStatus.signUp}
                        changeStatus={this.authStatusChange}
                        handleChange={this.handleChange}
                        user={this.state.user}
                        addUser={this.addUserToUsers} />
                </div>
            );
        }
    }
}
