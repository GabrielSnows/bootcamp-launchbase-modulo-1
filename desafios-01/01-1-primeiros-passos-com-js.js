// Cálculo de IMC:

    /*
const nome = 'Carlos';
const peso = 84;
const altura = 1.88;
const sexo = 'Masculino';

const imc = peso / (altura * altura);

if (imc >= 30) {
   console.log('Carlos você está acima do peso')
} else {
    console.log('Carlos você não está acima do peso')
}
    */


// Cálculo de aposentadoria

const contribuicaoF = 85;
const contribuicaoM = 95;

const nomef = 'Clara';
const sexof = 'Feminino';
const idadef = 48;
const contribuicaoC = 23;

const nomem = 'Paulo';
const sexom = 'Masculino';
const idadem = 54;
const contribuicaoP = 27;

const tempoF = (idadef + contribuicaoC);
const tempoM = (idadem + contribuicaoP);


if (tempoF >= contribuicaoF) {
    console.log(`${nomef}, você pode se aposentar!`)
} else {
   console.log(`${nomef}, você ainda não pode se aposentar!`)
}

if (tempoM >= contribuicaoM) {
    console.log(`${nomem}, você pode se aposentar!`)
} else {
    console.log(`${nomem}, você ainda não pode se aposentar!`)
}