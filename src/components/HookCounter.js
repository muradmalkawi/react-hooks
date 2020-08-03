import React, { useState } from "react"

function HookCounter() {
	//array destructuring ES6
	const [count, setCount] = useState(0)
	// console.log(count)

	return (
		<div>
			<h1>useState Hook</h1>
			<button onClick={() => setCount(count + 1)}>Count {count}</button>
		</div>
	)
}

export default HookCounter
