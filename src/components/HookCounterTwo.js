import React, { useState } from "react"

function HookCounterTwo() {
	const initialCount = 0
	const [count, setCount] = useState(initialCount)

	const incrementFive = () => {
		for (let i = 0; i < 5; i++) {
			//pass function that has access to old value
			//pass function to state setter
			setCount(prevCount => prevCount + 1)
		}
	}
	return (
		<>
			<h1>useState with previous state</h1>
			Count: {count}
			<br />
			<button onClick={() => setCount(initialCount)}>Reset</button>
			<button onClick={() => setCount(prevCount => prevCount + 1)}>
				Increment
			</button>
			<button onClick={() => setCount(prevCount => prevCount - 1)}>
				Decrement
			</button>
			<button onClick={incrementFive}>Increment 5</button>
		</>
	)
}

export default HookCounterTwo
