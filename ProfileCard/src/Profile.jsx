import './Profile.css'

function Profile(props) {
  return (
    <div className="profile">
      <img src={props.image} alt={props.name} />
      <h1>{props.name}</h1>
      <h2>{props.role}</h2>
      <p>
        {props.skills.join(", ")}
      </p>
    </div>
  )
}

export default Profile