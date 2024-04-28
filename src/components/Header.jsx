import { HiMenu } from 'react-icons/hi';
import Logo from '../assets/img/logo.svg';
import Nav from './Nav';

const Header = ({ setNavMobile }) => (
  <header className="py-6">
    <div className="container mx-auto">
      <div className="flex items-center justify-between">
        <a href="#home" aria-label="#home">
          <img src={Logo} alt="" className="h-[30px]" />
        </a>
        <Nav />
        <HiMenu
          className="lg:hidden text-3xl text-white cursor-pointer"
          onClick={() => setNavMobile(true)}
        />
      </div>
    </div>
  </header>
);
export default Header;
