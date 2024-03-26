import List from './List.jsx'

function App() {
	const fruits = [
		{ id: 1, name: "Apple", calories: "apple" },
		{ id: 2, name: "Orange", calories: 45 },
		{ id: 3, name: "Banana", calories: 105 },
		{ id: 4, name: "Coconut", calories: 159 },
		{ id: 5, name: "Pineapple", calories: 37 },
	];

	const vegetables = [
		{ id: 6, name: "Potato", calories: 110 },
		{ id: 7, name: "Celery", calories: 15 },
		{ id: 8, name: "Carrot", calories: 25 },
		{ id: 9, name: "Corn", calories: 63 },
		{ id: 10, name: "Broccoli", calories: 50 },
	];

	return (<>
		{fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
		{vegetables.length > 0 ? <List items={vegetables} category="Vegetables" /> : null}
	</>)
}

export default App
