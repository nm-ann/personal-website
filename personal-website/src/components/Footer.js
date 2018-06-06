import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return(
            <div className="footer">
                <div className="social-links">
                <a href="https://linkedin.com/in/noam-annenberg-714418151/" target="blank" rel="noopender noreferrer">
                    <i className="fab fa-linkedin" aria-hidden="true" style={{color: 'white'}} />
                </a>
                <a href=" https://github.com/nm-ann" target="blank" rel="noopender noreferrer">
                    <i className="fab fa-github-square" aria-hidden="true" style={{color: 'white'}} />
                </a>
                </div>
            </div>
        );
    }
}

export default Footer;
