import React, { createRef } from "react";

export class Register extends React.Component {
    fnref = createRef();
    emref = createRef();

    state = { msg: '***' };

    doRegister = () => {
        this.registerUser(this.fnref.current.value, this.emref.current.value)
            .then((response) => {
                this.setState({ msg: `Thank you ${response.fullName} (${response.email}) for registering!` });
            })
            .catch((error) => {
                this.setState({ msg: 'Registration failed. Please try again.' });
            });
    }

    registerUser = (fullName, email) => {
        return new Promise((resolve, reject) => {
                if (fullName && email) {
                    resolve({ fullName, email });
                } else {
                    reject('Invalid input');
                }
            })
    }

    render() {
        return (
            <div>
                <h3>Register...</h3>
                <div>
                    <label htmlFor="">Full Name</label>
                    <input type="text" name="fullname" ref={this.fnref}></input>
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="text" name="email" ref={this.emref}></input>
                </div>
                <div>
                    <button onClick={this.doRegister}>Next</button>
                </div>
                <div>
                    <p>
                        {this.state.msg}
                    </p>
                </div>
            </div>
        )
    }
}
