// for use Reducer
import React, { useReducer } from "react"

const initialState = {
	firstCounter: 0,
	secondCounter: 10,
}
const reducer = (state, action) => {
	switch (action.type) {
		case "increment":
			return { ...state, firstCounter: state.firstCounter + action.value }
		case "decrement":
			return { ...state, firstCounter: state.firstCounter - action.value }
		case "increment2":
			return { ...state, secondCounter: state.secondCounter + action.value }
		case "decrement2":
			return { ...state, secondCounter: state.secondCounter - action.value }
		case "reset":
			return initialState
		default:
			return state
	}
}

function CounterTwo() {
	const [count, dispatch] = useReducer(reducer, initialState)

	return (
		<div>
			<h2>useReducer (complex state & action)</h2>
			<div>First Counter = {count.firstCounter}</div>
			<button onClick={() => dispatch({ type: "increment", value: 1 })}>
				Increment
			</button>
			<button onClick={() => dispatch({ type: "decrement", value: 1 })}>
				Decrement
			</button>
			<button onClick={() => dispatch({ type: "increment", value: 5 })}>
				Increment 5
			</button>
			<button onClick={() => dispatch({ type: "decrement", value: 5 })}>
				Decrement 5
			</button>
			<button onClick={() => dispatch({ type: "reset" })}>Reset</button>
			{/* Counter Two */}
			<hr />
			<div>Secound Counter = {count.secondCounter}</div>
			<div>
				<button onClick={() => dispatch({ type: "increment2", value: 1 })}>
					Increment
				</button>
				<button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
					Decrement
				</button>
				<hr />
			</div>
		</div>
	)
}

export default CounterTwo
