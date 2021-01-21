import ReactPlayer from 'react-player'

function MediaFocus(props) {

  return (
    <div className='media-container'>
      <ReactPlayer url={props.media.fields.link}/>
    </div>
    )
}

export default MediaFocus;