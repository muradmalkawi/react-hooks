import React, { useReducer } from "react"
import ComponentC from "./reducerContext/ComponentC"
import ComponentB from "./reducerContext/ComponentB"
import ComponentA from "./reducerContext/ComponentA"

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
	switch (action) {
		case "increment":
			return state + 1
		case "decrement":
			return state - 1
		case "reset":
			return initialState
		default:
			return state
	}
}

const ReducerContext = () => {
	const [count, dispatch] = useReducer(reducer, initialState)
	return (
		<CountContext.Provider
			value={{ countState: count, countDispatch: dispatch }}
		>
			<div className="App">
				<h1> Use Reducer with use Context </h1>
				<p> Global state management </p>
				Count - {count}
				<ComponentA />
				<ComponentB />
				<ComponentC />
			</div>
		</CountContext.Provider>
	)
}

export default ReducerContext
