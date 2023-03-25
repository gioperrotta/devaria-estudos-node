// const readline = require('readline');
import * as readline from 'node:readline';

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const minhaPrimeiraConstanteString = 'Minha primeira constante';

console.log(minhaPrimeiraConstanteString);

rl.question('Informe sua idade:', input => {
  let leituraDeCampo;
  leituraDeCampo = input;
  console.log(`O usuário digitou: ${leituraDeCampo}`)
});


