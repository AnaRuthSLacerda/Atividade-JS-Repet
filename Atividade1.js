/*Faça um algoritmo que leia 20 números e, ao final, escreva quantos estão entre 0 e 100, 
quantos estão entre 101 e 200 e quantos são maiores de 200.*/
let cont0a100 = 0;
let cont101a200 = 0;
let contMaior200 = 0;

for (let i = 0; i < 20; i++) {
   let num = Number(prompt(`Informe um número`))
   num = parseInt(num)

   if(num >= 0 && num <= 100){
        cont0a100++;
   } else if (num >= 101 && num <= 200){
        cont101a200++;
   } else if (num > 200){
     contMaior200++;
   }
}

console.log(`Números entre 0 e 100: ${cont0a100}`);
console.log(`Números entre 101 e 200: ${cont101a200}`);
console.log(`Números maiores que 200: ${contMaior200}`);