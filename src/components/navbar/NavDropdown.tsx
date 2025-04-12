
import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';

type NavDropdownProps = {
  title: string;
  path: string;
  isActive: (path: string) => boolean;
  categories: { name: string; href: string }[];
  viewAllPath: string;
};

const NavDropdown: React.FC<NavDropdownProps> = ({
  title,
  path,
  isActive,
  categories,
  viewAllPath
}) => {
  return (
    <div className="z-50">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger 
              className={cn(
                "font-medium transition-colors bg-transparent text-sm lg:text-base",
                isActive(path) 
                  ? "text-mylken-accent" 
                  : "text-mylken-primary hover:text-mylken-secondary"
              )}
            >
              {title}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="min-w-[220px]">
              <ul className="grid gap-1 p-3">
                {categories.map((category) => (
                  <li key={category.name} className="relative">
                    <NavigationMenuLink asChild>
                      <Link
                        to={category.href}
                        className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-mylken-accent/20 hover:text-mylken-primary"
                      >
                        <div className="text-sm font-medium leading-none">{category.name}</div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
                <li className="relative mt-1 border-t pt-1">
                  <NavigationMenuLink asChild>
                    <Link
                      to={viewAllPath}
                      className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-mylken-accent/20 hover:text-mylken-primary font-medium"
                    >
                      View All
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavDropdown;
