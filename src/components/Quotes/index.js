import React, { Component } from "react";

export default class Quotes extends Component {
    render() {
        return (
        <div className="flex flex-col items-center justify-center bg-gray-300 shadow-md" style={{ height: "180px" }}>
            <h3 className="font-bold text-xl">{this.props.quotes}</h3>
            <p>-{this.props.author}</p>
            <p>-{this.props.tambahan}</p>
        </div>
        );
    }
}