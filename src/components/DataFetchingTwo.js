import React, { useReducer, useEffect } from "react"
import axios from "axios"

// declare 3 variables as properties of single object
const initialState = {
	loading: true,
	error: "",
	post: {},
}

const reducer = (state, action) => {
	switch (action.type) {
		case "FETCH_SUCCESS":
			return {
				loading: false,
				post: action.payload,
				error: "",
			}
		case "FETCH_ERROR":
			return {
				loading: false,
				post: {},
				error: "Something went wrong!",
			}
		default:
			return state
	}
}

const DataFetchingTwo = () => {
	const [state, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/9`)
			.then(response => {
				dispatch({ type: "FETCH_SUCCESS", payload: response.data })
			})
			.catch(error => {
				dispatch({ type: "FETCH_ERROR" })
			})
	}, [])
	return (
		<div>
			{/* append state as they part of state object */}
			{state.loading ? "Loading" : state.post.title}
			{state.error ? state.error : null}
		</div>
	)
}

export default DataFetchingTwo
