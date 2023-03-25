const listaDeArgumentos = process.argv.slice(2)

console.log ('.................. Executando FOR .................')
for (let i = 0; i < listaDeArgumentos.length; i++) {
  const argumento = listaDeArgumentos[i];
  console.log(`O arguemnto indice: ${i} é = ${argumento}`);
}
console.log();
console.log ('.................. Executando WHILE .................')
let iWhile = 0
while (iWhile < listaDeArgumentos.length) {
  const argumento = listaDeArgumentos[iWhile];
  console.log(`O arguemnto indice: ${iWhile} é = ${argumento}`);
  iWhile++;
} 

console.log();
console.log ('.................. Executando DO WHILE .................')
let iDoWhile = 0
do {
  const argumento = listaDeArgumentos[iDoWhile];
  console.log(`O arguemnto indice: ${iDoWhile} é = ${argumento}`);
  iDoWhile++;
} while (iDoWhile < listaDeArgumentos.length) 

console.log();
console.log ('.................. Executando FOR OF .................')
for (const argumento of listaDeArgumentos) {
  console.log(`O arguemnto lido é = ${argumento}`);
}

