var readlineSync = require("readline-sync");

function rollDice(){
    let rand = Math.ceil(Math.random() * 6);
    return rand;
}

let hp = 30

let ghosthealth = 20 
let ghostattack = 5

let dhealth = 50
let dattack = 5

GhostEncounter()

function GhostEncounter(){

    
    while (ghosthealth > 0){
        console.log("What will you do? ")
        fightghost = "I will try to suck him up! "
        defendghost = "I will defend myself from the ghost! "
        ghostfight = [fightghost, defendghost];
        index = readlineSync.keyInSelect(vraag10, "What will you do?")
        //Hier wordt bepaalt welke richting je op gaat

        if (fightghost === ghostfight[index]) {
            let attack = rollDice();  
            let ghostdamage = (attack);
            ghosthealth -= ghostdamage
            console.log("You try to suck up the ghost, you do " + attack + " damage ");
            
            if (ghosthealth <= 0) {
               einde2()
               break
            } else if (ghosthealth >= 0) {
            hp -= ghostattack
            console.log("The ghost tries to posses you. You dodge him but hit your head against the wall and do " + ghostattack + " damage on yourself, you still have " + hp + " hp left. ")
            
            if (hp < 1){
                einde3()
                break
            } else if (hp > 1) {
                GhostEncounter()
                break
            }
            } else {
            GhostEncounter()
            }
        } else if (defendghost === ghostfight[index]) {
            if (Math.round(Math.random()*4) >= 2){
                console.log("You succesfully dodge the ghost his attack. ")
                GhostEncounter()
                break
            } else if (Math.round(Math.random()*4) <= 2) {
                hp -= ghostattack
                console.log("You tried to defend yourself against the ghost, but you failed miserably. The ghost does " + ghostattack + " damage on you. You have " + hp + " hp left.")
                GhostEncounter()
            }
        } else {
            console.log("You have decided to quit the game. ")
            gameover()
        }
    }
}

DemonEncounter()

function DemonEncounter(){

    
    while (dhealth > 0){
        console.log("What will you do? ")
        fightd = "I will try to suck him up! "
        defendd = "I will defend myself from the Demon! "
        truefightd = "I will throw a rock against his head with my vacuum!"
        dfight = [fightd, defendd, truefightd];
        index = readlineSync.keyInSelect(dfight, "What will you do?")
        //Hier wordt bepaalt welke richting je op gaat

        if (truefightd === dfight[index]) {
            let attack = rollDice();  
            let ddamage = (attack);
            dhealth -= ddamage
            console.log("You suck a piece of rock onto your vacuum cleaner and point it towards the demon, you then throw the rock with the blow button of your vacuum cleaner and hits the demon, weakening it. ");
            
            if (dhealth <= 0) {
               einde4()
               break
            } else if (dhealth >= 0) {
            hp -= dattack
            console.log("The demon tries to possess. You feel yourself weakening. You lose " + dattack + " hp, you still have " + hp + " hp left. ")
            
            if (hp < 1){
                einde3()
                break
            } else if (hp > 1) {
                DemonEncounter()
                break
            }
            } else {
            DemonEncounter()
            }
        } else if (defendd === dfight[index]) {
            if (Math.round(Math.random()*4) >= 2){
                console.log("You succesfully dodge the Demon his attack. ")
                DemonEncounter()
                break
            } else if (Math.round(Math.random()*4) <= 2) {
                hp -= dattack
                console.log("You tried to defend yourself against the Demon, but you failed miserably. The Demon hits you with his claws and does " + ghostattack + " damage on you. You have " + hp + " hp left.")
                DemonEncounter()
            }
        } else if (fightd === dfight[index]){
            console.log("You try to suck the demon with your vacuum cleaner, but it doesn't seem to work.")
            break 
         } else {
            console.log("You have decided to quit the game. ")
            gameover()
            break
        }
    }
}
