import React, { Component } from "react"
import "./App.css"
import ClassCounter from "./components/ClassCounter"
import HookCounter from "./components/HookCounter"
import HookCounterTwo from "./components/HookCounterTwo"
import HookCounterThree from "./components/HookCounterThree"
import ClassCounterOne from "./components/ClassCounterOne"
import ClassCounterTwo from "./components/ClassCounterTwo"
import HookCounterFour from "./components/HookCounterFour"
import HookCounterOne from "./components/HookCounterOne"
import ClassMouse from "./components/ClassMouse"
import HookMouse from "./components/HookMouse"
import MouseContainer from "./components/MouseContainer"
import IntervalClassCounter from "./components/IntervalClassCounter"
import IntervalHookCounter from "./components/IntervalHookCounter"
import DataFetching from "./components/DataFetching"

import CounterThree from "./components/CounterThree"
import ComponentA from "./components/ComponentA"
import ComponentB from "./components/ComponentB"
import ComponentC from "./components/ComponentC"
import DataFetchingTwo from "./components/DataFetchingTwo"

import ParentComponent from "./components/ParentComponent"
import Counter from "./components/Counter"
import HookTimer from "./components/HookTimer"
import DocTitleOne from "./components/DocTitleOne"
import DocTitleTwo from "./components/DocTitleTwo"
import CounterOne from "./components/CounterOne"
import CounterTwo from "./components/CounterTwo"
import UserForm from "./components/UserForm"
import DataFetchingOne from "./components/DataFetchingOne"

import FocusInput from "./components/FocusInput"
import CLassTimer from "./components/ClassTimer"
import CounterFour from "./components/CounterFour"
import CounterFive from "./components/CounterFive"
import CounterState from "./components/CounterState"
import IntervalExample from "./components/IntervalExample"
import ReducerContext from "./components/ReducerContext"
import CounterSix from "./components/CounterSix"
import Context from "./components/Context"

export const CountContext = React.createContext()

const App = () => {
	return (
		<div className="App">
			{/* <CounterState /> */}

			{/* useState Hook */}
			{/* <HookCounter />
			<ClassCounter />
			<HookCounterTwo />
			<ClassCounterTwo />
			<HookCounterThree />
			<HookCounterFour /> */}

			{/* useEffect Hook */}
			{/* <ClassCounterOne />
			<HookCounterOne /> */}
			{/* <ClassMouse />
			<HookMouse /> */}
			{/* <MouseContainer /> */}
			{/* <IntervalClassCounter />
			<IntervalHookCounter /> */}
			{/* <DataFetching /> */}

			{/* useContext Hook  */}

			{/* <Context /> */}

			{/* useReducer Hook  */}
			<CounterOne />
			<CounterTwo />
			<CounterThree />

			{/* Use Reducer with use Context */}
			<ReducerContext />

			<DataFetchingOne />
			<DataFetchingTwo />

			{/* useCallback hook  */}
			{/* <ParentComponent /> */}
			{/* useMemo hook  */}
			{/* <Counter /> */}
			{/* useRef Hook  */}
			{/* <FocusInput /> */}
			{/* <CLassTimer />
			<HookTimer /> */}
			{/* Custom Hooks  */}
			{/* <DocTitleOne />
			<DocTitleTwo /> */}
			{/* <CounterFour />
			<CounterFive />
			<CounterSix /> */}
			{/* <UserForm /> */}
			{/* Examples  */}
			{/* <IntervalExample /> */}
		</div>
	)
}

export default App
