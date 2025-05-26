
import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'light';
}

const Logo: React.FC<LogoProps> = ({ className, variant = 'default' }) => {
  return (
    <Link to="/" className={cn("flex items-center gap-3", className)}>
      <div className="relative">
        {/* Main logo circle with gradient */}
        <div className="bg-gradient-to-br from-mylken-primary to-mylken-secondary rounded-full h-10 w-10 flex items-center justify-center shadow-lg">
          <Droplets className="h-6 w-6 text-white" />
        </div>
        {/* Accent dot */}
        <div className="absolute -bottom-1 -right-1 bg-mylken-accent rounded-full h-4 w-4 border-2 border-white"></div>
      </div>
      <div className="flex flex-col items-start">
        <span className={cn(
          "font-heading font-bold text-2xl leading-none tracking-tight",
          variant === 'default' ? "text-mylken-primary" : "text-white"
        )}>
          Mylken
        </span>
        <span className={cn(
          "text-xs leading-none font-medium tracking-wide",
          variant === 'default' ? "text-mylken-secondary/80" : "text-mylken-light/80"
        )}>
          DAIRY EQUIPMENT
        </span>
      </div>
    </Link>
  );
};

export default Logo;
