import React from "react"
import { UserContext, ChannelContext } from "./Context"

const ComponentF = () => {
	return (
		<div>
			<h1> Context - old method</h1>
			<p>Has so much of nesting</p>
			<UserContext.Consumer>
				{user => {
					return (
						<ChannelContext.Consumer>
							{channel => {
								return (
									<div>
										User context value {user}, channel context value {channel}
									</div>
								)
							}}
						</ChannelContext.Consumer>
					)
				}}
			</UserContext.Consumer>
		</div>
	)
}

export default ComponentF
