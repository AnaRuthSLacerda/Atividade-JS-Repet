
let all50 = 0;
let som10a20 = 0;
let count10a20 = 0;
let allMenos40 = 0;

for (let i = 0; i < 25; i++) {
let idade = Number(prompt("Informe a idade:"));
let altura = parseFloat(prompt("Informe a altura em metros:"));
let peso = parseFloat(prompt("Informe o peso em quilos:"));

if (idade > 50) {
    all50++;

}

if (idade >= 10 && idade <= 20) {
    som10a20 += altura;
    count10a20++;

}

if (peso < 40) {
    allMenos40++;

}

}

let mediaAlturas10a20 = count10a20 > 0 ? som10a20 / count10a20 : 0;
let porcentagemMenos40Kg = (allMenos40 / 25) * 100;


console.log(`Quantidade de pessoas com mais de 50 anos: ${all50}`);
console.log(`Média das alturas das pessoas entre 10 e 20 anos: ${mediaAlturas10a20.toFixed(2)}m`);
console.log(`Porcentagem de pessoas com peso inferior a 40kg: ${porcentagemMenos40Kg.toFixed(2)}%`);
