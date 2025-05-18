
import React, { useState } from 'react';
import { 
  Card, CardContent, CardDescription, 
  CardFooter, CardHeader, CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/sonner";
import { Exercise, difficultyColors, difficultyLabels, categoryLabels } from '@/types/exercise';
import ExerciseSolution from './ExerciseSolution';

interface ExerciseItemProps {
  exercise: Exercise;
  currentIndex: number;
  totalExercises: number;
  onComplete: (exerciseId: number) => void;
  onNextExercise: () => void;
}

const ExerciseItem = ({ 
  exercise, 
  currentIndex, 
  totalExercises, 
  onComplete, 
  onNextExercise 
}: ExerciseItemProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showSolution, setShowSolution] = useState(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState<boolean | null>(null);
  
  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };
  
  const handleCheckAnswer = () => {
    if (!selectedOption) return;

    const optionIndex = parseInt(selectedOption);
    const isCorrect = exercise.options[optionIndex].isCorrect;
    
    setAnsweredCorrectly(isCorrect);
    setShowSolution(true);

    if (isCorrect) {
      toast.success("Resposta correta! Muito bem!");
      onComplete(exercise.id);
    } else {
      toast.error("Resposta incorreta. Veja a solução para aprender.");
    }
  };
  
  const handleNext = () => {
    setSelectedOption(null);
    setShowSolution(false);
    setAnsweredCorrectly(null);
    onNextExercise();
  };

  return (
    <>
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Badge variant="outline">Questão {currentIndex + 1}/{totalExercises}</Badge>
              <Badge 
                className={`${difficultyColors[exercise.difficulty]} text-white`}
              >
                {difficultyLabels[exercise.difficulty]}
              </Badge>
              <Badge variant="secondary">
                {categoryLabels[exercise.category]}
              </Badge>
            </div>
          </div>
          <CardTitle className="text-xl">{exercise.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={selectedOption ?? ''} onValueChange={handleOptionChange}>
            {exercise.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 py-2">
                <RadioGroupItem 
                  value={index.toString()} 
                  id={`option-${index}`} 
                  disabled={showSolution}
                  className={
                    showSolution && option.isCorrect 
                      ? "border-green-500 text-green-500" 
                      : ""
                  }
                />
                <Label 
                  htmlFor={`option-${index}`}
                  className={
                    showSolution && option.isCorrect 
                      ? "text-green-600 font-medium" 
                      : showSolution && selectedOption === index.toString() && !option.isCorrect
                        ? "text-red-600"
                        : ""
                  }
                >
                  {option.text}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
        <CardFooter>
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            {!showSolution ? (
              <Button 
                onClick={handleCheckAnswer} 
                disabled={selectedOption === null}
                className="w-full sm:w-auto"
              >
                Verificar Resposta
              </Button>
            ) : (
              <Button 
                onClick={handleNext}
                className="w-full sm:w-auto bg-chemistry-600 hover:bg-chemistry-700"
              >
                Próxima Questão
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
      
      {showSolution && (
        <ExerciseSolution 
          solution={exercise.solution} 
          answeredCorrectly={answeredCorrectly} 
        />
      )}
    </>
  );
};

export default ExerciseItem;
