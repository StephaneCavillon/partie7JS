// Déclaration de la fonction
function fois(a, b){
    let result = a * b;
    
    return result;
};


// déclaration des variables
let resultbtn = document.getElementById('btnmult');
let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');

//création des listener
resultbtn.addEventListener('click', function (){
    alert(fois(number1.value, number2.value));
});