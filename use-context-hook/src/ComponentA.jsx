import { useState, createContext } from 'react';
import ComponentB from './ComponentB.jsx';

export const UserContext = createContext();

function ComponentA() {
	const [user, setUser] = useState("Vaeep");
	return (
		<div className="box">
			<h1>ComponentA</h1>
			<h2>{`Hello ${user}`}</h2>
			<UserContext.Provider value={user}>
				<ComponentB></ComponentB>
			</UserContext.Provider>
		</div>
	)
}
export default ComponentA
