import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {metaURL, metaAuth} from '../services';
import ReactPlayer from 'react-player';
import Vibedown from './Vibedown'
import './Archive.css'

function Archive(props) {
  const archive = props.archive;
  const vibe = props.vibe
  const setVibe = props.setVibe
  const currentArchive = props.currentArchive
  const [render, setRender] = useState('')

  useEffect(() => {
    const renderArchive = () => {
      if (!currentArchive) {
        setRender((
          <div>
            Loading..
          </div>
        ))
      } else {
        setRender((currentArchive.map((media) => 
          (<section className="mediaPreview">
            <Link key={media.id} to={`/media/${media.id}`}>
            <img className='mediaImage' alt={media.fields.title} src={media.fields.coverImage} />
            </Link>
          </section>)
        )))
      }
    }
      renderArchive();
    }, [vibe,currentArchive]);
  
  // useEffect(() => {
  //   archive.map((media) => {
  //   if (media.fields.mediaType === 'article') {
  //   const queryURL = encodeURIComponent(media.fields.link);
  //   const url = `${metaURL}?url=${queryURL}`
  //   const getMeta = async () => {
  //     const resp = await axios.get(url, metaAuth);
  //     console.log(resp.data);
  //   };
  //   return getMeta();
  // }})}, [vibe, archive]);

  return (
    <div className="archive">
      {render}
    </div>
  )
}

export default Archive;