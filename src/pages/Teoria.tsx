import React from 'react';
import { Beaker, FlaskConical, ArrowRight, Calculator, TestTube } from 'lucide-react';
import Layout from '@/components/Layout';
import Card from '@/components/Card';
import Formula from '@/components/Formula';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Teoria = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Teoria e Conceitos</h1>
          <p className="text-lg text-muted-foreground">
            Entenda os fundamentos das soluções químicas, solutos, solventes e os diferentes tipos de concentração.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b">O que são Soluções Químicas?</h2>
          
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <p>
                Uma <span className="font-semibold text-chemistry-700">solução química</span> é uma mistura homogênea de duas ou mais substâncias. 
                As soluções são compostas de:
              </p>
              
              <ul className="list-disc pl-5 space-y-2 my-4">
                <li>
                  <span className="font-semibold text-chemistry-700">Soluto:</span> A substância que é dissolvida, 
                  geralmente presente em menor quantidade.
                </li>
                <li>
                  <span className="font-semibold text-chemistry-700">Solvente:</span> A substância que dissolve o soluto, 
                  geralmente presente em maior quantidade.
                </li>
              </ul>

              <p className="mb-4">
                Por exemplo, quando dissolvemos sal em água, o sal é o soluto e a água é o solvente. 
                Juntos, eles formam uma solução salina.
              </p>
              
              <p>
                O processo de dissolução ocorre quando as forças de atração entre as moléculas do soluto 
                e do solvente são mais fortes que as forças que mantêm as moléculas do soluto unidas. 
                Isso permite que as moléculas do soluto se dispersem uniformemente pelo solvente.
              </p>
            </div>
            
            <div className="flex-1 bg-chemistry-50 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3 flex items-center">
                <FlaskConical className="mr-2 h-5 w-5 text-chemistry-600" />
                Características das Soluções
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-chemistry-200 flex items-center justify-center mr-2 mt-1">
                    <span className="text-chemistry-700 text-sm">1</span>
                  </div>
                  <p>São misturas homogêneas (fase única)</p>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-chemistry-200 flex items-center justify-center mr-2 mt-1">
                    <span className="text-chemistry-700 text-sm">2</span>
                  </div>
                  <p>As partículas do soluto são dispersas entre as moléculas do solvente</p>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-chemistry-200 flex items-center justify-center mr-2 mt-1">
                    <span className="text-chemistry-700 text-sm">3</span>
                  </div>
                  <p>Não é possível distinguir visualmente o soluto do solvente</p>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-chemistry-200 flex items-center justify-center mr-2 mt-1">
                    <span className="text-chemistry-700 text-sm">4</span>
                  </div>
                  <p>As propriedades da solução são diferentes das propriedades dos componentes isolados</p>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-chemistry-200 flex items-center justify-center mr-2 mt-1">
                    <span className="text-chemistry-700 text-sm">5</span>
                  </div>
                  <p>A concentração pode variar, mas a composição é uniforme em toda a solução</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card
              title="Soluções Aquosas"
              icon={<Beaker className="h-5 w-5" />}
            >
              <p>
                São aquelas em que o solvente é a água. São as mais comuns em laboratório e 
                no cotidiano. Exemplos: soro fisiológico, água do mar, refrigerantes e soluções medicamentosas.
              </p>
            </Card>
            
            <Card
              title="Soluções Sólidas"
              icon={<Beaker className="h-5 w-5" />}
            >
              <p>
                São aquelas em que o solvente é sólido. Exemplos: ligas metálicas como bronze 
                (cobre e estanho), latão (cobre e zinco), aço (ferro e carbono) e amálgamas (mercúrio e outros metais).
              </p>
            </Card>
            
            <Card
              title="Soluções Gasosas"
              icon={<Beaker className="h-5 w-5" />}
            >
              <p>
                São aquelas formadas pela mistura de gases. Exemplo: ar atmosférico (mistura 
                de nitrogênio, oxigênio e outros gases), gás natural e misturas gasosas medicinais.
              </p>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Classificação das Soluções</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Quanto à Quantidade de Soluto</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-chemistry-50 rounded-lg p-6">
                <h4 className="font-medium mb-3">Soluções Diluídas</h4>
                <p>
                  Apresentam pequena quantidade de soluto em relação ao solvente. 
                  Exemplo: uma pitada de sal em um copo de água.
                </p>
              </div>
              
              <div className="bg-chemistry-50 rounded-lg p-6">
                <h4 className="font-medium mb-3">Soluções Concentradas</h4>
                <p>
                  Apresentam grande quantidade de soluto em relação ao solvente.
                  Exemplo: xarope (alta concentração de açúcar em água).
                </p>
              </div>
              
              <div className="bg-chemistry-50 rounded-lg p-6">
                <h4 className="font-medium mb-3">Soluções Saturadas</h4>
                <p>
                  Contêm a quantidade máxima de soluto que o solvente pode dissolver a uma dada temperatura.
                  Qualquer adição extra de soluto não será dissolvida.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Quanto ao Estado Físico</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-chemistry-100">
                    <th className="border border-chemistry-200 p-3 text-left">Soluto</th>
                    <th className="border border-chemistry-200 p-3 text-left">Solvente</th>
                    <th className="border border-chemistry-200 p-3 text-left">Tipo de Solução</th>
                    <th className="border border-chemistry-200 p-3 text-left">Exemplos</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-chemistry-200 p-3">Sólido</td>
                    <td className="border border-chemistry-200 p-3">Líquido</td>
                    <td className="border border-chemistry-200 p-3">Solução Líquida</td>
                    <td className="border border-chemistry-200 p-3">Sal em água, açúcar em água</td>
                  </tr>
                  <tr className="bg-chemistry-50">
                    <td className="border border-chemistry-200 p-3">Líquido</td>
                    <td className="border border-chemistry-200 p-3">Líquido</td>
                    <td className="border border-chemistry-200 p-3">Solução Líquida</td>
                    <td className="border border-chemistry-200 p-3">Álcool em água, vinagre (ácido acético em água)</td>
                  </tr>
                  <tr>
                    <td className="border border-chemistry-200 p-3">Gás</td>
                    <td className="border border-chemistry-200 p-3">Líquido</td>
                    <td className="border border-chemistry-200 p-3">Solução Líquida</td>
                    <td className="border border-chemistry-200 p-3">Refrigerantes (CO₂ em água)</td>
                  </tr>
                  <tr className="bg-chemistry-50">
                    <td className="border border-chemistry-200 p-3">Sólido</td>
                    <td className="border border-chemistry-200 p-3">Sólido</td>
                    <td className="border border-chemistry-200 p-3">Solução Sólida</td>
                    <td className="border border-chemistry-200 p-3">Ligas metálicas (bronze, latão)</td>
                  </tr>
                  <tr>
                    <td className="border border-chemistry-200 p-3">Gás</td>
                    <td className="border border-chemistry-200 p-3">Gás</td>
                    <td className="border border-chemistry-200 p-3">Solução Gasosa</td>
                    <td className="border border-chemistry-200 p-3">Ar atmosférico</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Tipos de Concentração</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Concentração em Massa (g/L)</h3>
              <p>
                É a relação entre a massa de soluto e o volume da solução. É expressa em 
                gramas por litro (g/L) ou outras unidades de massa por volume.
              </p>
              
              <Formula description="Onde C é a concentração, m é a massa do soluto em gramas e V é o volume da solução em litros.">
                <span className="text-xl">C (g/L) = <span className="formula-highlight">m (g)</span> ÷ <span className="formula-highlight">V (L)</span></span>
              </Formula>
              
              <div className="bg-chemistry-50 rounded-lg p-4 mb-4">
                <p className="font-medium mb-2">Exemplo:</p>
                <p>
                  Se dissolvermos 20 g de açúcar em água até completar 500 mL de solução, qual é a concentração em massa?
                </p>
                <div className="mt-2 pl-4 border-l-2 border-chemistry-200">
                  <p>m = 20 g</p>
                  <p>V = 500 mL = 0,5 L</p>
                  <p>C = m ÷ V = 20 g ÷ 0,5 L = 40 g/L</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Molaridade (mol/L)</h3>
              <p>
                É a relação entre o número de mols de soluto e o volume da solução em litros. 
                É expressa em mols por litro (mol/L) e também representada pela letra M.
              </p>
              
              <Formula description="Onde M é a molaridade, n é o número de mols de soluto e V é o volume da solução em litros.">
                <span className="text-xl">M (mol/L) = <span className="formula-highlight">n (mol)</span> ÷ <span className="formula-highlight">V (L)</span></span>
              </Formula>
              
              <div className="bg-chemistry-50 rounded-lg p-4 mb-4">
                <p className="font-medium mb-2">Exemplo:</p>
                <p>
                  Se dissolvermos 5,85 g de NaCl (massa molar = 58,5 g/mol) em água até completar 100 mL de solução, 
                  qual é a molaridade?
                </p>
                <div className="mt-2 pl-4 border-l-2 border-chemistry-200">
                  <p>m = 5,85 g</p>
                  <p>MM = 58,5 g/mol</p>
                  <p>n = m ÷ MM = 5,85 g ÷ 58,5 g/mol = 0,1 mol</p>
                  <p>V = 100 mL = 0,1 L</p>
                  <p>M = n ÷ V = 0,1 mol ÷ 0,1 L = 1 mol/L = 1 M</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Concentração em Porcentagem</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-medium mb-2">Porcentagem Massa/Massa (% m/m)</h4>
                  <Formula description="Onde % m/m é o percentual em massa, m soluto é a massa do soluto e m solução é a massa total da solução.">
                    <span className="text-xl">% m/m = <span className="formula-highlight">m soluto</span> ÷ <span className="formula-highlight">m solução</span> × 100</span>
                  </Formula>
                  
                  <div className="bg-chemistry-50 rounded-lg p-4 mb-4 mt-3">
                    <p className="font-medium mb-2">Exemplo:</p>
                    <p>
                      Se uma solução contém 15 g de glicose em 85 g de água, qual é o percentual em massa?
                    </p>
                    <div className="mt-2 pl-4 border-l-2 border-chemistry-200">
                      <p>m soluto = 15 g</p>
                      <p>m solvente = 85 g</p>
                      <p>m solução = 15 g + 85 g = 100 g</p>
                      <p>% m/m = (15 g ÷ 100 g) × 100 = 15%</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Porcentagem Massa/Volume (% m/v)</h4>
                  <Formula description="Onde % m/v é o percentual massa/volume, m soluto é a massa do soluto em gramas e V solução é o volume da solução em mL.">
                    <span className="text-xl">% m/v = <span className="formula-highlight">m soluto (g)</span> ÷ <span className="formula-highlight">V solução (mL)</span> × 100</span>
                  </Formula>
                  
                  <div className="bg-chemistry-50 rounded-lg p-4 mb-4 mt-3">
                    <p className="font-medium mb-2">Exemplo:</p>
                    <p>
                      Se dissolvermos 5 g de NaCl em água até completar 100 mL de solução, qual é o percentual massa/volume?
                    </p>
                    <div className="mt-2 pl-4 border-l-2 border-chemistry-200">
                      <p>m soluto = 5 g</p>
                      <p>V solução = 100 mL</p>
                      <p>% m/v = (5 g ÷ 100 mL) × 100 = 5%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Densidade (g/mL)</h3>
              <p>
                Embora não seja estritamente uma medida de concentração, a densidade é frequentemente 
                usada em cálculos de soluções. É a relação entre a massa e o volume.
              </p>
              
              <Formula description="Onde d é a densidade, m é a massa e V é o volume.">
                <span className="text-xl">d (g/mL) = <span className="formula-highlight">m (g)</span> ÷ <span className="formula-highlight">V (mL)</span></span>
              </Formula>
              
              <div className="bg-chemistry-50 rounded-lg p-4 mb-4">
                <p className="font-medium mb-2">Exemplo:</p>
                <p>
                  Uma solução tem massa de 24 g e volume de 20 mL. Qual é sua densidade?
                </p>
                <div className="mt-2 pl-4 border-l-2 border-chemistry-200">
                  <p>m = 24 g</p>
                  <p>V = 20 mL</p>
                  <p>d = m ÷ V = 24 g ÷ 20 mL = 1,2 g/mL</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Diluição de Soluções</h2>
          
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <p className="mb-4">
                <span className="font-semibold text-chemistry-700">Diluição</span> é o processo de diminuição 
                da concentração de uma solução através da adição de mais solvente. Durante a diluição, a 
                quantidade de soluto permanece constante, mas o volume da solução aumenta.
              </p>
              
              <p className="mb-4">
                Este processo é muito comum em laboratórios e na indústria, onde frequentemente precisamos 
                preparar soluções menos concentradas a partir de soluções estoque mais concentradas.
              </p>
              
              <p>
                A diluição é governada pela equação:
              </p>
              
              <Formula description="Onde C₁ é a concentração inicial, V₁ é o volume inicial, C₂ é a concentração final e V₂ é o volume final.">
                <span className="text-xl"><span className="formula-highlight">C₁ × V₁</span> = <span className="formula-highlight">C₂ × V₂</span></span>
              </Formula>
              
              <p className="mt-4">
                Esta equação expressa o princípio de que a quantidade total de soluto (C × V) permanece 
                constante antes e depois da diluição.
              </p>
            </div>
            
            <div className="flex-1 bg-chemistry-50 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3 flex items-center">
                <FlaskConical className="mr-2 h-5 w-5 text-chemistry-600" />
                Aplicações da Diluição
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-chemistry-200 flex items-center justify-center mr-2 mt-1">
                    <span className="text-chemistry-700 text-sm">1</span>
                  </div>
                  <p>Preparação de reagentes em laboratório a partir de soluções estoque</p>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-chemistry-200 flex items-center justify-center mr-2 mt-1">
                    <span className="text-chemistry-700 text-sm">2</span>
                  </div>
                  <p>Ajuste de concentrações de medicamentos para dosagens específicas</p>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-chemistry-200 flex items-center justify-center mr-2 mt-1">
                    <span className="text-chemistry-700 text-sm">3</span>
                  </div>
                  <p>Preparação de soluções para análises químicas e calibração de equipamentos</p>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-chemistry-200 flex items-center justify-center mr-2 mt-1">
                    <span className="text-chemistry-700 text-sm">4</span>
                  </div>
                  <p>Diluição de produtos concentrados como detergentes e produtos de limpeza</p>
                </li>
              </ul>
              
              <div className="mt-6">
                <Button asChild>
                  <Link to="/diluicao" className="flex items-center justify-center">
                    <FlaskConical className="mr-2 h-4 w-4" />
                    Saiba mais sobre Diluição
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-chemistry-50 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-3">Fórmulas e Cálculos</h3>
            <p className="mb-4">
              Aprenda a aplicar a regra de três e as fórmulas em problemas práticos de química de soluções.
            </p>
            <Button asChild>
              <Link to="/formulas" className="flex items-center justify-center">
                <Calculator className="mr-2 h-4 w-4" />
                Ver Fórmulas e Cálculos
              </Link>
            </Button>
          </div>
          
          <div className="bg-chemistry-50 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-3">Exercite seus Conhecimentos</h3>
            <p className="mb-4">
              Pratique o que aprendeu com nossos exercícios interativos sobre soluções químicas.
            </p>
            <Button asChild variant="outline">
              <Link to="/exercicios" className="flex items-center justify-center">
                <TestTube className="mr-2 h-4 w-4" />
                Ver Exercícios
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Teoria;
