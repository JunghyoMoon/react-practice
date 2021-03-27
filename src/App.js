import React, { Component } from "react";

class App extends Component {
	state = {
		hello: "hello app js! why react?",
	};

	handleClick = () => {
		this.setState({
			hello: "because it's cool!",
		});
	};

	render() {
		return (
			<div className="App">
				<div>{this.state.hello}</div>
				<button onClick={this.handleClick}>beacause..</button>
			</div>
		);
	}
}

export default App;
