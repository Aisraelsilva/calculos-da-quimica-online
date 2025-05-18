
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Calculator, TestTube, FileText, FlaskConical, ArrowRight, Beaker } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import Card from '@/components/Card';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-2 bg-chemistry-100 rounded-full mb-6">
            <FlaskConical className="h-6 w-6 text-chemistry-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-chemistry-700 to-chemistry-500">
            Química de Soluções e Cálculos de Concentração
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Aprenda conceitos essenciais sobre soluções químicas, concentração, 
            volume, massa e aplicação da regra de três na resolução de problemas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-chemistry-600 hover:bg-chemistry-700">
              <Link to="/teoria">
                Começar a Aprender
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/exercicios">
                Praticar Exercícios
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Por que estudar Química de Soluções?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            O estudo das soluções químicas é fundamental para entender como os compostos
            interagem no mundo real e como preparar misturas com precisão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            title="Aplicação no Cotidiano"
            icon={<Beaker className="h-5 w-5" />}
          >
            <p>
              As soluções estão presentes em toda parte - desde o café da manhã até os medicamentos
              que tomamos. Entender a concentração é essencial para a vida diária.
            </p>
          </Card>

          <Card
            title="Precisão em Laboratório"
            icon={<TestTube className="h-5 w-5" />}
          >
            <p>
              Em laboratórios, a precisão nas medidas é crucial. Saber calcular corretamente 
              a concentração permite preparar soluções exatas para experimentos.
            </p>
          </Card>

          <Card
            title="Base para Química Avançada"
            icon={<Calculator className="h-5 w-5" />}
          >
            <p>
              Dominar os cálculos de concentração forma a base necessária para
              estudos mais avançados em Química Analítica, Físico-química e outras áreas.
            </p>
          </Card>
        </div>
      </section>

      {/* Content Preview */}
      <section className="py-12 bg-gradient-to-b from-white to-chemistry-50 rounded-2xl my-12 p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">O que você irá aprender</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="bg-chemistry-100 p-3 rounded-full text-chemistry-600 flex-shrink-0">
                <Book className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Teoria e Conceitos</h3>
                <p>
                  Aprenda sobre solutos, solventes e soluções. Entenda os diferentes tipos de 
                  concentração e como eles se relacionam.
                </p>
                <Link to="/teoria" className="inline-flex items-center text-chemistry-600 hover:text-chemistry-700 mt-2">
                  Ver mais <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-chemistry-100 p-3 rounded-full text-chemistry-600 flex-shrink-0">
                <Calculator className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Fórmulas e Cálculos</h3>
                <p>
                  Domine as fórmulas para concentração em massa, molaridade, percentual em massa e 
                  aprenda a aplicar a regra de três para resolver problemas.
                </p>
                <Link to="/formulas" className="inline-flex items-center text-chemistry-600 hover:text-chemistry-700 mt-2">
                  Ver mais <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-chemistry-100 p-3 rounded-full text-chemistry-600 flex-shrink-0">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Exercícios Práticos</h3>
                <p>
                  Pratique com nossa extensa coleção de exercícios, veja as soluções passo a passo 
                  e teste seus conhecimentos com problemas de diferentes níveis.
                </p>
                <Link to="/exercicios" className="inline-flex items-center text-chemistry-600 hover:text-chemistry-700 mt-2">
                  Ver mais <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 text-center">
        <div className="bg-chemistry-600 text-white rounded-xl p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Pronto para mergulhar na Química de Soluções?</h2>
          <p className="mb-6">
            Nosso material completo vai ajudar você a dominar este importante tema da química.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/teoria">Começar Agora</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
