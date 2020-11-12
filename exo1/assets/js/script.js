// Déclaration de la fonction
function fois(a, b){
    let result = a *b;

    return result;
};


// déclaration des variables
let number1 = document.getElementById('number1').value;
let number2 = document.getElementById('number2').value;
let resultbtn = document.getElementById('btnmult');

//création des listener
resultbtn.addEventListener('click', function (){
    alert(fois(number1, number2));
});