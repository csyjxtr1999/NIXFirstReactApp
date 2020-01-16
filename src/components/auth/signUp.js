import React, {PureComponent} from "react";
import Button from "../common/button";

export default class SignUp extends PureComponent{
    render() {
        if (this.props.authStatus) {
            return (
                <form className="form" onSubmit={this.props.addUser}>
                    <div className="form-section">
                        <label htmlFor="email">Email</label>
                        <input className="input" value={this.props.email} onChange={this.props.handleChange} type="text" id="email" name="email" placeholder="Email" />
                    </div>
                    <div className="form-section">
                        <label htmlFor="password">Password</label>
                        <input className="input" value={this.props.user.password} onChange={this.props.handleChange} type="password" id="password" name="password" placeholder="Password"/>
                    </div>
                    <div className="form-section">
                        <label htmlFor="password-repeat">Repeat password</label>
                        <input className="input" value={this.props.user.passwordRepeat} onChange={this.props.handleChange} type="password" id="password-repeat" name="passwordRepeat" placeholder="Repeat password"/>
                    </div>
                    <div className="form-section">
                        <Button type="submit">SignUp</Button>
                    </div>
                </form>
            )
        } else {
            return(
                <button onClick={this.props.changeStatus}>SignUp</button>
            )
        }

    }
}
