
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import ProgressTracker from '@/components/exercises/ProgressTracker';
import ExerciseItem from '@/components/exercises/ExerciseItem';
import AdditionalResources from '@/components/exercises/AdditionalResources';
import { exercises } from '@/data/exercisesData';

const Exercicios = () => {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);
  
  const handleCompleteExercise = (exerciseId: number) => {
    if (!completedExercises.includes(exerciseId)) {
      setCompletedExercises([...completedExercises, exerciseId]);
    }
  };
  
  const handleNextExercise = () => {
    if (currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    } else {
      // Voltar para o primeiro exercício quando acabar
      setCurrentExerciseIndex(0);
    }
  };
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Exercícios</h1>
            <p className="text-muted-foreground">
              Pratique seus conhecimentos com exercícios sobre soluções químicas e concentração.
            </p>
          </div>
          
          <ProgressTracker 
            completed={completedExercises.length} 
            total={exercises.length} 
          />
        </div>
        
        <ExerciseItem 
          exercise={exercises[currentExerciseIndex]}
          currentIndex={currentExerciseIndex}
          totalExercises={exercises.length}
          onComplete={handleCompleteExercise}
          onNextExercise={handleNextExercise}
        />
        
        <AdditionalResources />
      </div>
    </Layout>
  );
};

export default Exercicios;
