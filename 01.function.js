console.log("01 - Fonctions");

var nombre1=10;
var nombre2=20;

function additionner(nb1, nb2){
    return nombre1 + nombre2;
}

var resultat1 = additionner(nombre1,nombre2);
    console.log('resultat 1 =',resultat1);

var somme = additionner;
var resultat2 = somme(nombre1,nombre2);
console.log('resultat 2 =',resultat2);

var multiplication = function(n1,n2){
    return nombre1 * nombre2;
}
var resultat3 = multiplication(nombre1,nombre2);
console.log('resultat 3 =',resultat3);


function afficherOperation(nomOperation, operation, nb1, nb2){
console.log(nomOperation+'('+nb1+',' +nb2+')'+ '=' +operation(nb1,nb2));

}

afficherOperation('Somme', somme,20,40);
console.log(afficherOperation);
afficherOperation('Multiplication', function(a, b){
    return a * b;
}, 10,20);
afficherOperation('Soustraction', function(a, b){
    return a - b;
}, 15,5);