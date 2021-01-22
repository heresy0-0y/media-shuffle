import { useState } from 'react';
import { baseURL, config } from '../services';
import axios from 'axios';

function Form(props) {
  const [title, setTitle] = useState('')
  const [mediaType, setMediaType] = useState('')
  const [vibe, setVibe] = useState('')
  const [link, setLink] = useState('')
  const [coverImage, setCoverImage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const fields = {
      title,
      coverImage,
      vibe,
      link,
      mediaType,
    };
    await axios.post(baseURL, { fields }, config);
    props.setToggleFetch((prev) => !prev);
    setTitle('')
    setMediaType('')
    setVibe('')
    setCoverImage('')
    setLink('')
  };
  

  return (
    <form onSubmit={handleSubmit} >
      <label htmlFor="title"> title: </label>
      <input
        name="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="vibe"> vibe: </label>
      <select
        name="vibe"
        type="select"
        value={vibe}
        onChange={(e) => setVibe(e.target.value)}
      >
        <option>select vibe</option>
      </select>
      <label htmlFor="media-type"> media type: </label>
      <select
        id="select"
        name="mediaType"
        value={mediaType}
        type="text"
        onChange={(e) => setMediaType(e.target.value)}>
        <option>select type</option>
        <option value='audio'> audio</option>
        <option type="text" value='video' >video</option>
        <option value='article'>article</option>
      </select>
      <label htmlFor="link"> link: </label>
      <input
        name="link"
        type="text"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <label htmlFor="cover-image"> cover image: </label>
      <input
        name="coverImage"
        type="text"
        value={coverImage}
        onChange={(e) => setCoverImage(e.target.value)}
      />
      <button type="submit">load 'er up</button>
    </form>
    )
}

export default Form;