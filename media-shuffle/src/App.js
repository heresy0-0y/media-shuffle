import {useState, useEffect} from 'react'
import { Route } from 'react-router-dom';
import axios from 'axios';
import {baseURL, config} from './services'
import Nav from './components/Nav';
import Form from './components/Form';
import MediaFocus from './components/MediaFocus'
import Archive from './components/Archive'
import './App.css';

function App() {
  const [archive, setArchive] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const getArchive = async () => {
      const resp = await axios.get(baseURL, config);
      setArchive(resp.data.records);
    };
    getArchive()
    console.log(archive);
  }, [toggleFetch]);

  return (
    <div className="App">
      <Nav />
      <Route exact path="/" >
      <Archive archive={archive} />
      </Route>
      <Route path='/new'>
        <Form setToggleFetch={setToggleFetch}/>
      </Route>
      <Route path='/media/:id'>
        <MediaFocus archive={archive}/>
      </Route>
    </div>
  );
}

export default App;
