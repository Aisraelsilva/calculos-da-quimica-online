
export interface ExerciseSolution {
  detailed: string;
  steps: string[];
  ruleOfThree?: {
    explanation: string;
    steps: string[];
  };
}

export interface ExerciseOption {
  text: string;
  isCorrect: boolean;
}

export interface Exercise {
  id: number;
  question: string;
  options: ExerciseOption[];
  difficulty: 'easy' | 'medium' | 'hard';
  solution: ExerciseSolution;
  category: 'concentracao' | 'molaridade' | 'regra-tres' | 'percentual' | 'diluicao' | 'densidade';
}

export const difficultyColors = {
  'easy': 'bg-green-500',
  'medium': 'bg-yellow-500',
  'hard': 'bg-red-500'
};

export const difficultyLabels = {
  'easy': 'Fácil',
  'medium': 'Médio',
  'hard': 'Difícil'
};

export const categoryLabels = {
  'concentracao': 'Concentração',
  'molaridade': 'Molaridade',
  'regra-tres': 'Regra de Três',
  'percentual': 'Percentual',
  'diluicao': 'Diluição',
  'densidade': 'Densidade'
};
