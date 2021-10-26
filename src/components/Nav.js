import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav>
      <Link to={'/'}>
      <h2>Stock Data</h2>
      </Link>
      <ul>
        <Link to={'/stocks'}>
          <li>Stocks</li>
        </Link>
        <Link to={'/about'}>
          <li>About</li>
        </Link>
      </ul>
    </nav>
  )
};

export default Nav;