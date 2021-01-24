import { useState, useEffect } from 'react';
import { Link, Switch, useLocation, Route } from 'react-router-dom';

function Nav(props) {
  const [currentLocation, setCurrentLocation] = useState('/')

  const location = useLocation();

  useEffect(() => {
    return () => {
      setCurrentLocation(location.pathname)
    }
  }, [currentLocation, location])

  return (
    <nav>
      <Switch>
      <Route exact path='/'>
      <Link to='/'>
        <h2>home
        </h2>
      </Link>
      <Link to='/new'>
        <h2>
          save somethin new
        </h2>
        </Link>
      </Route>
      <Route path='/new'>
      <Link to='/'>
        <h2>home
        </h2>
      </Link>
        </Route>
        <Route path='/media/:id'>
        <Link to='/'>
        <h2>home
        </h2>
      </Link>
      <Link to='/new'>
        <h2>
          save somethin new
        </h2>
        </Link>
        </Route>
        </Switch>
    </nav>
    )
}

export default Nav;