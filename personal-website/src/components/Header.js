import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            <div className="header">
                <div className="header-title">
                    Noam Annenberg
                </div>
                <div className="nav-links">
                    <NavLink exact to="/" className="nav-link" activeClassName="active-link">About</NavLink>
                    <NavLink exact to="/projects" className="nav-link" activeClassName="active-link">Projects</NavLink>
                    <NavLink exact to="/resume" className="nav-link" activeClassName="active-link">Resume</NavLink>
                </div>
            </div>
        );
    }
}

export default Header;
