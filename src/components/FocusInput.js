import React, { useRef, useEffect } from "react"

function FocusInput() {
	const inputRef = useRef(null)
	useEffect(() => {
		//focus the input element
		inputRef.current.focus()
	}, [])
	return (
		<div style={{ backgroundColor: "lightblue" }}>
			<input ref={inputRef} type="text" />
		</div>
	)
}

export default FocusInput
