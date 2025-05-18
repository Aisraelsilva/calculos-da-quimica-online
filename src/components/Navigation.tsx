
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Book, Calculator, TestTube, FileText, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Início', path: '/', icon: <Book className="mr-2 h-5 w-5" /> },
    { name: 'Teoria', path: '/teoria', icon: <FileText className="mr-2 h-5 w-5" /> },
    { name: 'Fórmulas', path: '/formulas', icon: <Calculator className="mr-2 h-5 w-5" /> },
    { name: 'Exercícios', path: '/exercicios', icon: <TestTube className="mr-2 h-5 w-5" /> }
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative w-8 h-8 overflow-hidden">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-chemistry-300 to-chemistry-600 animate-float"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <TestTube className="h-5 w-5 text-white" />
            </div>
          </div>
          <span className="text-lg font-semibold text-chemistry-800">QuímicaSoluções</span>
        </Link>

        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menu</span>
        </Button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:gap-4 lg:gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-chemistry-700 hover:text-chemistry-900 hover:bg-chemistry-50 transition-colors"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-white md:hidden">
            <div className="flex flex-col h-full p-4">
              <div className="flex items-center justify-between mb-8">
                <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <div className="relative w-8 h-8 overflow-hidden">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-chemistry-300 to-chemistry-600"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <TestTube className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <span className="text-lg font-semibold text-chemistry-800">QuímicaSoluções</span>
                </Link>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-6 w-6" />
                  <span className="sr-only">Fechar menu</span>
                </Button>
              </div>

              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link 
                    key={link.path} 
                    to={link.path}
                    className="flex items-center px-3 py-4 text-lg font-medium rounded-md text-chemistry-700 hover:text-chemistry-900 hover:bg-chemistry-50 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
