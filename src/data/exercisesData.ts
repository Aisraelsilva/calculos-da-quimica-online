
import { Exercise } from "@/types/exercise";

export const exercises: Exercise[] = [
  {
    id: 1,
    question: "Uma solução contém 40g de NaCl dissolvidos em 200g de água. Qual a porcentagem em massa do soluto?",
    options: [
      { text: "16,7%", isCorrect: true },
      { text: "20%", isCorrect: false },
      { text: "25%", isCorrect: false },
      { text: "40%", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'percentual',
    solution: {
      detailed: "Para calcular a porcentagem em massa, dividimos a massa do soluto pela massa total da solução e multiplicamos por 100.",
      steps: [
        "Identifique os valores: m(soluto) = 40g, m(solvente) = 200g",
        "Calcule a massa total da solução: m(solução) = m(soluto) + m(solvente) = 40g + 200g = 240g",
        "Calcule a porcentagem em massa: %(m/m) = [m(soluto) ÷ m(solução)] × 100",
        "%(m/m) = [40g ÷ 240g] × 100 = 16,7%"
      ],
      ruleOfThree: {
        explanation: "Usando a regra de três, podemos estabelecer que se 240g de solução contém 40g de soluto, então 100g de solução conterá uma quantidade proporcional de soluto, que será a porcentagem em massa.",
        steps: [
          "Estabeleça a proporção: Se em 240g de solução há 40g de soluto, em 100g de solução haverá x g de soluto",
          "Monte a regra de três: 240g → 40g, 100g → x g",
          "Resolva para x: x = (40g × 100g) ÷ 240g = 16,7g",
          "Como estamos calculando para 100g de solução, o resultado 16,7g corresponde diretamente a 16,7% em massa"
        ]
      }
    }
  },
  {
    id: 2,
    question: "Qual a massa de glicose (C₆H₁₂O₆) necessária para preparar 500 mL de uma solução 0,4 mol/L? (M = 180 g/mol)",
    options: [
      { text: "36 g", isCorrect: true },
      { text: "72 g", isCorrect: false },
      { text: "18 g", isCorrect: false },
      { text: "90 g", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular a massa, primeiro determinamos o número de mols usando a concentração molar e o volume, depois convertemos para massa usando a massa molar.",
      steps: [
        "Identifique os valores: C = 0,4 mol/L, V = 500 mL = 0,5 L, M = 180 g/mol",
        "Calcule o número de mols: n = C × V = 0,4 mol/L × 0,5 L = 0,2 mol",
        "Calcule a massa: m = n × M = 0,2 mol × 180 g/mol = 36 g"
      ],
      ruleOfThree: {
        explanation: "Usando a regra de três, podemos resolver este problema em duas etapas: primeiro calculamos a quantidade de mols na solução, depois convertemos para massa.",
        steps: [
          "Etapa 1: Calcular o número de mols usando a concentração e o volume",
          "Se 1 L de solução contém 0,4 mol de glicose, então 0,5 L conterá x mol",
          "Monte a regra de três: 1 L → 0,4 mol, 0,5 L → x mol",
          "Resolva para x: x = (0,4 mol × 0,5 L) ÷ 1 L = 0,2 mol",
          "Etapa 2: Converter mols para massa usando a massa molar",
          "Se 1 mol de glicose tem massa de 180 g, então 0,2 mol terá massa y",
          "Monte a regra de três: 1 mol → 180 g, 0,2 mol → y g",
          "Resolva para y: y = (180 g × 0,2 mol) ÷ 1 mol = 36 g"
        ]
      }
    }
  },
  {
    id: 3,
    question: "Uma solução aquosa de ácido nítrico apresenta 8g de soluto em 100 mL. Qual sua concentração em g/L?",
    options: [
      { text: "80 g/L", isCorrect: true },
      { text: "8 g/L", isCorrect: false },
      { text: "0,8 g/L", isCorrect: false },
      { text: "800 g/L", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'concentracao',
    solution: {
      detailed: "Para calcular a concentração em g/L, dividimos a massa do soluto pelo volume da solução em litros.",
      steps: [
        "Identifique os valores: m = 8g, V = 100 mL = 0,1 L",
        "Aplique a fórmula: C = m ÷ V = 8g ÷ 0,1 L = 80 g/L"
      ],
      ruleOfThree: {
        explanation: "Usando a regra de três, podemos estabelecer que se 0,1 L de solução contém 8g de soluto, então 1 L de solução conterá uma quantidade proporcional de soluto, que será a concentração em g/L.",
        steps: [
          "Estabeleça a proporção: Se em 0,1 L de solução há 8g de soluto, em 1 L de solução haverá x g de soluto",
          "Monte a regra de três: 0,1 L → 8g, 1 L → x g",
          "Resolva para x: x = (8g × 1 L) ÷ 0,1 L = 80g",
          "Como estamos calculando para 1 L de solução, o resultado 80g corresponde diretamente a 80 g/L"
        ]
      }
    }
  },
  {
    id: 4,
    question: "Determine a massa de KCl presente em 250 mL de uma solução 0,1 mol/L. (M = 74,5 g/mol)",
    options: [
      { text: "1,86 g", isCorrect: true },
      { text: "7,45 g", isCorrect: false },
      { text: "18,6 g", isCorrect: false },
      { text: "0,186 g", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular a massa, primeiro determinamos o número de mols usando a concentração molar e o volume, depois convertemos para massa usando a massa molar.",
      steps: [
        "Identifique os valores: C = 0,1 mol/L, V = 250 mL = 0,25 L, M = 74,5 g/mol",
        "Calcule o número de mols: n = C × V = 0,1 mol/L × 0,25 L = 0,025 mol",
        "Calcule a massa: m = n × M = 0,025 mol × 74,5 g/mol = 1,86 g"
      ],
      ruleOfThree: {
        explanation: "Usando a regra de três, podemos resolver este problema em duas etapas: primeiro calculamos a quantidade de mols na solução, depois convertemos para massa.",
        steps: [
          "Etapa 1: Calcular o número de mols usando a concentração e o volume",
          "Se 1 L de solução contém 0,1 mol de KCl, então 0,25 L conterá x mol",
          "Monte a regra de três: 1 L → 0,1 mol, 0,25 L → x mol",
          "Resolva para x: x = (0,1 mol × 0,25 L) ÷ 1 L = 0,025 mol",
          "Etapa 2: Converter mols para massa usando a massa molar",
          "Se 1 mol de KCl tem massa de 74,5 g, então 0,025 mol terá massa y",
          "Monte a regra de três: 1 mol → 74,5 g, 0,025 mol → y g",
          "Resolva para y: y = (74,5 g × 0,025 mol) ÷ 1 mol = 1,86 g"
        ]
      }
    }
  },
  {
    id: 5,
    question: "Qual o volume de solução 2 mol/L que contém 0,5 mol de soluto?",
    options: [
      { text: "250 mL", isCorrect: true },
      { text: "1 L", isCorrect: false },
      { text: "2 L", isCorrect: false },
      { text: "500 mL", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular o volume, usamos a relação entre concentração molar, número de mols e volume.",
      steps: [
        "Identifique os valores: C = 2 mol/L, n = 0,5 mol",
        "Aplique a fórmula: C = n ÷ V, então V = n ÷ C",
        "V = 0,5 mol ÷ 2 mol/L = 0,25 L = 250 mL"
      ],
      ruleOfThree: {
        explanation: "Usando a regra de três, podemos estabelecer que se 1 L de solução contém 2 mol de soluto, então para conter 0,5 mol de soluto precisaremos de um volume proporcional.",
        steps: [
          "Estabeleça a proporção: Se 2 mol de soluto estão em 1 L de solução, então 0,5 mol de soluto estarão em x L de solução",
          "Monte a regra de três: 2 mol → 1 L, 0,5 mol → x L",
          "Resolva para x: x = (1 L × 0,5 mol) ÷ 2 mol = 0,25 L = 250 mL",
          "Portanto, o volume necessário é 250 mL"
        ]
      }
    }
  },
  {
    id: 6,
    question: "Uma solução de H₂SO₄ tem densidade 1,2 g/mL e contém 20% em massa de soluto. Qual a concentração em g/L?",
    options: [
      { text: "240 g/L", isCorrect: true },
      { text: "24 g/L", isCorrect: false },
      { text: "200 g/L", isCorrect: false },
      { text: "20 g/L", isCorrect: false }
    ],
    difficulty: 'hard',
    category: 'densidade',
    solution: {
      detailed: "Para calcular a concentração em g/L, usamos a porcentagem em massa e a densidade.",
      steps: [
        "Identifique os valores: densidade = 1,2 g/mL, porcentagem = 20%",
        "Em 100g de solução, temos 20g de soluto",
        "Em 1mL de solução (1,2g), temos 1,2g × 0,2 = 0,24g de soluto",
        "Em 1L (1000mL), temos 0,24g × 1000 = 240g de soluto",
        "Portanto, a concentração é 240 g/L"
      ],
      ruleOfThree: {
        explanation: "Usando a regra de três, podemos resolver este problema em duas etapas: primeiro calculamos a quantidade de soluto em 1 mL de solução, depois extrapolamos para 1 L.",
        steps: [
          "Etapa 1: Calcular a massa de soluto em 1 mL de solução",
          "Se 100g de solução contém 20g de soluto, então 1,2g de solução (1 mL) conterá x g de soluto",
          "Monte a regra de três: 100g de solução → 20g de soluto, 1,2g de solução → x g de soluto",
          "Resolva para x: x = (20g × 1,2g) ÷ 100g = 0,24g de soluto em 1 mL",
          "Etapa 2: Calcular a massa de soluto em 1 L (1000 mL) de solução",
          "Se 1 mL contém 0,24g de soluto, então 1000 mL conterá y g de soluto",
          "Monte a regra de três: 1 mL → 0,24g, 1000 mL → y g",
          "Resolva para y: y = (0,24g × 1000 mL) ÷ 1 mL = 240g",
          "Portanto, a concentração é 240 g/L"
        ]
      }
    }
  },
  {
    id: 7,
    question: "Se diluirmos 100 mL de solução 2 mol/L para um volume final de 500 mL, qual será a nova concentração?",
    options: [
      { text: "0,4 mol/L", isCorrect: true },
      { text: "0,2 mol/L", isCorrect: false },
      { text: "1 mol/L", isCorrect: false },
      { text: "0,5 mol/L", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'diluicao',
    solution: {
      detailed: "Em uma diluição, a quantidade de soluto permanece constante. Usamos a fórmula C₁V₁ = C₂V₂.",
      steps: [
        "Identifique os valores: C₁ = 2 mol/L, V₁ = 100 mL, V₂ = 500 mL",
        "Aplique a fórmula: C₁V₁ = C₂V₂",
        "2 mol/L × 100 mL = C₂ × 500 mL",
        "C₂ = (2 mol/L × 100 mL) ÷ 500 mL = 0,4 mol/L"
      ],
      ruleOfThree: {
        explanation: "Usando a regra de três, podemos resolver este problema considerando que a quantidade total de soluto permanece constante durante a diluição.",
        steps: [
          "Etapa 1: Calcular a quantidade total de soluto na solução inicial",
          "Em 100 mL de solução 2 mol/L, temos: 2 mol/L × 0,1 L = 0,2 mol de soluto",
          "Etapa 2: Estabelecer a proporção para a nova concentração",
          "Se 0,2 mol de soluto está em 500 mL (0,5 L) de solução, a concentração será:",
          "Monte a regra de três: 1 L → x mol, 0,5 L → 0,2 mol",
          "Resolva para x: x = (0,2 mol × 1 L) ÷ 0,5 L = 0,4 mol/L",
          "Portanto, a nova concentração é 0,4 mol/L"
        ]
      }
    }
  },
  {
    id: 8,
    question: "Quantos gramas de soluto existem em 250 mL de uma solução cuja concentração é 60 g/L?",
    options: [
      { text: "15 g", isCorrect: true },
      { text: "6 g", isCorrect: false },
      { text: "150 g", isCorrect: false },
      { text: "1,5 g", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'concentracao',
    solution: {
      detailed: "Para calcular a massa do soluto, multiplicamos a concentração pelo volume em litros.",
      steps: [
        "Identifique os valores: C = 60 g/L, V = 250 mL = 0,25 L",
        "Aplique a fórmula: m = C × V = 60 g/L × 0,25 L = 15 g"
      ],
      ruleOfThree: {
        explanation: "Usando a regra de três, podemos estabelecer que se 1 L de solução contém 60g de soluto, então 0,25 L de solução conterá uma quantidade proporcional de soluto.",
        steps: [
          "Estabeleça a proporção: Se em 1 L de solução há 60g de soluto, em 0,25 L de solução haverá x g de soluto",
          "Monte a regra de três: 1 L → 60g, 0,25 L → x g",
          "Resolva para x: x = (60g × 0,25 L) ÷ 1 L = 15g",
          "Portanto, a massa de soluto é 15g"
        ]
      }
    }
  },
  {
    id: 9,
    question: "Uma amostra de 250 mL de solução salina possui 5% de NaCl em massa. Sabendo que a densidade é 1 g/mL, qual a massa de NaCl presente?",
    options: [
      { text: "12,5 g", isCorrect: true },
      { text: "5 g", isCorrect: false },
      { text: "25 g", isCorrect: false },
      { text: "50 g", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'percentual',
    solution: {
      detailed: "Para calcular a massa de NaCl, primeiro determinamos a massa total da solução usando a densidade, depois usamos a porcentagem para encontrar a massa do soluto.",
      steps: [
        "Identifique os valores: V = 250 mL, d = 1 g/mL, %(m/m) = 5%",
        "Calcule a massa total da solução: m(solução) = V × d = 250 mL × 1 g/mL = 250 g",
        "Calcule a massa de NaCl: m(NaCl) = 5% × m(solução) = 0,05 × 250 g = 12,5 g"
      ],
      ruleOfThree: {
        explanation: "Usando a regra de três, podemos resolver este problema em duas etapas: primeiro calculamos a massa total da solução, depois calculamos a massa de NaCl usando a porcentagem.",
        steps: [
          "Etapa 1: Calcular a massa total da solução usando a densidade",
          "Se 1 mL de solução tem massa de 1g, então 250 mL terá massa m",
          "Monte a regra de três: 1 mL → 1g, 250 mL → m g",
          "Resolva para m: m = (1g × 250 mL) ÷ 1 mL = 250g",
          "Etapa 2: Calcular a massa de NaCl usando a porcentagem",
          "Se 100g de solução contém 5g de NaCl, então 250g de solução conterá x g de NaCl",
          "Monte a regra de três: 100g de solução → 5g de NaCl, 250g de solução → x g de NaCl",
          "Resolva para x: x = (5g × 250g) ÷ 100g = 12,5g",
          "Portanto, a massa de NaCl é 12,5g"
        ]
      }
    }
  },
  {
    id: 10,
    question: "Quantos mL de uma solução 3 mol/L de HCl são necessários para obter 0,9 mol de soluto?",
    options: [
      { text: "300 mL", isCorrect: true },
      { text: "30 mL", isCorrect: false },
      { text: "3000 mL", isCorrect: false },
      { text: "0,3 mL", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular o volume, usamos a relação entre concentração molar e número de mols.",
      steps: [
        "Identifique os valores: C = 3 mol/L, n = 0,9 mol",
        "Aplique a fórmula: C = n ÷ V, então V = n ÷ C",
        "V = 0,9 mol ÷ 3 mol/L = 0,3 L = 300 mL"
      ],
      ruleOfThree: {
        explanation: "Usando a regra de três, podemos estabelecer que se 1 L de solução contém 3 mol de HCl, então para conter 0,9 mol de HCl precisaremos de um volume proporcional.",
        steps: [
          "Estabeleça a proporção: Se 3 mol de HCl estão em 1 L de solução, então 0,9 mol de HCl estarão em x L de solução",
          "Monte a regra de três: 3 mol → 1 L, 0,9 mol → x L",
          "Resolva para x: x = (1 L × 0,9 mol) ÷ 3 mol = 0,3 L = 300 mL",
          "Portanto, o volume necessário é 300 mL"
        ]
      }
    }
  },
  {
    id: 11,
    question: "Qual o volume necessário de uma solução 5 g/L para obter 25g de soluto?",
    options: [
      { text: "5 L", isCorrect: true },
      { text: "0,5 L", isCorrect: false },
      { text: "50 L", isCorrect: false },
      { text: "125 mL", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'concentracao',
    solution: {
      detailed: "Para calcular o volume, dividimos a massa desejada pela concentração.",
      steps: [
        "Identifique os valores: C = 5 g/L, m = 25 g",
        "Aplique a fórmula: C = m ÷ V, então V = m ÷ C",
        "V = 25 g ÷ 5 g/L = 5 L"
      ]
    }
  },
  {
    id: 12,
    question: "Uma solução contém 15g de soluto em 300 mL. Qual a sua concentração em g/L?",
    options: [
      { text: "50 g/L", isCorrect: true },
      { text: "5 g/L", isCorrect: false },
      { text: "0,05 g/L", isCorrect: false },
      { text: "500 g/L", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'concentracao',
    solution: {
      detailed: "Para calcular a concentração em g/L, dividimos a massa do soluto pelo volume da solução em litros.",
      steps: [
        "Identifique os valores: m = 15 g, V = 300 mL = 0,3 L",
        "Aplique a fórmula: C = m ÷ V = 15 g ÷ 0,3 L = 50 g/L"
      ]
    }
  },
  {
    id: 13,
    question: "Qual a massa de H₂SO₄ necessária para preparar 250 mL de uma solução 0,2 mol/L? (M = 98 g/mol)",
    options: [
      { text: "4,9 g", isCorrect: true },
      { text: "49 g", isCorrect: false },
      { text: "0,49 g", isCorrect: false },
      { text: "19,6 g", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular a massa, primeiro determinamos o número de mols usando a concentração molar e o volume, depois convertemos para massa usando a massa molar.",
      steps: [
        "Identifique os valores: C = 0,2 mol/L, V = 250 mL = 0,25 L, M = 98 g/mol",
        "Calcule o número de mols: n = C × V = 0,2 mol/L × 0,25 L = 0,05 mol",
        "Calcule a massa: m = n × M = 0,05 mol × 98 g/mol = 4,9 g"
      ]
    }
  },
  {
    id: 14,
    question: "Em 500 mL de solução de NaOH há 4g de soluto. Qual a concentração em g/L?",
    options: [
      { text: "8 g/L", isCorrect: true },
      { text: "0,8 g/L", isCorrect: false },
      { text: "80 g/L", isCorrect: false },
      { text: "800 g/L", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'concentracao',
    solution: {
      detailed: "Para calcular a concentração em g/L, dividimos a massa do soluto pelo volume da solução em litros.",
      steps: [
        "Identifique os valores: m = 4 g, V = 500 mL = 0,5 L",
        "Aplique a fórmula: C = m ÷ V = 4 g ÷ 0,5 L = 8 g/L"
      ]
    }
  },
  {
    id: 15,
    question: "Uma solução apresenta densidade de 1,1 g/mL e contém 25% de soluto. Qual a concentração em g/L?",
    options: [
      { text: "275 g/L", isCorrect: true },
      { text: "27,5 g/L", isCorrect: false },
      { text: "250 g/L", isCorrect: false },
      { text: "25 g/L", isCorrect: false }
    ],
    difficulty: 'hard',
    category: 'densidade',
    solution: {
      detailed: "Para calcular a concentração em g/L, usamos a porcentagem em massa e a densidade.",
      steps: [
        "Identifique os valores: densidade = 1,1 g/mL, porcentagem = 25%",
        "Em 100g de solução, temos 25g de soluto",
        "Em 1mL de solução (1,1g), temos 1,1g × 0,25 = 0,275g de soluto",
        "Em 1L (1000mL), temos 0,275g × 1000 = 275g de soluto",
        "Portanto, a concentração é 275 g/L"
      ]
    }
  },
  {
    id: 16,
    question: "Qual o volume de água necessário para diluir 100 mL de solução 1 mol/L para obter uma concentração de 0,25 mol/L?",
    options: [
      { text: "300 mL", isCorrect: true },
      { text: "400 mL", isCorrect: false },
      { text: "75 mL", isCorrect: false },
      { text: "200 mL", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'diluicao',
    solution: {
      detailed: "Para calcular o volume de água necessário para diluição, usamos a fórmula C₁V₁ = C₂V₂ para encontrar o volume final e depois subtraímos o volume inicial.",
      steps: [
        "Identifique os valores: C₁ = 1 mol/L, V₁ = 100 mL, C₂ = 0,25 mol/L",
        "Use a fórmula C₁V₁ = C₂V₂ para encontrar V₂: 1 mol/L × 100 mL = 0,25 mol/L × V₂",
        "V₂ = (1 mol/L × 100 mL) ÷ 0,25 mol/L = 400 mL",
        "Volume de água = V₂ - V₁ = 400 mL - 100 mL = 300 mL"
      ]
    }
  },
  {
    id: 17,
    question: "Uma solução de HCl possui concentração 36,5 g/L. Quantos moles de HCl estão presentes em 250 mL? (M = 36,5 g/mol)",
    options: [
      { text: "0,25 mol", isCorrect: true },
      { text: "2,5 mol", isCorrect: false },
      { text: "0,025 mol", isCorrect: false },
      { text: "1 mol", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'concentracao',
    solution: {
      detailed: "Para calcular o número de mols, primeiro determinamos a massa usando a concentração e o volume, depois dividimos pela massa molar.",
      steps: [
        "Identifique os valores: C = 36,5 g/L, V = 250 mL = 0,25 L, M = 36,5 g/mol",
        "Calcule a massa do HCl: m = C × V = 36,5 g/L × 0,25 L = 9,125 g",
        "Calcule o número de mols: n = m ÷ M = 9,125 g ÷ 36,5 g/mol = 0,25 mol"
      ]
    }
  },
  {
    id: 18,
    question: "Qual a porcentagem em massa de uma solução contendo 10g de soluto em 90g de solvente?",
    options: [
      { text: "10%", isCorrect: true },
      { text: "9%", isCorrect: false },
      { text: "90%", isCorrect: false },
      { text: "1%", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'percentual',
    solution: {
      detailed: "Para calcular a porcentagem em massa, dividimos a massa do soluto pela massa total da solução e multiplicamos por 100.",
      steps: [
        "Identifique os valores: m(soluto) = 10g, m(solvente) = 90g",
        "Calcule a massa total: m(total) = m(soluto) + m(solvente) = 10g + 90g = 100g",
        "Calcule a porcentagem: %(m/m) = [m(soluto) ÷ m(total)] × 100 = [10g ÷ 100g] × 100 = 10%"
      ]
    }
  },
  {
    id: 19,
    question: "Quantos gramas de NaOH são necessários para preparar 2 L de uma solução 0,5 mol/L? (M = 40 g/mol)",
    options: [
      { text: "40 g", isCorrect: true },
      { text: "20 g", isCorrect: false },
      { text: "80 g", isCorrect: false },
      { text: "4 g", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular a massa, primeiro determinamos o número de mols usando a concentração e o volume, depois convertemos para massa usando a massa molar.",
      steps: [
        "Identifique os valores: C = 0,5 mol/L, V = 2 L, M = 40 g/mol",
        "Calcule o número de mols: n = C × V = 0,5 mol/L × 2 L = 1 mol",
        "Calcule a massa: m = n × M = 1 mol × 40 g/mol = 40 g"
      ]
    }
  },
  {
    id: 20,
    question: "Uma solução aquosa de KNO₃ apresenta 20% em massa. Quantos gramas de KNO₃ existem em 250 g de solução?",
    options: [
      { text: "50 g", isCorrect: true },
      { text: "5 g", isCorrect: false },
      { text: "25 g", isCorrect: false },
      { text: "200 g", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'percentual',
    solution: {
      detailed: "Para calcular a massa do soluto, multiplicamos a porcentagem em massa pela massa total da solução.",
      steps: [
        "Identifique os valores: %(m/m) = 20%, m(solução) = 250 g",
        "Calcule a massa do soluto: m(soluto) = %(m/m) × m(solução) = 0,2 × 250 g = 50 g"
      ]
    }
  },
  {
    id: 21,
    question: "Qual o volume de uma solução 2 mol/L que contém 1 mol de soluto?",
    options: [
      { text: "0,5 L", isCorrect: true },
      { text: "2 L", isCorrect: false },
      { text: "5 L", isCorrect: false },
      { text: "1 L", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular o volume, usamos a relação entre concentração molar e número de mols.",
      steps: [
        "Identifique os valores: C = 2 mol/L, n = 1 mol",
        "Aplique a fórmula: C = n ÷ V, então V = n ÷ C",
        "V = 1 mol ÷ 2 mol/L = 0,5 L"
      ]
    }
  },
  {
    id: 22,
    question: "Uma solução contém 10g de soluto em 50g de solução. Qual a porcentagem em massa?",
    options: [
      { text: "20%", isCorrect: true },
      { text: "10%", isCorrect: false },
      { text: "5%", isCorrect: false },
      { text: "50%", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'percentual',
    solution: {
      detailed: "Para calcular a porcentagem em massa, dividimos a massa do soluto pela massa total da solução e multiplicamos por 100.",
      steps: [
        "Identifique os valores: m(soluto) = 10g, m(solução) = 50g",
        "Calcule a porcentagem: %(m/m) = [m(soluto) ÷ m(solução)] × 100 = [10g ÷ 50g] × 100 = 20%"
      ]
    }
  },
  {
    id: 23,
    question: "Determine a massa de soluto necessária para preparar 300 mL de solução com concentração de 0,3 mol/L. (M = 58,5 g/mol)",
    options: [
      { text: "5,265 g", isCorrect: true },
      { text: "52,65 g", isCorrect: false },
      { text: "0,5265 g", isCorrect: false },
      { text: "17,55 g", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular a massa, primeiro determinamos o número de mols usando a concentração e o volume, depois convertemos para massa usando a massa molar.",
      steps: [
        "Identifique os valores: C = 0,3 mol/L, V = 300 mL = 0,3 L, M = 58,5 g/mol",
        "Calcule o número de mols: n = C × V = 0,3 mol/L × 0,3 L = 0,09 mol",
        "Calcule a massa: m = n × M = 0,09 mol × 58,5 g/mol = 5,265 g"
      ]
    }
  },
  {
    id: 24,
    question: "Quantos mL de uma solução 0,1 mol/L contêm 0,02 mol de soluto?",
    options: [
      { text: "200 mL", isCorrect: true },
      { text: "20 mL", isCorrect: false },
      { text: "2000 mL", isCorrect: false },
      { text: "0,2 mL", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular o volume, usamos a relação entre concentração molar e número de mols.",
      steps: [
        "Identifique os valores: C = 0,1 mol/L, n = 0,02 mol",
        "Aplique a fórmula: C = n ÷ V, então V = n ÷ C",
        "V = 0,02 mol ÷ 0,1 mol/L = 0,2 L = 200 mL"
      ]
    }
  },
  {
    id: 25,
    question: "Uma solução de NaCl tem 5% em massa e densidade 1,1 g/mL. Qual sua concentração em g/L?",
    options: [
      { text: "55 g/L", isCorrect: true },
      { text: "5,5 g/L", isCorrect: false },
      { text: "50 g/L", isCorrect: false },
      { text: "5 g/L", isCorrect: false }
    ],
    difficulty: 'hard',
    category: 'densidade',
    solution: {
      detailed: "Para calcular a concentração em g/L, usamos a porcentagem em massa e a densidade.",
      steps: [
        "Identifique os valores: %(m/m) = 5%, d = 1,1 g/mL",
        "Em 100g de solução, temos 5g de soluto",
        "Em 1mL de solução (1,1g), temos 1,1g × 0,05 = 0,055g de soluto",
        "Em 1L (1000mL), temos 0,055g × 1000 = 55g de soluto",
        "Portanto, a concentração é 55 g/L"
      ]
    }
  },
  {
    id: 26,
    question: "Qual a quantidade de soluto em 150 mL de solução 12 g/L?",
    options: [
      { text: "1,8 g", isCorrect: true },
      { text: "18 g", isCorrect: false },
      { text: "0,18 g", isCorrect: false },
      { text: "0,018 g", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'concentracao',
    solution: {
      detailed: "Para calcular a massa do soluto, multiplicamos a concentração pelo volume em litros.",
      steps: [
        "Identifique os valores: C = 12 g/L, V = 150 mL = 0,15 L",
        "Aplique a fórmula: m = C × V = 12 g/L × 0,15 L = 1,8 g"
      ]
    }
  },
  {
    id: 27,
    question: "Uma solução de ácido acético tem concentração 0,8 mol/L. Quantos gramas há em 500 mL? (M = 60 g/mol)",
    options: [
      { text: "24 g", isCorrect: true },
      { text: "2,4 g", isCorrect: false },
      { text: "240 g", isCorrect: false },
      { text: "48 g", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular a massa, primeiro determinamos o número de mols usando a concentração e o volume, depois convertemos para massa usando a massa molar.",
      steps: [
        "Identifique os valores: C = 0,8 mol/L, V = 500 mL = 0,5 L, M = 60 g/mol",
        "Calcule o número de mols: n = C × V = 0,8 mol/L × 0,5 L = 0,4 mol",
        "Calcule a massa: m = n × M = 0,4 mol × 60 g/mol = 24 g"
      ]
    }
  },
  {
    id: 28,
    question: "Uma solução com 20g de soluto em 400 mL possui qual concentração?",
    options: [
      { text: "50 g/L", isCorrect: true },
      { text: "5 g/L", isCorrect: false },
      { text: "0,05 g/L", isCorrect: false },
      { text: "500 g/L", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'concentracao',
    solution: {
      detailed: "Para calcular a concentração em g/L, dividimos a massa do soluto pelo volume da solução em litros.",
      steps: [
        "Identifique os valores: m = 20 g, V = 400 mL = 0,4 L",
        "Aplique a fórmula: C = m ÷ V = 20 g ÷ 0,4 L = 50 g/L"
      ]
    }
  },
  {
    id: 29,
    question: "Se uma solução 0,5 mol/L for diluída para metade da concentração, qual o novo volume?",
    options: [
      { text: "O dobro do volume original", isCorrect: true },
      { text: "A metade do volume original", isCorrect: false },
      { text: "O mesmo volume original", isCorrect: false },
      { text: "Quatro vezes o volume original", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'diluicao',
    solution: {
      detailed: "Para calcular o novo volume após a diluição, usamos a fórmula C₁V₁ = C₂V₂.",
      steps: [
        "Identifique os valores: C₁ = 0,5 mol/L, C₂ = 0,25 mol/L (metade da concentração original)",
        "Aplique a fórmula: C₁V₁ = C₂V₂, então V₂ = (C₁ × V₁) ÷ C₂",
        "V₂ = (0,5 mol/L × V₁) ÷ 0,25 mol/L = 2 × V₁",
        "O novo volume será o dobro do volume original"
      ]
    }
  },
  {
    id: 30,
    question: "Qual a porcentagem em massa de uma solução com 30g de soluto em 120g de solução?",
    options: [
      { text: "25%", isCorrect: true },
      { text: "20%", isCorrect: false },
      { text: "30%", isCorrect: false },
      { text: "33,33%", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'percentual',
    solution: {
      detailed: "Para calcular a porcentagem em massa, dividimos a massa do soluto pela massa total da solução e multiplicamos por 100.",
      steps: [
        "Identifique os valores: m(soluto) = 30g, m(solução) = 120g",
        "Calcule a porcentagem: %(m/m) = [m(soluto) ÷ m(solução)] × 100 = [30g ÷ 120g] × 100 = 25%"
      ]
    }
  },
  {
    id: 31,
    question: "Calcule a massa de Na₂SO₄ em 1 L de solução 0,25 mol/L. (M = 142 g/mol)",
    options: [
      { text: "35,5 g", isCorrect: true },
      { text: "3,55 g", isCorrect: false },
      { text: "355 g", isCorrect: false },
      { text: "0,355 g", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular a massa, primeiro determinamos o número de mols usando a concentração e o volume, depois convertemos para massa usando a massa molar.",
      steps: [
        "Identifique os valores: C = 0,25 mol/L, V = 1 L, M = 142 g/mol",
        "Calcule o número de mols: n = C × V = 0,25 mol/L × 1 L = 0,25 mol",
        "Calcule a massa: m = n × M = 0,25 mol × 142 g/mol = 35,5 g"
      ]
    }
  },
  {
    id: 32,
    question: "Uma solução de sacarose (M = 342 g/mol) contém 1,71g em 100 mL. Qual a concentração molar?",
    options: [
      { text: "0,05 mol/L", isCorrect: true },
      { text: "0,5 mol/L", isCorrect: false },
      { text: "0,005 mol/L", isCorrect: false },
      { text: "5 mol/L", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular a concentração molar, primeiro determinamos o número de mols dividindo a massa pela massa molar, depois dividimos pelo volume em litros.",
      steps: [
        "Identifique os valores: m = 1,71 g, V = 100 mL = 0,1 L, M = 342 g/mol",
        "Calcule o número de mols: n = m ÷ M = 1,71 g ÷ 342 g/mol = 0,005 mol",
        "Calcule a concentração molar: C = n ÷ V = 0,005 mol ÷ 0,1 L = 0,05 mol/L"
      ]
    }
  },
  {
    id: 33,
    question: "Em uma solução 1 mol/L de HCl, quantos mL são necessários para obter 0,1 mol de HCl?",
    options: [
      { text: "100 mL", isCorrect: true },
      { text: "10 mL", isCorrect: false },
      { text: "1000 mL", isCorrect: false },
      { text: "0,1 mL", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular o volume, usamos a relação entre concentração molar e número de mols.",
      steps: [
        "Identifique os valores: C = 1 mol/L, n = 0,1 mol",
        "Aplique a fórmula: C = n ÷ V, então V = n ÷ C",
        "V = 0,1 mol ÷ 1 mol/L = 0,1 L = 100 mL"
      ]
    }
  },
  {
    id: 34,
    question: "Uma solução aquosa contém 40g de soluto em 160g de solvente. Qual o % em massa?",
    options: [
      { text: "20%", isCorrect: true },
      { text: "25%", isCorrect: false },
      { text: "40%", isCorrect: false },
      { text: "4%", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'percentual',
    solution: {
      detailed: "Para calcular a porcentagem em massa, dividimos a massa do soluto pela massa total da solução e multiplicamos por 100.",
      steps: [
        "Identifique os valores: m(soluto) = 40g, m(solvente) = 160g",
        "Calcule a massa total: m(total) = m(soluto) + m(solvente) = 40g + 160g = 200g",
        "Calcule a porcentagem: %(m/m) = [m(soluto) ÷ m(total)] × 100 = [40g ÷ 200g] × 100 = 20%"
      ]
    }
  },
  {
    id: 35,
    question: "Qual a massa de MgCl₂ em 500 mL de uma solução 0,2 mol/L? (M = 95 g/mol)",
    options: [
      { text: "9,5 g", isCorrect: true },
      { text: "95 g", isCorrect: false },
      { text: "0,95 g", isCorrect: false },
      { text: "19 g", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular a massa, primeiro determinamos o número de mols usando a concentração e o volume, depois convertemos para massa usando a massa molar.",
      steps: [
        "Identifique os valores: C = 0,2 mol/L, V = 500 mL = 0,5 L, M = 95 g/mol",
        "Calcule o número de mols: n = C × V = 0,2 mol/L × 0,5 L = 0,1 mol",
        "Calcule a massa: m = n × M = 0,1 mol × 95 g/mol = 9,5 g"
      ]
    }
  },
  {
    id: 36,
    question: "Uma solução com densidade 1,2 g/mL tem 30% de soluto. Qual a massa de soluto em 200 mL?",
    options: [
      { text: "72 g", isCorrect: true },
      { text: "7,2 g", isCorrect: false },
      { text: "60 g", isCorrect: false },
      { text: "36 g", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'densidade',
    solution: {
      detailed: "Para calcular a massa do soluto, primeiro determinamos a massa total da solução usando a densidade, depois multiplicamos pela porcentagem de soluto.",
      steps: [
        "Identifique os valores: d = 1,2 g/mL, V = 200 mL, %(m/m) = 30%",
        "Calcule a massa total da solução: m(solução) = d × V = 1,2 g/mL × 200 mL = 240 g",
        "Calcule a massa do soluto: m(soluto) = %(m/m) × m(solução) = 0,3 × 240 g = 72 g"
      ]
    }
  },
  {
    id: 37,
    question: "Qual o volume de uma solução 0,4 mol/L para conter 0,08 mol?",
    options: [
      { text: "200 mL", isCorrect: true },
      { text: "20 mL", isCorrect: false },
      { text: "2 L", isCorrect: false },
      { text: "0,2 L", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular o volume, usamos a relação entre concentração molar e número de mols.",
      steps: [
        "Identifique os valores: C = 0,4 mol/L, n = 0,08 mol",
        "Aplique a fórmula: C = n ÷ V, então V = n ÷ C",
        "V = 0,08 mol ÷ 0,4 mol/L = 0,2 L = 200 mL"
      ]
    }
  },
  {
    id: 38,
    question: "Quantos mL de uma solução 2 mol/L são necessários para obter 146 g de NaCl? (M = 58,5 g/mol)",
    options: [
      { text: "1250 mL", isCorrect: true },
      { text: "125 mL", isCorrect: false },
      { text: "12,5 L", isCorrect: false },
      { text: "292 mL", isCorrect: false }
    ],
    difficulty: 'hard',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular o volume, primeiro convertemos a massa para mols usando a massa molar, depois usamos a relação entre concentração molar e número de mols.",
      steps: [
        "Identifique os valores: m = 146 g, M = 58,5 g/mol, C = 2 mol/L",
        "Calcule o número de mols: n = m ÷ M = 146 g ÷ 58,5 g/mol = 2,5 mol",
        "Calcule o volume: V = n ÷ C = 2,5 mol ÷ 2 mol/L = 1,25 L = 1250 mL"
      ]
    }
  },
  {
    id: 39,
    question: "Qual o volume de água necessário para diluir 50 mL de uma solução 4 mol/L até 0,5 mol/L?",
    options: [
      { text: "350 mL", isCorrect: true },
      { text: "400 mL", isCorrect: false },
      { text: "300 mL", isCorrect: false },
      { text: "250 mL", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'diluicao',
    solution: {
      detailed: "Para calcular o volume de água necessário para diluição, usamos a fórmula C₁V₁ = C₂V₂ para encontrar o volume final e depois subtraímos o volume inicial.",
      steps: [
        "Identifique os valores: C₁ = 4 mol/L, V₁ = 50 mL, C₂ = 0,5 mol/L",
        "Use a fórmula C₁V₁ = C₂V₂ para encontrar V₂: 4 mol/L × 50 mL = 0,5 mol/L × V₂",
        "V₂ = (4 mol/L × 50 mL) ÷ 0,5 mol/L = 400 mL",
        "Volume de água = V₂ - V₁ = 400 mL - 50 mL = 350 mL"
      ]
    }
  },
  {
    id: 40,
    question: "Uma solução contém 25g de soluto em 250 mL. Qual a concentração em g/L?",
    options: [
      { text: "100 g/L", isCorrect: true },
      { text: "10 g/L", isCorrect: false },
      { text: "1000 g/L", isCorrect: false },
      { text: "25 g/L", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'concentracao',
    solution: {
      detailed: "Para calcular a concentração em g/L, dividimos a massa do soluto pelo volume da solução em litros.",
      steps: [
        "Identifique os valores: m = 25 g, V = 250 mL = 0,25 L",
        "Aplique a fórmula: C = m ÷ V = 25 g ÷ 0,25 L = 100 g/L"
      ]
    }
  },
  {
    id: 41,
    question: "Determine a massa de CaCl₂ em 750 mL de solução 0,3 mol/L. (M = 111 g/mol)",
    options: [
      { text: "24,975 g", isCorrect: true },
      { text: "249,75 g", isCorrect: false },
      { text: "2,4975 g", isCorrect: false },
      { text: "83,25 g", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular a massa, primeiro determinamos o número de mols usando a concentração e o volume, depois convertemos para massa usando a massa molar.",
      steps: [
        "Identifique os valores: C = 0,3 mol/L, V = 750 mL = 0,75 L, M = 111 g/mol",
        "Calcule o número de mols: n = C × V = 0,3 mol/L × 0,75 L = 0,225 mol",
        "Calcule a massa: m = n × M = 0,225 mol × 111 g/mol = 24,975 g"
      ]
    }
  },
  {
    id: 42,
    question: "Uma solução tem concentração de 8 g/L. Qual a massa de soluto em 125 mL?",
    options: [
      { text: "1 g", isCorrect: true },
      { text: "0,1 g", isCorrect: false },
      { text: "10 g", isCorrect: false },
      { text: "0,01 g", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'concentracao',
    solution: {
      detailed: "Para calcular a massa do soluto, multiplicamos a concentração pelo volume em litros.",
      steps: [
        "Identifique os valores: C = 8 g/L, V = 125 mL = 0,125 L",
        "Aplique a fórmula: m = C × V = 8 g/L × 0,125 L = 1 g"
      ]
    }
  },
  {
    id: 43,
    question: "Uma solução de 200 mL contém 15g de soluto. Qual a porcentagem em massa se a densidade é 1 g/mL?",
    options: [
      { text: "7,5%", isCorrect: true },
      { text: "0,75%", isCorrect: false },
      { text: "75%", isCorrect: false },
      { text: "15%", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'percentual',
    solution: {
      detailed: "Para calcular a porcentagem em massa, primeiro determinamos a massa total da solução usando a densidade, depois dividimos a massa do soluto pela massa total e multiplicamos por 100.",
      steps: [
        "Identifique os valores: m(soluto) = 15g, V = 200 mL, d = 1 g/mL",
        "Calcule a massa total da solução: m(solução) = d × V = 1 g/mL × 200 mL = 200 g",
        "Calcule a porcentagem: %(m/m) = [m(soluto) ÷ m(solução)] × 100 = [15g ÷ 200g] × 100 = 7,5%"
      ]
    }
  },
  {
    id: 44,
    question: "Quantos moles de soluto há em 500 mL de solução 0,6 mol/L?",
    options: [
      { text: "0,3 mol", isCorrect: true },
      { text: "3 mol", isCorrect: false },
      { text: "0,03 mol", isCorrect: false },
      { text: "30 mol", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular o número de mols, multiplicamos a concentração molar pelo volume em litros.",
      steps: [
        "Identifique os valores: C = 0,6 mol/L, V = 500 mL = 0,5 L",
        "Calcule o número de mols: n = C × V = 0,6 mol/L × 0,5 L = 0,3 mol"
      ]
    }
  },
  {
    id: 45,
    question: "Uma solução apresenta 5% de soluto em massa. Qual a massa de soluto em 300 g de solução?",
    options: [
      { text: "15 g", isCorrect: true },
      { text: "1,5 g", isCorrect: false },
      { text: "150 g", isCorrect: false },
      { text: "0,15 g", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'percentual',
    solution: {
      detailed: "Para calcular a massa do soluto, multiplicamos a porcentagem em massa pela massa total da solução.",
      steps: [
        "Identifique os valores: %(m/m) = 5%, m(solução) = 300 g",
        "Calcule a massa do soluto: m(soluto) = %(m/m) × m(solução) = 0,05 × 300 g = 15 g"
      ]
    }
  },
  {
    id: 46,
    question: "Uma solução de glicose (180 g/mol) tem concentração de 0,1 mol/L. Quantos gramas de glicose há em 1,5 L?",
    options: [
      { text: "27 g", isCorrect: true },
      { text: "2,7 g", isCorrect: false },
      { text: "270 g", isCorrect: false },
      { text: "18 g", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular a massa, primeiro determinamos o número de mols usando a concentração e o volume, depois convertemos para massa usando a massa molar.",
      steps: [
        "Identifique os valores: C = 0,1 mol/L, V = 1,5 L, M = 180 g/mol",
        "Calcule o número de mols: n = C × V = 0,1 mol/L × 1,5 L = 0,15 mol",
        "Calcule a massa: m = n × M = 0,15 mol × 180 g/mol = 27 g"
      ]
    }
  },
  {
    id: 47,
    question: "Qual o volume de solução 3 mol/L necessário para obter 0,75 mol de soluto?",
    options: [
      { text: "250 mL", isCorrect: true },
      { text: "25 mL", isCorrect: false },
      { text: "2,5 L", isCorrect: false },
      { text: "75 mL", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular o volume, usamos a relação entre concentração molar e número de mols.",
      steps: [
        "Identifique os valores: C = 3 mol/L, n = 0,75 mol",
        "Aplique a fórmula: C = n ÷ V, então V = n ÷ C",
        "V = 0,75 mol ÷ 3 mol/L = 0,25 L = 250 mL"
      ]
    }
  },
  {
    id: 48,
    question: "Uma solução aquosa de HNO₃ tem densidade 1,4 g/mL e 20% de soluto. Qual a concentração em g/L?",
    options: [
      { text: "280 g/L", isCorrect: true },
      { text: "28 g/L", isCorrect: false },
      { text: "2800 g/L", isCorrect: false },
      { text: "200 g/L", isCorrect: false }
    ],
    difficulty: 'hard',
    category: 'densidade',
    solution: {
      detailed: "Para calcular a concentração em g/L, usamos a porcentagem em massa e a densidade.",
      steps: [
        "Identifique os valores: densidade = 1,4 g/mL, porcentagem = 20%",
        "Em 100g de solução, temos 20g de soluto",
        "Em 1mL de solução (1,4g), temos 1,4g × 0,2 = 0,28g de soluto",
        "Em 1L (1000mL), temos 0,28g × 1000 = 280g de soluto",
        "Portanto, a concentração é 280 g/L"
      ]
    }
  },
  {
    id: 49,
    question: "Qual a massa de NaCl em 250 mL de solução 0,9% (m/v)? (Densidade = 1 g/mL)",
    options: [
      { text: "2,25 g", isCorrect: true },
      { text: "22,5 g", isCorrect: false },
      { text: "0,225 g", isCorrect: false },
      { text: "9 g", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'percentual',
    solution: {
      detailed: "Para calcular a massa do soluto em uma solução com concentração %(m/v), multiplicamos a porcentagem pelo volume em mL e dividimos por 100.",
      steps: [
        "Identifique os valores: %(m/v) = 0,9%, V = 250 mL",
        "Aplique a fórmula: m = [%(m/v) × V] ÷ 100 = [0,9% × 250 mL] ÷ 100 = 2,25 g"
      ]
    }
  },
  {
    id: 50,
    question: "Uma solução contém 18g de soluto em 300 mL. Qual sua concentração em g/L?",
    options: [
      { text: "60 g/L", isCorrect: true },
      { text: "6 g/L", isCorrect: false },
      { text: "600 g/L", isCorrect: false },
      { text: "0,6 g/L", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'concentracao',
    solution: {
      detailed: "Para calcular a concentração em g/L, dividimos a massa do soluto pelo volume da solução em litros.",
      steps: [
        "Identifique os valores: m = 18 g, V = 300 mL = 0,3 L",
        "Aplique a fórmula: C = m ÷ V = 18 g ÷ 0,3 L = 60 g/L"
      ]
    }
  },
  {
    id: 51,
    question: "Quantos moles de KOH existem em 500 mL de uma solução 0,2 mol/L?",
    options: [
      { text: "0,1 mol", isCorrect: true },
      { text: "1 mol", isCorrect: false },
      { text: "0,01 mol", isCorrect: false },
      { text: "10 mol", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular o número de mols, multiplicamos a concentração molar pelo volume em litros.",
      steps: [
        "Identifique os valores: C = 0,2 mol/L, V = 500 mL = 0,5 L",
        "Calcule o número de mols: n = C × V = 0,2 mol/L × 0,5 L = 0,1 mol"
      ]
    }
  },
  {
    id: 52,
    question: "Qual a massa de soluto necessária para obter 100 mL de solução 10 g/L?",
    options: [
      { text: "1 g", isCorrect: true },
      { text: "10 g", isCorrect: false },
      { text: "0,1 g", isCorrect: false },
      { text: "100 g", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'concentracao',
    solution: {
      detailed: "Para calcular a massa do soluto, multiplicamos a concentração pelo volume em litros.",
      steps: [
        "Identifique os valores: C = 10 g/L, V = 100 mL = 0,1 L",
        "Aplique a fórmula: m = C × V = 10 g/L × 0,1 L = 1 g"
      ]
    }
  },
  {
    id: 53,
    question: "Qual o volume de solução 0,4 mol/L que contém 0,12 mol de soluto?",
    options: [
      { text: "300 mL", isCorrect: true },
      { text: "30 mL", isCorrect: false },
      { text: "3 L", isCorrect: false },
      { text: "0,3 L", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular o volume, usamos a relação entre concentração molar e número de mols.",
      steps: [
        "Identifique os valores: C = 0,4 mol/L, n = 0,12 mol",
        "Aplique a fórmula: C = n ÷ V, então V = n ÷ C",
        "V = 0,12 mol ÷ 0,4 mol/L = 0,3 L = 300 mL"
      ]
    }
  },
  {
    id: 54,
    question: "Um frasco de 1L de solução contém 35g de NaOH. Qual a concentração em mol/L? (M = 40 g/mol)",
    options: [
      { text: "0,875 mol/L", isCorrect: true },
      { text: "8,75 mol/L", isCorrect: false },
      { text: "0,0875 mol/L", isCorrect: false },
      { text: "87,5 mol/L", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular a concentração molar, primeiro determinamos o número de mols dividindo a massa pela massa molar, depois dividimos pelo volume em litros.",
      steps: [
        "Identifique os valores: m = 35 g, V = 1 L, M = 40 g/mol",
        "Calcule o número de mols: n = m ÷ M = 35 g ÷ 40 g/mol = 0,875 mol",
        "Calcule a concentração molar: C = n ÷ V = 0,875 mol ÷ 1 L = 0,875 mol/L"
      ]
    }
  },
  {
    id: 55,
    question: "Uma solução de HCl contém 2 mol/L. Qual a massa de HCl presente em 250 mL? (M = 36,5 g/mol)",
    options: [
      { text: "18,25 g", isCorrect: true },
      { text: "182,5 g", isCorrect: false },
      { text: "1,825 g", isCorrect: false },
      { text: "73 g", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular a massa, primeiro determinamos o número de mols usando a concentração e o volume, depois convertemos para massa usando a massa molar.",
      steps: [
        "Identifique os valores: C = 2 mol/L, V = 250 mL = 0,25 L, M = 36,5 g/mol",
        "Calcule o número de mols: n = C × V = 2 mol/L × 0,25 L = 0,5 mol",
        "Calcule a massa: m = n × M = 0,5 mol × 36,5 g/mol = 18,25 g"
      ]
    }
  },
  {
    id: 56,
    question: "Qual a porcentagem em massa de uma solução com 60g de soluto e 140g de solvente?",
    options: [
      { text: "30%", isCorrect: true },
      { text: "3%", isCorrect: false },
      { text: "60%", isCorrect: false },
      { text: "42,9%", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'percentual',
    solution: {
      detailed: "Para calcular a porcentagem em massa, dividimos a massa do soluto pela massa total da solução e multiplicamos por 100.",
      steps: [
        "Identifique os valores: m(soluto) = 60g, m(solvente) = 140g",
        "Calcule a massa total: m(total) = m(soluto) + m(solvente) = 60g + 140g = 200g",
        "Calcule a porcentagem: %(m/m) = [m(soluto) ÷ m(total)] × 100 = [60g ÷ 200g] × 100 = 30%"
      ]
    }
  },
  {
    id: 57,
    question: "Um frasco de 500 mL contém 0,5 mol de KCl. Qual a concentração em mol/L?",
    options: [
      { text: "1 mol/L", isCorrect: true },
      { text: "0,1 mol/L", isCorrect: false },
      { text: "10 mol/L", isCorrect: false },
      { text: "0,01 mol/L", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular a concentração molar, dividimos o número de mols pelo volume em litros.",
      steps: [
        "Identifique os valores: n = 0,5 mol, V = 500 mL = 0,5 L",
        "Calcule a concentração molar: C = n ÷ V = 0,5 mol ÷ 0,5 L = 1 mol/L"
      ]
    }
  },
  {
    id: 58,
    question: "Uma solução 10% (m/v) contém quantos gramas de soluto em 200 mL?",
    options: [
      { text: "20 g", isCorrect: true },
      { text: "2 g", isCorrect: false },
      { text: "200 g", isCorrect: false },
      { text: "0,2 g", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'percentual',
    solution: {
      detailed: "Para calcular a massa do soluto em uma solução com concentração %(m/v), multiplicamos a porcentagem pelo volume em mL e dividimos por 100.",
      steps: [
        "Identifique os valores: %(m/v) = 10%, V = 200 mL",
        "Aplique a fórmula: m = [%(m/v) × V] ÷ 100 = [10% × 200 mL] ÷ 100 = 20 g"
      ]
    }
  },
  {
    id: 59,
    question: "Qual o volume necessário para conter 0,25 mol de Na₂CO₃ em uma solução 0,5 mol/L?",
    options: [
      { text: "500 mL", isCorrect: true },
      { text: "50 mL", isCorrect: false },
      { text: "5 L", isCorrect: false },
      { text: "0,5 L", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular o volume, usamos a relação entre concentração molar e número de mols.",
      steps: [
        "Identifique os valores: C = 0,5 mol/L, n = 0,25 mol",
        "Aplique a fórmula: C = n ÷ V, então V = n ÷ C",
        "V = 0,25 mol ÷ 0,5 mol/L = 0,5 L = 500 mL"
      ]
    }
  },
  {
    id: 60,
    question: "Qual a massa de soluto presente em 2 L de solução 15 g/L?",
    options: [
      { text: "30 g", isCorrect: true },
      { text: "3 g", isCorrect: false },
      { text: "300 g", isCorrect: false },
      { text: "0,3 g", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'concentracao',
    solution: {
      detailed: "Para calcular a massa do soluto, multiplicamos a concentração pelo volume em litros.",
      steps: [
        "Identifique os valores: C = 15 g/L, V = 2 L",
        "Aplique a fórmula: m = C × V = 15 g/L × 2 L = 30 g"
      ]
    }
  },
  {
    id: 61,
    question: "Uma solução aquosa contém 5 g de NaCl dissolvidos em 100 mL de solução. Qual é a concentração em g/L?",
    options: [
      { text: "50 g/L", isCorrect: true },
      { text: "5 g/L", isCorrect: false },
      { text: "0,5 g/L", isCorrect: false },
      { text: "500 g/L", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'concentracao',
    solution: {
      detailed: "Para calcular a concentração em g/L, dividimos a massa do soluto pelo volume da solução em litros.",
      steps: [
        "Identifique os valores: m = 5 g, V = 100 mL = 0,1 L",
        "Aplique a fórmula: C = m ÷ V = 5 g ÷ 0,1 L = 50 g/L"
      ]
    }
  },
  {
    id: 62,
    question: "Qual a massa de glicose (C₆H₁₂O₆, M = 180 g/mol) necessária para preparar 500 mL de uma solução 0,2 mol/L?",
    options: [
      { text: "18 g", isCorrect: true },
      { text: "1,8 g", isCorrect: false },
      { text: "180 g", isCorrect: false },
      { text: "36 g", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular a massa, primeiro determinamos o número de mols usando a concentração e o volume, depois convertemos para massa usando a massa molar.",
      steps: [
        "Identifique os valores: C = 0,2 mol/L, V = 500 mL = 0,5 L, M = 180 g/mol",
        "Calcule o número de mols: n = C × V = 0,2 mol/L × 0,5 L = 0,1 mol",
        "Calcule a massa: m = n × M = 0,1 mol × 180 g/mol = 18 g"
      ]
    }
  },
  {
    id: 63,
    question: "Um frasco contém 80 mL de uma solução cuja densidade é 1,2 g/mL. Qual é a massa total da solução?",
    options: [
      { text: "96 g", isCorrect: true },
      { text: "9,6 g", isCorrect: false },
      { text: "960 g", isCorrect: false },
      { text: "0,96 g", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'densidade',
    solution: {
      detailed: "Para calcular a massa total da solução, multiplicamos a densidade pelo volume.",
      steps: [
        "Identifique os valores: d = 1,2 g/mL, V = 80 mL",
        "Calcule a massa total: m = d × V = 1,2 g/mL × 80 mL = 96 g"
      ]
    }
  },
  {
    id: 64,
    question: "Uma amostra de ácido sulfúrico apresenta concentração de 1,5 mol/L. Qual o número de mols em 250 mL dessa solução?",
    options: [
      { text: "0,375 mol", isCorrect: true },
      { text: "3,75 mol", isCorrect: false },
      { text: "0,0375 mol", isCorrect: false },
      { text: "37,5 mol", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular o número de mols, multiplicamos a concentração molar pelo volume em litros.",
      steps: [
        "Identifique os valores: C = 1,5 mol/L, V = 250 mL = 0,25 L",
        "Calcule o número de mols: n = C × V = 1,5 mol/L × 0,25 L = 0,375 mol"
      ]
    }
  },
  {
    id: 65,
    question: "Qual o volume de uma solução 2 mol/L necessário para obter 0,5 mol de soluto?",
    options: [
      { text: "250 mL", isCorrect: true },
      { text: "25 mL", isCorrect: false },
      { text: "2,5 L", isCorrect: false },
      { text: "500 mL", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular o volume, usamos a relação entre concentração molar e número de mols.",
      steps: [
        "Identifique os valores: C = 2 mol/L, n = 0,5 mol",
        "Aplique a fórmula: C = n ÷ V, então V = n ÷ C",
        "V = 0,5 mol ÷ 2 mol/L = 0,25 L = 250 mL"
      ]
    }
  },
  {
    id: 66,
    question: "Um xarope contém 20 g de açúcar em 50 mL. Qual é a concentração em g/L?",
    options: [
      { text: "400 g/L", isCorrect: true },
      { text: "40 g/L", isCorrect: false },
      { text: "4000 g/L", isCorrect: false },
      { text: "0,4 g/L", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'concentracao',
    solution: {
      detailed: "Para calcular a concentração em g/L, dividimos a massa do soluto pelo volume da solução em litros.",
      steps: [
        "Identifique os valores: m = 20 g, V = 50 mL = 0,05 L",
        "Aplique a fórmula: C = m ÷ V = 20 g ÷ 0,05 L = 400 g/L"
      ]
    }
  },
  {
    id: 67,
    question: "Qual é a concentração percentual em massa de uma solução que possui 15 g de soluto em 150 g de solução?",
    options: [
      { text: "10%", isCorrect: true },
      { text: "1%", isCorrect: false },
      { text: "15%", isCorrect: false },
      { text: "100%", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'percentual',
    solution: {
      detailed: "Para calcular a porcentagem em massa, dividimos a massa do soluto pela massa total da solução e multiplicamos por 100.",
      steps: [
        "Identifique os valores: m(soluto) = 15g, m(solução) = 150g",
        "Calcule a porcentagem: %(m/m) = [m(soluto) ÷ m(solução)] × 100 = [15g ÷ 150g] × 100 = 10%"
      ]
    }
  },
  {
    id: 68,
    question: "Se 200 mL de solução contém 5 g de soluto, qual a concentração em g/L?",
    options: [
      { text: "25 g/L", isCorrect: true },
      { text: "2,5 g/L", isCorrect: false },
      { text: "250 g/L", isCorrect: false },
      { text: "0,25 g/L", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'concentracao',
    solution: {
      detailed: "Para calcular a concentração em g/L, dividimos a massa do soluto pelo volume da solução em litros.",
      steps: [
        "Identifique os valores: m = 5 g, V = 200 mL = 0,2 L",
        "Aplique a fórmula: C = m ÷ V = 5 g ÷ 0,2 L = 25 g/L"
      ]
    }
  },
  {
    id: 69,
    question: "Um laboratório precisa preparar 2 L de solução com concentração 0,25 mol/L de HCl (M = 36,5 g/mol). Qual massa de HCl deve ser utilizada?",
    options: [
      { text: "18,25 g", isCorrect: true },
      { text: "1,825 g", isCorrect: false },
      { text: "182,5 g", isCorrect: false },
      { text: "9,125 g", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular a massa, primeiro determinamos o número de mols usando a concentração e o volume, depois convertemos para massa usando a massa molar.",
      steps: [
        "Identifique os valores: C = 0,25 mol/L, V = 2 L, M = 36,5 g/mol",
        "Calcule o número de mols: n = C × V = 0,25 mol/L × 2 L = 0,5 mol",
        "Calcule a massa: m = n × M = 0,5 mol × 36,5 g/mol = 18,25 g"
      ]
    }
  },
  {
    id: 70,
    question: "Se 100 mL de solução de KNO₃ possui concentração 0,1 mol/L, quantos gramas de sal estão presentes? (M = 101 g/mol)",
    options: [
      { text: "1,01 g", isCorrect: true },
      { text: "10,1 g", isCorrect: false },
      { text: "0,101 g", isCorrect: false },
      { text: "101 g", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular a massa, primeiro determinamos o número de mols usando a concentração e o volume, depois convertemos para massa usando a massa molar.",
      steps: [
        "Identifique os valores: C = 0,1 mol/L, V = 100 mL = 0,1 L, M = 101 g/mol",
        "Calcule o número de mols: n = C × V = 0,1 mol/L × 0,1 L = 0,01 mol",
        "Calcule a massa: m = n × M = 0,01 mol × 101 g/mol = 1,01 g"
      ]
    }
  },
  {
    id: 71,
    question: "Uma solução de sulfato de sódio (Na₂SO₄) apresenta concentração de 0,5 mol/L. Qual é a massa de sal em 250 mL? (M = 142 g/mol)",
    options: [
      { text: "17,75 g", isCorrect: true },
      { text: "1,775 g", isCorrect: false },
      { text: "177,5 g", isCorrect: false },
      { text: "71 g", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular a massa, primeiro determinamos o número de mols usando a concentração e o volume, depois convertemos para massa usando a massa molar.",
      steps: [
        "Identifique os valores: C = 0,5 mol/L, V = 250 mL = 0,25 L, M = 142 g/mol",
        "Calcule o número de mols: n = C × V = 0,5 mol/L × 0,25 L = 0,125 mol",
        "Calcule a massa: m = n × M = 0,125 mol × 142 g/mol = 17,75 g"
      ]
    }
  },
  {
    id: 72,
    question: "Uma solução 0,1 mol/L de NaOH contém quantos gramas de soluto em 1 L? (M = 40 g/mol)",
    options: [
      { text: "4 g", isCorrect: true },
      { text: "0,4 g", isCorrect: false },
      { text: "40 g", isCorrect: false },
      { text: "0,04 g", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular a massa, primeiro determinamos o número de mols usando a concentração e o volume, depois convertemos para massa usando a massa molar.",
      steps: [
        "Identifique os valores: C = 0,1 mol/L, V = 1 L, M = 40 g/mol",
        "Calcule o número de mols: n = C × V = 0,1 mol/L × 1 L = 0,1 mol",
        "Calcule a massa: m = n × M = 0,1 mol × 40 g/mol = 4 g"
      ]
    }
  },
  {
    id: 73,
    question: "Em 300 mL de uma solução 5% (m/v), qual a massa do soluto?",
    options: [
      { text: "15 g", isCorrect: true },
      { text: "1,5 g", isCorrect: false },
      { text: "150 g", isCorrect: false },
      { text: "0,15 g", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'percentual',
    solution: {
      detailed: "Para calcular a massa do soluto em uma solução com concentração %(m/v), multiplicamos a porcentagem pelo volume em mL e dividimos por 100.",
      steps: [
        "Identifique os valores: %(m/v) = 5%, V = 300 mL",
        "Aplique a fórmula: m = [%(m/v) × V] ÷ 100 = [5% × 300 mL] ÷ 100 = 15 g"
      ]
    }
  },
  {
    id: 74,
    question: "Uma solução apresenta 8 g de soluto em 400 g de solução. Qual é o percentual em massa?",
    options: [
      { text: "2%", isCorrect: true },
      { text: "20%", isCorrect: false },
      { text: "0,2%", isCorrect: false },
      { text: "8%", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'percentual',
    solution: {
      detailed: "Para calcular a porcentagem em massa, dividimos a massa do soluto pela massa total da solução e multiplicamos por 100.",
      steps: [
        "Identifique os valores: m(soluto) = 8g, m(solução) = 400g",
        "Calcule a porcentagem: %(m/m) = [m(soluto) ÷ m(solução)] × 100 = [8g ÷ 400g] × 100 = 2%"
      ]
    }
  },
  {
    id: 75,
    question: "Quantos moles de soluto existem em 150 mL de uma solução 1 mol/L?",
    options: [
      { text: "0,15 mol", isCorrect: true },
      { text: "1,5 mol", isCorrect: false },
      { text: "0,015 mol", isCorrect: false },
      { text: "15 mol", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular o número de mols, multiplicamos a concentração molar pelo volume em litros.",
      steps: [
        "Identifique os valores: C = 1 mol/L, V = 150 mL = 0,15 L",
        "Calcule o número de mols: n = C × V = 1 mol/L × 0,15 L = 0,15 mol"
      ]
    }
  },
  {
    id: 76,
    question: "Qual o volume necessário de uma solução 0,4 mol/L para conter 0,16 mol de soluto?",
    options: [
      { text: "400 mL", isCorrect: true },
      { text: "40 mL", isCorrect: false },
      { text: "4 L", isCorrect: false },
      { text: "0,4 L", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular o volume, usamos a relação entre concentração molar e número de mols.",
      steps: [
        "Identifique os valores: C = 0,4 mol/L, n = 0,16 mol",
        "Aplique a fórmula: C = n ÷ V, então V = n ÷ C",
        "V = 0,16 mol ÷ 0,4 mol/L = 0,4 L = 400 mL"
      ]
    }
  },
  {
    id: 77,
    question: "Em 2,5 L de solução há 50 g de soluto. Qual a concentração em g/L?",
    options: [
      { text: "20 g/L", isCorrect: true },
      { text: "2 g/L", isCorrect: false },
      { text: "200 g/L", isCorrect: false },
      { text: "125 g/L", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'concentracao',
    solution: {
      detailed: "Para calcular a concentração em g/L, dividimos a massa do soluto pelo volume da solução em litros.",
      steps: [
        "Identifique os valores: m = 50 g, V = 2,5 L",
        "Aplique a fórmula: C = m ÷ V = 50 g ÷ 2,5 L = 20 g/L"
      ]
    }
  },
  {
    id: 78,
    question: "Uma solução contém 6 g de soluto em 150 mL. Qual sua concentração em g/L?",
    options: [
      { text: "40 g/L", isCorrect: true },
      { text: "4 g/L", isCorrect: false },
      { text: "400 g/L", isCorrect: false },
      { text: "0,4 g/L", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'concentracao',
    solution: {
      detailed: "Para calcular a concentração em g/L, dividimos a massa do soluto pelo volume da solução em litros.",
      steps: [
        "Identifique os valores: m = 6 g, V = 150 mL = 0,15 L",
        "Aplique a fórmula: C = m ÷ V = 6 g ÷ 0,15 L = 40 g/L"
      ]
    }
  },
  {
    id: 79,
    question: "Se a densidade de uma solução é 1,05 g/mL e ela possui 20% de soluto, qual é a concentração em g/L?",
    options: [
      { text: "210 g/L", isCorrect: true },
      { text: "21 g/L", isCorrect: false },
      { text: "2100 g/L", isCorrect: false },
      { text: "2,1 g/L", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'densidade',
    solution: {
      detailed: "Para calcular a concentração em g/L, usamos a porcentagem em massa e a densidade.",
      steps: [
        "Identifique os valores: densidade = 1,05 g/mL, porcentagem = 20%",
        "Em 100g de solução, temos 20g de soluto",
        "Em 1mL de solução (1,05g), temos 1,05g × 0,2 = 0,21g de soluto",
        "Em 1L (1000mL), temos 0,21g × 1000 = 210g de soluto",
        "Portanto, a concentração é 210 g/L"
      ]
    }
  },
  {
    id: 80,
    question: "Uma solução tem 3 mols de soluto em 1,5 L. Qual sua concentração molar?",
    options: [
      { text: "2 mol/L", isCorrect: true },
      { text: "0,2 mol/L", isCorrect: false },
      { text: "20 mol/L", isCorrect: false },
      { text: "4,5 mol/L", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular a concentração molar, dividimos o número de mols pelo volume em litros.",
      steps: [
        "Identifique os valores: n = 3 mol, V = 1,5 L",
        "Calcule a concentração molar: C = n ÷ V = 3 mol ÷ 1,5 L = 2 mol/L"
      ]
    }
  },
  {
    id: 81,
    question: "Quantos gramas de NaOH (M = 40 g/mol) há em 250 mL de uma solução 0,6 mol/L?",
    options: [
      { text: "6 g", isCorrect: true },
      { text: "0,6 g", isCorrect: false },
      { text: "60 g", isCorrect: false },
      { text: "15 g", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular a massa, primeiro determinamos o número de mols usando a concentração e o volume, depois convertemos para massa usando a massa molar.",
      steps: [
        "Identifique os valores: C = 0,6 mol/L, V = 250 mL = 0,25 L, M = 40 g/mol",
        "Calcule o número de mols: n = C × V = 0,6 mol/L × 0,25 L = 0,15 mol",
        "Calcule a massa: m = n × M = 0,15 mol × 40 g/mol = 6 g"
      ]
    }
  },
  {
    id: 82,
    question: "Qual o volume de uma solução 0,25 mol/L necessário para obter 0,05 mol de soluto?",
    options: [
      { text: "200 mL", isCorrect: true },
      { text: "20 mL", isCorrect: false },
      { text: "2 L", isCorrect: false },
      { text: "500 mL", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular o volume, usamos a relação entre concentração molar e número de mols.",
      steps: [
        "Identifique os valores: C = 0,25 mol/L, n = 0,05 mol",
        "Aplique a fórmula: C = n ÷ V, então V = n ÷ C",
        "V = 0,05 mol ÷ 0,25 mol/L = 0,2 L = 200 mL"
      ]
    }
  },
  {
    id: 83,
    question: "Uma solução apresenta 10 g de soluto em 250 g de solução. Qual a porcentagem em massa?",
    options: [
      { text: "4%", isCorrect: true },
      { text: "40%", isCorrect: false },
      { text: "0,4%", isCorrect: false },
      { text: "25%", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'percentual',
    solution: {
      detailed: "Para calcular a porcentagem em massa, dividimos a massa do soluto pela massa total da solução e multiplicamos por 100.",
      steps: [
        "Identifique os valores: m(soluto) = 10g, m(solução) = 250g",
        "Calcule a porcentagem: %(m/m) = [m(soluto) ÷ m(solução)] × 100 = [10g ÷ 250g] × 100 = 4%"
      ]
    }
  },
  {
    id: 84,
    question: "Em 1 L de solução com densidade 1,1 g/mL e 15% de soluto, qual a massa do soluto?",
    options: [
      { text: "165 g", isCorrect: true },
      { text: "16,5 g", isCorrect: false },
      { text: "1650 g", isCorrect: false },
      { text: "1,65 g", isCorrect: false }
    ],
    difficulty: 'hard',
    category: 'densidade',
    solution: {
      detailed: "Para calcular a massa do soluto, primeiro determinamos a massa total da solução usando a densidade, depois multiplicamos pela porcentagem de soluto.",
      steps: [
        "Identifique os valores: d = 1,1 g/mL, V = 1 L = 1000 mL, %(m/m) = 15%",
        "Calcule a massa total da solução: m(solução) = d × V = 1,1 g/mL × 1000 mL = 1100 g",
        "Calcule a massa do soluto: m(soluto) = %(m/m) × m(solução) = 0,15 × 1100 g = 165 g"
      ]
    }
  },
  {
    id: 85,
    question: "Uma solução de HCl tem 0,75 mol/L. Qual o número de mols em 600 mL?",
    options: [
      { text: "0,45 mol", isCorrect: true },
      { text: "4,5 mol", isCorrect: false },
      { text: "0,045 mol", isCorrect: false },
      { text: "45 mol", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular o número de mols, multiplicamos a concentração molar pelo volume em litros.",
      steps: [
        "Identifique os valores: C = 0,75 mol/L, V = 600 mL = 0,6 L",
        "Calcule o número de mols: n = C × V = 0,75 mol/L × 0,6 L = 0,45 mol"
      ]
    }
  },
  {
    id: 86,
    question: "Qual a massa de glicose em 100 mL de uma solução 0,5 mol/L? (M = 180 g/mol)",
    options: [
      { text: "9 g", isCorrect: true },
      { text: "0,9 g", isCorrect: false },
      { text: "90 g", isCorrect: false },
      { text: "900 g", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular a massa, primeiro determinamos o número de mols usando a concentração e o volume, depois convertemos para massa usando a massa molar.",
      steps: [
        "Identifique os valores: C = 0,5 mol/L, V = 100 mL = 0,1 L, M = 180 g/mol",
        "Calcule o número de mols: n = C × V = 0,5 mol/L × 0,1 L = 0,05 mol",
        "Calcule a massa: m = n × M = 0,05 mol × 180 g/mol = 9 g"
      ]
    }
  },
  {
    id: 87,
    question: "Uma solução tem 12 g de soluto em 200 mL. Qual a concentração em g/L?",
    options: [
      { text: "60 g/L", isCorrect: true },
      { text: "6 g/L", isCorrect: false },
      { text: "600 g/L", isCorrect: false },
      { text: "0,6 g/L", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'concentracao',
    solution: {
      detailed: "Para calcular a concentração em g/L, dividimos a massa do soluto pelo volume da solução em litros.",
      steps: [
        "Identifique os valores: m = 12 g, V = 200 mL = 0,2 L",
        "Aplique a fórmula: C = m ÷ V = 12 g ÷ 0,2 L = 60 g/L"
      ]
    }
  },
  {
    id: 88,
    question: "Quantos mL de uma solução 2 mol/L são necessários para obter 0,4 mol de soluto?",
    options: [
      { text: "200 mL", isCorrect: true },
      { text: "20 mL", isCorrect: false },
      { text: "2000 mL", isCorrect: false },
      { text: "800 mL", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular o volume, usamos a relação entre concentração molar e número de mols.",
      steps: [
        "Identifique os valores: C = 2 mol/L, n = 0,4 mol",
        "Aplique a fórmula: C = n ÷ V, então V = n ÷ C",
        "V = 0,4 mol ÷ 2 mol/L = 0,2 L = 200 mL"
      ]
    }
  },
  {
    id: 89,
    question: "Uma solução apresenta 30% de soluto e densidade 1,2 g/mL. Qual a concentração em g/L?",
    options: [
      { text: "360 g/L", isCorrect: true },
      { text: "36 g/L", isCorrect: false },
      { text: "3600 g/L", isCorrect: false },
      { text: "3,6 g/L", isCorrect: false }
    ],
    difficulty: 'hard',
    category: 'densidade',
    solution: {
      detailed: "Para calcular a concentração em g/L, usamos a porcentagem em massa e a densidade.",
      steps: [
        "Identifique os valores: densidade = 1,2 g/mL, porcentagem = 30%",
        "Em 100g de solução, temos 30g de soluto",
        "Em 1mL de solução (1,2g), temos 1,2g × 0,3 = 0,36g de soluto",
        "Em 1L (1000mL), temos 0,36g × 1000 = 360g de soluto",
        "Portanto, a concentração é 360 g/L"
      ]
    }
  },
  {
    id: 90,
    question: "Quantos mols há em 300 mL de uma solução 0,1 mol/L?",
    options: [
      { text: "0,03 mol", isCorrect: true },
      { text: "0,3 mol", isCorrect: false },
      { text: "3 mol", isCorrect: false },
      { text: "0,003 mol", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular o número de mols, multiplicamos a concentração molar pelo volume em litros.",
      steps: [
        "Identifique os valores: C = 0,1 mol/L, V = 300 mL = 0,3 L",
        "Calcule o número de mols: n = C × V = 0,1 mol/L × 0,3 L = 0,03 mol"
      ]
    }
  },
  {
    id: 91,
    question: "Qual o volume necessário de uma solução 0,5 mol/L para conter 2 mols de soluto?",
    options: [
      { text: "4 L", isCorrect: true },
      { text: "0,4 L", isCorrect: false },
      { text: "40 L", isCorrect: false },
      { text: "400 mL", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular o volume, usamos a relação entre concentração molar e número de mols.",
      steps: [
        "Identifique os valores: C = 0,5 mol/L, n = 2 mol",
        "Aplique a fórmula: C = n ÷ V, então V = n ÷ C",
        "V = 2 mol ÷ 0,5 mol/L = 4 L"
      ]
    }
  },
  {
    id: 92,
    question: "Uma solução contém 36,5 g de HCl em 1 L. Qual sua concentração molar? (M = 36,5 g/mol)",
    options: [
      { text: "1 mol/L", isCorrect: true },
      { text: "0,1 mol/L", isCorrect: false },
      { text: "10 mol/L", isCorrect: false },
      { text: "0,01 mol/L", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular a concentração molar, primeiro determinamos o número de mols dividindo a massa pela massa molar, depois dividimos pelo volume em litros.",
      steps: [
        "Identifique os valores: m = 36,5 g, V = 1 L, M = 36,5 g/mol",
        "Calcule o número de mols: n = m ÷ M = 36,5 g ÷ 36,5 g/mol = 1 mol",
        "Calcule a concentração molar: C = n ÷ V = 1 mol ÷ 1 L = 1 mol/L"
      ]
    }
  },
  {
    id: 93,
    question: "Qual a porcentagem em massa de uma solução com 25 g de soluto em 125 g de solução?",
    options: [
      { text: "20%", isCorrect: true },
      { text: "2%", isCorrect: false },
      { text: "25%", isCorrect: false },
      { text: "40%", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'percentual',
    solution: {
      detailed: "Para calcular a porcentagem em massa, dividimos a massa do soluto pela massa total da solução e multiplicamos por 100.",
      steps: [
        "Identifique os valores: m(soluto) = 25g, m(solução) = 125g",
        "Calcule a porcentagem: %(m/m) = [m(soluto) ÷ m(solução)] × 100 = [25g ÷ 125g] × 100 = 20%"
      ]
    }
  },
  {
    id: 94,
    question: "Uma solução 10% (m/v) contém quantos gramas de soluto em 500 mL?",
    options: [
      { text: "50 g", isCorrect: true },
      { text: "5 g", isCorrect: false },
      { text: "500 g", isCorrect: false },
      { text: "0,5 g", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'percentual',
    solution: {
      detailed: "Para calcular a massa do soluto em uma solução com concentração %(m/v), multiplicamos a porcentagem pelo volume em mL e dividimos por 100.",
      steps: [
        "Identifique os valores: %(m/v) = 10%, V = 500 mL",
        "Aplique a fórmula: m = [%(m/v) × V] ÷ 100 = [10% × 500 mL] ÷ 100 = 50 g"
      ]
    }
  },
  {
    id: 95,
    question: "Quantos mL de uma solução 0,2 mol/L contêm 0,1 mol de soluto?",
    options: [
      { text: "500 mL", isCorrect: true },
      { text: "50 mL", isCorrect: false },
      { text: "5000 mL", isCorrect: false },
      { text: "5 mL", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular o volume, usamos a relação entre concentração molar e número de mols.",
      steps: [
        "Identifique os valores: C = 0,2 mol/L, n = 0,1 mol",
        "Aplique a fórmula: C = n ÷ V, então V = n ÷ C",
        "V = 0,1 mol ÷ 0,2 mol/L = 0,5 L = 500 mL"
      ]
    }
  },
  {
    id: 96,
    question: "Uma solução contém 100 g de soluto em 1,5 L. Qual a concentração em g/L?",
    options: [
      { text: "66,7 g/L", isCorrect: true },
      { text: "6,67 g/L", isCorrect: false },
      { text: "667 g/L", isCorrect: false },
      { text: "150 g/L", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'concentracao',
    solution: {
      detailed: "Para calcular a concentração em g/L, dividimos a massa do soluto pelo volume da solução em litros.",
      steps: [
        "Identifique os valores: m = 100 g, V = 1,5 L",
        "Aplique a fórmula: C = m ÷ V = 100 g ÷ 1,5 L = 66,7 g/L"
      ]
    }
  },
  {
    id: 97,
    question: "Qual o volume de solução 1 mol/L que contém 73 g de HNO₃? (M = 63 g/mol)",
    options: [
      { text: "1,159 L", isCorrect: true },
      { text: "0,1159 L", isCorrect: false },
      { text: "11,59 L", isCorrect: false },
      { text: "115,9 mL", isCorrect: false }
    ],
    difficulty: 'hard',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular o volume, primeiro convertemos a massa para mols usando a massa molar, depois usamos a relação entre concentração molar e número de mols.",
      steps: [
        "Identifique os valores: m = 73 g, M = 63 g/mol, C = 1 mol/L",
        "Calcule o número de mols: n = m ÷ M = 73 g ÷ 63 g/mol = 1,159 mol",
        "Calcule o volume: V = n ÷ C = 1,159 mol ÷ 1 mol/L = 1,159 L"
      ]
    }
  },
  {
    id: 98,
    question: "Uma solução aquosa contém 12% de soluto. Qual a massa de solução necessária para conter 60 g de soluto?",
    options: [
      { text: "500 g", isCorrect: true },
      { text: "50 g", isCorrect: false },
      { text: "5000 g", isCorrect: false },
      { text: "720 g", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'percentual',
    solution: {
      detailed: "Para calcular a massa da solução, usamos a relação entre a porcentagem em massa e a massa do soluto.",
      steps: [
        "Identifique os valores: %(m/m) = 12%, m(soluto) = 60 g",
        "Aplique a fórmula: %(m/m) = [m(soluto) ÷ m(solução)] × 100",
        "Reorganize para isolar m(solução): m(solução) = [m(soluto) × 100] ÷ %(m/m)",
        "m(solução) = [60 g × 100] ÷ 12 = 500 g"
      ]
    }
  },
  {
    id: 99,
    question: "Uma solução apresenta 0,3 mol/L e volume de 2 L. Quantos mols estão presentes?",
    options: [
      { text: "0,6 mol", isCorrect: true },
      { text: "6 mol", isCorrect: false },
      { text: "0,06 mol", isCorrect: false },
      { text: "60 mol", isCorrect: false }
    ],
    difficulty: 'easy',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular o número de mols, multiplicamos a concentração molar pelo volume em litros.",
      steps: [
        "Identifique os valores: C = 0,3 mol/L, V = 2 L",
        "Calcule o número de mols: n = C × V = 0,3 mol/L × 2 L = 0,6 mol"
      ]
    }
  },
  {
    id: 100,
    question: "Qual a massa de Na₂CO₃ em 1 L de solução 0,4 mol/L? (M = 106 g/mol)",
    options: [
      { text: "42,4 g", isCorrect: true },
      { text: "4,24 g", isCorrect: false },
      { text: "424 g", isCorrect: false },
      { text: "0,424 g", isCorrect: false }
    ],
    difficulty: 'medium',
    category: 'molaridade',
    solution: {
      detailed: "Para calcular a massa, primeiro determinamos o número de mols usando a concentração e o volume, depois convertemos para massa usando a massa molar.",
      steps: [
        "Identifique os valores: C = 0,4 mol/L, V = 1 L, M = 106 g/mol",
        "Calcule o número de mols: n = C × V = 0,4 mol/L × 1 L = 0,4 mol",
        "Calcule a massa: m = n × M = 0,4 mol × 106 g/mol = 42,4 g"
      ]
    }
  }
];
