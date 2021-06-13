/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */




/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const UITLEG = 0;
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 200; // x-positie van speler
var spelerY = 300; // y-positie van speler

var kogelX = 0;    // x-positie van kogel
var kogelY = 0;    // y-positie van kogel

var vijandX = 0;   // x-positie van vijand
var vijandY = 0;   // y-positie van vijand

var score = 0; // aantal behaalde punten





/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/**
 * Tekent het speelveld
 */
var tekenVeld = function () {
  fill(0,0,60);
  rect(0, 0, 2000, 2000);
  
}

var tekenMaan = function () {
    fill (230,230,180)
    ellipse(900,100,100,100)
    fill(200,200,180)
    ellipse(880,120,20,20)
    fill(200,200,180)
    ellipse(910,80,20,20)
}



    var tekenPilaar = function (x,y,h,p) {
    fill("green");
    rect(x, y, 100, h);
    pilaarX[p] = pilaarX[p] - 6
if (spelerX > x && spelerX < x + 100 && spelerY > y && spelerY < y + pilaarGrootte[p])
{
    spelStatus = GAMEOVER;
}}; 

var highScore = 0;





var tekenGrond = function() {
    fill(120,60,0);
    rect(-100,690,2000,30);
}

var tekenGras = function() {
    fill(50,230,50)
    rect(-100,685,2000,20)
    if (spelerY > 700){
        spelStatus = GAMEOVER;
    }
}


var pilaarX = [1200, 1200, 1600, 1600, 2000, 2000, 2400, 2400, 2800, 2800, 3200, 3200, 3600, 3600, 4000, 4000, 4400, 4400, 4800, 4800, 5200, 5200, 5600, 5600];



var pilaarY = [0, 500, 0, 600, 0, 400, -250, 350, 0, 500, 0, 300, 0, 1000, 500, 0, 600, 0, 400, -250, 350, 0, 500, 0, 300, 0, 100];

var pilaarGrootte = [300, 200, 400, 100, 200, 300, 400, 500, 300, 500, 100, 400, 200, 500,300, 200, 400, 100, 200, 300, 400, 500, 300, 500, 100, 400, 200, 500,];





/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenVijand = function(x, y) {
    

};





/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenSpeler = function(x, y) {
  fill("yellow");  // lichaam
  ellipse(x, y, 50, 50);
  fill(255,255,255) // oog
  ellipse(x + 6, y - 4, 20,20)
  fill("black"); // pupil
  ellipse(x + 8, y - 4, 10, 10);

};


/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */
var beweegVijand = function() {
    
};





/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele spelerX en spelerY
 */
var beweegSpeler = function() {
  
  // laat speler vallen met valsnelheid
  spelerY = spelerY +5;

  if(keyIsDown(38)) { //key up
    spelerY=spelerY-10;
    
  }

     

};


/**
 * Zoekt uit of de vijand is geraakt
 * @returns {boolean} true als vijand is geraakt
 */
var checkVijandGeraakt = function() {

  return false;
};


/**
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */
var checkSpelerGeraakt = function() {
    
  return false;
};


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() {
    
  return false;
};


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');

  //groene palen
  

}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
     case UITLEG: 
    background 
    case SPELEN:
      beweegVijand();
      beweegSpeler(); 
      

      
      if (checkSpelerGeraakt()) {
        // leven eraf of gezondheid verlagen
        // eventueel: nieuwe speler maken
      }

      tekenVeld();
      tekenMaan();
     // tekenPilaar(pilaarX[0],500,300);
     // tekenPilaar(pilaarX[0],10,300);
      for(var i = 0; i < pilaarX.length; i += 1) {
    tekenPilaar(pilaarX[i],pilaarY[i],pilaarGrootte[i],i)
    if (pilaarX[i] < spelerX) {
        score += 1;
    }
    textSize (100)
text('score'+ score,100,0,500,500)
}
      tekenGrond();
      tekenGras();
      tekenVijand(vijandX, vijandY);
      tekenSpeler(spelerX, spelerY);

      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
      case GAMEOVER:  
      background (0,0,0)
      fill ("red")
      text ("Klik op ENTER om te spelen",100,100,1200,1000)
      if (keyIsDown(13))
      {
          fill(255,0,0)
          spelStatus = SPELEN
          score = 0
      }
    
      if (score > highScore) {
highScore = score
      }
      text('highScore'+ highScore,100,0,500,500)
     
      
pilaarX = [1200, 1200, 1600, 1600, 2000, 2000, 2400, 2400, 2800, 2800, 3200, 3200, 3600, 3600, 4000, 4000, 4400, 4400, 4800, 4800, 5200, 5200, 5600, 5600];

pilaarY = [0, 500, 0, 600, 0, 400, -250, 350, 0, 500, 0, 300, 0, 1000, 500, 0, 600, 0, 400, -250, 350, 0, 500, 0, 300, 0, 100];

pilaarGrootte = [300, 200, 400, 100, 200, 300, 400, 500, 300, 500, 100, 400, 200, 500,300, 200, 400, 100, 200, 300, 400, 500, 300, 500, 100, 400, 200, 500,];

spelerY = 70

  }
}


