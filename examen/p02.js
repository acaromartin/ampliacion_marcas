function invertirArray(mi_array) {

    let arrayInvertido = [];
    for(let i = mi_array.length -1; i >= 0; i--) {

        arrayInvertido.push(mi_array[i]);
    }
    return arrayInvertido; 
}

let ejemplo = invertirArray(["a", "b", "c", "d", "e", "f"]);

console.log(ejemplo);