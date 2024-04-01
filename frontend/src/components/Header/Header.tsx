// Header.tsx
import React from 'react';
import Links from './Links';
import { ModeToggle } from '../mode-toggle/ModeToggle';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="flex flex-wrap items-center justify-around px-4 py-2 h-[80px] bg-[#1E3B75] text-white">
      <div className=" items-center justify-center hidden md:flex space-x-4">
        <h1 className="text-xl font-bold text-white">Logo</h1>
      </div>
      <nav className="items-center justify-center hidden md:flex space-x-4">
        <Links/>
        <ModeToggle/>
      </nav>
    </header>
  );
};

export default Header;
