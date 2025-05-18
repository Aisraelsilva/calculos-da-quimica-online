
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExerciseSolution as ExerciseSolutionType } from '@/types/exercise';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ExerciseSolutionProps {
  solution: ExerciseSolutionType;
  answeredCorrectly: boolean | null;
}

const ExerciseSolution = ({ solution, answeredCorrectly }: ExerciseSolutionProps) => {
  const [activeTab, setActiveTab] = useState<string>("formula");
  
  return (
    <Card className="mb-6 bg-chemistry-50 border-chemistry-200">
      <CardHeader>
        <CardTitle className="text-xl">Solução Detalhada</CardTitle>
        <CardDescription>
          {answeredCorrectly ? 
            "Parabéns! Veja abaixo a explicação completa da resolução:" : 
            "Veja a explicação completa para entender o processo de resolução:"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="formula" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="formula">Usando Fórmulas</TabsTrigger>
            <TabsTrigger value="ruleOfThree" disabled={!solution.ruleOfThree}>Usando Regra de Três</TabsTrigger>
          </TabsList>
          
          <TabsContent value="formula">
            <div className="mb-4">
              <p className="font-medium text-chemistry-800 mb-2">Explicação:</p>
              <p>{solution.detailed}</p>
            </div>
            
            <div>
              <p className="font-medium text-chemistry-800 mb-2">Passo a passo:</p>
              <ol className="list-decimal pl-5 space-y-2">
                {solution.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </TabsContent>
          
          <TabsContent value="ruleOfThree">
            {solution.ruleOfThree ? (
              <>
                <div className="mb-4">
                  <p className="font-medium text-chemistry-800 mb-2">Explicação:</p>
                  <p>{solution.ruleOfThree.explanation}</p>
                </div>
                
                <div>
                  <p className="font-medium text-chemistry-800 mb-2">Passo a passo:</p>
                  <ol className="list-decimal pl-5 space-y-2">
                    {solution.ruleOfThree.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>
              </>
            ) : (
              <p>Solução por regra de três não disponível para este exercício.</p>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ExerciseSolution;
