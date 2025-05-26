
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
    <Link to="/" className={cn("flex items-center gap-2", className)}>
      <div className="relative">
        <div className="bg-mylken-primary rounded-full h-8 w-8 flex items-center justify-center">
          <Droplets className="h-5 w-5 text-white" />
        </div>
        {/* Professional accent */}
        <div className="absolute -bottom-1 -right-1 bg-mylken-accent rounded-full h-3 w-3"></div>
      </div>
      <div className="flex flex-col items-start">
        <span className={cn(
          "font-bold text-2xl leading-none tracking-wide",
          "bg-gradient-to-r from-mylken-primary to-mylken-secondary bg-clip-text text-transparent",
          variant === 'light' && "from-white to-mylken-light"
        )} style={{ fontFamily: 'Georgia, serif' }}>
          Mylken
        </span>
      </div>
    </Link>
  );
};

export default Logo;
