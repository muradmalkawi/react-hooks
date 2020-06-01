import React, { useState } from "react"

function HookCounter() {
	//array destructuring ES6
	const [count, setCount] = useState(0)
	// console.log(count)

	return (
		<div>
			<button onClick={() => setCount(count + 1)}>Count {count}</button>
		</div>
	)
}

export default HookCounter
