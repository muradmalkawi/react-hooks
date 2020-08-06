import React from "react"
import ComponentC from "./ComponentC"

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function Context() {
	return (
		<UserContext.Provider value={"Ondiek"}>
			<ChannelContext.Provider value={"Rateng Inc"}>
				<ComponentC />
			</ChannelContext.Provider>
		</UserContext.Provider>
	)
}

export default Context
