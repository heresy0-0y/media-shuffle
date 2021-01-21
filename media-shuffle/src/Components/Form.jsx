function Form(props) {

  return (
    <form action="">
      <label htmlFor="title"></label>
      <input type="text"/>
      <label htmlFor="vibe"></label>
      <input type="select"/>
      <label htmlFor="media-type"></label>
      <input type="select"/>
      <label htmlFor="link"></label>
      <input type="text" />
      <label htmlFor="cover-image"></label>
      <input type="link" />
      <button type="submit">load 'er up</button>
    </form>
    
    )
}

export default Form;