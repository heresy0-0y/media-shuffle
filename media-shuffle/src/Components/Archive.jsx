import { Link, Route } from 'react-router-dom';
import ReactPlayer from 'react-player';
import MediaFocus from './MediaFocus'

function Archive(props) {
  const archive = props.archive;
  
  return (
    <div className="archive">
      {archive.map((media) => (
        <Link to={`/focus`}>
          {/* <h1 alt={media.fields.link}>{media.fields.title}</h1> */}
          {(media.fields.mediaType === 'audio' || media.fields.mediaType === 'video') ?(
            <ReactPlayer url={media.fields.link}/>
          ) : null}
        </Link>
      ))
      }
      {archive.map((media) => (
        <Route path='/focus'>
          <MediaFocus media={media}/>
        </Route>
      ))}
    </div>
  )
}

export default Archive;