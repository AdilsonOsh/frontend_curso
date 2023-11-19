let alunos = [
    { nome: "Andre", nota: 6},
    { nome: "Natalia", nota: 9},
    { nome: "Gabriel", nota: 5},
    { nome: "Renata", nota: 7},
    { nome: "João", nota: 4},
]

const alunosAprovados = alunos.filter((alunos) => {
    return alunos.nota >= 6;
})

console.log(alunosAprovados);
