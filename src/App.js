import React, { Component, useReducer } from 'react'
import './App.css'
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter'
import HookCounterTwo from './components/HookCounterTwo'
import HookCounterThree from './components/HookCounterThree'
import ClassCounterOne from './components/ClassCounterOne'
import ClassCounterTwo from './components/ClassCounterTwo'
import HookCounterFour from './components/HookCounterFour'
import HookCounterOne from './components/HookCounterOne'
import ClassMouse from './components/ClassMouse'
import HookMouse from './components/HookMouse'
import MouseContainer from './components/MouseContainer'
import IntervalClassCounter from './components/IntervalClassCounter'
import IntervalHookCounter from './components/IntervalHookCounter'
import DataFetching from './components/DataFetching'
//import ComponentC from './components/ComponentC'

// import CounterOne from './components/CounterOne'
// import CounterTwo from './components/CounterTwo'
import CounterThree from './components/CounterThree'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'
// import DataFetchingOne from './components/DataFetchingOne'
import DataFetchingTwo from './components/DataFetchingTwo'
// import ComponentD from './components/ComponentD'
//import ComponentF from './components/ComponentF'


import ParentComponent from './components/ParentComponent'
import Counter from './components/Counter'
import HookTimer from './components/HookTimer'
import DocTitleOne from './components/DocTitleOne'
import DocTitleTwo from './components/DocTitleTwo'
import CounterOne from './components/CounterOne'
import CounterTwo from './components/CounterTwo'
import UserForm from './components/UserForm'
import DataFetchingOne from './components/DataFetchingOne'


export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

export const CountContext = React.createContext()




	function App() {
	return (
		<div className="App"> 



			{/* useState Hook */}
			{/* <HookCounter /> */}
			{/* <ClassCounter /> */}

			{/* <HookCounterTwo /> */}
			{/* <ClassCounterTwo /> */}

			{/* <HookCounterThree /> */}
			{/* <HookCounterFour /> */}



			{/* useEffect Hook */}
			{/* <ClassCounterOne /> */}
			{/* <HookCounterOne /> */}
			{/* <ClassMouse /> */}
			{/* <HookMouse /> */}
			{/* <MouseContainer /> */}
			{/* <IntervalClassCounter /> */}
			{/* <IntervalHookCounter /> */}
			{/* <DataFetching /> */}

			{/* useContext Hook  */}
			{/* <ComponentC /> */}

 			{/* <UserContext.Provider value={'Peter Osoo'}>
         		<ChannelContext.Provider value={'Rateng Inc'}>
 					<ComponentC />
 				</ChannelContext.Provider>
 			</UserContext.Provider>			 */}



			{/* useReducer Hook  */}
			{/* <CounterOne /> */}
			{/* <CounterTwo /> */}
			{/* <CounterThree /> */}

			 <DataFetchingOne />
			 <DataFetchingTwo />


			{/* useCallback hook  */}
			 {/* <ParentComponent /> */}


			{/* <UserForm /> */}
			{/* <CounterOne />
			<CounterTwo /> */}
			{/* <DocTitleOne />
			<DocTitleTwo /> */}

			{/* <HookTimer /> */}
			{/* <classTimer /> */}
			{/* <Counter /> */}
			{/* <ParentComponent /> */}
		</div>
	)


}

// export default App






// for use reducer hook with use context video 22 
// const initialState = 0
// const reducer = (state, action) => {
// 	switch (action) {
// 		case 'increment':
// 			return state + 1
// 		case 'decrement':
// 			return state - 1
// 		case 'reset':
// 			return initialState
// 		default:
// 			return state
// 	}
// }



// function App() {
// 	const [count, dispatch] = useReducer(reducer, initialState)
// 	return (
// 		<CountContext.Provider 
// 			value={ {countState: count, countDispatch: dispatch }}>
// 			<div className="App">
// 				Count - {count}
// 				<ComponentA />
// 				<ComponentB />
// 				<ComponentC />
// 			</div>
// 		</CountContext.Provider>
// 	)

// 	}












// const initialState = 0
// const reducer = (state, action) => {
// 	switch (action) {
// 		case 'increment':
// 			return state + 1
// 		case 'decrement':
// 			return state - 1
// 		case 'reset':
// 			return initialState
// 		default:
// 			return state
// 	}
// }

// export const CountContext = React.createContext()

// function App() {
// 	const [count, dispatch] = useReducer(reducer, initialState)
// 	return (
// 		<CountContext.Provider
// 			value={{ countState: count, countDispatch: dispatch }}
// 		>
// 			<div className="App">
				{/* <CounterOne /> */}
				{/* <CounterTwo /> */}
				{/* <CounterThree /> */}
				{/* {count} */}
				{/* <ComponentA />
				<ComponentD />
				<ComponentF /> */}
				{/* <ComponentB /> */}
				{/* <ComponentC /> */}
				{/* <DataFetchingOne /> */}
// 				<DataFetchingTwo />
// 				</div>
// 		</CountContext.Provider>
// 	)
// }


// class App extends Component {
// 	render() {
// 		return (
// 			<div className="App">
// 				<UserContext.Provider value={'Peter Osoo'}>
//         			<ChannelContext.Provider value={'Rateng Inc'}>
// 						<ComponentC />
// 					</ChannelContext.Provider>
// 				</UserContext.Provider>



				{/* <DataFetching /> */}
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
// 			</div>
// 		)
// 	}
// }

export default App
