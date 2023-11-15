import java.util.Scanner;

public class Game {
    private static int I;
    private static int V;
    private static int fFriction;
    private static int xUfoSpeed;
    private static int hGameOverSpeed;
    private static int Q;
    private static int zLatitude;
    private static int yLongitude;
    private static int mMinutesToDestroy;
    private static int A;
    private static int C;
    private static int P;
    private static float miles;

    public  void startGame() {
        System.out.println("                     CLOSE ENCOUNTERS");
        System.out.println("                    CREATIVE COMPUTING");
        System.out.println("                  MORRISTOWN, NEW JERSEY");
        assignGameParams();
        System.out.println("\n\n\n");
        System.out.println("YOU ARE SITUATED AT COORDINATES (0,0).  A UFO IS");
        System.out.println("HEADING FOR IMPACT AT THAT LOCATION.");
        System.out.println();
        System.out.println("AT FIRST TRACK, THE UFO IS ON A COURSE OF " + yLongitude + " DEGREES LONGITUDE");
        System.out.println("AND " + zLatitude + " DEGREES LATITUDE.");
        System.out.println("   (ALSO IT'S FALLING AT A SPEED OF " + xUfoSpeed + " MILES/PER HOUR)");
        System.out.println("YOU HAVE THE FOLLOWING ALTERNATIVES:");
        System.out.println("A) YOU CAN ATTEMPT TO SHOOT THE UFO OUT OF THE SKY.  OR");
        System.out.println("B) YOU CAN DO NOTHING, AND HOPE THAT AIR FRICTION");
        System.out.println("   WILL CAUSE THE COURSE OF THE UFO TO DEVIATE, AND THUS");
        System.out.println("   MISS YOUR LOCATION.");
        System.out.println();
        System.out.print("WHAT IS YOUR PLAN OF ACTION (A OR B)? ");
        Scanner scanner = new Scanner(System.in);
        String plan = scanner.nextLine();
        System.out.println();
        if (plan.equalsIgnoreCase("B")) {
            executePlanB();
        } else {
            executePlanA();
        }
        tryAgain();
    }

    private static void assignGameParams() {
        I = randomNumberInRange(1, 20);
        V = randomNumberInRange(200, 599);
        fFriction = randomNumberInRange(1, 5);
        xUfoSpeed = randomNumberInRange(2001, 7000);
        hGameOverSpeed = xUfoSpeed + 8000;
        Q = randomNumberInRange(1, 5);
        zLatitude = randomNumberInRange(100, 139);
        yLongitude = randomNumberInRange(40, 59);
        if (xUfoSpeed < 3000) {
            mMinutesToDestroy = 5;
        } else if(xUfoSpeed >= 3000 && xUfoSpeed < 3700) {
            mMinutesToDestroy = 4;
        } else if (xUfoSpeed >= 3700 && xUfoSpeed < 4700) {
            mMinutesToDestroy = 3;
        } else if (xUfoSpeed >= 4700) {
            mMinutesToDestroy = 2;
        }
    }

    private static int randomNumberInRange(int min, int max) {
        return (int) ((Math.random() * (max + 1 - min)) + min);
    }

    private static void choosePlan() {
        System.out.print("PLAN (A OR B)? ");
        Scanner scanner = new Scanner(System.in);
        String plan = scanner.nextLine();
        System.out.println();
        if (plan.equalsIgnoreCase("B")) {
            executePlanB();
        } else {
            executePlanA();
        }
        tryAgain();
    }

    private static void tryAgain() {
        System.out.print("TRY AGAIN? ");
        assignGameParams();
        Scanner scanner = new Scanner(System.in);
        String again = scanner.nextLine();
        if (again.equalsIgnoreCase("Y")) {
            choosePlan();
        }
    }

    private static void executePlanB() {
        fFriction = 0;
        A = randomNumberInRange(1, 5);
        C = zLatitude - yLongitude + A;
        miles = 12000f;
        System.out.println();
        System.out.println("MILES         SPEED         LONGITUDE     LATITUDE      COURSE");
        System.out.println("-----         -----         ---------     --------      ------");
        recount();
        while (miles > 0) {
            recount();
        }
        System.out.println("\n---------IMPACT-AT- " + xUfoSpeed + " -MILES-PER-HOUR--");
        if (fFriction <= 2) {
            System.out.println("-----------UPI-WIRE-SERVICE----ON-LINE- " + A + " : " + (A+5) + " : " + (A+10) + " :--");
            System.out.println("---  HAVE JUST OBSERVED EXPLOSION AT COORDINATES (" + (0 - fFriction) + " ,0).");
            A = (A + 2) * A;
            System.out.println("BLAST SEEN FROM " + (A * A * A) + " MILES AWAY.  NO SURVIVORS.\n");
        } else {
            System.out.println("GOOD WORK.  FRICTION OF " + fFriction + " % HAS CAUSED THE COURSE");
            System.out.println("OF THE UFO TO DEVIATE.  IMPACT COORDINATES ARE");
            System.out.println("NOW ( " + fFriction + " ," + (0 - fFriction)  + " ).  YOU MADE IT!");
        }
    }

