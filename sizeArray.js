'use strict';

let nums = [7, 4, 0, 9, 7, 6, 3, 8];
let contador = 0; 

function sizeArray(nums){
for (let i = 0; i < nums.length; i++) {
    contador++; 
}

alert("El tamaño del array es: " + contador);

}

sizeArray(nums);
