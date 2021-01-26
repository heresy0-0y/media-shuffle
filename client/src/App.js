import { useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import axios from "axios";
// import { extract } from "article-parser";
import { baseURL, config } from "./services";
import Nav from "./components/Nav";
import Form from "./components/Form";
import MediaFocus from "./components/MediaFocus.jsx";
import Archive from "./components/Archive";
import "./App.css";

function App() {
  const [archive, setArchive] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const [vibe, setVibe] = useState("");
  const [currentArchive, setCurrentArchive] = useState([]);
  // const [articles, setArticles] = useState([]);
  const herstory = useHistory();

  const thisurl =
    "https://www.theguardian.com/music/2020/oct/27/joni-mitchell-interview-archives-early-years-cameron-crowe?utm_source=pocket-newtab";

  // useEffect(() => {
  //   const getArticle = async () => {
  //     const article = await extract(thisurl);
  //     return article;
  //   }
  //   getArticle();
  // }, []);

  // useEffect(() => {
  //   archive.map((media) => {
  //     const queryURL = `${media.fields.link}`;
  //     const url = `http://corsanywhere.herokuapp.com/${metaURL}?url=${queryURL}`;
  //     const getMeta = async () => {
  //       const resp = await axios.get(url, metaAuth);
  //       const meta = resp;
  //       console.log(meta);
  //     };
  //     media.meta = getMeta();
  //     return getMeta();
  //   });
  // }, [archive]);

  useEffect(() => {
    const getArchive = async () => {
      const resp = await axios.get(baseURL, config);
      setArchive(resp.data.records);
      herstory.push("/");
    };
    getArchive();
  }, [toggleFetch, herstory]);

  useEffect(() => {
    const filterArchive = () => {
      if (vibe === "") {
        setCurrentArchive(archive);
      } else {
        const filtered = archive
          .reduce((acc, media) => {
            if (!acc.includes(media) && media.fields.vibe === vibe)
              acc.push(media);
            return acc;
          }, [])
          .map((media) => media);
        setCurrentArchive(filtered);
      }
    };
    filterArchive();
  }, [vibe, archive]);

  return (
    <div className="App">
      <Nav vibe={vibe} setVibe={setVibe} archive={archive} />
      <Route exact path="/">
        <Archive
          currentArchive={currentArchive}
          vibe={vibe}
          setVibe={setVibe}
          archive={archive}
        />
      </Route>
      <Route path="/new">
        <Form
          vibe={vibe}
          setVibe={setVibe}
          archive={archive}
          setToggleFetch={setToggleFetch}
        />
      </Route>
      <Route path="/media/:id">
        <MediaFocus archive={archive} />
      </Route>
    </div>
  );
}

export default App;
