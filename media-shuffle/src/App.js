import {useState, useEffect} from 'react'
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import {baseURL, config} from './services'
import Nav from './Components/Nav';
import Form from './Components/Form';
import Archive from './Components/Archive'
import './App.css';

function App() {
  const [archive, setArchive] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false);
  const [currentVibe, setCurrentVibe] = useState('home');

  useEffect(() => {
    const getArchive = async () => {
      const resp = await axios.get(baseURL, config);
      setArchive(resp.data.records);
    };
    getArchive()
    console.log(archive);
  }, []);

  return (
    <div className="App">
      <Nav />
      <Route exact path="/" >
      <Archive archive={archive} />
      </Route>
      <Route path='/new'>
        <Form />
      </Route>
      <Route path='/focus'>
        <Archive archive={archive}/>
      </Route>
    </div>
  );
}

export default App;
