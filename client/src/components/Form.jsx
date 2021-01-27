import { useState } from "react";
import { baseURL, config } from "../services";
import Vibedown from "./Vibedown";
import axios from "axios";
import "./Form.css";

function Form(props) {
  const [title, setTitle] = useState("");
  const [mediaType, setMediaType] = useState("");
  const vibe = props.vibe;
  const setVibe = props.setVibe;
  const [link, setLink] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const archive = props.archive;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      title,
      coverImage,
      vibe,
      link,
      mediaType,
    };
    await axios.post(baseURL, { fields }, config);
    props.setToggleFetch((prev) => !prev);
    setTitle("");
    setMediaType("");
    setVibe("");
    setCoverImage("");
    setLink("");
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title"> title: </label>
        <input
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Vibedown
          className="formSelect"
          default="the vibe"
          archive={archive}
          vibe={vibe}
          setVibe={setVibe}
        />
        <label htmlFor="media-type"> media type: </label>
        <select
          className="formSelect"
          id="select"
          name="mediaType"
          value={mediaType}
          type="text"
          onChange={(e) => setMediaType(e.target.value)}
          required
        >
          <option>select type</option>
          <option value="audio"> audio</option>
          <option type="text" value="video">
            video
          </option>
          <option value="article">article</option>
        </select>
        <label htmlFor="link"> link: </label>
        <input
          name="link"
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />
        <label htmlFor="cover-image"> cover image: </label>
        <input
          name="coverImage"
          type="text"
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
          required
        />
        <button type="submit">load 'er up</button>
      </form>
    </div>
  );
}

export default Form;
