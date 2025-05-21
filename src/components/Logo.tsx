
import React from 'react';
import { Link } from 'react-router-dom';
import { Milk } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'light';
}

const Logo: React.FC<LogoProps> = ({ className, variant = 'default' }) => {
  return (
    <Link to="/" className={cn("flex items-center gap-2", className)}>
      <div className="relative">
        <div className="bg-yellow-400 rounded-full h-8 w-8 flex items-center justify-center">
          <Milk className="h-5 w-5 text-mylken-primary" />
        </div>
        {/* Milk droplet effect */}
        <div className="absolute -bottom-1 -right-1 bg-white rounded-full h-3 w-3 animate-bounce"></div>
      </div>
      <div className="flex flex-col items-start">
        <span className={cn(
          "font-heading font-bold text-xl leading-none",
          variant === 'default' ? "text-yellow-400" : "text-yellow-400"
        )}>
          Mylken
        </span>
        <span className={cn(
          "text-xs leading-none",
          variant === 'default' ? "text-mylken-light" : "text-mylken-light"
        )}>
          Dairy Innovation
        </span>
      </div>
    </Link>
  );
};

export default Logo;
