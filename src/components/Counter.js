import React, { Component } from 'react';
import './Counter.css';
// import {} from '../containers/CounterContainer'

class Counter extends Component {
	render() {
		const {number, increment, decrement, color} = this.props
		const style = {
			color: color
		}
		return (
			<div className="Counter">
				<h1 style={style}>{number}</h1>
				<div className="btn-wrapper">
					<button onClick={increment}>+</button>
					<button onClick={decrement}>-</button>
				</div>
			</div>
		);
	}
}

export default Counter;
