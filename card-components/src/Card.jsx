import profilePicture from './assets/profilePicture.png'

function Card() {
	return (
		<div className="card">
			<img className="card-image" src={profilePicture} alt="profile picture"></img>
			<h2 className="card-title">Vaeep</h2>
			<p className="card-text">I am a Computer Science student</p>
		</div>
	);
}

export default Card
