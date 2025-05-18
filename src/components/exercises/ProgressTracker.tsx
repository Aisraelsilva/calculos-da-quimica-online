
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { TestTube } from 'lucide-react';

interface ProgressTrackerProps {
  completed: number;
  total: number;
}

const ProgressTracker = ({ completed, total }: ProgressTrackerProps) => {
  const progress = completed > 0 ? Math.round((completed / total) * 100) : 0;
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-border w-full md:w-auto">
      <div className="flex items-center gap-2 mb-2">
        <TestTube className="h-5 w-5 text-chemistry-600" />
        <span className="font-medium">Seu progresso</span>
      </div>
      <Progress value={progress} className="h-2 mb-2" />
      <p className="text-sm text-muted-foreground">
        {completed} de {total} exercícios completos
      </p>
    </div>
  );
};

export default ProgressTracker;
