import React, { Component } from "react";

class Quote extends Component {
    state = {
        quote: "Chuck Norris has a RTX 4080ti!"
    }
    render() {
        const { quote } = this.state;
        return (
            <p>{quote}</p>
        );
    }
}

export default Quote;