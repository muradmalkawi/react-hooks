import React, { useContext } from "react"
import { CountContext } from "../App"
import ComponentD from "./ComponentD"

function ComponentB() {
	const countContext = useContext(CountContext)
	return (
		<div>
			Component B {countContext.countState}
			<button onClick={() => countContext.countDispatch("increment")}>
				Increment
			</button>
			<button onClick={() => countContext.countDispatch("decrement")}>
				Decrement
			</button>
			<button onClick={() => countContext.countDispatch("reset")}>Reset</button>
			<ComponentD />
		</div>
	)
}

export default ComponentB
