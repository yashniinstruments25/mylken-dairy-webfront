
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

type NavLinkProps = {
  name: string;
  href: string;
  isActive: (path: string) => boolean;
};

const NavLink: React.FC<NavLinkProps> = ({ name, href, isActive }) => {
  return (
    <Link
      to={href}
      className={cn(
        "font-medium transition-colors relative group text-sm lg:text-base",
        isActive(href) 
          ? "text-mylken-accent" 
          : "text-mylken-primary hover:text-mylken-secondary"
      )}
    >
      {name}
      <span className={cn(
        "absolute -bottom-1 left-0 w-0 h-0.5 bg-mylken-accent transition-all duration-300 group-hover:w-full",
        isActive(href) ? "w-full" : "w-0"
      )}></span>
    </Link>
  );
};

export default NavLink;
