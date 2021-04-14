
/*
let arreglo = [0,1,2,8,6];

let arreglo_pop = arreglo.pop();

console.log("arreglo pop ", arreglo_pop);
console.log( arreglo);

let arreglo_push = arreglo.push(90);

console.log("arreglo push ", arreglo);

let arreglo_map = arreglo.map((item)=> item +1);

let arreglo_filter = arreglo.filter((item) => item>2);
let arreglo_include = arreglo.includes("gustavo");

console.log("arreglo map ", arreglo_map);
console.log("arreglo filter ", arreglo_filter);

*/
let arreglo = [0,3,4,6,11];
let arregloDos= [];

function sonPares(arreglo){

    for(let index = 0; index < arreglo.length; index++){
        if(arreglo[index]% 2 == 0){
            console.log("el numero: " + arreglo[index] + " es par");
             arregloDos.push(arreglo[index]);
        }
    }

    return arregloDos;
         
}

console.log(sonPares(arreglo));

//EJERCICIO 2

