let count = 0;

for (let i = 0; i < 20; i++) {
let num = Number(prompt("Informe um número:"))
if (num >= 0 && num <= 100) {
    count++
}

}

console.log(`Existem ${count} números entre 0 e 100.`)
