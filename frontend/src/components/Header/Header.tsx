import React, { useReducer } from 'react';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import Links from './Links';
import { ModeToggle } from '../mode-toggle/ModeToggle';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = React.memo(() => {
  const [isOpen, toggleMenu] = useReducer((prev) => !prev, false);

  return (
    <header className="relative flex items-center justify-around px-4 py-2 md:py-4 h-[80px] bg-[#1E3B75] text-white">
      <div className="flex items-center space-x-4">
        <img src="/LOGO.svg" alt="" className='w-20' />
      </div>
      {isOpen ? (
        <nav className="absolute top-full left-0 w-[30%] bg-[#1E3B75] md:relative md:flex md:items-center md:space-x-4 m-5 py-2 md:py-0 transition-all duration-300">
          <div className="flex flex-col items-center space-y-2">
            <Links to={''} name={''} />
            <ModeToggle />
          </div>
        </nav>
      ) : (
        <nav className="hidden md:flex md:items-center md:justify-around  md:space-x-4 m-5">
          <Links to={''} name={''} />
          <ModeToggle />
        </nav>
      )}
      <button
        onClick={toggleMenu}
        className="md:hidden text-2xl focus:outline-none"
      >
        {isOpen ? <MdClose /> : <FiMenu />}
      </button>
    </header>
  );
});

export default Header;
