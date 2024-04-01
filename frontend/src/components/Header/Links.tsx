import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <>
     <Link to='/' className="hover:scale-105 transition-transform duration-300 ease-in-out transform origin-center hover:text-black text-[#CCCCCC] border-b border-transparent hover:border-green-700 hover:border-b" >
        Home
     </Link>
      <Link to="/vehicles" className="hover:scale-105 transition-transform duration-300 ease-in-out transform origin-center hover:text-black text-[#CCCCCC] border-b border-transparent hover:border-green-700 hover:border-b">
        Veiculos
      </Link>
      <Link to="/cadastro" className="hover:scale-105 transition-transform duration-300 ease-in-out transform origin-center hover:text-black text-[#CCCCCC] border-b border-transparent hover:border-green-700 hover:border-b">
       Cadastro
      </Link>
      <Link to="/login" className="hover:scale-105 transition-transform duration-300 ease-in-out transform origin-center hover:text-black text-[#CCCCCC] border-b border-transparent hover:border-green-700 hover:border-b">
        Login
      </Link>
      <Link to="/contact" className="hover:scale-105 transition-transform duration-300 ease-in-out transform origin-center hover:text-black text-[#CCCCCC] border-b border-transparent hover:border-green-700 hover:border-b">
        Contact
      </Link>
    </>
  );
};

export default Links;
