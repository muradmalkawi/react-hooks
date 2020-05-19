// import React from "react"
// import useCounter from "../hooks/useCounter"

// function CounterOne() {
// 	const [count, increment, decrement, reset] = useCounter(0, 1)

// 	return (
// 		<div>
// 			<h2>Count = {count}</h2>
// 			<button onClick={increment}>Increment</button>
// 			<button onClick={decrement}>Decrement</button>
// 			<button onClick={reset}>Reset</button>
// 		</div>
// 	)
// }

// export default CounterOne

// for useReducer Hooks

import React, { useReducer } from "react"

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

function CounterOne() {
	// dispatch allows to execute code and dispatch appropriate function
	const [count, dispatch] = useReducer(reducer, initialState)
	const [countTwo, dispatchTwo] = useReducer(reducer, initialState)

	return (
		<>
			<div>
				<div>Count = {count}</div>
				<button onClick={() => dispatch("increment")}>Increment</button>
				<button onClick={() => dispatch("decrement")}>Decrement</button>
				<button onClick={() => dispatch("reset")}>Reset</button>
			</div>

			<div>
				<div>Count = {countTwo}</div>
				<button onClick={() => dispatchTwo("increment")}>Increment</button>
				<button onClick={() => dispatchTwo("decrement")}>Decrement</button>
				<button onClick={() => dispatchTwo("reset")}>Reset</button>
			</div>
		</>
	)
}

export default CounterOne
