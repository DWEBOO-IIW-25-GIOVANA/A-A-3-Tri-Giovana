console.log("\n--- EXERCÍCIO 3 ---");

// Testes diretos solicitados no enunciado (2024, 1900, 2000 e 2026)
let testesAnos = [2024, 1900, 2000, 2026];
testesAnos.forEach(anoTeste => {
    let ehBissextoTeste = (anoTeste % 4 === 0 && anoTeste % 100 !== 0) || (anoTeste % 400 === 0);
    console.log(`Teste fixo - O ano ${anoTeste} é bissexto? ${ehBissextoTeste}`);
});
let anoUsuario = Number(prompt("Exercício 3 - Digite um ano para verificar se é bissexto (ex: 2024, 1900, 2000, 2026):"));
let isBissexto = (anoUsuario % 4 === 0 && anoUsuario % 100 !== 0) || (anoUsuario % 400 === 0);

console.log(`O ano ${anoUsuario} é bissexto? ${isBissexto}`);
alert(`O ano ${anoUsuario} é bissexto? ${isBissexto}`);