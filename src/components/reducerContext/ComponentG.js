import React, { useContext } from "react"
import { CountContext } from "../ReducerContext"

function ComponentG() {
	const countContext = useContext(CountContext)
	return (
		<div>
			Component G - {countContext.countState}
			<button onClick={() => countContext.countDispatch("increment")}>
				Increment
			</button>
			<button onClick={() => countContext.countDispatch("decrement")}>
				Decrement
			</button>
			<button onClick={() => countContext.countDispatch("reset")}>Reset</button>
			<br />
			<br />
		</div>
	)
}

export default ComponentG
