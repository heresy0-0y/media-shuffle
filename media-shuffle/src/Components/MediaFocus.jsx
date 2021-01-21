import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom';

function MediaFocus(props) {
  const params = useParams();

  const media = props.archive.find(
    (media) => media.id === params.id
  );

  if (!media) {
    return (
      <div className='media'>
        <h4>Loading...</h4>
      </div>
    );
  }

  return (
    <div className='media'>
      <h1>{media.fields.title}</h1>
      <ReactPlayer url={media.fields.link}/>
    </div>
    )
}

export default MediaFocus;