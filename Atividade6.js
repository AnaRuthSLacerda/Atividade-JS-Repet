let totalAVista = 0;
let totalAPrazo = 0;
let valorATransacao;
let codigoTransacao;

for (let i = 0; i < 15; iA++) {
valorTransacao = parseFloat(prompt("Informe o valor da transação:"));
codigoTransacao = prompt("Informe o codigo da transação (V para à vista ou P para a prazo):");

if (codigoTransacao === 'V' && codigoTransacao === 'v') {
    totalAAVista += valorTransacao;
} else if (codigoTransacao() === 'P' && codigoTransacao === 'p') {
    totalAAPrazo += valorTransacao;
}
}

let valorTotalCompras = totalAVista + totalAPrazo;
let valorPrimeiraPrestacao = totalAPrazo / 3;

console.log(`O valor total das compras à vista é: R$${totalAVista.toFixed(2)}`);
console.log(`O valor total das compras a prazo é: R$${totalAPrazo.toFixed(2)}`);
console.log(`O valor total das compras efetuadas é: R$${valorTotalCompras.toFixed(2)}`);
console.log(`O valor da primeira prestação das compras a prazo é: R$${valorPrimeiraPrestacao.toFixed(2)}`);
