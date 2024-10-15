import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/AboutMe" activeClassName="active">
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/Portfolio" activeClassName="active">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/Resume" activeClassName="active">
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;