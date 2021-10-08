'use strict'

let inptSearch = document.getElementById('inputSearch');
let btnSearch = document.getElementById('buttonSearch');

    btnSearch.onclick = function() {
        let  valueOfInput = inptSearch.value;
        if (valueOfInput == "google"){
            setTimeout(() => alert('Yandex круче. Но это не точно'), 3000);
        }
        else{
            alert(valueOfInput);
            
        
    };
}   
