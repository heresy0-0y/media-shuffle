import { Link } from 'react-router-dom';

function Nav(props) {

  return (
    <nav>
      <Link to='/'>
        <h2>home
        </h2>
      </Link>
      <Link to='/new'>
        <h2>
          save somethin new
        </h2>
      </Link>
    </nav>
    )
}

export default Nav;