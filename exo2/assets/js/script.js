//Déclaration des variables
let div = document.querySelector('div');
let btnBold = document.querySelector('#btnBold');
let btnColor = document.querySelector('#btnColor');
let btnEnlarge = document.querySelector('#btnEnlarge');


// Création des Listeners
btnBold.onclick = bold;
btnColor.onclick = colorChange;
btnEnlarge.onclick = enlarge;


// Création des fonctions

// fonction mettre en gras
function bold(){
    if(div.style.fontWeight == 'bold'){
        div.style.fontWeight = 'initial';
    } else{
        div.style.fontWeight = 'bold';
    };
};

//fonction changer de couleur
function colorChange(){
    div.style.color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
};

//fonction agrandir
function enlarge(){
    if(div.style.fontSize == 'large'){
    div.style.fontSize = '';
    } else {
        div.style.fontSize = 'large'
    };
};


