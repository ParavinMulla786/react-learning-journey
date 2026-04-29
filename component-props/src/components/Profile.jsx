function Profile({ name, email, cNum, img }) {
  return (
    <div className="profile-card">
      <img src={img} alt={name} className="profile-img" />
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Contact: {cNum}</p>
    </div>
  )
}

export default Profile