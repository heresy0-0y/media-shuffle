import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import ReactPlayer from 'react-player';
import Vibedown from './Vibedown'

function Archive(props) {
  const archive = props.archive;
  const vibe = props.vibe
  const setVibe = props.setVibe

  useEffect(() => {
    const changeVibe = () => {
    
    }
  })

  useEffect(() => {
    encodeURIComponent()
  })

  return (
    <div className="archive">
      <Vibedown archive={archive} vibe={vibe} setVibe={setVibe}/>
      {archive.map((media) => (
        <Link key={media.id} to={`/media/${media.id}`}>
          {media.fields.title}
        </Link>
      ))}
      {archive.map((media) => (
          (media.fields.mediaType === 'video') ? (
          <ReactPlayer url={media.fields.link} />
          ) : (<img src={media.fields.coverImage}/>)
        ))}
    </div>
  )
}

export default Archive;