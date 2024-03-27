import React, { useState } from 'react'

function Component() {
	const [car, setCar] = useState({
		year: 2024,
		make: "Ford",
		model: "Mustang"
	})

	function handleYearChange(event) {
		setCar(c => ({ ...c, year: event.target.value }));
	}

	function handleMakeChange(event) {
		setCar(c => ({ ...c, make: event.target.value }));
	}

	function handleModelChange(event) {
		setCar(c => ({ ...c, model: event.target.value }));
	}

	return (
		<div>
			<h1>Your favorite car is: {car.year} {car.make} {car.model}</h1>

			<input type="number" value={car.year} onChange={handleYearChange} />
			<input type="text" value={car.make} onChange={handleMakeChange} />
			<input type="text" value={car.model} onChange={handleModelChange} />
		</div>
	)
}
export default Component
