'use strict'


let createInput = document.createElement('input');
createInput.id = 'inputSearch';
createInput.type = 'search';

let createBtn = document.createElement('button');
createBtn.id = 'buttonSearch';
createBtn.type = 'submit';
createBtn.name = 'button';
createBtn.value = 'enter';
createBtn.innerHTML = 'Search';


document.body.append(createInput);
document.body.append(createBtn);

