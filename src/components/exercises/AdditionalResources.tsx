
import React from 'react';
import { Book, Calculator } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const AdditionalResources = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div className="bg-chemistry-50 rounded-lg p-6 text-center">
        <h3 className="text-xl font-semibold mb-3">Revisar Fórmulas</h3>
        <p className="mb-4">
          Precisa revisar as fórmulas antes de continuar os exercícios?
        </p>
        <Button asChild variant="outline">
          <Link to="/formulas" className="flex items-center justify-center">
            <Calculator className="mr-2 h-4 w-4" />
            Ver Fórmulas e Cálculos
          </Link>
        </Button>
      </div>
      
      <div className="bg-chemistry-50 rounded-lg p-6 text-center">
        <h3 className="text-xl font-semibold mb-3">Voltar à Teoria</h3>
        <p className="mb-4">
          Ainda tem dúvidas sobre os conceitos? Revise a teoria.
        </p>
        <Button asChild variant="outline">
          <Link to="/teoria" className="flex items-center justify-center">
            <Book className="mr-2 h-4 w-4" />
            Teoria e Conceitos
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default AdditionalResources;
