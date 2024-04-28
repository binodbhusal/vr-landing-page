import { IoClose } from 'react-icons/io5';

const NavMobile = ({ setNavMobile }) => (
  <nav className="lg:hidden bg-[#251f3f] w-full h-full">
    <IoClose
      className="text-3xl absolute left-4 top-6 cursor-pointer"
      onClick={() => setNavMobile(false)}
    />
    <ul className="flex flex-col items-center justify-center space-y-8 h-full font-secondary">
      <li className="text-lg">
        {' '}
        <a href="#home">Home</a>
        {' '}
      </li>
      <li className="text-lg">
        {' '}
        <a href="#home">Company</a>
        {' '}
      </li>
      <li className="text-lg">
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
export default NavMobile;
