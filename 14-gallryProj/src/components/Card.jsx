function Card(props) {
  return (
    <div className="w-70">
        <img
        src={props.downloadUrl} alt="img"
        loading="lazy"
        decoding="async"
        className="h-48 w-full rounded-2xl object-cover"
        />
        <h1 className="relative left-5 text-3xl font-bold text-white truncate">{props.author}</h1>

    </div>
  )
}

export default Card