    private static void recount() {
        P = xUfoSpeed + 1;
        if (miles == (int) miles) {
            int roundedMiles = (int) miles;
            System.out.println(" " + roundedMiles + countSpacing(roundedMiles, 14) + xUfoSpeed + countSpacing(xUfoSpeed, 14) + yLongitude + countSpacing(yLongitude, 14) + zLatitude + countSpacing(zLatitude, 14) + C);
        } else {
            System.out.println(" " + miles + countSpacing(miles, 14) + xUfoSpeed + countSpacing(xUfoSpeed, 14) + yLongitude + countSpacing(yLongitude, 14) + zLatitude + countSpacing(zLatitude, 14) + C);
        }
        C = zLatitude - yLongitude;
        xUfoSpeed = xUfoSpeed + randomNumberInRange(2000, 6999);
        miles = miles - (float) xUfoSpeed / 60;
        yLongitude = yLongitude - randomNumberInRange(0, 9);
        zLatitude = zLatitude - randomNumberInRange(0, 9);
        C = zLatitude - yLongitude + A * A;
        if (xUfoSpeed - P > 5700) {
            fFriction += 1;
        }
    }

    private static void executePlanA() {
        System.out.println("LAUNCH AN I.C.B.M. ON A COURSE THAT WILL INTERCEPT THE UFO");
        System.out.println("WITHOUT THE UFO BEING TOO CLOSE TO YOUR LOCATION.  IF THE ");
        System.out.println("SPEED");
        System.out.println("OF THE UFO EXCEEDS " + hGameOverSpeed + " M.P.H., YOUR MISSILES ARE USELESS!");
        System.out.println("--SCANNERS PREDICT YOU HAVE " + mMinutesToDestroy + " MINUTES TO DESTROY THE UFO");
        System.out.println("BEFORE IT IS TOO CLOSE TO IMPACT.");
        System.out.println();
        C = zLatitude - yLongitude + I - randomNumberInRange(1, 4);
        System.out.println("--COMPUTER INDICATES COURSE AT FIRST SIGHTING IS APPROX. " + (C + fFriction));
        System.out.println();
        System.out.println("TYPE IN A COURSE ON THE CHART BELOW");
        System.out.println();
        System.out.println();
        System.out.println("TIME          SPEED         LONGITUDE     LATITUDE      COURSE");
        Scanner scanner = new Scanner(System.in);
        for (float T = 0; T <= 5; T += 0.5) {
            System.out.print(" " + T + countSpacing(T, 14) + xUfoSpeed + countSpacing(xUfoSpeed, 14) + yLongitude + countSpacing(yLongitude, 14) + zLatitude + countSpacing(zLatitude, 13) + "? ");
            A = scanner.nextInt();
            if (T == (int) T && T == mMinutesToDestroy) {
                System.out.println("---------------ATTENTION----------------");
                System.out.println("ELAPSED-TIME-INDICATES-THAT- " + mMinutesToDestroy + " MINUTES-HAVE-PASSED.--IF-YOU-");
                System.out.println("WERE-TO-HIT-THE-UFO-NOW----THE-FORCE-OF-THE-EXPLOSION-WOULD");
                System.out.println("----------DESTROY-YOU-AS-WELL-AS-THE-UFO-!");
                System.out.println();
                break;
            } else if (xUfoSpeed > hGameOverSpeed) {
                System.out.println("SORRY--THE SPEED OF THE UFO HAS EXCEEDED " + hGameOverSpeed + " M.P.H.");
                System.out.println("THIS SPEED IS TO GREAT FOR YOUR DEFENSE SCREEN TO TRACK!");
                System.out.println("THEREFORE, YOU ARE (HA HA) DOOMED!");
                System.out.println();
                break;
            } else if (A == C) {
                System.out.println("FANTASTIC!!!!  YOU HIT THE UFO EXACTLY ON PROJECTED COURSE");
                System.out.println("YOU MUST BE VERY SHARP!");
                System.out.println();
                System.out.println();
                break;
            } else if (A <= 10) {
                System.out.println("AT THAT COURSE YOU SHOT YOUR MISSILE STRAIGHT UP, SO WHEN");
                System.out.println("IT RUNS OUT OF FUEL IN ABOUT " + fFriction + " HOURS, IT WILL FALL");
                System.out.println("THROUGH");
                System.out.println("YOUR ROOF!!!!!!!!!!  GOODBYE!!!!!!");
                break;
            } else if (A >= 200) {
                System.out.println("GOOD WORK! THERE GOES THE MISSILE--------RIGHT TOWARDS");
                System.out.println("RUSSIA!!!! NOW YOU'RE DEFINITELY IN TROUBLE!!");
                break;
            } else if (A == C - 1) {
                System.out.println("YOU ARE SHY OF THE UFO'S COORDINATES,");
                System.out.println("HOWEVER THIS IS ONLY A SLIGHT DEVIATION SO THE");
                System.out.println("UFO HAS BEEN DESTROYED!");
                System.out.println();
                break;
            } else if (A == C + 1) {
                System.out.println("YOU OVERSHOT THE UFO'S COORDINATES,");
                System.out.println("HOWEVER THIS IS ONLY A SLIGHT DEVIATION SO THE");
                System.out.println("UFO HAS BEEN DESTROYED!");
                System.out.println();
                break;
            }
            xUfoSpeed = xUfoSpeed + V + 1200;
            yLongitude = yLongitude - I + 5;
            zLatitude = zLatitude - I + 5;
            C = zLatitude - yLongitude + 5;
        }
    }

    private static String countSpacing(float number, int totalSpace) {
        String result = "";
        String milesStr = String.valueOf(number);
        for (int i = 0; i < totalSpace - milesStr.length(); i++) {
            result = result.concat(" ");;
        }
        return result;
    }

    private static String countSpacing(int number, int totalSpace) {
        String result = "";
        String milesStr = String.valueOf(number);
        for (int i = 0; i < totalSpace - milesStr.length(); i++) {
            result = result.concat(" ");;
        }
        return result;
    }
}
