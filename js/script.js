/*
const prenom = prompt("Entrez votre prénom :");
alert(`Bonjour, ${prenom}`);
*/

/*
const saisie = prompt("Entez un nombre :");
const nb = Number (saisie);
alert (`votre nombre : \n ${nb}`);
*/

/*
const rayon = prompt("Entrez le rayon pour calculé le périmètre du disque");
const pi = 3.14 ;
const perimetre = 2 * pi * rayon;
alert(`Voici le résultat : ${perimetre}`);
*/

//Tuto
/* 
const nombre = Number(prompt("Entrez un nombre entre 1 et 100 :"));

if (nombre > 0) {
    alert(`${nombre} est positif`);
}

else {
 if (nombre < 0) {
    alert(`${nombre} est négatif`);
    }
    else {
        alert(`${nombre} est nul`);
    }
}
// "&&" ça veux dire "et"
if ((nombre >= 0)&&(nombre <=100)){
    console.log(nombre + ' est compris entre 0 et 100');
}
// "||" ça veux dire "ou"
if ((nombre <0) || (nombre > 100)) {
    alert(`${nombre} est en dehors de l'intervalle [0, 100]`)    
}
*/

//Mon teste perso :
const nombre = Number(prompt("Entrez un nombre entre -100 et 100 :"));


// "&&" ça veux dire "et"
if ((nombre >= -100)&&(nombre <=100)){
    console.log(nombre + ' est compris entre -100 et 100');
    if (nombre > 0) {
        alert(`${nombre} est positif`);
    }
    
    else {
     if (nombre < 0) {
        alert(`${nombre} est négatif`);
        }
        else {
            alert(`${nombre} est nul`);
        }
    }
}
// "||" ça veux dire "ou"
if ((nombre <-100) || (nombre > 100)) {
    alert(`${nombre} est en dehors de l'intervalle proposé ! Espèce de NOOB !`)    
}