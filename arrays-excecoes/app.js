const listaDeProdutosDisponiveis = [
  "Pao",
  "Leite",
  "Cafe",
  "Laranja",
  "Macarrao",
  "Sabonete",
  "Detergente",
]
try {
  const listaArgumentos = process.argv.slice(2)

  const listaDeProdutosSolicitadosDisponiveis = listaDeProdutosDisponiveis.filter(produto => {
    return listaArgumentos.find(argumento => argumento === produto)
  })
  console.log('................ LISTA DE PRODUTOS DISPONIVEIS ............')
  listaDeProdutosSolicitadosDisponiveis.forEach(produto =>
    console.log(`Este produto nos temos: ${produto}`)
  )

  const listaDeProdutosSolicitadosNaoDisponiveis = listaArgumentos.filter(argumento => {
    return !listaDeProdutosDisponiveis.find(produto => produto === argumento)
  })
  console.log('................ LISTA PRODUTOS NÃO DISPONIVEIS ............')
  listaDeProdutosSolicitadosNaoDisponiveis.forEach(produto =>
    console.log(`Este produto nos NAO temos: ${produto}`)
  )
  console.log('................ LISTA ORDENADA ............')
  const listaDeProdutosOrdenada = listaDeProdutosDisponiveis.sort()
  listaDeProdutosOrdenada.forEach(produto =>
    console.log(`Este produto está disponível: ${produto}`)
  )
} catch (error) {
  console.log('Não foi possivel realizar a compra')
}


