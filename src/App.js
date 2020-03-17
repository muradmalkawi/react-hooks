import React, { Component } from 'react'
import './App.css'
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter'
import HookCounterTwo from './components/HookCounterTwo'
import HookCounterThree from './components/HookCounterThree'
import ClassCounterTwo from './components/ClassCounterTwo'
import HookCounterFour from './components/HookCounterFour'
import HookCounterOne from './components/HookCounterOne'
import ClassMouse from './components/ClassMouse'
import HookMouse from './components/HookMouse'
import MouseContainer from './components/MouseContainer'
import IntervalClassCounter from './components/IntervalClassCounter'
import IntervalHookCounter from './components/IntervalHookCounter'
import DataFetching from './components/DataFetching'




class App extends Component {
	render() {
		return (
			<div className="App">
				<DataFetching />
				{/* <IntervalHookCounter />
				<IntervalClassCounter /> */}
				{/* <MouseContainer /> */}
				{/* <HookMouse /> */}
				{/* <ClassMouse /> */}
				{/* <HookCounterOne /> */}
				{/* <ClassCounterOne /> */}


				{/* useState  */}
				{/* <ClassCounter /> */}
				{/* <ClassCounterTwo /> */}
				{/* <HookCounter /> */}
				{/* <HookCounterTwo /> */}
				{/* <HookCounterThree /> */}
				{/* <HookCounterFour /> */}
			</div>
		)
	}
}

export default App
