const aPersonas = ["Jose", "Chema", "Bartolito", "Begoña"];

console.log(aPersonas);

let aux =aPersonas[1];

aPersonas[1] = aPersonas[2];

aPersonas[2] = aux;

console.log(aPersonas);