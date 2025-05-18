
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white shadow-[0_-1px_2px_rgba(0,0,0,0.03)] mt-12">
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-chemistry-800">QuímicaSoluções</h3>
            <p className="text-sm text-muted-foreground">
              Seu portal de aprendizado para química de soluções, concentração e cálculos.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 text-chemistry-800">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/teoria" className="text-chemistry-600 hover:text-chemistry-800 transition-colors">
                  Teoria e Conceitos
                </Link>
              </li>
              <li>
                <Link to="/formulas" className="text-chemistry-600 hover:text-chemistry-800 transition-colors">
                  Fórmulas e Cálculos
                </Link>
              </li>
              <li>
                <Link to="/exercicios" className="text-chemistry-600 hover:text-chemistry-800 transition-colors">
                  Exercícios e Prática
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 text-chemistry-800">Materiais</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-chemistry-600 hover:text-chemistry-800 transition-colors">
                  Download de PDFs
                </a>
              </li>
              <li>
                <a href="#" className="text-chemistry-600 hover:text-chemistry-800 transition-colors">
                  Calculadoras Online
                </a>
              </li>
              <li>
                <a href="#" className="text-chemistry-600 hover:text-chemistry-800 transition-colors">
                  Material Complementar
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} QuímicaSoluções. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
