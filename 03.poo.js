function Personne (nom, prenom, pseudo, age){
    this.nom=nom;
    this.prenom=prenom;
    this.pseudo=pseudo;
    this.age=age;
    this.getNomComplet = function(){
        return this.nom+' '+this.prenom+' '+this.pseudo;
    }
}

var jules = new Personne('LEMAIRE','Jules','jules77');
var paul = new Personne('LEMAIRE','Paul','paul44');

console.log(jules.nom);
console.log(jules.prenom);
console.log(jules.pseudo);
console.log(jules.getNomComplet());

function afficherPersonne(){
    console.log(paul.nom);
    console.log(paul.prenom);
    console.log(paul.pseudo);
    console.log(paul.getNomComplet());
}

jules.pseudo='jules44';

console.log(jules.getNomComplet());

jules.age=30;
console.log(jules.age);

