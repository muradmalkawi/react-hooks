import React, { useState, useEffect } from "react"

function HookMouse() {
	const [x, setX] = useState(0)
	const [y, setY] = useState(0)

	const logMousePosition = e => {
		console.log("Mouse event")
		setX(e.clientX)
		setY(e.clientY)
	}

	useEffect(() => {
		console.log("useEffect called...")
		window.addEventListener("mousemove", logMousePosition)

		// to unmount pass in a function. Clean up code
		// cleanup code can be cancelling subscriptions, timers, removing event handlers
		return () => {
			console.log("Component unmounting code")
			window.removeEventListener("mousemove", logMousePosition)
		}
		//dependency is an empty array to mimic Component Did Mount
	}, [])
	return (
		<div>
			Hooks - X - {x} Y - {y}
		</div>
	)
}

export default HookMouse

// 9 - Run effects only once ---> call useeffet only on initial render

// 10 - useEffect with cleanup --> Component Will Unmount functionality
