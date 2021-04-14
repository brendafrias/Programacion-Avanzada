let array = [0,4,5,6];

for(let index = 0; index < array.length; index++){
    console.log(array[index]);
}

array.forEach(element => {
    console.log(element);
    
});

setTimeout(()=>{
    console.log("funcion timer")
}, 3000);

console.log("fin");
//si tarda mas de 3 seg ya leyo el codigo y te muestra el siguiente mensaje (asincronismo) no espera a que terminen las otras funciones
//para solucionar esto utilizaremos callbacks
