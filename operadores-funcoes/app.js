import * as readline from 'node:readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const validarNumero = (num) => {
  const resultado = Number.parseFloat(num);
  if (resultado) {
    console.log('Número informado é inválido');
    return null;
  }
  return resultado;    
}

const validarOperador = (operador) => {
  switch (operador) {
    case '+':
    case '-':
    case '*':
    case '/':
    case '%':
      return operador;
   default:
      console.log('Operador informado é inválido')
      return null
  }
}

function realizarOperacao(num1, num2, op) {
  switch (op) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    case '/':
      return num1 / num2
      case '%':
        return num1 % num2
    default:
      return null
  }
}

rl.question('Digite o primeiro número: ', input => {
  const numero1 = validarNumero(input)

  if (numero1) {
    rl.question('Digite o segundo numero: ', input => {
      const numero2 = validarNumero(input)

      if (numero2) {
        rl.question('Digite a operação: ', operador => {
          const operadorValidado =  validarOperador(operador)

          if (operadorValidado) {
            const resultado = realizarOperacao(numero1, numero2, operadorValidado)

            if (resultado) {
              console.log(`O resultado de: ${numero1} ${operadorValidado} ${numero2} = ${resultado}`)
            }
          }
        })
      }
    })
  }
})