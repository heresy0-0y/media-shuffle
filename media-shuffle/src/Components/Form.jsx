

function Form(props) {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} >
      <label htmlFor="title"> title: </label>
      <input name="title" type="text"/>
      <label htmlFor="vibe"> vibe: </label>
      <select name="pick a vibe" type="select">
        <option>select vibe</option>
      </select>
      <label htmlFor="media-type"> media type: </label>
      <select name="select media type">
        <option>select type</option>
        <option>audio</option>
        <option>video</option>
        <option>article</option>
      </select>
      <label htmlFor="link"> link: </label>
      <input name="media url" type="text" />
      <label htmlFor="cover-image"> cover image: </label>
      <input name="cover image url" type="link" />
      <button type="submit">load 'er up</button>
    </form>
    
    )
}

export default Form;