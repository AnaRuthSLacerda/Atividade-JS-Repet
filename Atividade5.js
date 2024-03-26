const faixasEtarias = {
    idadeAte15: 0,
    idadeDe16a30: 0,
    idadeDe31a45: 0,
    idadeDe46a60: 0,
    idadeAcima60: 0
  };
  
  for (let i = 0; i < 15; i++) {
    let idade = Number(prompt("Digite a idade da pessoa:"));
    
    if (idade <= 15) {
      faixasEtarias.idadeAte15++;
    } else if (idade >= 16 && idade <= 30) {
      faixasEtarias.idadeDe16a30++;
    } else if (idade >= 31 && idade <= 45) {
      faixasEtarias.de31a45++;
    } else if (idade >= 46 && idade <= 60) {
      faixasEtarias.de46a60++;
    } else if (idade > 61) {
      faixasEtarias.acimaDe61++;
    }
  }
  
  const totalPessoas = 15;
  console.log('Quantidade de pessoas em cada faixa etária:');
  console.log(`Até 15 anos: ${faixasEtarias.idadeAte15}`);
  console.log(`De 16 a 30 anos: ${faixasEtarias.idadeDe16a30}`);
  console.log(`De 31 a 45 anos: ${faixasEtarias.de31a45}`);
  console.log(`De 46 a 60 anos: ${faixasEtarias.de46a60}`);
  console.log(`Acima de 61 anos: ${faixasEtarias.acimaDe61}`);
  
  console.log('Percentagem de pessoas na primeira e na última faixa etária:');
  console.log(`Até 15 anos: ${(faixasEtarias.idadeAte15 / totalPessoas * 100).toFixed(2)}%`);
  console.log(`Acima de 61 anos: ${(faixasEtarias.acimaDe61 / totalPessoas * 100).toFixed(2)}%`);
  