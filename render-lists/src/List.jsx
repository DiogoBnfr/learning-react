import PropTypes from 'prop-types'

function List(props) {
	const category = props.category;
	const itemList = props.items;
	// fruits.sort((a, b) => a.name.localeCompare(b.name)) Alphabetical order
	// fruits.sort((a, b) => b.name.localeCompare(a.name)) Reverse alphabetical
	// fruits.sort((a, b) => a.calories - b.calories); Numerical order
	// fruits.sort((a, b) => a.calories - b.calories); Reverse numerical order
	// const lowCalFruits = fruits.filter(fruit => fruit.calories < 100); Filtering items

	const listItems = itemList.map(item =>
		<li>{item.id}. {item.name}: <b>{item.calories}</b></li>);

	return (
		<>
			<h3 className="list-category">{category}</h3>
			<ul className="list-items">{listItems}</ul>
		</>
	);
}
List.PropTypes = {
	category: PropTypes.string,
	items: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		calories: PropTypes.number,
	})),
}
List.defaultProps = {
	category: 'Category',
	items: [],
}

export default List
