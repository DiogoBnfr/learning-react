import UserGreeting from "./UserGreeting"

function App() {
	return (
		<>
			<UserGreeting isLoggedIn={true} username="vaeep" />
			<UserGreeting />
		</>
	)
}

export default App
