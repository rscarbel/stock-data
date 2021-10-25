import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav>
      <h2>Stock Data</h2>
      <ul>
        <Link to={'/Stocks'}>
          <li>Stocks</li>
        </Link>
        <Link to={'/About'}>
          <li>About</li>
        </Link>
      </ul>
    </nav>
  )
};

export default Nav;