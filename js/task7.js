'use strict'
let arrRandom = Array.from({length: 10}, () => Math.floor(Math.random() * 10))

console.log(arrRandom);

function maxElement(arrRandom){
    let max = arrRandom[0];
    for(let i=1; i<arrRandom.length; i++){
      if(arrRandom[i] > max){
        max = arrRandom[i];   
      }
     }
   return max;
   }

function mimElement(arrRandom){
    let min = arrRandom[0];
    for(let i=1; i<arrRandom.length; i++){
      if(arrRandom[i] < min){
        min = arrRandom[i];   
      }
     }
   return min;
   }
   
console.log(maxElement(arrRandom));
console.log(mimElement(arrRandom));