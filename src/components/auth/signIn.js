import React, {PureComponent} from "react";
import Button from "../common/button";

export default class SignIn extends PureComponent{
    render() {
        if (this.props.authStatus) {
            return (
                <form className="form" onSubmit={this.props.userSignIn}>
                    <div className="form-section">
                        <label htmlFor="email">Email</label>
                        <input className="input" value={this.props.email} onChange={this.props.handleChange} type="text" id="email" name="email" placeholder="Email" />
                    </div>
                    <div className="form-section">
                        <label htmlFor="password">Password</label>
                        <input className="input" value={this.props.user.password} onChange={this.props.handleChange} type="password" id="password" name="password" placeholder="Password"/>
                    </div>
                    <div className="form-section">
                        <Button type="submit">SignIn</Button>
                    </div>
                </form>
            )
        } else {
            return(
                <button onClick={this.props.changeStatus}>SignIn</button>
            )
        }

    }
}
