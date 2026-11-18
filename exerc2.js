console.log("\n--- EXERCÍCIO 2 ---");

console.log(90 > 10);            // Resultado esperado: true
console.log(10 === '10');        // Resultado esperado: false (tipos diferentes: number e string)
console.log(10 !== 10);          // Resultado esperado: false (10 é estritamente igual a 10)
console.log('ifpr' === 'IFPR');  // Resultado esperado: false (JavaScript diferencia maiúsculas de minúsculas)
console.log(5 >= 5 && 3 > 4);    // Resultado esperado: false (true && false = false)
console.log(5 >= 5 || 3 > 4);    // Resultado esperado: true (true || false = true)
console.log(!(5 >= 5));          // Resultado esperado: false (negação de true = false)