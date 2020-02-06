// Usuários e tecnologias:

// const usuarios = [
//     { nome: 'Carlos', tecnologias: ['HTML', ' CSS'] },
//     { nome: 'Jasmine', tecnologias: ['JavaScript', ' CSS'] },
//     { nome: 'Tuane', tecnologias: ['HTML', ' Node.js'] }
// ]

// for (let i = 0; i < usuarios.length; i++) {
//     console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)
// }

/*=======================================================================*/

// Buscar por tecnologia:


const usuarios = [
  { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
  { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
  { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
]

function checaSeUsuarioUsaCSS(usuario) {
  for (let i = 0; i < usuario.tecnologias.length; i++) {
    if (usuario.tecnologias[i] === 'CSS') {
      return true
    }
  }
}


for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])

if(usuarioTrabalhaComCSS) {
  console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
  }
}


/*=======================================================================*/

// Soma de despesas e receitas

// const usuarios = [
//   {
//     nome: 'Salvio',
//     receitas: [115.3, 48.7, 98.3, 14.5],
//     despesas: [85.3, 13.5, 19.9]
//   },
//   {
//     nome: 'Marcio',
//     receitas: [24.6, 214.3, 45.3],
//     despesas: [185.3, 12.1, 120.0]
//   },
//   {
//     nome: 'Lucia',
//     receitas: [9.8, 120.3, 340.2, 45.3],
//     despesas: [450.2, 29.9]
//   }
// ]

// const receitas = usuarios[0].receitas + usuarios[1].receitas + usuarios[2].receitas
// const despesas = usuarios[0].despesas + usuarios[1].despesas + usuarios[2].despesas

// function somaNumeros(numeros) {
//  let soma = 0
//  for(let i = 0; i < numeros.length; i++) {
//    soma = soma + numeros[i]
//  }
//  return soma
// }

// function calculaSaldo(receitas, despesas) {
//  const somaReceitas =  somaNumeros(receitas)
//  const somaDespesas =  somaNumeros(despesas)
//  return somaReceitas - somaDespesas
// }

// const saldo = calculaSaldo(receitas, despesas)

// function exibeMensagem() {
//   for(let i = 0; i < usuarios.length; i++) {
//      const saldo = calculaSaldo(usuarios[i].receitas, usuarios[i].despesas)  
//     if(saldo >= 0){
//       console.log(`${usuarios[i].nome} possui o saldo POSITIVO de ${saldo}`)
//     }else {
//       console.log(`${usuarios[i].nome} possui o saldo NEGATIVO de ${saldo}`)
//     }
//   }
//  }
 
//  exibeMensagem()