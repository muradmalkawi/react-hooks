import React, { useReducer } from "react"
import ComponentI from "./reducerContext/ComponentI"
import ComponentH from "./reducerContext/ComponentH"
import ComponentG from "./reducerContext/ComponentG"

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

export const CountContext = React.createContext()

function ReducerContext() {
	const [count, dispatch] = useReducer(reducer, initialState)
	return (
		<CountContext.Provider
			value={{ countState: count, countDispatch: dispatch }}
		>
			<div className="App">
				<h1> Use Reducer with use Context </h1>
				<p> Global state management </p>
				Count - {count}
				<ComponentG />
				<ComponentH />
				<ComponentI />
			</div>
		</CountContext.Provider>
	)
}

export default ReducerContext
