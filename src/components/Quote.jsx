import React, { Component } from "react";

class Quote extends Component {
    state = {
        quote: "This app isn't as smart as Chuck Norris..."
    }
    
    async componentDidMount() {
        try {
            const response = await fetch('https://api.chucknorris.io/jokes/random?category=dev');
            const data = await response.json();
            this.setState({
                quote: data.value
            })
        } catch (error) {
            this.setState({
                quote: error.message
            })
        }
    }

    render() {
        const { quote } = this.state;
        return (
            <p>{quote}</p>
        );
    }
}

export default Quote;