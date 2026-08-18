import {Bookmark} from 'lucide-react'

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <div>
          <img className="logo" src={props.brandLogo} alt="Logo" />
        </div>
        <button className="btn">Save <Bookmark size={16} /></button>
      </div>

      <div className="center">
        <h3>{props.companyName} <span>{props.datePosted}</span></h3>
        <h2>{props.post}</h2>
        <div className="tags">
          <button className="tag">{props.tag1}</button>
          <button className="tag">{props.tag2}</button>
        </div>
      </div>

      <div className="bottom">
        <h2>{props.pay}</h2>
        <span>{props.location}</span>
        <button className="btn2">Apply Now</button>
      </div>
    </div>
  )
}

export default Card