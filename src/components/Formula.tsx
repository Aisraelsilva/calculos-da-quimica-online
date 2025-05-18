
import React from 'react';
import { cn } from '@/lib/utils';

interface FormulaProps {
  children: React.ReactNode;
  className?: string;
  description?: string;
}

const Formula = ({ children, className, description }: FormulaProps) => {
  return (
    <div className="my-6">
      <div className={cn("formula flex items-center justify-center", className)}>
        {children}
      </div>
      {description && (
        <p className="text-sm text-center text-muted-foreground mt-2">{description}</p>
      )}
    </div>
  );
};

export default Formula;
