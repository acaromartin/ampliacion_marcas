function shuffleArray(arr) {
    arr.sort(function (a, b) {
        return Math.random() - 0.5;
    });
}
function ordenarArray(arr) {
    arr.sort(function (a, b) {
        if (a>b)
        {
            return 2;
        }
        else
        {
            return -2   ;
        }
    });
}

function calidad(miArray)
{
    let suma = 0;
    for (let index = 0; index < miArray.length; index++) 
    {
        suma = suma + miArray[index];  
    }
    return suma;
}

let aBaraja = [1,2,3,4,5,6,7,8,9,10,11,12];

console.log(aBaraja);

shuffleArray(aBaraja);

console.log(aBaraja);

// jugador 1
let aJugador1 = [];
aJugador1.push(aBaraja[0]);
aJugador1.push(aBaraja[4]);
aJugador1.push(aBaraja[8]);
console.log("Mano del jugador1");
console.log(aJugador1);
// jugador 2
let aJugador2 = [];
aJugador2.push(aBaraja[1]);
aJugador2.push(aBaraja[5]);
aJugador2.push(aBaraja[9]);
console.log("Mano del jugador2");
console.log(aJugador2);
// jugador 3
let aJugador3 = [];
aJugador3.push(aBaraja[2]);
aJugador3.push(aBaraja[6]);
aJugador3.push(aBaraja[10]);
console.log("Mano del jugador3");
console.log(aJugador3);
// jugador 4
let aJugador4 = [];
aJugador4.push(aBaraja[3]);
aJugador4.push(aBaraja[7]);
aJugador4.push(aBaraja[11]);
console.log("Mano del jugador4");
console.log(aJugador4);


let suma = 0;

for (let index = 0; index < aJugador1.length; index++) 
{
    suma = suma + aJugador1[index];  
}

console.log("calidad de la mano jugador 1 "+suma);
suma = 0;
for (let index = 0; index < aJugador2.length; index++) 
{
    suma = suma + aJugador2[index];  
}
console.log("calidad de la mano jugador 2 "+suma);
suma = 0;
for (let index = 0; index < aJugador3.length; index++) 
{
    suma = suma + aJugador3[index];  
}
console.log("calidad de la mano jugador 3 "+suma);
suma = 0;
for (let index = 0; index < aJugador4.length; index++) 
{
    suma = suma + aJugador4[index];  
}
console.log("calidad de la mano jugador 4 "+suma);

//-hacer una funcion calidad
//-decir que jugador va mejor y que jugador va peor
        
console.log("calidad de la mano jugador 1 "+calidad(aJugador1));
console.log("calidad de la mano jugador 2 "+calidad(aJugador2));
console.log("calidad de la mano jugador 3 "+calidad(aJugador3));
console.log("calidad de la mano jugador 4 "+calidad(aJugador4));



let suma1 = 12; // calidad(aJugador1);
let suma2 = 5;
let suma3 = 6;
let suma4 = 20;
//-decir que jugador va mejor y que jugador va peor

// para 3
if ((suma1 > suma2) && (suma1 > suma3))
{
    console.log("el mayor es suma1");
}
else if (suma2 > suma3)
{
    console.log("el mayor es suma2");
}
else
{
    console.log("el mayor es suma3");
}

// para 4
if ((suma1 > suma2) && (suma1 > suma3) && (suma1 > suma4))
{
    console.log("el mayor es suma1");
}
else if ((suma4 > suma2) && (suma4 > suma3))
{
    console.log("el mayor es suma4");
}
else if (suma2 > suma3)
{
    console.log("el mayor es suma2");
}
else
{
    console.log("el mayor es suma3");
}

//mayor2(n1,n2)  // me devuelve el mayor, osea devuelve n1 o n2
//mayor3(n1,n2,n3)
//mayor4(n1,n2,n3,n4)

function mayor2(n1,n2) 
{
    if (n1>n2) return n1;
    else return n2;  
}

console.log(mayor2(6,8));


function mayor3(n1,n2,n3) 
{
    if ((n1 > n2) && (n1 > n3))
    {
        return n1;
    }
    else if (n2 > n3)
    {
        return n2;
    }
    else
    {
        return n3;
    }
}

console.log(mayor3(6,9999,8));

function mayor4(n1,n2,n3,n4) 
{
    if ((n1 > n2) && (n1 > n3) && (n1 > n4))
    {
        return n1;
    }
    else if ((n4 > n2) && (n4 > n3))
    {
        return n4;
    }
    else if (n2 > n3)
    {
        return n2;
    }
    else
    {
        return n3;
    }   
}

console.log(mayor4(6,88888,8,-80));

function mayor8 (n1,n2,n3,n4,n5,n6,n7,n8)
{
    return mayor2( mayor4(n1,n2,n3,n4) ,  mayor4(n5,n6,n7,n8)       );
}

let aNum = [];

aNum[0]=9;
aNum[1]=9999;
aNum[2]=999;

// mayor de este array

let mayor = -9999999;
for (let index = 0; index < aNum.length; index++) 
{
    if (aNum[index] > mayor)
    {
        mayor = aNum[index];
    }    
}
console.log("El mayor es :"+mayor);
