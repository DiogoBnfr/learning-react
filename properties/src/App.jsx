import Student from './Student.jsx'

function App() {
	return (
		<>
			<Student name="Sponge Bob" age={30} isStudent={true} />
			<Student name="Patrick Star" age={42} isStudent={false} />
			<Student name="Squidward" age={50} isStudent={false} />
			<Student name="Sandy" age={27} isStudent={true} />
			<Student />
		</>
	)
}

export default App
