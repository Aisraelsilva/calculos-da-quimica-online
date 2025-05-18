
import React from 'react';
import { FlaskConical, ArrowRight, TestTube, ArrowDown } from 'lucide-react';
import Layout from '@/components/Layout';
import Formula from '@/components/Formula';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

const Diluicao = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Diluição de Soluções</h1>
          <p className="text-lg text-muted-foreground">
            Entenda o conceito de diluição, as fórmulas importantes e como resolver problemas de diluição de soluções químicas.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b">O que é Diluição de Soluções?</h2>
          
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <p className="mb-4">
                <span className="font-semibold text-chemistry-700">Diluição</span> é o processo de 
                diminuição da concentração de um soluto em uma solução através da adição de mais solvente. 
                É um procedimento comum em laboratórios e na indústria para obter soluções com concentrações específicas 
                a partir de soluções mais concentradas.
              </p>
              
              <p className="mb-4">
                O princípio fundamental da diluição é que <span className="font-semibold text-chemistry-700">a quantidade 
                de soluto permanece constante</span> antes e depois da diluição. Ao adicionar mais solvente, 
                apenas o volume total da solução aumenta, resultando em uma diminuição da concentração.
              </p>
              
              <p>
                Na prática, a diluição é utilizada para preparar reagentes em laboratório, ajustar medicamentos 
                a dosagens adequadas, preparar soluções para análises químicas e em diversos processos industriais 
                que exigem concentrações específicas.
              </p>
            </div>
            
            <div className="flex-1 bg-chemistry-50 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3 flex items-center">
                <FlaskConical className="mr-2 h-5 w-5 text-chemistry-600" />
                Características da Diluição
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-chemistry-200 flex items-center justify-center mr-2 mt-1">
                    <span className="text-chemistry-700 text-sm">1</span>
                  </div>
                  <p>A quantidade de soluto permanece constante antes e depois da diluição</p>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-chemistry-200 flex items-center justify-center mr-2 mt-1">
                    <span className="text-chemistry-700 text-sm">2</span>
                  </div>
                  <p>O volume da solução aumenta devido à adição de mais solvente</p>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-chemistry-200 flex items-center justify-center mr-2 mt-1">
                    <span className="text-chemistry-700 text-sm">3</span>
                  </div>
                  <p>A concentração da solução diminui proporcionalmente ao aumento do volume</p>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-chemistry-200 flex items-center justify-center mr-2 mt-1">
                    <span className="text-chemistry-700 text-sm">4</span>
                  </div>
                  <p>É um processo físico, não ocorrendo reações químicas entre soluto e solvente</p>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-chemistry-200 flex items-center justify-center mr-2 mt-1">
                    <span className="text-chemistry-700 text-sm">5</span>
                  </div>
                  <p>Pode ser aplicada a qualquer tipo de concentração (mol/L, g/L, percentual)</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Princípio da Diluição e Fórmula Matemática</h2>
          
          <div className="mb-8">
            <p className="mb-4">
              O princípio fundamental da diluição estabelece que a <span className="font-semibold text-chemistry-700">quantidade 
              de soluto permanece constante</span> antes e depois da diluição. Este princípio é representado pela equação:
            </p>
            
            <Formula description="Onde C₁ é a concentração inicial, V₁ é o volume inicial, C₂ é a concentração final e V₂ é o volume final.">
              <span className="text-xl"><span className="formula-highlight">C₁ × V₁</span> = <span className="formula-highlight">C₂ × V₂</span></span>
            </Formula>
            
            <p className="mt-4">
              Esta equação, conhecida como <span className="font-semibold text-chemistry-700">equação da diluição</span> ou 
              <span className="font-semibold text-chemistry-700"> lei da diluição</span>, é válida para qualquer tipo de concentração, 
              desde que se use a mesma unidade antes e depois da diluição (mol/L, g/L, percentual, etc.).
            </p>
            
            <div className="bg-chemistry-50 rounded-lg p-6 mt-6">
              <h3 className="text-xl font-medium mb-4">Compreendendo a Equação da Diluição</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Significado Físico</h4>
                  <p>
                    O produto C × V representa a quantidade absoluta de soluto na solução. Como não há adição 
                    ou remoção de soluto durante a diluição, essa quantidade permanece constante, resultando na igualdade 
                    C₁ × V₁ = C₂ × V₂.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Fórmulas Derivadas</h4>
                  <p>A partir da equação principal, podemos isolar cada variável:</p>
                  <div className="mt-2">
                    <p>• Para encontrar a concentração final: C₂ = C₁ × V₁ ÷ V₂</p>
                    <p>• Para calcular o volume final: V₂ = C₁ × V₁ ÷ C₂</p>
                    <p>• Para determinar a concentração inicial: C₁ = C₂ × V₂ ÷ V₁</p>
                    <p>• Para calcular o volume inicial: V₁ = C₂ × V₂ ÷ C₁</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-chemistry-100 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-4">Exemplo 1: Cálculo de Concentração Final</h3>
            
            <div className="mb-4">
              <p className="font-medium text-chemistry-700 mb-2">Problema:</p>
              <p>
                Uma solução de NaCl tem concentração de 20 g/L e volume de 100 mL. Se adicionarmos água até 
                o volume final ser 500 mL, qual será a nova concentração da solução?
              </p>
            </div>
            
            <div className="mb-4">
              <p className="font-medium text-chemistry-700 mb-2">Resolução:</p>
              <ol className="space-y-2 pl-5 list-decimal">
                <li>
                  <span className="font-medium">Identificamos os dados:</span>
                  <ul className="pl-5 list-disc">
                    <li>C₁ = 20 g/L (concentração inicial)</li>
                    <li>V₁ = 100 mL = 0,1 L (volume inicial)</li>
                    <li>V₂ = 500 mL = 0,5 L (volume final após diluição)</li>
                    <li>C₂ = ? (concentração final que queremos encontrar)</li>
                  </ul>
                </li>
                <li>
                  <span className="font-medium">Calculamos a quantidade de soluto (que permanece constante):</span>
                  <div className="my-2 pl-5">
                    <p>Quantidade de soluto = C₁ × V₁ = 20 g/L × 0,1 L = 2 g</p>
                  </div>
                </li>
                <li>
                  <span className="font-medium">Aplicamos a fórmula da diluição:</span>
                  <div className="my-2 pl-5">
                    <p>C₁ × V₁ = C₂ × V₂</p>
                    <p>Isolando C₂: C₂ = C₁ × V₁ ÷ V₂</p>
                    <p>C₂ = 20 g/L × 0,1 L ÷ 0,5 L</p>
                    <p>C₂ = 2 g ÷ 0,5 L</p>
                    <p>C₂ = 4 g/L</p>
                  </div>
                </li>
              </ol>
            </div>
            
            <div>
              <p className="font-medium text-chemistry-700 mb-2">Explicação:</p>
              <p>
                A quantidade de NaCl permanece constante (2 g) durante todo o processo de diluição. 
                Como o volume aumentou de 100 mL para 500 mL (cinco vezes maior), a concentração diminuiu 
                proporcionalmente, tornando-se cinco vezes menor (de 20 g/L para 4 g/L).
              </p>
              <p className="mt-2">
                Este exemplo ilustra o princípio fundamental da diluição: ao aumentar o volume total da 
                solução sem alterar a quantidade de soluto, a concentração diminui na mesma proporção em 
                que o volume aumenta.
              </p>
            </div>
          </div>
        </section>

        <Separator className="my-10" />
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Aplicações Práticas da Diluição</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Exemplo 2: Preparação de Solução a partir de Solução Concentrada</h3>
              
              <div className="bg-white border border-chemistry-100 rounded-lg p-6">
                <p className="mb-3">
                  Um laboratório precisa preparar uma solução de HCl com concentração 0,5 mol/L a partir 
                  de uma solução estoque de 2 mol/L. Se precisamos de 200 mL da solução final, qual volume 
                  da solução estoque devemos utilizar?
                </p>
                
                <div className="bg-chemistry-50 rounded-md p-4">
                  <p className="font-medium mb-2">Resolução:</p>
                  <ol className="space-y-2 list-decimal pl-5">
                    <li>
                      <span className="font-medium">Identificamos os dados:</span>
                      <ul className="pl-5 list-disc">
                        <li>C₁ = 2 mol/L (concentração da solução estoque)</li>
                        <li>C₂ = 0,5 mol/L (concentração desejada)</li>
                        <li>V₂ = 200 mL = 0,2 L (volume final desejado)</li>
                        <li>V₁ = ? (volume da solução estoque a ser utilizado)</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-medium">Aplicamos a equação da diluição:</span>
                      <div className="my-2 pl-5">
                        <p>C₁ × V₁ = C₂ × V₂</p>
                        <p>Isolando V₁: V₁ = C₂ × V₂ ÷ C₁</p>
                        <p>V₁ = 0,5 mol/L × 0,2 L ÷ 2 mol/L</p>
                        <p>V₁ = 0,1 L ÷ 2</p>
                        <p>V₁ = 0,05 L = 50 mL</p>
                      </div>
                    </li>
                  </ol>
                  
                  <p className="mt-4">
                    Portanto, para preparar 200 mL de solução de HCl 0,5 mol/L, devemos:
                  </p>
                  <ol className="space-y-1 list-decimal pl-5 mt-2">
                    <li>Medir 50 mL da solução estoque de HCl 2 mol/L</li>
                    <li>Transferir para um balão volumétrico de 200 mL</li>
                    <li>Adicionar água destilada até completar o volume de 200 mL</li>
                    <li>Homogeneizar a solução</li>
                  </ol>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Exemplo 3: Diluição Sucessiva</h3>
              
              <div className="bg-white border border-chemistry-100 rounded-lg p-6">
                <p className="mb-3">
                  Uma solução de NaOH 1 mol/L foi diluída para 500 mL, resultando em uma concentração 
                  de 0,4 mol/L. Em seguida, 250 mL desta solução foram novamente diluídos para 400 mL. 
                  Qual a concentração final após a segunda diluição?
                </p>
                
                <div className="bg-chemistry-50 rounded-md p-4">
                  <p className="font-medium mb-2">Resolução:</p>
                  <p className="mb-2">Primeira diluição:</p>
                  <ol className="space-y-2 list-decimal pl-5 mb-4">
                    <li>C₁ = 1 mol/L (concentração inicial)</li>
                    <li>C₂ = 0,4 mol/L (concentração após primeira diluição)</li>
                    <li>Quantidade de NaOH após primeira diluição = 0,4 mol/L × 0,5 L = 0,2 mol</li>
                  </ol>
                  
                  <p className="mb-2">Segunda diluição:</p>
                  <ol className="space-y-2 list-decimal pl-5">
                    <li>C₁ = 0,4 mol/L (concentração após primeira diluição)</li>
                    <li>V₁ = 250 mL = 0,25 L (volume utilizado da primeira solução)</li>
                    <li>V₂ = 400 mL = 0,4 L (volume final após segunda diluição)</li>
                    <li>Quantidade de NaOH na alíquota = 0,4 mol/L × 0,25 L = 0,1 mol</li>
                    <li>C₂ = quantidade de soluto ÷ V₂ = 0,1 mol ÷ 0,4 L = 0,25 mol/L</li>
                  </ol>
                  
                  <p className="mt-4">
                    Alternativamente, podemos aplicar diretamente a fórmula da diluição:
                    <br />C₂ = C₁ × V₁ ÷ V₂ = 0,4 mol/L × 0,25 L ÷ 0,4 L = 0,25 mol/L
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Exemplo 4: Cálculo do Volume de Solvente a Adicionar</h3>
              
              <div className="bg-white border border-chemistry-100 rounded-lg p-6">
                <p className="mb-3">
                  Temos 300 mL de uma solução de glicose com concentração 50 g/L. Quanto de água precisamos 
                  adicionar para que a concentração se torne 20 g/L?
                </p>
                
                <div className="bg-chemistry-50 rounded-md p-4">
                  <p className="font-medium mb-2">Resolução:</p>
                  <ol className="space-y-2 list-decimal pl-5">
                    <li>
                      <span className="font-medium">Identificamos os dados:</span>
                      <ul className="pl-5 list-disc">
                        <li>C₁ = 50 g/L (concentração inicial)</li>
                        <li>V₁ = 300 mL = 0,3 L (volume inicial)</li>
                        <li>C₂ = 20 g/L (concentração desejada)</li>
                        <li>V₂ = ? (volume final após adição de água)</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-medium">Calculamos a quantidade de soluto:</span>
                      <div className="my-2 pl-5">
                        <p>Quantidade de glicose = C₁ × V₁ = 50 g/L × 0,3 L = 15 g</p>
                      </div>
                    </li>
                    <li>
                      <span className="font-medium">Aplicamos a equação da diluição:</span>
                      <div className="my-2 pl-5">
                        <p>C₁ × V₁ = C₂ × V₂</p>
                        <p>Isolando V₂: V₂ = C₁ × V₁ ÷ C₂</p>
                        <p>V₂ = 50 g/L × 0,3 L ÷ 20 g/L</p>
                        <p>V₂ = 15 g ÷ 20 g/L</p>
                        <p>V₂ = 0,75 L = 750 mL</p>
                      </div>
                    </li>
                    <li>
                      <span className="font-medium">Calculamos o volume de água a adicionar:</span>
                      <div className="my-2 pl-5">
                        <p>Volume de água = V₂ - V₁ = 750 mL - 300 mL = 450 mL</p>
                      </div>
                    </li>
                  </ol>
                  
                  <p className="mt-4">
                    Portanto, devemos adicionar 450 mL de água à solução original para obter 
                    uma concentração final de 20 g/L.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Importância da Diluição</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-chemistry-100 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-4">Aplicações Laboratoriais</h3>
              <ul className="space-y-2 list-disc pl-5">
                <li>Preparação de reagentes com concentrações específicas para análises químicas</li>
                <li>Ajuste de soluções padrão para calibração de equipamentos</li>
                <li>Preparação de meios de cultura em microbiologia</li>
                <li>Diluição seriada para análises quantitativas</li>
                <li>Preparação de soluções tampão com pH específico</li>
              </ul>
            </div>
            
            <div className="bg-white border border-chemistry-100 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-4">Aplicações Industriais e Cotidianas</h3>
              <ul className="space-y-2 list-disc pl-5">
                <li>Produção de medicamentos com dosagens precisas</li>
                <li>Fabricação de produtos de limpeza e cosméticos</li>
                <li>Tratamento de água e efluentes</li>
                <li>Preparação de soluções nutritivas para hidroponia</li>
                <li>Diluição de concentrados para bebidas e alimentos</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-chemistry-50 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-3">Exercite seus Conhecimentos</h3>
            <p className="mb-4">
              Pratique o que aprendeu com nossos exercícios interativos sobre diluição de soluções.
            </p>
            <Button asChild>
              <Link to="/exercicios" className="flex items-center justify-center">
                <TestTube className="mr-2 h-4 w-4" />
                Ver Exercícios
              </Link>
            </Button>
          </div>
          
          <div className="bg-chemistry-50 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-3">Revisar Fórmulas</h3>
            <p className="mb-4">
              Volte para revisar as fórmulas e cálculos de química de soluções.
            </p>
            <Button asChild variant="outline">
              <Link to="/formulas" className="flex items-center justify-center">
                <ArrowRight className="mr-2 h-4 w-4" />
                Fórmulas e Cálculos
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Diluicao;
