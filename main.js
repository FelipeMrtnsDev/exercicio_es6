const alunos = [
    { nome: 'Felipe', nota: 6 },
    { nome: 'Kamila', nota: 10},
    { nome: 'Pedro', nota: 2},
    { nome: 'atila', nota: 0},
];

function alunosAprovados(alunos) {
    return alunos.filter(alunos => alunos.nota >= 6)
;}

const aprovados = alunosAprovados(alunos);
console.log(aprovados);

