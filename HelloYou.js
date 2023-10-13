var readlineSync = require("readline-sync");
 
//Dit is een test code om te zien of ik via keuzes verschillende wegen kan kiezen

console.log("Je loopt in je buurt en je ziet de beruchte spookhuis waar iedereen bang voor is")
console.log("Ga je naar binnen?")
  tekst1 = "Ja, ik voel mij moedig genoeg"
  tekst2 = "Nee, want ik ben slim"
  vraag1 = ["Ja, ik voel mij moedig genoeg", "Nee, want ik ben slim"];
  index = readlineSync.keyInSelect(vraag1, "Ga je naar binnen?");

//Hier wordt bepaalt welke richting je op gaat

if ( tekst1 === vraag1[index] ) {
    console.log("Je besluit dat je stoer en populair bent en je gaat het enge huis naar binnen.")
    
    einde1
} else if ( tekst2 === vraag1[index] ) {
    console.log("Je besluit dat je nog niet dood wil en je loopt weg.")
    einde2
} else {
    console.log("Je heb besloten om het spel te stoppen")
}

//Dit zijn de test eindes

function einde1(){
   console.log("Je loopt naar binnen en wordt gelijk neergestoken door de geest genaamd Piet. Wat een loser.")
   console.log("Einde 1: de domme keuze")
}

function einde2(){
   console.log("Je besluit dat je nog niet dood wil en je gaat verder met je leven.")
   console.log("Einde 2: de slimme keuze")
}

//Hier wordt gevraagd of je opnieuw wilt beginnen
//Wil nog een sort loop maken naar het begin

console.log("Bedankt voor het spelen van mijn game! ")
console.log("Wil je opnieuw spelen?")
opnieuw = "Ja, ik wil opnieuw spelen"
stoppen = "nee, ik wil stoppen."
laatstevraag = ["Ja, ik wil opnieuw spelen","nee, ik wil stoppen." ]
index = readlineSync.keyInSelect(laatstevraag, "Wil je opnieuw spelen?");

if (opnieuw === laatstevraag[index]) {
    console.log("Het spel begint opnieuw.")
} else {
    console.log("Het spel wordt nu afgesloten.")
}
