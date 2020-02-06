/*===============================================
    OPERADORES DE COMPARAÇÃO 

    >       Maior
    <       Menor
    >=      Maior igual a 
    <=      Menor igual a
    ==      Igual a 
    ===     Igual e do mesmo tipo
    !=      Diferente de
    !==     Diferente, inclusive do tipo

=================================================*/

// console.log( 5 > 4 ) // true
// console.log( 5 < 4 ) // false
// console.log( 5 >= 4 ) // true
// console.log( 4 <= 4 ) // true

// console.log( 4 == "4" ) // true
// console.log( 4 === "4" ) // false
// console.log( 4 != "5" ) // true
// console.log( 4 !== "5" ) // true



// DESAFIO 1 
// verificar se a pessoa é maior igual a 18 anos
// se sim, deixar entrar, se não, bloquear a entrada
// se a pessoa tiver 17 anos 
// avisar para voltar quando fizer 18 anos


const idade = 17

if (idade >= 18) {
    console.log('Deixar entrar!')
} else {
    console.log('Bloquear a entrada!')
}

if (idade === 17) {
    console.log('Volte quando fizer 18 anos!')
}