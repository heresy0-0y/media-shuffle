function Archive(props) {
  const archive = props.archive
  
  return (
    <div className="archive">
      {archive.map((media) => (
        <div>
      <h4>{media.fields.name}</h4>
      <h5>
        <em>{media.fields.author}</em>
          </h5>
      </div>))}
    </div>
  )
}

export default Archive;