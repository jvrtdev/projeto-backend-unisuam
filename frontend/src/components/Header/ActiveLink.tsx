import { ReactNode } from "react";
import { Link, useParams } from "react-router-dom";

interface ActiveLinkProps {
  to: string;
  children: ReactNode;
}

const ActiveLink = ({ to, children }: ActiveLinkProps) => {
  const { path } = useParams();
  const isActive = path === to;

  return (
    <Link to={to} className={isActive ? "isActive" : "noActive"}>
      {children}
    </Link>
  );
};

export default ActiveLink;