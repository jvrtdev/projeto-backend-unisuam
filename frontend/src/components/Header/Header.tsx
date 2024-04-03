import { useReducer } from 'react';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import Links from './Links';
import { ModeToggle } from '../mode-toggle/ModeToggle';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isOpen, toggleMenu] = useReducer((prev) => !prev, false);

  return (
    <header className="flex  items-center justify-around px-4 py-2 h-[80px] bg-[#1E3B75] text-white">
      <div className="flex items-center space-x-4">
      <img src="/LOGO.svg" alt="VrumVrumDrive" className='w-24' />
      </div>
      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:flex md:items-center md:space-x-4 m-5`}
      >
        <Links to={''} name={''} />
        <ModeToggle />
      </nav>
      <button
          onClick={toggleMenu}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isOpen ? <MdClose /> : <FiMenu />}
        </button>
    </header>
  );
};

export default Header;
