export interface ITempo {
    year: number;
    title: string;
    text: string;
  }
  
  const linhaDoTempo: ITempo[] = [
    {
      year: 2022,
      title: "Iniciando na programação",
      text: "Comecei a programar em 2022, <strong>explorando os fundamentos da programação.</strong>",
    },
    {
      year: 2023,
      title: "Aprofundando em tecnologias",
      text: "Em 2023, evoluí para um nível intermediário, <strong>aprendendo TypeScript, React, Tailwind CSS, Node.js e Java</strong> — além de mergulhar em <strong>boas práticas como SOLID, KISS, DRY e clean code.</strong>",
    },
    {
      year: 2024,
      title: "Vendo por debaixo dos panos",
      text: "Em 2024, fui mais fundo: comecei a estudar programação de baixo nível, <strong>entendendo como lidar com memória, operações bitwise, técnicas de compactação, algarítmos de ordenação, análise de complexidade (Big O)</strong>. Tudo isso para escrever códigos mais perfomáticos.",
    },
    {
      year: 2025,
      title: "Entendendo algoritmos",
      text: "Curioso por natureza, estou sempre buscando <strong>entender o que acontece “por baixo dos panos” e escrever códigos mais limpos e eficientes.</strong>",
    },
  ];
  
  export default linhaDoTempo;
  