'use strict'
let arr = [];
let sizeOfArray = prompt("Введите размер массива")

for (let i=0; i<sizeOfArray; i++) {
  let variantOfNumber = +prompt ("Введите число")
  if (isNaN(variantOfNumber)){
    i++;
  }
  else{
    arr.push(variantOfNumber);
  }
}
console.log(arr);



function findMax(numArray) {
    return Math.max.apply(null, numArray);
  }

console.log(findMax(arr))


// function findMax(array){
//     let max = array[0];
//     for(let i=1; i<array.length; i++){
//       if(array[i] > max){
//         max = array[i];   
//       }
//      }
//    return max;
//    }
