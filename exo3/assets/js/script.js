// déclaration des variables
let resultbtn = document.getElementById('btnmult');

//création des listener
resultbtn.addEventListener('click', () => {
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;

    alert(number1*number2);
});


