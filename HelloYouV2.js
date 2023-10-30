var readlineSync = require("readline-sync");

//Ik ga proberen of ik baas gevechten kan doen
function rollDice() {
    let rand = Math.ceil(Math.random() * 14);
    return rand;
}

let end1count = 0
let end2count = 0
let end3count = 0
let end4count = 0



Game()

function Game() {
    let hp = 30


    let ghosthealth = 20
    let ghostattack = 5

    let dhealth = 50
    let dattack = 5

    console.log("You're walking through your street. ")
    console.log("You notice that the missing person posters of Katie who have been missing since last summer still hang there. ")
    console.log("The sun is setting and you have to hurry home because mom made chicken, and you love chicken. ")
    console.log("But as you're hurrying home you notice the old abandoned house where there are ridiculous stories about it being haunted. ")

    console.log(`%c
                           .-----.
                         .'       '.
                        :      ^v^  :
                        :           :
                        '           '
         |~        www   '.       .'
        /.\\       /#^^\\_   '-/\\--'
       /#  \\     /#%    \\   /# \\
      /#%   \\   /#%______\\ /#%__\\
     /#%     \\   |= I I ||  |- |
     ~~|~~~|~~   |_=_-__|'  |[]|
       |[] |_______\\__|/_ _ |= |'.
^V^    |-  /= __   __    /-\\|= | :;
       |= /- /\\/  /\\/   /=- \\.-' :;
       | /_.=========._/_.-._\\  .:'
       |= |-.'.- .'.- |  /|\\ |.:'
       \\  |=|:|= |:| =| |~|~||'|
       |~|-|:| -|:|  |-|~|~||=|      ^V^
       |=|=|:|- |:|- | |~|~|| |
       | |-_~__=_~__=|_^^^^^|/___
       |-(=-=-=-=-=-(|=====/=_-=/\\
       | |=_-= _=- _=| -_=/=_-_/__\\ 
       | |- _ =_-  _-|=_- |]#| I II
       |=|_/ \\_-_= - |- = |]#| I II
       | /  _/ \\. -_=| =__|]!!!I_II!!
      _|/-'/  ' \\_/ \\|/' _ ^^^^'.==_^.
    _/  _/'-./'-; '-.\\_ / \\_'\\'. '. ==='.
   / .-'  __/_   '.   _/.' .-' '-. ; ====;\\
  /.   './    \\ '. \\ / -  /  .-'.' ====='  >
/  \\  /  .-' '--.  / .' /  '-.' ======.' /
`, `font-family: monospace`);
    console.log("You are curious if the stories may be true or are just some ridiculous stories that the weird kid Kevin keeps telling about. ")
    console.log("Do you want to go to take a peek inside the house to prove Kevin wrong or do you want to go home and eat the delicious chicken your mom made? ")
    antwoord1a = "It wouldn't hurt to take a peek. What's the worst thing that could happen? Me getting kidnapped by a stranger who will do horrible things to me until I beg God to kill me? I'll take the risk."
    antwoord1b = "I don't think that's a great idea. What if Katie did look in there and is missing because of that? Plus mom is making chicken and I really haven't eaten all day. So I'll continue going home."
    vraag1 = [antwoord1a, antwoord1b];
    index = readlineSync.keyInSelect(vraag1, "Do you want to go to take a peek inside the house to prove Kevin wrong or do you want to go home and eat the delicious chicken your mom made?");

    //Hier wordt bepaalt welke richting je op gaat

    if (antwoord1a === vraag1[index]) {
        console.log(" You decide it wouldn't hurt to just peek around the house to see if there are any ghosts or creepy old men. So you walk over to the abandoned house. You peek through the window and notice that its all black in there. All you can see are some furniture underneath a white blanket. How long has this house been abandoned for? You then go to the door and see if its locked. You then open the door and a sudden chill washes over you.")

        stuk2()
    } else if (antwoord1b === vraag1[index]) {
        console.log(" I don't think that's a great idea. ")
        console.log("What if Katie did look in there and is missing because of that? ")
        console.log("Plus mom is making chicken and I really haven't eaten all day. ")
        console.log("So I'll continue going home. ")
        einde()
    } else {
        console.log("You have decided to quit the game. ")
        gameover()
    }

    function stuk2() {
        console.log("You decide it wouldnt hurt to just peek around the house to see if there are any ghosts or creepy old men. ")
        console.log("So you walk over to the abandoned house. ")
        console.log("You peek through the window and notice that its all black in there. ")
        console.log("All you can see are some furniture underneath a white blanket. ")
        console.log("How long has this house been abandoned for? ")
        console.log("You then go to the door and see if its locked. ")
        console.log("You then open the door and a sudden chill washes over you.")
        console.log("Are you sure you want to go in the house? ")
        antwoord2a = "No, I want to go back to mommy and her delicious chicken! "
        antwoord2b = "Yes, I'm a big boy! Mom and her chicken can wait! "
        vraag2 = [antwoord2a, antwoord2b];
        index = readlineSync.keyInSelect(vraag2, "Are you sure you want to go in the house? ");

        //Hier wordt bepaalt welke richting je op gaat

        if (antwoord2a === vraag2[index]) {
            einde()
        } else if (antwoord2b === vraag2[index]) {
            stuk3()
        } else {
            console.log("You have decided to quit the game. ")
            gameover()
        }
    }

    function stuk3() {
        console.log("You then walk inside the abandoned house. ")
        console.log("The door suddenly closes on itself and you try to open it. ")
        console.log("It's locked. ")
        console.log("That's what happens if a house isn't maintained frequently. ")
        console.log("You then suddenly hear a creaking of the stairs, but you can't see where the stairs are. ")
        console.log("You need some source of light. ")
        console.log("What will you do? ")
        antwoord3a = "I will go look on the ground to see if there is a flashlight conveniently laying around somewhere. "
        antwoord3b = " I will feel the wall to see if there is a light switch so I can turn on the light. "
        vraag3 = [antwoord3a, antwoord3b];
        index = readlineSync.keyInSelect(vraag3, "What will you do? ");

        //Hier wordt bepaalt welke richting je op gaat

        if (antwoord3a === vraag3[index]) {
            stuk4()
        } else if (antwoord3b === vraag3[index]) {
            stuk7()
        } else {
            console.log("You have decided to quit the game. ")
            gameover()
        }
    }

    function stuk4() {
        console.log("You go look at the floor to find something useful. ")
        console.log("You can't see anything so you go on your knees to crouch to find anything. ")
        console.log("You crawl by the covered furniture and find yourself hitting your head against a door. ")
        console.log("Will you open the door? ")
        antwoord4a = "No, the door is smelly. "
        antwoord4b = "Yes, maybe there is something useful in there. "
        vraag4 = [antwoord4a, antwoord4b];
        index = readlineSync.keyInSelect(vraag4, "Will you open the door? ");

        //Hier wordt bepaalt welke richting je op gaat

        if (antwoord4a === vraag4[index]) {
            stuk7()
        } else if (antwoord4b === vraag4[index]) {
            stuk5()
        } else {
            console.log("You have decided to quit the game. ")
            gameover()
        }
    }

    function stuk5() {
        console.log("You decide to open the door. ")
        console.log("Even though it's really dark, you can see that it apparently is a closet. ")
        console.log("In the closet you see Something you think is a flashlight. ")
        console.log("You grab it, but notice it is molted onto some other device. ")
        console.log("When you turn on the flashlight and point it into the closet. ")
        console.log("You then see that the flashlight is attached to a vacuum cleaner and that vacuum cleaner is attached to a green plumber suit with a big L on the hat.")
        console.log("Will you put on the ridiculous plumber suit with the vacuum attached to it to finally see in the house? ")
        antwoord5a = "Yes, I need to find the key to open the main door and go back home because mom made chicken! "
        antwoord5b = "No, I don't want to look ridiculous while roaming this scary house. "
        vraag5 = [antwoord5a, antwoord5b];
        index = readlineSync.keyInSelect(vraag5, "Will you put on the ridiculous plumber suit with the vacuum attached to it to finally see in the house? ");

        //Hier wordt bepaalt welke richting je op gaat

        if (antwoord5a === vraag5[index]) {
            stuk10()
        } else if (antwoord5b === vraag5[index]) {
            stuk6()
        } else {
            console.log("You have decided to quit the game. ")
            gameover()
        }
    }

    function stuk6() {
        console.log("You decide that it isn't worth it to look ridiculous while searching for the key so you continue looking while you can't see anything. ")
        stuk7()
    }

    function stuk7() {
        console.log("You struggle your way through the darkness and find yourself at the bottom of some stairs. ")
        console.log("You hear a weird sound coming from upstairs.  ")
        console.log("Will you go upstairs to investigate the sound? ")
        antwoord7a = " No, I can't see anything and might break my neck while trying to go upstairs.  "
        antwoord7b = "Yes, maybe it was the key falling somehow upstairs. "
        vraag7 = [antwoord7a, antwoord7b];
        index = readlineSync.keyInSelect(vraag7, "Will you go upstairs to investigate the sound? ");

        //Hier wordt bepaalt welke richting je op gaat

        if (antwoord7a === vraag7[index]) {
            stuk8()
        } else if (antwoord7b === vraag7[index]) {
            stuk9()
        } else {
            console.log("You have decided to quit the game. ")
            gameover()
        }
    }

    function stuk8() {
        console.log("You decide it wouldn't be wise to go upstairs. ")
        console.log("You turn around and see a key conveniently laying on a table in front of the stairs. ")
        console.log("You try the key on the front door and unlock it. ")
        console.log("You now can finally go outside.")
        einde()
    }

    function stuk9() {
        console.log("You decide to go upstairs. ")
        console.log("When you struggle to climb the stairs you suddenly see a ghost appear in front of you. ")
        console.log(`%c
                       ___
                     .;:::;--.
                   .::::::::::-.
                 .::::::::::::::.
           ,.....;_'-:::::::::::'
          ::::::::::-._':::::::/
          ;::;-------._'--._':;
        .-'~~          ~'-. |/_____
      .'                   '.:::::::
    ,'                       '.::.;'
   :      , ___         _      '--
  :       '/   |       / ',     :
 :            .'|_   _/ (0;     :
 :           ,' (0)/  '. ~;     ;
:           _;   ~;    '._;__   '--.
:          ' '~~~~   _,-'    '.     '.
 '.                 .'         ;      :
  '.                '.        ,'      :
   '.        (---)   '._____,-'       ;
    '.         :                     ,'
     '._       '._                  ,'
        '-._      '---._____.--' _,'
            '-._               ,'
                ;              '._
                :                 |'.
                :               :: | '.
                :                  ::: '.
                : ::    'Y'         : :: '.
                ::::      ;           :  : '.
                ::        :             : : '.
                :         :               :  :
                : ::     :'             :: : :
                :  :     :                :: :
`, `font-family: monospace`);
        console.log("Before you can do anything it already possesses you. ")
        einde3()

    }

    function stuk10() {
        console.log("You put on the green plumber suit that has the vacuum cleaner and flashlight attached to it. ")
        console.log("You now can finally look around. ")
        console.log("You hear a sound coming from upstairs. ")
        console.log("Will you go investigate the sound or will you continue searching downstairs before going upstairs? ")
        antwoord10a = "I will go investigate the sound. Maybe it was the key somehow falling. "
        antwoord10b = "I will continue searching downstairs before going upstairs. "
        vraag10 = [antwoord10a, antwoord10b];
        index = readlineSync.keyInSelect(vraag10, "Will you go investigate the sound or will you continue searching downstairs before going upstairs? ");

        //Hier wordt bepaalt welke richting je op gaat

        if (antwoord10a === vraag10[index]) {
            stuk11()
        } else if (antwoord10b === vraag10[index]) {
            stuk12()
        } else {
            console.log("You have decided to quit the game. ")
            gameover()
        }
    }

    function stuk11() {
        console.log("You go upstairs and see a ghost appear in front of you. ")
        console.log("All you can think about is using the vacuum to hopefully suck the ghost.")
        GhostEncounter()
    }

    function GhostEncounter() {

        while (ghosthealth > 0) {
            console.log(`%c
     .-----.
   .' -   - '.
  /  .-. .-.  \\
  |  | | | |  |
   \\ \\o/ \\o/ / 
  _|    ^    |_
 | (  '---'  / |
 / /'--. .--'\\ \\
/ /'---' '---'\\ \\
'.__.       .__.'
    '|     |'
     |     |
     |      '--.
      '.        '|
        ''---.   |
            ,__) /
             '..'
         `, `font-family: monospace`);
            console.log("What will you do? ")
            fightghost = "I will try to suck him up! "
            defendghost = "I will defend myself from the ghost! "
            ghostfight = [fightghost, defendghost];
            index = readlineSync.keyInSelect(ghostfight, "What will you do?")
            //Hier wordt bepaalt welke richting je op gaat

            if (fightghost === ghostfight[index]) {
                let attack = rollDice();
                let ghostdamage = (attack);
                ghosthealth -= ghostdamage
                console.log("You try to suck up the ghost, you do " + attack + " damage. ");
                console.log(`%c
                .-----.
              .' -   - '.
             /  .-. .-.  \\
             |  | | | |  |
              \\ \\x/ \\x/ / 
             _|    ^    |_
            | (    O    / |
            / /'--. .--'\\ \\
           / /'---' '---'\\ \\
           '.__.       .__.'
               '|     |'
                |     |
                |      '--.
                 '.        '|
                   ''---.   |
                       ,__) /
                        '..'
                    `, `font-family: monospace`);

                if (ghosthealth <= 0) {
                    einde2()
                    break
                } else if (ghosthealth >= 0) {
                    hp -= ghostattack
                    console.log("The ghost tries to posses you. You dodge him but hit your head against the wall and do " + ghostattack + " damage on yourself, you still have " + hp + " hp left. ")

                    if (hp < 1) {
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
                let gdodgechance = rollDice()
                let gdodge = (gdodgechance)
                if (gdodge >= 8) {
                    hp += 5
                    console.log("You succesfully dodge the ghost his attack and healed 5 hp. You now have " + hp + " hp left")
                    GhostEncounter()
                    break
                } else if (gdodge <= 8) {
                    hp -= ghostattack
                    console.log("You tried to defend yourself against the ghost, but you failed miserably. The ghost does " + ghostattack + " damage on you. You have " + hp + " hp left.")
                    if (hp < 1) {
                        einde3()
                        break
                    } else if (hp > 1) {
                        GhostEncounter()
                        break
                    }
                }
            } else {
                console.log("You have decided to quit the game. ")
                gameover()
                break
            }
        }
    }

    function stuk12() {
        console.log("You decide that you will look a bit longer around downstairs. ")
        console.log("While looking you notice a bookcase. ")
        console.log("You take a closer look and notice it isn't a bookcase, but a movie case with a lot of movies in it. ")
        console.log("You then notice your favorite movie called Backdoor Openers 9. ")
        console.log("Will you take Backdoor Openers 9 back home with you to watch with your mother for movie night or not? ")
        antwoord12a = " No, mom and I have watched that movie way too much. I actually should continue searching for the key. "
        antwoord12b = "Yes, mom would love to watch it again with me. I better take it home with me.  "
        vraag12 = [antwoord12a, antwoord12b];
        index = readlineSync.keyInSelect(vraag12, "Will you take Backdoor Openers 9 back home with you to watch with your mother for movie night or not? ");

        //Hier wordt bepaalt welke richting je op gaat

        if (antwoord12a === vraag12[index]) {
            stuk13()
        } else if (antwoord12b === vraag12[index]) {
            stuk14()
        } else {
            console.log("You have decided to quit the game. ")
            gameover()
        }
    }

    function stuk13() {
        console.log("You decided that you and mom have watched Backdoor Openers 9 way too much and that your mom probably already picked another movie for tonight. ")
        console.log("You then realize you can't find any keys downstairs and decide to go upstairs.")
        stuk11()
    }

    function stuk14() {
        console.log("You decide that mom would love to watch Backdoor Openers 9 together with you again and you decide to grab it. ")
        console.log("when you try to grab it you notice it's stuck and when you pull harder you see that the movie case suddenly moves sideways, revealing a secret staircase leading down. ")
        console.log("Out of curiosity you walk down the secret stairs and you find yourself in a dark dungeon looking place. ")
        console.log("While looking a bit around you notice a dark hooded figure with a corpse of a girl on an altar in front of him. ")
        console.log("You can hear him whispering some language you can't understand. ")
        console.log("When you walk slowly closer the hooded figure notices you and summons a big demon looking beast.")
        DemonEncounter()
    }


    function DemonEncounter() {

        console.log(`%c
        *                       *
        *                 *
       )       (\\___/)     (
    * /(       \\ (. .)     )\\ *
      # )      c\\   >'    ( #
       '         )-_/      '
     \\\\|,    ____| |__    ,|//
       \\ )  (  '  ~   )  ( /
        #\\ / /| . ' .) \\ /#
        | \\ / )   , / \\ / |
         \\,/ ;;,,;,;   \\,/
          _,#;,;;,;,
         /,i;;;,,;#,;
        //  %;;,;,;;,;
       ((    ;#;,;%;;,,
      _//     ;,;; ,#;,
     /_)      #,;    ))
             //      \\|_
             \\|_      |#\\
              |#\\      -"
               -"
               `, `font-family: monospace`);
        while (dhealth > 0) {
            console.log("What will you do? ")
            fightd = "I will try to suck him up! "
            defendd = "I will defend myself from the Demon! "
            truefightd = "I will throw a rock against his head with my vacuum!"
            dfight = [fightd, defendd, truefightd];
            index = readlineSync.keyInSelect(dfight, "What will you do?")


            if (truefightd === dfight[index]) {
                let attack = rollDice();
                let ddamage = (attack);
                dhealth -= ddamage
                console.log("You suck a piece of rock onto your vacuum cleaner and point it towards the demon, you then throw the rock with the blow button of your vacuum cleaner and hits the demon, weakening it. You did " + attack + " damage to him. ");
                console.log(`%c
                *                       *
                *                 *
               )       (\\___/)     (
            * /(       \\ (x x)     )\\ *
              # )      c\\   >'    ( #
               '         )O_/      '
             \\\\|,    ____| |__    ,|//
               \\ )  (  '  ~   )  ( /
                #\\ / /| . ' .) \\ /#
                | \\ / )   , / \\ / |
                 \\,/ ;;,,;,;   \\,/
                  _,#;,;;,;,
                 /,i;;;,,;#,;
                //  %;;,;,;;,;
               ((    ;#;,;%;;,,
              _//     ;,;; ,#;,
             /_)      #,;    ))
                     //      \\|_
                     \\|_      |#\\
                      |#\\      -"
                       -"
                       `, `font-family: monospace`);
                if (dhealth <= 0) {
                    console.log("When you blow the final rock against the demon, it's too weakened to have a physical body. ")
                    console.log("You then suck the demon in your vacuum cleaner. ")
                    einde4()
                    break
                } else if (dhealth >= 0) {
                    hp -= dattack
                    console.log("The demon tries to possess. You feel yourself weakening. You lose " + dattack + " hp, you still have " + hp + " hp left. ")

                    if (hp < 1) {
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
                let ddodgechance = rollDice()
                let ddodge = (ddodgechance)
                if (ddodge >= 8) {
                    hp += 5
                    console.log("You succesfully dodge the Demon his attack. You healed yourself. You now have " + hp + " hp!")
                    DemonEncounter()
                    break
                } else if (ddodge <= 8) {
                    hp -= dattack
                    console.log("You tried to defend yourself against the Demon, but you failed miserably. The Demon hits you with his claws and does " + ghostattack + " damage on you. You have " + hp + " hp left.")
                    if (hp < 1) {
                        einde3()
                        break
                    } else if (hp > 1) {
                        DemonEncounter()
                        break
                    }
                }
            } else if (fightd === dfight[index]) {
                if (dhealth >= 10) {
                    console.log("You try to suck the demon with your vacuum cleaner, but it doesn't seem to work.")
                    console.log("The demon look at you weird and laughs at you. Then he slaps your face. ")
                    hp -= 20
                    console.log("The demon does 20 damage to you. You have " + hp + " hp left.")
                    if (hp < 1) {
                        einde3()
                        break
                    } else if (hp > 1) {
                        DemonEncounter()
                        break
                    }
                } else if (dhealth <= 10) {
                    console.log("You weakened the deamon a lot with al the rock throwing against his head, you manage to suck him with your vacuum cleaner. ")
                    einde4()
                    break
                }

            } else {
                console.log("You have decided to quit the game. ")
                gameover()
                break
            }
        }
    }



    //Dit zijn de eindes

    function einde() {
        console.log("You decide to go home. ")
        console.log("When you arrive home you smell the delicious chicken that your mom has made. ")
        console.log("You and your mom are eating the chicken and you continue living your boring oblivious life. ")
        console.log(`%c
        __
       /'{>
   ____) (____
 //'--;   ;--'\\\\
///////\\_/\\\\\\\\\\\\\\
       m m
`, `font-family: monospace`);

        console.log("End 1: MOM MADE CHICKEN! ")
        end1count += 1
        gameover()
    }

    function einde2() {
        console.log("You succeed in sucking the ghost in your vacuum cleaner. ")
        console.log("Now the whole house lights up and some money falls out of nowhere all around you and a key for the front door drops in front of you. ")
        console.log("You realise that you could make some money busting ghosts, so you decide to create a company called Busters of Ghosts. ")
        console.log(`%c
                       ---                                     
                   -        --                             
                --( /     \\ )XXXXXXXXXXXXX                   
            --XXX(   O   O  )XXXXXXXXXXXXXXX-              
           /XXX(       U     )        XXXXXXX\\               
         /XXXXX(              )--   XXXXXXXXXXX\\             
        /XXXXX/ (      O     )   XXXXXX   \\XXXXX\\
        XXXXX/   /            XXXXXX   \\   \\XXXXX----        
        XXXXXX  /          XXXXXX         \\  ----  -         
---     XXX  /          XXXXXX      \\           ---        
  --  --  /      /\\  XXXXXX            /     ---=         
    -        /    XXXXXX              '--- XXXXXX         
      --\\/XXX| XXXXXX                      /XXXXX         
         \\XXXXXXXXX                        /XXXXX/
          \\XXXXXX                         /XXXXX/         
            \\XXXXX--  /                -- XXXX/       
             --XXXXXXX---------------  XXXXX--         
                 \\XXXXXXXXXXXXXXXXXXXXXXXX-            
                   --XXXXXXXXXXXXXXXXXX- 
`, `font-family: monospace`);


        console.log("End 2: Bustin' makes me feel good! ")
        end2count += 1
        gameover()

    }

    function einde3() {
        console.log("It possesses you. ")
        console.log("You can't do anything anymore. ")
        console.log("This can be considered you dying, but you haven't actually died. ")
        console.log("You are in a state of consciousness but you can't control your body. ")
        console.log("All you can do is watch in first person how this entity is ruining your reputation and worse of all, embarrassing yourself in front of your crush Jessica. ")
        console.log("This might even be considered worse than dying. ")
        console.log("You wish for someone to kill you. ")
        console.log(`%c
      ////^\\\\\\\\
      | ^   ^ |
     @ (x) (x) @
      |   <   |
      |  ___  |
       \\_____/
     ____|  |____
    /    |__/    \\
   /              \\
  /(_/|        |\\_/\\
 / /  |        |  \\ \\
( <   |        |    > )
 \\ \\  |        |   / /
  \\ \\ |________|  / /
   \\ \\|        | / /
`, `font-family: monospace`);


        console.log("End 3: Possessed")
        end3count += 1
        gameover()
    }

    function einde4() {
        console.log("After sucking up the demon you notice the hooded satanic culprit and you then try to suck him up too. ")
        console.log("You notice you can only suck up his black cloak, revealing the satanic culprit. ")
        console.log("It is the weird kid, Kevin! ")
        console.log("Out of anger you punch Kevin, steal his keys and walk back out of the house. ")
        console.log("The next day you notice how the house isn't there anymore and no one seems to remember it too. ")
        console.log("Kevin also seems to be gone, but you don't mind. ")
        console.log("You never liked Kevin anyway. ")
        console.log(`%c
              _,-'|
           ,-'._  |
 .||,      |####) |
\\ ', /     \\####| |
= ,. =      |###| |
/ || \\    ,-'{#/,' .
  ||     ,'    ,,.  .
  ,|____,' , ,;' (| |
 (3|\\    _/|/'   _| |
  ||/,-''  | >-'' _,\\\\
  ||'      ==\\ ,-'  ,'
  ||       |  V \\ ,|
  ||       |    |  |
  ||       |    |   \\
  ||       |    \\    \\
  ||       |     |    \\
  ||       |      \\_,-'
  ||       |___,,--")_|
  ||         |_|   ccc/
  ||        ccc/
  ||           
`, `font-family: monospace`);
        console.log("End 4: Mystery solved, It's fucking Kevin ")
        end4count += 1
        gameover()
    }

    function gameover() {
        //Hier wordt gevraagd of je opnieuw wilt beginnen
        //Wil nog een sort loop maken naar het begin

        console.log("Bedankt voor het spelen van mijn game! ")
        console.log(end1count, end2count, end3count, end4count)
        console.log("Wil je opnieuw spelen?")
        opnieuw = "Ja, ik wil opnieuw spelen"
        stoppen = "nee, ik wil stoppen."
        laatstevraag = ["Ja, ik wil opnieuw spelen", "nee, ik wil stoppen."]
        index = readlineSync.keyInSelect(laatstevraag, "Wil je opnieuw spelen?");
        

        if (opnieuw === laatstevraag[index]) {
            console.log("Het spel begint opnieuw.")
            
            if (end1count < 1 || end2count < 1 || end3count < 1 || end4count < 1) {
                Game()
            } else if (end1count > 0 && end2count > 0 && end3count > 0 && end4count > 0) {
                Game2()
            }

        } else if (stoppen === laatstevraag[index]) {
            console.log("Het spel wordt nu afgesloten.")
        }
    }

   
}


function Game2() {
    console.log("You're walking through your street. ")
    console.log("You notice that the missing person posters of Katie who have been missing since last summer still hang there. ")
    console.log("The sun is setting and you have to hurry home because mom made chicken, and you love chicken. ")
    console.log("But as you're hurrying home you notice the old abandoned house where there are ridiculous stories about it being haunted. ")

    console.log(`%c
                       .-----.
                     .'       '.
                    :      ^v^  :
                    :           :
                    '           '
     |~        www   '.       .'
    /.\\       /#^^\\_   '-/\\--'
   /#  \\     /#%    \\   /# \\
  /#%   \\   /#%______\\ /#%__\\
 /#%     \\   |= I I ||  |- |
 ~~|~~~|~~   |_=_-__|'  |[]|
   |[] |_______\\__|/_ _ |= |'.
^V^    |-  /= __   __    /-\\|= | :;
   |= /- /\\/  /\\/   /=- \\.-' :;
   | /_.=========._/_.-._\\  .:'
   |= |-.'.- .'.- |  /|\\ |.:'
   \\  |=|:|= |:| =| |~|~||'|
   |~|-|:| -|:|  |-|~|~||=|      ^V^
   |=|=|:|- |:|- | |~|~|| |
   | |-_~__=_~__=|_^^^^^|/___
   |-(=-=-=-=-=-(|=====/=_-=/\\
   | |=_-= _=- _=| -_=/=_-_/__\\ 
   | |- _ =_-  _-|=_- |]#| I II
   |=|_/ \\_-_= - |- = |]#| I II
   | /  _/ \\. -_=| =__|]!!!I_II!!
  _|/-'/  ' \\_/ \\|/' _ ^^^^'.==_^.
_/  _/'-./'-; '-.\\_ / \\_'\\'. '. ==='.
/ .-'  __/_   '.   _/.' .-' '-. ; ====;\\
/.   './    \\ '. \\ / -  /  .-'.' ====='  >
/  \\  /  .-' '--.  / .' /  '-.' ======.' /
`, `font-family: monospace`);
    console.log("You are curious if the stories may be true or are just some ridiculous stories that the weird kid Kevin keeps telling about. ")
    console.log("But then you get the sudden sense of Deja VU. ")
    console.log("Like you have been here before again and again. ")
    console.log("You walk up to the house and opens the door. ")
    console.log("When you walk inside, you get the same chills as usual. ")
    console.log("You walk upstairs and expect a ghost to jump out to possess you, but there is nothing. ")
    console.log("You the walk back downstairs and pul the case lever to open the secret staircase. ")
    console.log("You walk downstairs to expect to see Kevin in his cult cloak summoning a demon on you, but Kevin isn't there. ")
    console.log("You do see the altar with the corpse on it where Kevin was standing. ")
    console.log("You walk to the altar to take a closer look at the corpse. ")
    console.log("When you see the corpse, you immediately recognise it. ")
    console.log("It is the corpse of Katie! ")
    console.log("Suddenly the eyes of Katie opens and se looks at you. ")
    console.log("You shriek out of fear, But then Katie starts talking. ")
    console.log("'It isn't your fault, Kevin.' ")
    console.log("You look confused at Katie. ")
    console.log("Did she just called me Kevin? ")
    console.log("Katie starts talking again. ")
    console.log("'It was an accident, Kevin. You shoud forgive yourself. '")
    console.log("Your head starts hurting intensly. ")
    console.log("Why does she keep calling me Kevin? And what accident? ")
    console.log("'Why do you keep blaming yourself, Kevin? ")
    console.log("You did't push me of that cliff behind the abandoned house. I fell.' ")
    console.log("Your head starts hurting more. ")
    console.log("You see flashes of you playing with your childhood friend Katie at the abandoned house. ")
    console.log("You two pretended the house was haunted. ")
    console.log("You see her falling. You see yourself misgrabbing her hand. You then hear her scream your name, Kevin. ")
    console.log("'Why did you take all those pills, Kevin?' ")
    console.log("'I couldn't live with the guilt of not saving you, Katie.' ")
    console.log("'You were always such a drama queen, Kevin.' She chuckles.")
    console.log("Katie Looks at you again. 'You can still wake up, you know.' ")
    console.log("'Do you want to wake up?' ")
    antwoordtruea = "'No, I will stay with you, Katie'  "
    antwoordtrueb = "'Yes, it is time for me to continue on.' "
    vraagfinal = [antwoordtruea, antwoordtrueb];
    index = readlineSync.keyInSelect(vraagfinal, "'Do you want to wake up?' ");

    //Hier wordt bepaalt welke richting je op gaat

    if (antwoordtruea === vraagfinal[index]) {
        console.log("'Okey, Kevin. You can join me.' ")
        console.log("You stay with Katie. ")
        console.log("Everything goes black and you hear some people crying. ")
        console.log("Then the last thing you hear is the sound of a peep. ")
        console.log("True ending 1: Goodnight. ")
        console.log("Dit is het officiele einde. Het spel wordt nu afgesloten.")
    } else if (antwoordtrueb === vraagfinal[index]) {
        console.log("'Goodbye, Katie.' ")
        console.log("'Goodbye, Kevin.' ")
        console.log("You then suddenly wake up in a hospital room. ")
        console.log("Around you are standing your friends and family and a doctor. ")
        console.log("You finally have survived this nightmare. ")
        console.log("Now you can finally try to move on. ")
        console.log("True ending 2: Moving on. ")
        console.log("Dit is het officiele einde. Het spel wordt nu afgesloten.")
    } else {
        console.log("You have decided to quit the game. ")
         }
    }