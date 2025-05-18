
import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const Card = ({ title, icon, children, className }: CardProps) => {
  return (
    <div className={cn("bg-white rounded-lg shadow-sm border border-border p-6 card-hover", className)}>
      <div className="flex items-center gap-2 mb-4">
        {icon && (
          <div className="text-chemistry-500">
            {icon}
          </div>
        )}
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Card;
