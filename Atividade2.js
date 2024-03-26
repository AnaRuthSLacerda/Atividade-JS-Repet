let som = 0
let num

do {
num = prompt("informe um valor (ou um negativo para sair):")
num = Number(num)
if (num >= 0) {
    som += num
}
} while (num >= 0)

console.log(`A soma dos valores é: ${som}`)