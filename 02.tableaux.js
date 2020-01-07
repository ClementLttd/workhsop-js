var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

//exercice forEach
function afficher(element, index, array){
    console.log(element);
}

villes.forEach(afficher);

//exercice every
var resultatEvery = villes.every(function(element){
    return element.includes('a');
});

console.log('lettreADansToutesLesVilles =' + resultatEvery);

//exercice some
var resultatSome = villes.some(function(element){
    return element.includes('-');
});

console.log('auMoinsUneVilleAvecUnTiret =' + resultatSome);

//exercice filter
