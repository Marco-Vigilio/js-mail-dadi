/*
Generare un numero random da 1 a 6, 
sia per il giocatore sia per il computer.
Stabilire il vincitore, 
in base a chi fa il punteggio più alto.
*/
let num_utente;
let num_pc;
const bottoneUno = document.getElementById("lancio_dadi");


bottoneUno.addEventListener("click", function(){

    num_utente = Math.floor(Math.random() * 7) + 1;
    console.log("Dado utente: " + num_utente);

    num_pc = Math.floor(Math.random() * 7) + 1;
    console.log("Dado pc: " + num_pc);

    if(num_utente > num_pc){
        console.log("Hai vinto");
    }
    else if( num_utente == num_pc){
        console.log("Pareggio");
    }
    else{
        console.log("Hai perso");
    }
    console.log();
});

/*
* Chiedi all’utente la sua email,
* controlla che sia nella lista di chi può accedere,
  stampa un messaggio appropriato sull’esito del controllo.

Tenete presente che non è permesso utilizzare funzioni
 built-in degli array come 
 Array.includes() e 
 Array.indexOf(), 
 pena l'annullamento dell'esercizio.
 */

const bottoneDue = document.getElementById("invio_email");
const email = document.getElementById(("user_email"));

const array = ["ciao@ciao", "tony@tony.it", "tony.tony@boolean.it"];

bottoneDue.addEventListener("click", function(){
    
    console.log("Email digitata: " + email.value);
    let accettato;
    let nonAccetato;
    let verifica;

    for(let i = 0; i < array.length; i++){
        console.log("Email accettata: " + array[i]);
        if(email.value === array[i]){
            console.log("Accettato");
            verifica = "Accettato";
        }
        else{
            console.log("Non Autorizzato");
            verifica = "Non accettato";
        }
        console.log();
    }
    console.log(verifica);
    console.log();
}
);