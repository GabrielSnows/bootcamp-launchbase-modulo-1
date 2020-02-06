const alunosDaTurmaA = [
    {
        nome: 'Mayk',
        nota: 1.8
    },
    {
        nome: 'Diego',
        nota: 10
    },
    {
        nome: 'Fulano',
        nota: 2
    },
    {
        nome: 'Mais um aluno',
        nota: 10
    }
]


function calculaMedia(alunos) {
    let soma = 0;
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }

    const media = soma / alunos.length
    return media
}

const media1 = calculaMedia(alunosDaTurmaA)

console.log(alunosDaTurmaA)