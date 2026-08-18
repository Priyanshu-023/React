import hero from './assets/hero.png'

function Card(props) {
  return (
    <div className='card'>
        <img src={props.img} alt={props.user} className='card-img' />
        <h1 className='card-name'>{props.user}</h1>
        <p>{props.info}</p>
        <button>View Profile</button>
    </div>
  )
}

export default Card