function ProfilePicture() {
	const imageUrl = './src/assets/profile_picture.jpg';

	const handleClick = (e) => e.target.style.display = "none";

	return (<img className="profile-picture" src={imageUrl} onClick={(e) => handleClick(e)}></img>)
}

export default ProfilePicture
