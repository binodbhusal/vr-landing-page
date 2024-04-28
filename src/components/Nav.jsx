const Nav = () => (
  <nav className="hidden lg:flex">
    <ul className="flex items-center space-x-12 font-secondary">
      <li className="nav-link">
        {' '}
        <a href="#home">Home</a>
        {' '}
      </li>
      <li className="nav-link">
        {' '}
        <a href="#home">Company</a>
        {' '}
      </li>
      <li className="nav-link">
        {' '}
        <a href="#home">Features</a>
        {' '}
      </li>
      <li className="btn">
        {' '}
        <a href="#home">Sign up</a>
        {' '}
      </li>

    </ul>
  </nav>
);
export default Nav;
