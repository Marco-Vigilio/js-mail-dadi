/*
Generare un numero random da 1 a 6, 
sia per il giocatore sia per il computer.
Stabilire il vincitore, 
in base a chi fa il punteggio più alto.
*/
let num_utente;
let num_pc;
const bottoneUno = document.getElementById("lancio_dadi");
let n_utente = document.createElement("p");
let n_pc = document.createElement("p");
const risultato = document.querySelector("#risultato");

bottoneUno.addEventListener("click", function(){

    num_utente = Math.floor(Math.random() * 6) + 1;
    console.log("Dado utente: " + num_utente);

    num_pc = Math.floor(Math.random() * 6) + 1;
    console.log("Dado pc: " + num_pc);

    if(num_utente > num_pc){
        console.log("Hai vinto");
        risultato.innerHTML = "VINTO";
        n_utente.append("dado utente: " + num_utente);
        n_pc.prepend("dado pc: " + num_pc);
        n_pc.prepend(n_utente);
        risultato.prepend(n_pc);
    }
    else if( num_utente == num_pc){
        console.log("Pareggio");
        risultato.innerHTML = "PAREGGIO";
    }
    else{
        console.log("Hai perso");
        risultato.innerHTML = "PERSO";
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
    let verifica = false;

    for(let i = 0; i < array.length; i++){
        
        if(email.value === array[i]){
            console.log("Email accettata: " + array[i] + " = " + email.value);
            verifica = true;
        }
        else{
            console.log("Non Autorizzato: " + array[i] + " != " + email.value);
        }
    }
    console.log("verifica: " + verifica);
    if(verifica == true){
        console.log("ENTRA PURE");
        document.getElementById("verifica_email").innerHTML = "ACCESSO CONSENTITO";
    }
    else{
        console.log("NON PUOI ENTRARE");
        document.getElementById("verifica_email").innerHTML = "ACCESSO NEGATO";
    }
    console.log();
}
);