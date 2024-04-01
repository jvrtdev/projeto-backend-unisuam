import { Link } from 'react-router-dom';
import { HeaderLink } from './@links';

interface LinksProps {
  to: string;
  name: string
}

const Links: React.FC<LinksProps> = () => {
  return (
    <>
    {HeaderLink.map((HeaderLink) => (
      <Link 
        key={HeaderLink.name} 
        to={HeaderLink.to}   className="hover:scale-105 transition-transform duration-300 ease-in-out transform origin-center hover:text-[#E7F2F4] text-[#CCCCCC] border-b border-transparent hover:border-[#CEEDFF] hover:border-b" >
          {HeaderLink.name}
        </Link>
    ))}
    </>
  );
};

export default Links;
