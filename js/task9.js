'use strict'
let arr = [];
let sizeOfArray = prompt("Введите размер массива")

while (sizeOfArray <= 0){
  sizeOfArray = prompt("Вы ничего не ввели, введите размер массива")
  if (sizeOfArray === null){
    console.log('Нажата кнопка отмены ввода размер массива')
    break;
  }
}

for (let i=0; i<sizeOfArray; i++) {
  let variantOfNumber = prompt ("Введите число");
  if (variantOfNumber === null){
    console.log('Нажата кнопка отмены ввода элемента массива')
    break;
  }
  else if (variantOfNumber === ''){
    continue;
  }
  else if (isNaN(variantOfNumber)){
    continue;
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
