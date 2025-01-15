/*
A solução implementada é O(n²), existe uma que é O(n). 

A premissa utilizada nessa outra é que a soma do resto de cada um dos números de um par também deve ser divisível por k.
Basicamente você percorre o array uma vez salvando esses valores que sempre serão menores que k e faz alguns cálculos 
pra ver quantos grupos é possível formar. Isso vai evitar de criar essa solução n².

Passos:
1) criar uma tabela de frequência para cada resto da divisão dos elementos do array por k 
2) calcular a quantidade de combinações possíveis de somas dos restos que resultam em k

Existem 3 cenários possíveis que tem que ser considerados na hora de analisar a tabela de frequência:
1) o resto que é 0. Ex: k = 5; r1 = 5, r2 = 10:
  - utiliza-se a fórmula de combinação simples
2) a soma de restos complementares entre si que resulta em k. Ex: k = 5; r1 = 3 e r2 = 2 (ou r2 = k - r1):
  - multiplica-se a quantidade de restos
3) o resto k/2 (caso de borda possível quando k é par). Ex: k = 4; r1 = 2, r2 = 2:
  - utiliza-se a fórmula de combinação simples
*/

function divisibleSumPairs(arrLength, k, arr) {
  let pairsCounter = 0;
  const pairs = [];

  arr.forEach((numA, index) => {
    const lastIteration = index === arr.length - 1;
    if (lastIteration) return;

    for (let i = index + 1; i < arr.length; i++) {
      const numB = arr[i];
      const sumPair = numA + numB;

      if (sumPair % k === 0) {
        pairsCounter++;
        pairs.push([numA, numB]);
      }
    }
  });

  console.log(pairs);
  return pairsCounter;
}

function main() {
  console.log("SHOULD be 5:", divisibleSumPairs(99, 3, [1, 3, 2, 6, 1, 2]));
}

main();
