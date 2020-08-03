import React, { useState } from "react"

function HookCounterFour() {
	//default value is an empty array
	const [items, setItems] = useState([])

	const addItem = () => {
		setItems([
			//spread items array and push new object
			...items,
			{
				id: items.length,
				value: Math.floor(Math.random() * 10) + 1,
			},
		])
	}

	return (
		<>
			<h1> useState with array</h1>
			<button onClick={addItem}>Add a number</button>

			<ul>
				{items.map(item => (
					<li key={item.id}> {item.value}</li>
				))}
			</ul>
			<div className="space"></div>
		</>
	)
}

//setter function doesnt automatically append item to end of list
export default HookCounterFour
