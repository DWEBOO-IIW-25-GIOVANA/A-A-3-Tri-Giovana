console.log("\n--- EXERCÍCIO 4 ---");

let nota1 = Number(prompt("Exercício 4 - Digite a primeira nota:"));
let nota2 = Number(prompt("Exercício 4 - Digite a segunda nota:"));
let nota3 = Number(prompt("Exercício 4 - Digite a terceira nota:"));

let media = (nota1 + nota2 + nota3) / 3;
let mediaArredondada = media.toFixed(1);

console.log(`Notas: ${nota1}, ${nota2}, ${nota3} | Média: ${mediaArredondada}`);
alert(`A média das notas é: ${mediaArredondada}`);