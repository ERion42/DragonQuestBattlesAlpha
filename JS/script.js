    //JS for DQ Battles //

            

            var background = (Math.floor(Math.random() * 4) + 1)
            if (background=="1") {
                document.getElementById("plains").style.display="inline";
           } else if (background == "2") {
                document.getElementById("forest").style.display="inline";
           } else if (background == "3") {
                document.getElementById("desert").style.display="inline";
           } else if (background == "4" ) {
                document.getElementById("mountain").style.display="inline";
           }
    
            //Monster Selection//
            var monsterRoll = (Math.floor(Math.random() * 20) + 1)
            if (monsterRoll <= "8") {
                var monsterName = "slime";
                var monsterDmg = "1";
                document.getElementById("slime").style.display="inline";                
                var monsterHP = (Math.floor(Math.random() *5) +1);  
                document.getElementById("monHealthDisplay").innerHTML = monsterHP;
            } else if (monsterRoll >= "9" && monsterRoll <=  "13") {
                var monsterName = "zombie";
                var monsterDmg = "2";
                document.getElementById("zombie").style.display="inline";   
                var monsterHP = (Math.floor(Math.random() *8) +2);  
                document.getElementById("monHealthDisplay").innerHTML = monsterHP;
            } else if (monsterRoll >= "14" && monsterRoll <= "17") {
                var monsterName = "troll";
                var monsterDmg = "3";
                document.getElementById("troll").style.display="inline";               
                var monsterHP = (Math.floor(Math.random() *10) +4);  
                document.getElementById("monHealthDisplay").innerHTML = monsterHP;
            } else if (monsterRoll >= "18") {
                var monsterName = "dragon";
                var monsterDmg = "4";
                document.getElementById("dragon").style.display="inline";                   
                var monsterHP = (Math.floor(Math.random() *12) +6);  
                document.getElementById("monHealthDisplay").innerHTML = monsterHP;

            }

            //new Audio("MP3/battle.mp3").play()
            
            alert ("\nA " + monsterName + " Draws Near! \n\nCommand?\n\n");    
            var turnCounter = 1
            var playerHP = (Math.floor(Math.random() * 5) +1);
            document.getElementById("healthDisplay").innerHTML = playerHP;
          
            var playerAlive = true;
            var monsterAlive = true;
    
        document.getElementById("attack").onclick = function() {
            if (playerAlive==true || monsterAlive==true) {
                var atkRoll = (Math.floor(Math.random()* 20) +5);
                var dmgRoll = (Math.floor(Math.random()* 3) + 1);
                var monDmg = (Math.floor(Math.random()* monsterDmg) + 1);
                if (atkRoll > 10) {
                    alert("Thou hit the " + monsterName + " for "  + dmgRoll + " damage!")
                    monsterHP = monsterHP - dmgRoll;
                    document.getElementById("monHealthDisplay").innerHTML = monsterHP;
                    if (monsterHP < 1) {
                        monsterAlive = false;
                        alert("Thou hast defeated the " + monsterName + "!")
                        document.getElementById("monsterImg").style.display = "none";
                        document.getElementById("attack").style.display="none";
                        document.getElementById("retreat").style.display="none";
                        document.getElementById("again").style.display="inline";
                        new Audio("MP3/victory.mp3").play()
                    }
                } else {
                    alert("The " + monsterName + " hits thee for " + monDmg + " damage.")
                    playerHP = playerHP- monDmg;
                    document.getElementById("healthDisplay").innerHTML = playerHP;
                    if (playerHP < 1) {
                        playerAlive = false;
                        alert("Thou art dead!");
                        document.getElementById("monsterImg").style.display = "none";
                        document.getElementById("attack").style.display="none";
                        document.getElementById("retreat").style.display="none";
                        document.getElementById("again").style.display="inline";
                        //new Audio("MP3/Requiem.mp3").play();
                    }
                }
            }
        }
        
        document.getElementById("retreat").onclick = function() {
            alert("Thou retreats from battle.");
            location.reload();
        }
        
        document.getElementById("again").onclick = function() {

            location.reload();
        }
        