/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
var Game = /** @class */ (function () {
    function Game() {
    }
    Game.prototype.startGame = function () {
        console.info("                     CLOSE ENCOUNTERS");
        console.info("                    CREATIVE COMPUTING");
        console.info("                  MORRISTOWN, NEW JERSEY");
        Game.assignGameParams();
        console.info("\n\n\n");
        console.info("YOU ARE SITUATED AT COORDINATES (0,0).  A UFO IS");
        console.info("HEADING FOR IMPACT AT THAT LOCATION.");
        console.info();
        console.info("AT FIRST TRACK, THE UFO IS ON A COURSE OF " + Game.yLongitude + " DEGREES LONGITUDE");
        console.info("AND " + Game.zLatitude + " DEGREES LATITUDE.");
        console.info("   (ALSO IT\'S FALLING AT A SPEED OF " + Game.xUfoSpeed + " MILES/PER HOUR)");
        console.info("YOU HAVE THE FOLLOWING ALTERNATIVES:");
        console.info("A) YOU CAN ATTEMPT TO SHOOT THE UFO OUT OF THE SKY.  OR");
        console.info("B) YOU CAN DO NOTHING, AND HOPE THAT AIR FRICTION");
        console.info("   WILL CAUSE THE COURSE OF THE UFO TO DEVIATE, AND THUS");
        console.info("   MISS YOUR LOCATION.");
        console.info();
        console.info("WHAT IS YOUR PLAN OF ACTION (A OR B)? ");
        var plan = prompt();
        console.info();
        if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(plan, "B")) {
            Game.executePlanB();
        }
        else {
            Game.executePlanA();
        }
        Game.tryAgain();
    };
    /*private*/ Game.assignGameParams = function () {
        Game.I = Game.randomNumberInRange(1, 20);
        Game.V = Game.randomNumberInRange(200, 599);
        Game.fFriction = Game.randomNumberInRange(1, 5);
        Game.xUfoSpeed = Game.randomNumberInRange(2001, 7000);
        Game.hGameOverSpeed = Game.xUfoSpeed + 8000;
        Game.Q = Game.randomNumberInRange(1, 5);
        Game.zLatitude = Game.randomNumberInRange(100, 139);
        Game.yLongitude = Game.randomNumberInRange(40, 59);
        if (Game.xUfoSpeed < 3000) {
            Game.mMinutesToDestroy = 5;
        }
        else if (Game.xUfoSpeed >= 3000 && Game.xUfoSpeed < 3700) {
            Game.mMinutesToDestroy = 4;
        }
        else if (Game.xUfoSpeed >= 3700 && Game.xUfoSpeed < 4700) {
            Game.mMinutesToDestroy = 3;
        }
        else if (Game.xUfoSpeed >= 4700) {
            Game.mMinutesToDestroy = 2;
        }
    };
    /*private*/ Game.randomNumberInRange = function (min, max) {
        return (((Math.random() * (max + 1 - min)) + min) | 0);
    };
    /*private*/ Game.choosePlan = function () {
        console.info("PLAN (A OR B)? ");
        var plan = prompt();
        console.info();
        if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(plan, "B")) {
            Game.executePlanB();
        }
        else {
            Game.executePlanA();
        }
        Game.tryAgain();
    };
    /*private*/ Game.tryAgain = function () {
        console.info("TRY AGAIN? ");
        Game.assignGameParams();
        var again = prompt();
        if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(again, "Y")) {
            Game.choosePlan();
        }
    };
    /*private*/ Game.executePlanB = function () {
        Game.fFriction = 0;
        Game.A = Game.randomNumberInRange(1, 5);
        Game.C = Game.zLatitude - Game.yLongitude + Game.A;
        Game.miles = 12000.0;
        console.info();
        console.info("MILES         SPEED         LONGITUDE     LATITUDE      COURSE");
        console.info("-----         -----         ---------     --------      ------");
        Game.recount();
        while ((Game.miles > 0)) {
            {
                Game.recount();
            }
        }
        ;
        console.info("\n---------IMPACT-AT- " + Game.xUfoSpeed + " -MILES-PER-HOUR--");
        if (Game.fFriction <= 2) {
            console.info("-----------UPI-WIRE-SERVICE----ON-LINE- " + Game.A + " : " + (Game.A + 5) + " : " + (Game.A + 10) + " :--");
            console.info("---  HAVE JUST OBSERVED EXPLOSION AT COORDINATES (" + (0 - Game.fFriction) + " ,0).");
            Game.A = (Game.A + 2) * Game.A;
            console.info("BLAST SEEN FROM " + (Game.A * Game.A * Game.A) + " MILES AWAY.  NO SURVIVORS.\n");
        }
        else {
            console.info("GOOD WORK.  FRICTION OF " + Game.fFriction + " % HAS CAUSED THE COURSE");
            console.info("OF THE UFO TO DEVIATE.  IMPACT COORDINATES ARE");
            console.info("NOW ( " + Game.fFriction + " ," + (0 - Game.fFriction) + " ).  YOU MADE IT!");
        }
    };
    /*private*/ Game.recount = function () {
        Game.P = Game.xUfoSpeed + 1;
        if (Game.miles === (Game.miles | 0)) {
            var roundedMiles = (Game.miles | 0);
            console.info(" " + roundedMiles + Game.countSpacing$int$int(roundedMiles, 14) + Game.xUfoSpeed + Game.countSpacing$int$int(Game.xUfoSpeed, 14) + Game.yLongitude + Game.countSpacing$int$int(Game.yLongitude, 14) + Game.zLatitude + Game.countSpacing$int$int(Game.zLatitude, 14) + Game.C);
        }
        else {
            console.info(" " + Game.miles + Game.countSpacing$float$int(Game.miles, 14) + Game.xUfoSpeed + Game.countSpacing$int$int(Game.xUfoSpeed, 14) + Game.yLongitude + Game.countSpacing$int$int(Game.yLongitude, 14) + Game.zLatitude + Game.countSpacing$int$int(Game.zLatitude, 14) + Game.C);
        }
        Game.C = Game.zLatitude - Game.yLongitude;
        Game.xUfoSpeed = Game.xUfoSpeed + Game.randomNumberInRange(2000, 6999);
        Game.miles = Game.miles - Game.xUfoSpeed / 60;
        Game.yLongitude = Game.yLongitude - Game.randomNumberInRange(0, 9);
        Game.zLatitude = Game.zLatitude - Game.randomNumberInRange(0, 9);
        Game.C = Game.zLatitude - Game.yLongitude + Game.A * Game.A;
        if (Game.xUfoSpeed - Game.P > 5700) {
            Game.fFriction += 1;
        }
    };
    /*private*/ Game.executePlanA = function () {
        console.info("LAUNCH AN I.C.B.M. ON A COURSE THAT WILL INTERCEPT THE UFO");
        console.info("WITHOUT THE UFO BEING TOO CLOSE TO YOUR LOCATION.  IF THE ");
        console.info("SPEED");
        console.info("OF THE UFO EXCEEDS " + Game.hGameOverSpeed + " M.P.H., YOUR MISSILES ARE USELESS!");
        console.info("--SCANNERS PREDICT YOU HAVE " + Game.mMinutesToDestroy + " MINUTES TO DESTROY THE UFO");
        console.info("BEFORE IT IS TOO CLOSE TO IMPACT.");
        console.info();
        Game.C = Game.zLatitude - Game.yLongitude + Game.I - Game.randomNumberInRange(1, 4);
        console.info("--COMPUTER INDICATES COURSE AT FIRST SIGHTING IS APPROX. " + (Game.C + Game.fFriction));
        console.info();
        console.info("TYPE IN A COURSE ON THE CHART BELOW");
        console.info();
        console.info();
        console.info("TIME          SPEED         LONGITUDE     LATITUDE      COURSE");
        for (var T = 0; T <= 5; T += 0.5) {
            {
                console.info(" " + T + Game.countSpacing$float$int(T, 14) + Game.xUfoSpeed + Game.countSpacing$int$int(Game.xUfoSpeed, 14) + Game.yLongitude + Game.countSpacing$int$int(Game.yLongitude, 14) + Game.zLatitude + Game.countSpacing$int$int(Game.zLatitude, 13) + "? ");
                Game.A = prompt();
                if (T === (T | 0) && T === Game.mMinutesToDestroy) {
                    console.info("---------------ATTENTION----------------");
                    console.info("ELAPSED-TIME-INDICATES-THAT- " + Game.mMinutesToDestroy + " MINUTES-HAVE-PASSED.--IF-YOU-");
                    console.info("WERE-TO-HIT-THE-UFO-NOW----THE-FORCE-OF-THE-EXPLOSION-WOULD");
                    console.info("----------DESTROY-YOU-AS-WELL-AS-THE-UFO-!");
                    console.info();
                    break;
                }
                else if (Game.xUfoSpeed > Game.hGameOverSpeed) {
                    console.info("SORRY--THE SPEED OF THE UFO HAS EXCEEDED " + Game.hGameOverSpeed + " M.P.H.");
                    console.info("THIS SPEED IS TO GREAT FOR YOUR DEFENSE SCREEN TO TRACK!");
                    console.info("THEREFORE, YOU ARE (HA HA) DOOMED!");
                    console.info();
                    break;
                }
                else if (Game.A === Game.C) {
                    console.info("FANTASTIC!!!!  YOU HIT THE UFO EXACTLY ON PROJECTED COURSE");
                    console.info("YOU MUST BE VERY SHARP!");
                    console.info();
                    console.info();
                    break;
                }
                else if (Game.A <= 10) {
                    console.info("AT THAT COURSE YOU SHOT YOUR MISSILE STRAIGHT UP, SO WHEN");
                    console.info("IT RUNS OUT OF FUEL IN ABOUT " + Game.fFriction + " HOURS, IT WILL FALL");
                    console.info("THROUGH");
                    console.info("YOUR ROOF!!!!!!!!!!  GOODBYE!!!!!!");
                    break;
                }
                else if (Game.A >= 200) {
                    console.info("GOOD WORK! THERE GOES THE MISSILE--------RIGHT TOWARDS");
                    console.info("RUSSIA!!!! NOW YOU\'RE DEFINITELY IN TROUBLE!!");
                    break;
                }
                else if (Game.A === Game.C - 1) {
                    console.info("YOU ARE SHY OF THE UFO\'S COORDINATES,");
                    console.info("HOWEVER THIS IS ONLY A SLIGHT DEVIATION SO THE");
                    console.info("UFO HAS BEEN DESTROYED!");
                    console.info();
                    break;
                }
                else if (Game.A === Game.C + 1) {
                    console.info("YOU OVERSHOT THE UFO\'S COORDINATES,");
                    console.info("HOWEVER THIS IS ONLY A SLIGHT DEVIATION SO THE");
                    console.info("UFO HAS BEEN DESTROYED!");
                    console.info();
                    break;
                }
                Game.xUfoSpeed = Game.xUfoSpeed + Game.V + 1200;
                Game.yLongitude = Game.yLongitude - Game.I + 5;
                Game.zLatitude = Game.zLatitude - Game.I + 5;
                Game.C = Game.zLatitude - Game.yLongitude + 5;
            }
            ;
        }
    };
    /*private*/ Game.countSpacing$float$int = function (number, totalSpace) {
        var result = "";
        var milesStr = String(number).toString();
        for (var i = 0; i < totalSpace - milesStr.length; i++) {
            {
                result = result.concat(" ");
            }
            ;
        }
        return result;
    };
    Game.countSpacing$int$int = function (number, totalSpace) {
        var result = "";
        var milesStr = String(number).toString();
        for (var i = 0; i < totalSpace - milesStr.length; i++) {
            {
                result = result.concat(" ");
            }
            ;
        }
        return result;
    };
    Game.countSpacing = function (number, totalSpace) {
        if (((typeof number === 'number') || number === null) && ((typeof totalSpace === 'number') || totalSpace === null)) {
            return Game.countSpacing$int$int(number, totalSpace);
        }
        else if (((typeof number === 'number') || number === null) && ((typeof totalSpace === 'number') || totalSpace === null)) {
            return Game.countSpacing$float$int(number, totalSpace);
        }
        else
            throw new Error('invalid overload');
    };
    Game.I = 0;
    Game.V = 0;
    Game.fFriction = 0;
    Game.xUfoSpeed = 0;
    Game.hGameOverSpeed = 0;
    Game.Q = 0;
    Game.zLatitude = 0;
    Game.yLongitude = 0;
    Game.mMinutesToDestroy = 0;
    Game.A = 0;
    Game.C = 0;
    Game.P = 0;
    Game.miles = 0;
    return Game;
}());
Game["__class"] = "Game";
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.main = function (args) {
        var closeEncountersGame = new Game();
        closeEncountersGame.startGame();
    };
    return Main;
}());
Main["__class"] = "Main";
Main.main(null);