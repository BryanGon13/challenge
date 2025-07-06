import React, { Component } from 'react'
import css from "./css/NavBarForm.module.css"

export class NavBarForm extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: true,
        };
    }

    handleClick = () => {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        });
    };


    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                {
                    this.state.isLoggedIn ? (
                        <form>
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username" name="username" />

                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" />

                            <button type="submit" onClick={this.handleClick}>Submit</button>
                        </form>
                    ) : (
                        <button onClick={this.handleClick}>Login</button>
                    )
                }
            </div>
        );
    }
}
export default NavBarForm