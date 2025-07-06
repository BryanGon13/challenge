import React, { Component } from "react";
import css from "./css/NavBarSimple.module.css"

class NavBarSimple extends Component {
    constructor() {
        super();
        this.state = {
            message: 'Hello, guest!',
            button: 'Log In',
        };
    };

    handleClick = () => {
        this.setState({
            message: this.state.message === 'Hello, guest!' ? 'Welcome back, user!' : 'Hello, guest!',
            button: this.state.button === 'Log In' ? 'Logout' : 'Log In'
        });
    };


    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <span>{this.state.message}</span>
                <button onClick={this.handleClick}>{this.state.button}</button>
            </div>
        );
    };
}


export default NavBarSimple;