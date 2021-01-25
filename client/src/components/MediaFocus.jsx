import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom';
import './MediaFocus.css'

function MediaFocus(props) {
  const params = useParams();
  const media = props.archive.find(
    (media) => media.id === params.id
  );

  if (!media) {
    return (
      <div className='mediaFocus'>
        <h4>Loading...</h4>
      </div>
    );
  }

  return (
    <div className='mediaFocus'>
      <h1 className='title'>{media.fields.title}</h1>
      <ReactPlayer url={media.fields.link} wrapper="section"/>
    </div>
    )
}

export default MediaFocus;