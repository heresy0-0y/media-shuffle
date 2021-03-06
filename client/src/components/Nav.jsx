import { useState, useEffect } from "react";
import { Link, Switch, useLocation, Route } from "react-router-dom";
import Vibedown from "./Vibedown.jsx";
import "./Nav.css";

function Nav(props) {
  const [currentLocation, setCurrentLocation] = useState("/");
  const location = useLocation();
  const vibe = props.vibe;
  const setVibe = props.setVibe;
  const archive = props.archive;

  useEffect(() => {
    return () => {
      setCurrentLocation(location.pathname);
    };
  }, [currentLocation, location]);

  return (
    <div className="navContainer">
      <nav className="headnav">
        <Switch>
          <Route exact path="/">
            <Link to="/">
              <h2>home</h2>
            </Link>
            <Vibedown
              className="navVibes"
              default="all the vibes"
              archive={archive}
              vibe={vibe}
              setVibe={setVibe}
            />
            <Link to="/new">
              <h2>save somethin new</h2>
            </Link>
            <Link className="bars" to="/headnav">
              <i className="bars"></i>
            </Link>
          </Route>
          <Route path="/new">
            <Link to="/">
              <h2>home</h2>
            </Link>
          </Route>
          <Route path="/media/:id">
            <Link to="/">
              <h2>home</h2>
            </Link>
            <Link to="/new">
              <h2>save somethin new</h2>
            </Link>
          </Route>
          <Route path="/headnav">
            <Link to="/">
              <h2>home</h2>
            </Link>
          </Route>
        </Switch>
      </nav>
    </div>
  );
}

export default Nav;
