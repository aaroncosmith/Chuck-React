import React, { Component } from "react";

class Quote extends Component {
    state = {
        quote: "This app isn't as smart as Chuck Norris"
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                quote: "Chuck Norris has a RTX 4080ti!!"
            })
        }, 2000);
    }

    render() {
        const { quote } = this.state;
        return (
            <p>{quote}</p>
        );
    }
}

export default Quote;