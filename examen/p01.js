function sumaPares(array){
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            suma += array[i];
        }
    }
    return suma;
}

miSuma = sumaPares([1,2,3,4,5,6]);
console.log(miSuma);