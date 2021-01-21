import { Link, Route } from 'react-router-dom';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css'
import ReactPlayer from 'react-player';

function Archive(props) {
  const archive = props.archive;
  
  return (
    <div className="archive">
      {archive.map((media) => (
        <Link key={media.id} to={`/media/${media.id}`}>
          {media.fields.title}
        </Link>
      ))}
      {archive.map((media) => (
          (media.fields.mediaType === 'video') ? (
            <ReactPlayer url={media.fields.link} controls='true'/>
          ) : null
        ))}
    </div>
  )
}

export default Archive;