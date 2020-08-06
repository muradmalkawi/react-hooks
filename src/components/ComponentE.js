import React, { useContext } from "react"
import ComponentF from "./ComponentF"
import { UserContext, ChannelContext } from "./Context"

function ComponentE() {
	const user = useContext(UserContext)
	const channel = useContext(ChannelContext)
	return (
		<div>
			<h1> useContext Hook</h1>
			User is {user} and channel is {channel}
			<hr />
			<ComponentF />
		</div>
	)
}

export default ComponentE
