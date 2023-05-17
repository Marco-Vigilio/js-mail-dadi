
let num_utente;
let num_pc;
const bottone = document.querySelector("input");

const risultato = document.createElement("p");

bottone.addEventListener("click", function(){

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

