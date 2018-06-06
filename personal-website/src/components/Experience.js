import React, { Component } from "react";

class Experience extends Component {
    render() {
        return(
            <div>
                <label>{this.props.startDate} - {this.props.endDate}</label>
                <h4>{this.props.job}</h4>
                <p>{this.props.jobDescription}</p>
            </div>
        )
    }
}

export default Experience