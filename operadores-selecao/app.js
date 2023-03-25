import * as readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
console.log('teste')
rl.question('Qual o ano do seu nascimento: ', ano => {
  if (ano > 2005) {
    console.log('Você não tem 18 anos')
  } else {
    rl.question('Você tem habilitação? (Sim/Nao)', temHabilitacao => {
      if (!(temHabilitacao.toUpperCase() === 'SIM')) {
        console.log('Você não tem habilitação')
      } else {
        rl.question('Qual o seu nome: ', nome => {
          switch (nome.toUpperCase()) {
            case 'DOUGLAS':
              console.log('Bem vindo ao KART Douglas')
              break;
            case 'RAFAEL':
              console.log('Bem vindo ao KART Rafael')
              break;

            default:
              console.log('Seu nome não foi ifdentificado na lista de convidados')
              break;
          }
        })
      }
    })
  }
})

