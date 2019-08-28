/*
const prenom = prompt("Entrez votre prénom :");
alert(`Bonjour, ${prenom}`);
*/

/*
const saisie = prompt("Entez un nombre :");
const nb = Number (saisie);
alert (`votre nombre : \n ${nb}`);
*/

//La calculatrice à périmètre de disque
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

/*
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
*/

//EXERCICES SIMPLON LES CONDITIONS
//01
/*
const nb = Number (prompt("Entre un nombre entre 0 et 20 pour savoir de quel team tu-es !"));
if (nb <=10) {
    alert(`DC comix !`);
}
else {
    alert(`Marvel !`);
}
*/
/*
//02
const nb = Number (prompt("Quel est votre age ?"));
if (nb<18){
    alert(`Vous être mineur`);
}
else {
    alert(`Vous être majeur`);
}
*/

/*
//07
const cadeau = prompt("Entrez nom de votre cadeau");
if ((cadeau == "Nintendo Switch") || ('Playstation 4')){
    alert(`Merci !!! Ca me fait trop plaisir !`);
}
else{
    if cadeau //pas fini !
}
*/

/*
let reponse01 = prompt("Bonjour");
*/

/*
for ( var monNombre = 1; monNombre <= 50; monNombre++ ) {
    console.log( monNombre );
  }
  */

/*
 console.log('on va boucler');
 for ( var i = 0; i < 4; i++ ) {
   console.log('i', i, i < 4);
 }
 console.log('on a fini de boucler');
 */

 for(let nb =1; nb<=199; nb++){     
    if (nb %3===0) {
         console.log("fizz");
     }

    else if (nb %5===0) {
        console.log("buzz");
    }
    else{
        console.log(nb);
    }

    if (nb %3 === 0 && nb %5===0){
        console.log("fizzbuzz");
    }
 }
