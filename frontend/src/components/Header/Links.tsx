import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderLink } from './@links';

interface LinksProps {
  to: string;
  name: string;
}

const Links: React.FC<LinksProps> = () => {
  return (
    <>
      {HeaderLink.map((headerLink) => (
        <NavLink
          key={headerLink.name}
          to={headerLink.to}
          style={({ isActive }) => ({
            color: isActive ? 'green' : '#CCCCCC',
            borderBottom: isActive ? '2px solid green' : 'none', 
          })}
          className="hover:scale-105 transition-transform duration-300 ease-in-out transform origin-center hover:text-[#E7F2F4] text-[#CCCCCC] border-b border-transparent hover:border-[#CEEDFF] hover:border-b"
        >
          {headerLink.name}
        </NavLink>
      ))}
    </>
  );
};

export default Links;
