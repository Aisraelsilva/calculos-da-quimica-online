
import React from 'react';
import { Calculator, ArrowRight, TestTube, FlaskConical } from 'lucide-react';
import Layout from '@/components/Layout';
import Formula from '@/components/Formula';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

const Formulas = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Fórmulas e Cálculos</h1>
          <p className="text-lg text-muted-foreground">
            Aprenda a aplicar a regra de três e as fórmulas para resolver problemas de química de soluções.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Regra de Três Aplicada</h2>
          
          <div className="mb-6">
            <p className="mb-4">
              A regra de três é uma ferramenta matemática muito útil para resolver 
              problemas de química de soluções. Ela permite estabelecer relações proporcionais 
              entre grandezas e encontrar valores desconhecidos.
            </p>
            
            <div className="bg-chemistry-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-medium mb-3 flex items-center">
                <Calculator className="mr-2 h-5 w-5 text-chemistry-600" />
                Como aplicar a regra de três em química?
              </h3>
              
              <ol className="space-y-4">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-chemistry-200 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-chemistry-700 text-sm">1</span>
                  </div>
                  <p>
                    <span className="font-medium">Identifique as grandezas envolvidas:</span> Por exemplo, 
                    concentração, massa e volume.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-chemistry-200 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-chemistry-700 text-sm">2</span>
                  </div>
                  <p>
                    <span className="font-medium">Determine a relação entre as grandezas:</span> Por exemplo, 
                    concentração é diretamente proporcional à massa e inversamente proporcional ao volume.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-chemistry-200 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-chemistry-700 text-sm">3</span>
                  </div>
                  <p>
                    <span className="font-medium">Monte a proporção:</span> Se duas grandezas são diretamente 
                    proporcionais, divida-as em lados opostos da equação. Se são inversamente proporcionais, 
                    coloque-as do mesmo lado.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-chemistry-200 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-chemistry-700 text-sm">4</span>
                  </div>
                  <p>
                    <span className="font-medium">Resolva a equação:</span> Isole a incógnita e encontre o valor desconhecido.
                  </p>
                </li>
              </ol>
            </div>
          </div>
          
          <div className="bg-white border border-chemistry-100 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-4">Exemplo de Aplicação da Regra de Três</h3>
            
            <div className="mb-4">
              <p className="font-medium text-chemistry-700 mb-2">Problema:</p>
              <p>
                Uma solução de NaCl tem concentração de 20 g/L. Se temos 500 mL dessa solução, 
                quantos gramas de NaCl estão presentes?
              </p>
            </div>
            
            <div className="mb-4">
              <p className="font-medium text-chemistry-700 mb-2">Resolução:</p>
              <ol className="space-y-3 pl-5">
                <li>
                  <span className="font-medium">Identificamos as informações:</span>
                  <ul className="pl-5 list-disc">
                    <li>Concentração = 20 g/L</li>
                    <li>Volume = 500 mL = 0,5 L</li>
                    <li>Massa = ? (o que queremos encontrar)</li>
                  </ul>
                </li>
                <li>
                  <span className="font-medium">Sabemos a fórmula:</span>
                  <div className="my-2 pl-5">
                    <p>Concentração = Massa ÷ Volume</p>
                    <p>Então: Massa = Concentração × Volume</p>
                  </div>
                </li>
                <li>
                  <span className="font-medium">Aplicando a regra de três:</span>
                  <div className="my-2 pl-5">
                    <p>Se 1 L da solução contém 20 g de NaCl</p>
                    <p>Então 0,5 L da solução contém x g de NaCl</p>
                    <div className="bg-muted p-2 rounded-md mt-2 mb-2">
                      <p>1 L → 20 g</p>
                      <p>0,5 L → x g</p>
                    </div>
                    <p>x = 20 g × 0,5 L ÷ 1 L = 10 g</p>
                  </div>
                </li>
              </ol>
            </div>
            
            <div>
              <p className="font-medium text-chemistry-700 mb-2">Explicação:</p>
              <p>
                A massa de soluto é diretamente proporcional à concentração e ao volume. Como a concentração 
                é 20 g/L e o volume é 0,5 L, a massa de NaCl na solução é 10 g.
              </p>
            </div>
          </div>
        </section>

        <Separator className="my-10" />
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Fórmulas e Conversões</h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Tipos de Concentração de Soluções</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-chemistry-50 rounded-lg p-6">
                  <h4 className="font-medium mb-3">Concentração Comum (C)</h4>
                  <Formula>
                    <span className="text-xl">C = <span className="formula-highlight">m (g)</span> ÷ <span className="formula-highlight">V (L)</span></span>
                  </Formula>
                  <p className="mt-2 text-sm">
                    Onde m é a massa do soluto em gramas e V é o volume da solução em litros.
                    <br />Unidade: g/L
                  </p>
                </div>
                
                <div className="bg-chemistry-50 rounded-lg p-6">
                  <h4 className="font-medium mb-3">Concentração Molar (M)</h4>
                  <Formula>
                    <span className="text-xl">M = <span className="formula-highlight">n (mol)</span> ÷ <span className="formula-highlight">V (L)</span></span>
                  </Formula>
                  <p className="mt-2 text-sm">
                    Onde n é o número de mols do soluto e V é o volume da solução em litros.
                    <br />Unidade: mol/L
                  </p>
                </div>
                
                <div className="bg-chemistry-50 rounded-lg p-6">
                  <h4 className="font-medium mb-3">Concentração em Porcentagem Massa/Volume (% m/v)</h4>
                  <Formula>
                    <span className="text-xl">% m/v = <span className="formula-highlight">m (g)</span> ÷ <span className="formula-highlight">V (mL)</span> × 100</span>
                  </Formula>
                  <p className="mt-2 text-sm">
                    Onde m é a massa do soluto em gramas e V é o volume da solução em mililitros.
                    <br />Unidade: % (g/100mL)
                  </p>
                </div>
                
                <div className="bg-chemistry-50 rounded-lg p-6">
                  <h4 className="font-medium mb-3">Concentração em Porcentagem Massa/Massa (% m/m)</h4>
                  <Formula>
                    <span className="text-xl">% m/m = <span className="formula-highlight">m<sub>soluto</sub> (g)</span> ÷ <span className="formula-highlight">m<sub>solução</sub> (g)</span> × 100</span>
                  </Formula>
                  <p className="mt-2 text-sm">
                    Onde m<sub>soluto</sub> é a massa do soluto e m<sub>solução</sub> é a massa total da solução.
                    <br />Unidade: % (g/100g)
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Cálculo de Massa a partir de Concentração e Volume</h3>
              
              <Formula>
                <span className="text-xl">m (g) = <span className="formula-highlight">C (g/L)</span> × <span className="formula-highlight">V (L)</span></span>
              </Formula>
              
              <div className="bg-white border border-chemistry-100 rounded-lg p-6">
                <h4 className="font-medium mb-3">Exemplo:</h4>
                <p className="mb-3">
                  Precisamos preparar 250 mL de uma solução de glicose com concentração 5 g/L. 
                  Qual a massa de glicose necessária?
                </p>
                
                <div className="bg-chemistry-50 rounded-md p-4">
                  <p className="font-medium mb-2">Resolução:</p>
                  <ol className="space-y-2">
                    <li>Dados: C = 5 g/L, V = 250 mL = 0,25 L</li>
                    <li>Usando a fórmula: m = C × V</li>
                    <li>m = 5 g/L × 0,25 L = 1,25 g</li>
                    <li>Portanto, precisamos de 1,25 g de glicose.</li>
                  </ol>
                </div>
                
                <div className="mt-4">
                  <p className="font-medium mb-2">Usando Regra de Três:</p>
                  <div className="pl-4">
                    <p>Se 1 L da solução contém 5 g de glicose</p>
                    <p>Então 0,25 L contém x g de glicose</p>
                    <div className="my-2">
                      <p>1 L → 5 g</p>
                      <p>0,25 L → x g</p>
                    </div>
                    <p>x = 5 g × 0,25 L ÷ 1 L = 1,25 g</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Cálculo de Volume a partir de Massa e Concentração</h3>
              
              <Formula>
                <span className="text-xl">V (L) = <span className="formula-highlight">m (g)</span> ÷ <span className="formula-highlight">C (g/L)</span></span>
              </Formula>
              
              <div className="bg-white border border-chemistry-100 rounded-lg p-6">
                <h4 className="font-medium mb-3">Exemplo:</h4>
                <p className="mb-3">
                  Temos 3 g de NaOH e precisamos preparar uma solução com concentração 0,5 g/L. 
                  Qual o volume final da solução?
                </p>
                
                <div className="bg-chemistry-50 rounded-md p-4">
                  <p className="font-medium mb-2">Resolução:</p>
                  <ol className="space-y-2">
                    <li>Dados: m = 3 g, C = 0,5 g/L</li>
                    <li>Usando a fórmula: V = m ÷ C</li>
                    <li>V = 3 g ÷ 0,5 g/L = 6 L</li>
                    <li>Portanto, o volume final da solução deve ser 6 litros.</li>
                  </ol>
                </div>
                
                <div className="mt-4">
                  <p className="font-medium mb-2">Usando Regra de Três:</p>
                  <div className="pl-4">
                    <p>Se 0,5 g de NaOH está em 1 L de solução</p>
                    <p>Então 3 g de NaOH está em x L de solução</p>
                    <div className="my-2">
                      <p>0,5 g → 1 L</p>
                      <p>3 g → x L</p>
                    </div>
                    <p>x = 1 L × 3 g ÷ 0,5 g = 6 L</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Fórmula da Diluição</h3>
              
              <Formula description="Onde C₁ é a concentração inicial, V₁ é o volume inicial, C₂ é a concentração final e V₂ é o volume final.">
                <span className="text-xl"><span className="formula-highlight">C₁ × V₁</span> = <span className="formula-highlight">C₂ × V₂</span></span>
              </Formula>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-chemistry-50 rounded-lg p-6">
                  <h4 className="font-medium mb-3">Para encontrar a concentração final:</h4>
                  <Formula>
                    <span className="text-xl">C₂ = <span className="formula-highlight">C₁ × V₁</span> ÷ <span className="formula-highlight">V₂</span></span>
                  </Formula>
                </div>
                
                <div className="bg-chemistry-50 rounded-lg p-6">
                  <h4 className="font-medium mb-3">Para encontrar o volume final:</h4>
                  <Formula>
                    <span className="text-xl">V₂ = <span className="formula-highlight">C₁ × V₁</span> ÷ <span className="formula-highlight">C₂</span></span>
                  </Formula>
                </div>
              </div>
              
              <div className="bg-white border border-chemistry-100 rounded-lg p-6">
                <h4 className="font-medium mb-3">Exemplo de Diluição:</h4>
                <p className="mb-3">
                  Uma solução de HCl tem concentração 2 mol/L. Quanto de água devemos adicionar a 100 mL 
                  desta solução para obter uma concentração de 0,5 mol/L?
                </p>
                
                <div className="bg-chemistry-50 rounded-md p-4">
                  <p className="font-medium mb-2">Resolução:</p>
                  <ol className="space-y-2">
                    <li>Dados: C₁ = 2 mol/L, V₁ = 100 mL = 0,1 L, C₂ = 0,5 mol/L</li>
                    <li>Queremos encontrar V₂ (volume final)</li>
                    <li>Usando a fórmula: V₂ = C₁ × V₁ ÷ C₂</li>
                    <li>V₂ = 2 mol/L × 0,1 L ÷ 0,5 mol/L = 0,4 L = 400 mL</li>
                    <li>Volume de água a adicionar = V₂ - V₁ = 400 mL - 100 mL = 300 mL</li>
                  </ol>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Conversão entre Mols, Gramas e Volume usando Molaridade</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Formula>
                  <span className="text-xl">m (g) = <span className="formula-highlight">n (mol)</span> × <span className="formula-highlight">MM (g/mol)</span></span>
                </Formula>
                
                <Formula>
                  <span className="text-xl">n (mol) = <span className="formula-highlight">m (g)</span> ÷ <span className="formula-highlight">MM (g/mol)</span></span>
                </Formula>
                
                <Formula>
                  <span className="text-xl">n (mol) = <span className="formula-highlight">M (mol/L)</span> × <span className="formula-highlight">V (L)</span></span>
                </Formula>
                
                <Formula>
                  <span className="text-xl">V (L) = <span className="formula-highlight">n (mol)</span> ÷ <span className="formula-highlight">M (mol/L)</span></span>
                </Formula>
              </div>
              
              <div className="bg-white border border-chemistry-100 rounded-lg p-6">
                <h4 className="font-medium mb-3">Exemplo:</h4>
                <p className="mb-3">
                  Queremos preparar 500 mL de uma solução de NaOH 0,1 mol/L. A massa molar do NaOH é 40 g/mol. 
                  Qual a massa de NaOH necessária?
                </p>
                
                <div className="bg-chemistry-50 rounded-md p-4">
                  <p className="font-medium mb-2">Resolução:</p>
                  <ol className="space-y-2">
                    <li>Dados: M = 0,1 mol/L, V = 500 mL = 0,5 L, MM = 40 g/mol</li>
                    <li>Primeiro, calculamos o número de mols: n = M × V</li>
                    <li>n = 0,1 mol/L × 0,5 L = 0,05 mol</li>
                    <li>Agora, calculamos a massa: m = n × MM</li>
                    <li>m = 0,05 mol × 40 g/mol = 2 g</li>
                    <li>Portanto, precisamos de 2 g de NaOH.</li>
                  </ol>
                </div>
                
                <div className="mt-4">
                  <p className="font-medium mb-2">Usando Regra de Três:</p>
                  <div className="pl-4">
                    <p>Primeiro, encontramos o número de mols:</p>
                    <div className="my-2">
                      <p>1 L → 0,1 mol de NaOH</p>
                      <p>0,5 L → x mol de NaOH</p>
                    </div>
                    <p>x = 0,1 mol × 0,5 L ÷ 1 L = 0,05 mol</p>
                    
                    <p className="mt-3">Depois, calculamos a massa:</p>
                    <div className="my-2">
                      <p>1 mol de NaOH → 40 g</p>
                      <p>0,05 mol de NaOH → y g</p>
                    </div>
                    <p>y = 40 g × 0,05 mol ÷ 1 mol = 2 g</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Conversão entre Diferentes Tipos de Concentração</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-chemistry-50 rounded-lg p-6">
                  <h4 className="font-medium mb-3">De Concentração Comum para Molaridade:</h4>
                  <Formula>
                    <span className="text-xl">M (mol/L) = <span className="formula-highlight">C (g/L)</span> ÷ <span className="formula-highlight">MM (g/mol)</span></span>
                  </Formula>
                </div>
                
                <div className="bg-chemistry-50 rounded-lg p-6">
                  <h4 className="font-medium mb-3">De Molaridade para Concentração Comum:</h4>
                  <Formula>
                    <span className="text-xl">C (g/L) = <span className="formula-highlight">M (mol/L)</span> × <span className="formula-highlight">MM (g/mol)</span></span>
                  </Formula>
                </div>
                
                <div className="bg-chemistry-50 rounded-lg p-6">
                  <h4 className="font-medium mb-3">De % m/v para Concentração Comum:</h4>
                  <Formula>
                    <span className="text-xl">C (g/L) = <span className="formula-highlight">% m/v</span> × 10</span>
                  </Formula>
                  <p className="mt-2 text-sm">
                    Exemplo: Uma solução 5% m/v tem concentração de 50 g/L
                  </p>
                </div>
                
                <div className="bg-chemistry-50 rounded-lg p-6">
                  <h4 className="font-medium mb-3">De Concentração Comum para % m/v:</h4>
                  <Formula>
                    <span className="text-xl">% m/v = <span className="formula-highlight">C (g/L)</span> ÷ 10</span>
                  </Formula>
                  <p className="mt-2 text-sm">
                    Exemplo: Uma solução 30 g/L tem concentração de 3% m/v
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Tabela de Conversão de Unidades</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-chemistry-100">
                  <th className="border border-chemistry-200 p-3 text-left">Grandeza</th>
                  <th className="border border-chemistry-200 p-3 text-left">Unidade Base</th>
                  <th className="border border-chemistry-200 p-3 text-left">Conversões Comuns</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-chemistry-200 p-3 font-medium">Volume</td>
                  <td className="border border-chemistry-200 p-3">Litro (L)</td>
                  <td className="border border-chemistry-200 p-3">
                    1 L = 1000 mL = 1000 cm³<br />
                    1 mL = 0,001 L = 1 cm³
                  </td>
                </tr>
                <tr className="bg-chemistry-50">
                  <td className="border border-chemistry-200 p-3 font-medium">Massa</td>
                  <td className="border border-chemistry-200 p-3">Grama (g)</td>
                  <td className="border border-chemistry-200 p-3">
                    1 kg = 1000 g<br />
                    1 g = 1000 mg<br />
                    1 mg = 0,001 g
                  </td>
                </tr>
                <tr>
                  <td className="border border-chemistry-200 p-3 font-medium">Concentração</td>
                  <td className="border border-chemistry-200 p-3">g/L ou mol/L</td>
                  <td className="border border-chemistry-200 p-3">
                    1 g/L = 1000 mg/L = 1000 ppm<br />
                    1% m/v = 10 g/L<br />
                    1 mol/L = 1 M
                  </td>
                </tr>
                <tr className="bg-chemistry-50">
                  <td className="border border-chemistry-200 p-3 font-medium">Quantidade de Matéria</td>
                  <td className="border border-chemistry-200 p-3">Mol (mol)</td>
                  <td className="border border-chemistry-200 p-3">
                    1 mol = 6,022 × 10²³ partículas<br />
                    1 mmol = 0,001 mol
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-chemistry-50 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-3">Exercite seus Conhecimentos</h3>
            <p className="mb-4">
              Pratique o que aprendeu com nossos exercícios interativos sobre soluções químicas.
            </p>
            <Button asChild>
              <Link to="/exercicios" className="flex items-center justify-center">
                <TestTube className="mr-2 h-4 w-4" />
                Ver Exercícios
              </Link>
            </Button>
          </div>
          
          <div className="bg-chemistry-50 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-3">Revisar Teoria</h3>
            <p className="mb-4">
              Volte para revisar os conceitos fundamentais sobre soluções e concentrações.
            </p>
            <Button asChild variant="outline">
              <Link to="/teoria" className="flex items-center justify-center">
                <ArrowRight className="mr-2 h-4 w-4" />
                Teoria e Conceitos
              </Link>
            </Button>
          </div>
          
          <div className="bg-chemistry-50 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-3">Diluição de Soluções</h3>
            <p className="mb-4">
              Aprenda mais sobre o processo de diluição e como calcular novas concentrações.
            </p>
            <Button asChild variant="outline">
              <Link to="/diluicao" className="flex items-center justify-center">
                <FlaskConical className="mr-2 h-4 w-4" />
                Ver Diluição
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Formulas;
