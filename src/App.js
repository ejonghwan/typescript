import React, { Component } from 'react';
import './App.css';
// import Counter from './components/Counter';
import CounterContainer from './containers/CounterContainer'
import ColorList from './components/ColorList';
import ColorContainer from './containers/colorSquareContainer'
// import ColorSquare from './components/ColorSquare';

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <Counter /> */}
				<CounterContainer />
				{/* <ColorSquare /> */}
				<ColorContainer />
				<ColorList />
			</div>
		);
	}
}

export default App;
