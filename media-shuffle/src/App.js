import {useState, useEffect} from 'react'
import { Route } from 'react-router-dom';
import axios from 'axios';
import {baseURL, config} from './services'
import Nav from './components/Nav';
import Form from './components/Form';
import MediaFocus from './components/MediaFocus.jsx'
import Archive from './components/Archive'
import './App.css';

function App() {
  const [archive, setArchive] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false);
  const [vibe, setVibe] = useState('')
  const [currentArchive, setCurrentArchive] = useState([])

  useEffect(() => {
    const getArchive = async () => {
      const resp = await axios.get(baseURL, config);
      setArchive(resp.data.records);
      };
    getArchive();
  }, [toggleFetch]);

  useEffect(() => {
    const filterArchive = () => {
          if (vibe === '') {
            setCurrentArchive(archive)
        } else {
          const filtered = archive.reduce((acc, media) => {
          if (!acc.includes(media) && (media.fields.vibe === vibe)) acc.push(media);
          return acc;
        }, [])
            .map((media) => media);
            setCurrentArchive(filtered)
        } 
        ;
    };
      filterArchive();
    }, [vibe,archive]);

  
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" >
      <Archive currentArchive={currentArchive} vibe={vibe} setVibe={setVibe} archive={archive} />
      </Route>
      <Route path='/new'>
        <Form vibe={vibe} setVibe={setVibe} archive={archive} setToggleFetch={setToggleFetch}/>
      </Route>
      <Route path='/media/:id'>
        <MediaFocus archive={archive}/>
      </Route>
    </div>
  );
}

export default App;
