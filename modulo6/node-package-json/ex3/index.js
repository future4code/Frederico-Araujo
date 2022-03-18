// Exercício 3

const listaDeTarefa = ['Se exercitar', 'Estudar', 'Trabalhar']

const novaTarefa = process.argv[2]

console.log("\033[31m" + ([...listaDeTarefa, novaTarefa]));

