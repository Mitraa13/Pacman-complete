  var topBound,bottomBound,leftBound,rightBound;
  var pacman;
  var movingLeft,movingRight,movingUp,movingDown,deadone;
  var ghost1,ghost2,ghost3,ghost4;
  var blue1,blue2,blue3,blue4;
  var bigc1,bigc2,bigc3,bigc4,bigc5,bigc6,bigc7,bigc8;
  var obstacle
  var left,right,up,down

  var score = 0;
  var score1 = 1;
  var lives = 3;
  var gameState = "serve"
  var serve;
  var play;
  var over;

  function preload(){
  pacmanimg = loadAnimation("images/pacmandead/pac10.png");

  movingLeft = loadAnimation("images/PacmanLeft/pac2.png","images/PacmanLeft/pac6.png","images/PacmanLeft/pac8.png");

  movingRight = loadAnimation("images/PacmanRight/pac2.png","images/PacmanRight/pac6.png","images/PacmanRight/pac8.png");

  movingDown = loadAnimation("images/PacmanDown/pac2.png","images/PacmanDown/pac6.png","images/PacmanDown/pac8.png");

  movingUp = loadAnimation("images/PacmanUp/pac2.png","images/PacmanUp/pac6.png","images/PacmanUp/pac8.png");

  deadone = loadAnimation("images/pacmandead/pac1.png","images/pacmandead/pac10.png","images/pacmandead/pac20.png","images/pacmandead/pac26.png",
  "images/pacmandead/pac31.png","images/pacmandead/pac33.png");
 
  ghost1img = loadAnimation("images/ghosts/blueghost.png");
  ghost2img = loadAnimation("images/ghosts/pinkghost.png");
  ghost3img = loadAnimation("images/ghosts/yellowghost.png");
  ghost4img = loadAnimation("images/ghosts/redghost.png");

  bonusimg = loadAnimation("images/ghosts/bonusghost1.png");

  logo = loadImage("images/logo.jpg");
  grainimg = loadImage("images/grains.png");
  heartimg = loadImage("images/heart.png");
  winimg = loadImage("images/won.jpg");
  lostimg = loadImage("images/lost.jpg")

  rightimg = loadImage("images/Arrowkeys/rightarrow.jpg");
  leftimg = loadImage("images/Arrowkeys/leftarrow.jpg");
  upimg = loadImage("images/Arrowkeys/uparrow.jpg");
  downimg = loadImage("images/Arrowkeys/downarrow.jpg");

  }

  function setup() {
    
    pacman = createSprite(750,520,10,10);
    pacman.addAnimation("pacman",pacmanimg);
    pacman.addAnimation("movingLeft",movingLeft)
    pacman.addAnimation("movingRight",movingRight)
    pacman.addAnimation("movingUp",movingUp)
    pacman.addAnimation("movingDown",movingDown)
    pacman.addAnimation("deadone",deadone)
    pacman.scale=0.4  
    
    ghost1 = createSprite(700,375,20,20);
    ghost1.addAnimation("blueghost",ghost1img);
    ghost1.scale=0.2

    ghost2 = createSprite(750,375,20,20);
    ghost2.addAnimation("pinkghost",ghost2img);
    ghost2.scale=0.25

    ghost3 = createSprite(800,375,20,20);
    ghost3.addAnimation("yellowghost",ghost3img);
    ghost3.scale=0.2

    ghost4 = createSprite(800,375,20,20);
    ghost4.addAnimation("redghost",ghost4img);
    ghost4.scale=0.2
  
    ghost1.velocityY = -5
    ghost1.velocityY = 5
    ghost1.velocityX = -5
    ghost1.velocityX = 5
    ghost2.velocityY = 5
    ghost2.velocityX = -5
    ghost3.velocityY = 5
    ghost3.velocityX = 7
    ghost4.velocityY = 3
    ghost4.velocityX = 5

    heart1 = createSprite(500, 30);
    heart1.addImage("heart",heartimg);
    heart1.scale = 2;
    heart2 = createSprite(450, 30);
    heart2.addImage("heart",heartimg);
    heart2.scale = 2;
    heart3 = createSprite(400, 30);
    heart3.addImage("heart",heartimg);
    heart3.scale = 2; 

    pacman1 = createSprite(1130, 30);
    pacman1.addAnimation("pacman",pacmanimg);
    pacman1.scale = 0.4
    pacman2 = createSprite(1080, 30);
    pacman2.addAnimation("pacman",pacmanimg);
    pacman2.scale = 0.4
    pacman3 = createSprite(1030, 30);
    pacman3.addAnimation("pacman",pacmanimg);
    pacman3.scale = 0.4

    blue1 = createSprite(500,100,10,10);
    blue1.addAnimation("bonus",bonusimg);
    blue1.scale=0.2
    blue1.visible=false
    blue2 = createSprite(600,600,10,10);
    blue2.addAnimation("bonus",bonusimg);
    blue2.scale=0.2
    blue2.visible=false
    blue3 = createSprite(900,600,10,10);
    blue3.addAnimation("bonus",bonusimg);
    blue3.scale=0.2
    blue3.visible=false
    blue4 = createSprite(1000,100,10,10);
    blue4.addAnimation("bonus",bonusimg);
    blue4.scale=0.2
    blue4.visible=false

    topBound = createSprite(750, 50, 800, 3);
    bottomBound = createSprite(750, 700, 800, 3);

    leftBound = createSprite(350, 375, 3, 650);
    rightBound = createSprite(1150, 375, 3, 650);

    obstacle = createSprite(750,325,100,5)
    obstacle.shapeColor = "red";
    obstacle.visible=false

    s11 = createSprite(750, 60, 780, 10);
    s11.shapeColor = "blue";
    s12 = createSprite(750,690,780,10);
    s12.shapeColor = "blue";
    s13 = createSprite(360,375,10,640);
    s13.shapeColor = "blue";
    s14 = createSprite(1140,375,10,640);
    s14.shapeColor = "blue";

    s21 = createSprite(750,430,200,10);
    s21.shapeColor = "blue";
    s22 = createSprite(650,385,10,100);   
    s22.shapeColor = "blue"; 
    s23 = createSprite(850,385,10,100);
    s23.shapeColor = "blue";
    s24 = createSprite(680,330,70,10);
    s24.shapeColor = "blue";
    s25 = createSprite(820,330,70,10);
    s25.shapeColor = "blue";

    s31 = createSprite(550,110,10,100);
    s31.shapeColor = "blue";
    s32 = createSprite(950,110,10,100);
    s32.shapeColor = "blue";
    s33 = createSprite(550,635,10,100);
    s33.shapeColor = "blue";
    s34 = createSprite(950,635,10,100);
    s34.shapeColor = "blue";

    s41 = createSprite(550,430,50,10);
    s41.shapeColor = "blue";
    s42 = createSprite(550,330,50,10);
    s42.shapeColor = "blue";
    s43 = createSprite(950,430,50,10);
    s43.shapeColor = "blue";
    s44 = createSprite(950,330,50,10);
    s44.shapeColor = "blue";
    s45 = createSprite(750,200,200,10);
    s45.shapeColor = "blue";
    s46 = createSprite(750,550,200,10);
    s46.shapeColor = "blue";

    s51 = createSprite(435,280,10,100);
    s51.shapeColor = "blue";
    s52 = createSprite(455,230,50,10);
    s52.shapeColor = "blue";
    s53 = createSprite(435,470,10,100);
    s53.shapeColor = "blue";
    s54 = createSprite(455,520,50,10);
    s54.shapeColor = "blue";
    s55 = createSprite(1065,280,10,100);
    s55.shapeColor = "blue";
    s56 = createSprite(1045,230,50,10);
    s56.shapeColor = "blue";
    s57 = createSprite(1065,470,10,100);
    s57.shapeColor = "blue";
    s58 = createSprite(1045,520,50,10);
    s58.shapeColor = "blue";
/*
    bigc1 = createSprite(400,110,20,20);
    bigc1.addImage(grainimg);
    bigc1.scale=0.08
    bigc2 = createSprite(1100,110,20,20);
    bigc2.addImage(grainimg);
    bigc2.scale=0.08
    bigc3 = createSprite(400,660,20,20);
    bigc3.addImage(grainimg);
    bigc3.scale=0.08
    bigc4 = createSprite(1100,660,20,20);
    bigc4.addImage(grainimg);
    bigc4.scale=0.08
    bigc5 = createSprite(460,480,20,20);
    bigc5.addImage(grainimg);
    bigc5.scale=0.08
    bigc6 = createSprite(460,280,20,20);
    bigc6.addImage(grainimg);
    bigc6.scale=0.08
    bigc7 = createSprite(1040,480,20,20);
    bigc7.addImage(grainimg);
    bigc7.scale=0.08
    bigc8 = createSprite(1040,280,20,20);
    bigc8.addImage(grainimg);
    bigc8.scale=0.08
*/
    c11 = createSprite(400,160,10,10);
    c11.addImage(grainimg);
    c11.scale=0.03
    c12 = createSprite(400,210,10,10);
    c12.addImage(grainimg);
    c12.scale=0.03
    c13 = createSprite(400,260,10,10);
    c13.addImage(grainimg);
    c13.scale=0.03
    c14 = createSprite(400,310,10,10);
    c14.addImage(grainimg);
    c14.scale=0.03
    c15 = createSprite(400,360,10,10);
    c15.addImage(grainimg);
    c15.scale=0.03
    c16 = createSprite(400,410,10,10);
    c16.addImage(grainimg);
    c16.scale=0.03
    c17 = createSprite(400,460,10,10);
    c17.addImage(grainimg);
    c17.scale=0.03
    c18 = createSprite(400,510,10,10);
    c18.addImage(grainimg);
    c18.scale=0.03
    c19 = createSprite(400,560,10,10);
    c19.addImage(grainimg);
    c19.scale=0.03
    c110 = createSprite(400,610,10,10);
    c110.addImage(grainimg);
    c110.scale=0.03
    c111 = createSprite(1100,160,10,10);
    c111.addImage(grainimg);
    c111.scale=0.03
    c112 = createSprite(1100,210,10,10);
    c112.addImage(grainimg);
    c112.scale=0.03
    c113 = createSprite(1100,260,10,10);
    c113.addImage(grainimg);
    c113.scale=0.03
    c114 = createSprite(1100,310,10,10);
    c114.addImage(grainimg);
    c114.scale=0.03
    c115 = createSprite(1100,360,10,10);
    c115.addImage(grainimg);
    c115.scale=0.03
    c116 = createSprite(1100,410,10,10);
    c116.addImage(grainimg);
    c116.scale=0.03
    c117 = createSprite(1100,460,10,10);
    c117.addImage(grainimg);
    c117.scale=0.03
    c118 = createSprite(1100,510,10,10);
    c118.addImage(grainimg);
    c118.scale=0.03
    c119 = createSprite(1100,560,10,10);
    c119.addImage(grainimg);
    c119.scale=0.03
    c120 = createSprite(1100,610,10,10);
    c120.addImage(grainimg);
    c120.scale=0.03

    c21 = createSprite(450,660,10,10)
    c21.addImage(grainimg);
    c21.scale=0.03
    c22 = createSprite(500,660,10,10)
    c22.addImage(grainimg);
    c22.scale=0.03
    c23 = createSprite(450,610,10,10)
    c23.addImage(grainimg);
    c23.scale=0.03
    c24 = createSprite(500,610,10,10)
    c24.addImage(grainimg);
    c24.scale=0.03
    c25 = createSprite(450,560,10,10)
    c25.addImage(grainimg);
    c25.scale=0.03
    c26 = createSprite(500,560,10,10)
    c26.addImage(grainimg);
    c26.scale=0.03
    c27 = createSprite(1050,660,10,10)
    c27.addImage(grainimg);
    c27.scale=0.03
    c28 = createSprite(1000,660,10,10)
    c28.addImage(grainimg);
    c28.scale=0.03
    c29 = createSprite(1050,610,10,10)
    c29.addImage(grainimg);
    c29.scale=0.03
    c210 = createSprite(1000,610,10,10)
    c210.addImage(grainimg);
    c210.scale=0.03
    c211 = createSprite(1050,560,10,10)
    c211.addImage(grainimg);
    c211.scale=0.03
    c212 = createSprite(1000,560,10,10)
    c212.addImage(grainimg);
    c212.scale=0.03
    c213 = createSprite(450,160,10,10)
    c213.addImage(grainimg);
    c213.scale=0.03
    c214 = createSprite(500,160,10,10)
    c214.addImage(grainimg);
    c214.scale=0.03
    c215 = createSprite(450,210,10,10)
    c215.addImage(grainimg);
    c215.scale=0.03
    c216 = createSprite(500,210,10,10)
    c216.addImage(grainimg);
    c216.scale=0.03
    c217 = createSprite(450,110,10,10)
    c217.addImage(grainimg);
    c217.scale=0.03
    c218 = createSprite(500,110,10,10)
    c218.addImage(grainimg);
    c218.scale=0.03
    c219 = createSprite(1050,160,10,10)
    c219.addImage(grainimg);
    c219.scale=0.03
    c220 = createSprite(1000,160,10,10)
    c220.addImage(grainimg);
    c220.scale=0.03
    c221 = createSprite(1050,210,10,10)
    c221.addImage(grainimg);
    c221.scale=0.03
    c222 = createSprite(1000,210,10,10)
    c222.addImage(grainimg);
    c222.scale=0.03
    c223 = createSprite(1050,110,10,10)
    c223.addImage(grainimg);
    c223.scale=0.03
    c224 = createSprite(1000,110,10,10)
    c224.addImage(grainimg);
    c224.scale=0.03

    c31 = createSprite(600,660,10,10)
    c31.addImage(grainimg);
    c31.scale=0.03
    c32 = createSprite(650,660,10,10)
    c32.addImage(grainimg);
    c32.scale=0.03
    c33 = createSprite(700,660,10,10)
    c33.addImage(grainimg);
    c33.scale=0.03
    c34 = createSprite(750,660,10,10)
    c34.addImage(grainimg);
    c34.scale=0.03
    c35 = createSprite(800,660,10,10)
    c35.addImage(grainimg);
    c35.scale=0.03
    c36 = createSprite(850,660,10,10)
    c36.addImage(grainimg);
    c36.scale=0.03
    c37 = createSprite(900,660,10,10)
    c37.addImage(grainimg);
    c37.scale=0.03
    c38 = createSprite(600,610,10,10)
    c38.addImage(grainimg);
    c38.scale=0.03
    c39 = createSprite(650,610,10,10)
    c39.addImage(grainimg);
    c39.scale=0.03
    c310 = createSprite(700,610,10,10)
    c310.addImage(grainimg);
    c310.scale=0.03
    c311 = createSprite(750,610,10,10)
    c311.addImage(grainimg);
    c311.scale=0.03
    c312 = createSprite(800,610,10,10)
    c312.addImage(grainimg);
    c312.scale=0.03
    c313 = createSprite(850,610,10,10)
    c313.addImage(grainimg);
    c313.scale=0.03
    c314 = createSprite(900,610,10,10)
    c314.addImage(grainimg);
    c314.scale=0.03
    c315 = createSprite(600,110,10,10)
    c315.addImage(grainimg);
    c315.scale=0.03
    c316 = createSprite(650,110,10,10)
    c316.addImage(grainimg);
    c316.scale=0.03
    c317 = createSprite(700,110,10,10)
    c317.addImage(grainimg);
    c317.scale=0.03
    c318 = createSprite(750,110,10,10)
    c318.addImage(grainimg);
    c318.scale=0.03
    c319 = createSprite(800,110,10,10)
    c319.addImage(grainimg);
    c319.scale=0.03
    c320 = createSprite(850,110,10,10)
    c320.addImage(grainimg);
    c320.scale=0.03
    c321 = createSprite(900,110,10,10)
    c321.addImage(grainimg);
    c321.scale=0.03
    c322 = createSprite(600,160,10,10)
    c322.addImage(grainimg);
    c322.scale=0.03
    c323 = createSprite(650,160,10,10)
    c323.addImage(grainimg);
    c323.scale=0.03
    c324 = createSprite(700,160,10,10)
    c324.addImage(grainimg);
    c324.scale=0.03
    c325 = createSprite(750,160,10,10)
    c325.addImage(grainimg);
    c325.scale=0.03
    c326 = createSprite(800,160,10,10)
    c326.addImage(grainimg);
    c326.scale=0.03
    c327 = createSprite(850,160,10,10)
    c327.addImage(grainimg);
    c327.scale=0.03
    c328 = createSprite(900,160,10,10)
    c328.addImage(grainimg);
    c328.scale=0.03

    c41 = createSprite(550,210,10,10)
    c41.addImage(grainimg);
    c41.scale=0.03
    c42 = createSprite(600,210,10,10)
    c42.addImage(grainimg);
    c42.scale=0.03
    c43 = createSprite(550,560,10,10)
    c43.addImage(grainimg);
    c43.scale=0.03
    c44 = createSprite(600,560,10,10)
    c44.addImage(grainimg);
    c44.scale=0.03
    c45 = createSprite(950,210,10,10)
    c45.addImage(grainimg);
    c45.scale=0.03
    c46 = createSprite(900,210,10,10)
    c46.addImage(grainimg);
    c46.scale=0.03
    c47 = createSprite(950,560,10,10)
    c47.addImage(grainimg);
    c47.scale=0.03
    c48 = createSprite(900,560,10,10)
    c48.addImage(grainimg);
    c48.scale=0.03
    c49 = createSprite(550,360,10,10)
    c49.addImage(grainimg);
    c49.scale=0.03
    c410 = createSprite(600,360,10,10)
    c410.addImage(grainimg);
    c410.scale=0.03
    c411 = createSprite(450,360,10,10)
    c411.addImage(grainimg);
    c411.scale=0.03
    c412 = createSprite(500,360,10,10)
    c412.addImage(grainimg);
    c412.scale=0.03
    c413 = createSprite(1050,360,10,10)
    c413.addImage(grainimg);
    c413.scale=0.03
    c414 = createSprite(1000,360,10,10)
    c414.addImage(grainimg);
    c414.scale=0.03
    c415 = createSprite(950,360,10,10)
    c415.addImage(grainimg);
    c415.scale=0.03
    c416 = createSprite(900,360,10,10)
    c416.addImage(grainimg);
    c416.scale=0.03
    c417 = createSprite(550,410,10,10)
    c417.addImage(grainimg);
    c417.scale=0.03
    c418 = createSprite(600,410,10,10)
    c418.addImage(grainimg);
    c418.scale=0.03
    c419 = createSprite(450,410,10,10)
    c419.addImage(grainimg);
    c419.scale=0.03
    c420 = createSprite(500,410,10,10)
    c420.addImage(grainimg);
    c420.scale=0.03
    c421 = createSprite(1050,410,10,10)
    c421.addImage(grainimg);
    c421.scale=0.03
    c422 = createSprite(1000,410,10,10)
    c422.addImage(grainimg);
    c422.scale=0.03
    c423 = createSprite(950,410,10,10)
    c423.addImage(grainimg);
    c423.scale=0.03
    c424 = createSprite(900,410,10,10)
    c424.addImage(grainimg);
    c424.scale=0.03

    c51 = createSprite(600,510,10,10)
    c51.addImage(grainimg);
    c51.scale=0.03
    c52 = createSprite(600,460,10,10)
    c52.addImage(grainimg);
    c52.scale=0.03
    c53 = createSprite(600,310,10,10)
    c53.addImage(grainimg);
    c53.scale=0.03
    c54 = createSprite(600,260,10,10)
    c54.addImage(grainimg);
    c54.scale=0.03
    c55 = createSprite(900,510,10,10)
    c55.addImage(grainimg);
    c55.scale=0.03
    c56 = createSprite(900,460,10,10)
    c56.addImage(grainimg);
    c56.scale=0.03
    c57 = createSprite(900,310,10,10)
    c57.addImage(grainimg);
    c57.scale=0.03
    c58 = createSprite(900,260,10,10)
    c58.addImage(grainimg);
    c58.scale=0.03
    c59 = createSprite(550,510,10,10)
    c59.addImage(grainimg);
    c59.scale=0.03
    c510 = createSprite(550,460,10,10)
    c510.addImage(grainimg);
    c510.scale=0.03
    c511 = createSprite(550,310,10,10)
    c511.addImage(grainimg);
    c511.scale=0.03
    c512 = createSprite(550,260,10,10)
    c512.addImage(grainimg);
    c512.scale=0.03
    c513 = createSprite(950,510,10,10)
    c513.addImage(grainimg);
    c513.scale=0.03
    c514 = createSprite(950,460,10,10)
    c514.addImage(grainimg);
    c514.scale=0.03
    c515 = createSprite(950,310,10,10)
    c515.addImage(grainimg);
    c515.scale=0.03
    c516 = createSprite(950,260,10,10)
    c516.addImage(grainimg);
    c516.scale=0.03
    c517 = createSprite(500,510,10,10)
    c517.addImage(grainimg);
    c517.scale=0.03
    c518 = createSprite(500,460,10,10)
    c518.addImage(grainimg);
    c518.scale=0.03
    c519 = createSprite(500,310,10,10)
    c519.addImage(grainimg);
    c519.scale=0.03
    c520 = createSprite(500,260,10,10)
    c520.addImage(grainimg);
    c520.scale=0.03
    c521 = createSprite(1000,510,10,10)
    c521.addImage(grainimg);
    c521.scale=0.03
    c522 = createSprite(1000,460,10,10)
    c522.addImage(grainimg);
    c522.scale=0.03
    c523 = createSprite(1000,310,10,10)
    c523.addImage(grainimg);
    c523.scale=0.03
    c524 = createSprite(1000,260,10,10)
    c524.addImage(grainimg);
    c524.scale=0.03

    c61 = createSprite(650,260,10,10)
    c61.addImage(grainimg);
    c61.scale=0.03
    c62 = createSprite(700,260,10,10)
    c62.addImage(grainimg);
    c62.scale=0.03
    c63 = createSprite(750,260,10,10)
    c63.addImage(grainimg);
    c63.scale=0.03
    c64 = createSprite(800,260,10,10)
    c64.addImage(grainimg);
    c64.scale=0.03
    c65 = createSprite(850,260,10,10)
    c65.addImage(grainimg);
    c65.scale=0.03
    c66 = createSprite(650,460,10,10)
    c66.addImage(grainimg);
    c66.scale=0.03
    c67 = createSprite(700,460,10,10)
    c67.addImage(grainimg);
    c67.scale=0.03
    c68 = createSprite(750,460,10,10)
    c68.addImage(grainimg);
    c68.scale=0.03
    c69 = createSprite(800,460,10,10)
    c69.addImage(grainimg);
    c69.scale=0.03
    c610 = createSprite(850,460,10,10)
    c610.addImage(grainimg);
    c610.scale=0.03

    c71 = createSprite(400,110,10,10)
    c71.addImage(grainimg)
    c71.scale=0.03
    c72 = createSprite(1100,110,10,10)
    c72.addImage(grainimg)
    c72.scale=0.03
    c73 = createSprite(400,660,10,10)
    c73.addImage(grainimg)
    c73.scale=0.03
    c74 = createSprite(1100,660,10,10)
    c74.addImage(grainimg)
    c74.scale=0.03
    c75 = createSprite(450,260,10,10)
    c75.addImage(grainimg)
    c75.scale=0.03
    c76 = createSprite(1050,260,10,10)
    c76.addImage(grainimg)
    c76.scale=0.03
    c77 = createSprite(450,310,10,10)
    c77.addImage(grainimg)
    c77.scale=0.03
    c78 = createSprite(1050,310,10,10)
    c78.addImage(grainimg)
    c78.scale=0.03
    c79 = createSprite(450,508,10,10)
    c79.addImage(grainimg)
    c79.scale=0.03
    c710 = createSprite(1050,508,10,10)
    c710.addImage(grainimg)
    c710.scale=0.03
    c711= createSprite(450,460,10,10)
    c711.addImage(grainimg)
    c711.scale=0.03
    c712 = createSprite(1050,460,10,10)
    c712.addImage(grainimg)
    c712.scale=0.03
    
    Logo = createSprite(750,380,10,10);
    Logo.addImage("logo",logo);
    Logo.visible=false

    wonthegame = createSprite(750,500,10,10);
    wonthegame.addImage(winimg);
    wonthegame.scale=4.5
    wonthegame.visible=false

    lostthegame = createSprite(750,350,10,10);
    lostthegame.addImage(lostimg);
    lostthegame.scale=5
    lostthegame.visible=false
/*
    left = createSprite(1250,350,10,10)
    left.addImage(leftimg);
    left.scale=0.35
    right = createSprite(1450,350,10,10)
    right.addImage(rightimg);
    right.scale=0.35
    up = createSprite(1350,300,10,10)
    up.addImage(upimg)
    up.scale=0.3
    down = createSprite(1350,400,10,10)
    down.addImage(downimg)
    down.scale=0.3
*/
  }

  function draw() {
   
    var cn = createCanvas(1500,750);

    background(0);

    bounceoffs();
    pacmancollides();

  if(gameState === "serve"){
    obstacle.visible=true
    Logo.visible=true
    ghost1.bounceOff(obstacle);
    ghost2.bounceOff(obstacle);
    ghost3.bounceOff(obstacle);
    ghost4.bounceOff(obstacle);

    textSize(20);
    text("Press Space to Start",660,315);
  }  

  if(keyDown("space") && gameState==="serve"){
    gameState = "play";
    pacman3.visible=false
  }  
  
  if(gameState === "play"){

    bounceoffs();
    pacmancollides();

    obstacle.visible=false
    Logo.visible=false
/*
    ghostTime1();
    ghostTime2();
    ghostTime3();
    ghostTime4();
    ghostTime5();
    ghostTime6();
    ghostTime7();
    ghostTime8();
*/
/*    
    if(mousePressedOver(left)){
      Left();
    }else
    if(mousePressedOver(right)){
      Right();
    }else
    if(mousePressedOver(up)){
      Up();
    }else
    if(mousePressedOver(down)){
      Down();
    }
*/
    if (ghost1.isTouching(pacman)) {
      lives = lives - 1;
      pacman.changeAnimation("pacman",pacmanimg)
      pacman.x = 750;
      pacman.y = 520;
      pacman.velocityX = 0;
      pacman.velocityY = 0;
    }
    if (ghost2.isTouching(pacman)) {
      lives = lives - 1;
      pacman.changeAnimation("pacman",pacmanimg)
      pacman.x = 750;
      pacman.y = 520;
      pacman.velocityX = 0;
      pacman.velocityY = 0;
    }
    if (ghost3.isTouching(pacman)) {
      lives = lives - 1;
      pacman.changeAnimation("pacman",pacmanimg)
      pacman.x = 750;
      pacman.y = 520;
      pacman.velocityX = 0;
      pacman.velocityY = 0;
    }
    if (ghost4.isTouching(pacman)) {
      lives = lives - 1;
      pacman.changeAnimation("pacman",pacmanimg)
      pacman.x = 750;
      pacman.y = 520;
      pacman.velocityX = 0;
      pacman.velocityY = 0; 
    }
  }

  if (lives == 2) {
    heart1.visible = false;
    pacman2.visible=false;
  }
  if (lives == 1) {
    heart2.visible = false;
    pacman1.visible=false
  }
  if (lives === 0) {
    gameState="over"
    pacman.changeAnimation("deadone",deadone);
    heart3.visible = false;
    ghost1.velocityX=0
    ghost1.velocityY=0
    ghost2.velocityX=0
    ghost2.velocityY=0
    ghost3.velocityX=0
    ghost3.velocityY=0
    ghost4.velocityX=0
    ghost4.velocityY=0
  }

  if(score === 1420){
    wonthegame.visible=true
    /*left.visible=false
    right.visible=false
    up.visible=false
    down.visible=false*/
    ghost1.velocityX=0
    ghost1.velocityY=0
    ghost2.velocityX=0
    ghost2.velocityY=0
    ghost3.velocityX=0
    ghost3.velocityY=0
    ghost4.velocityX=0
    ghost4.velocityY=0
  }
  
  textSize(20);
  fill("white");
  textFont("Stencil")
  text("Score : "+score,730,30);

  textSize(30);
  fill("white");
  stroke("black");
  text("Instructions : ",25,50);
  textSize(20);
  text("1. Use Arrow keys to navigate",25,100);
  text("the Pacman.",50,125)
  text("2. Eat the pills without",25,175);
  text("touching the ghosts.",50,200);
  text("3. If you eat the big pills,you",25,250);
  text("will be immune to the ",50,275);
  text("ghosts for some time.",50,300);
  text("4. If you eat all the pills,",25,350);
  text("you will win the game.",50,375);
  text("5. Remember, you have only ",25,425);
  text("3 lives.",50,450);
  text("6. If you want to replay or",25,500);
  text("restart the game, refresh.",50,525);
  text("the page.",50,550);
  text("7.If you want to pause/resume",25,600);
  text("the game, switch to",50,625);
  text("another tab.",50,650);
  text("All The Best!!",100,700);
  
  textSize(30);
  //text("Arrow Keys : ",1170,225)
  text("By Mitraa",1300,700);

  drawSprites();

  if(gameState==="over"){
    lostthegame.visible=true
    textSize(30);
    fill("black");
    stroke("lightyellow")
    text("PLEASE REFRESH THE PAGE TO RESTART",450,700)
  }

}

function keyPressed(){
  
  if(keyCode === 37){
    pacman.changeAnimation("movingLeft",movingLeft);
    pacman.x = pacman.x-20
  }else
  if(keyCode === 39){
    pacman.changeAnimation("movingRight",movingRight);
    pacman.x = pacman.x+20
  }else
  if(keyCode === 38){
    pacman.changeAnimation("movingUp",movingUp);
    pacman.y = pacman.y-20
  }else
  if(keyCode === 40){
    pacman.changeAnimation("movingDown",movingDown);
    pacman.y = pacman.y+20
  }

}
/*
function ghostTime1() {
  if (pacman.isTouching(bigc1)) {
    score1 = 5;
    bigc1.destroy();
    score = score+50

    blue1.visible = true;
    blue2.visible = true;
    blue3.visible = true;
    blue4.visible = true;

    ghost1.velocityX = 0;
    ghost1.velocityY = 0;
    ghost2.velocityX = 0;
    ghost2.velocityY = 0;
    ghost3.velocityX = 0;
    ghost3.velocityY = 0;
    ghost4.velocityX = 0;
    ghost4.velocityY = 0;

    ghost1.visible=false
    ghost2.visible=false
    ghost3.visible=false
    ghost4.visible=false

    blue1.velocityY = 5;
    blue2.velocityY = -5;
    blue3.velocityY = -5;
    blue4.velocityY = 5;

    if (blue1.y === 600) {
      score1 = score1-1
    }
  }
  if (score1 == 0) {

    ghost1.visible=true
    ghost2.visible=true
    ghost3.visible=true
    ghost4.visible=true
    
    ghost1.x = 500
    ghost1.y = 100
    ghost2.x = 700
    ghost2.y = 350
    ghost3.x = 800
    ghost3.y = 350
    ghost4.x = 1000
    ghost4.y = 100

    ghost1.velocityY = random(3,7);
    ghost1.velocityX = random(3,7);
    ghost2.velocityY = random(3,5);
    ghost2.velocityX = random(3,5);
    ghost3.velocityY = random(5,7);
    ghost3.velocityX = random(5,7);
    ghost4.velocityY = random(1,5);
    ghost4.velocityX = random(1,5);

    bounceoffs();
    
    blue1.x = 500;
    blue1.y = 100;
    blue2.x = 600;
    blue2.y = 600;
    blue3.x = 900;
    blue3.y = 600;
    blue4.x = 1000;
    blue4.y = 100;
   
    blue1.visible = false;
    blue2.visible = false;
    blue3.visible = false;
    blue4.visible = false;
  }  
}

function ghostTime2(){

  if (pacman.isTouching(bigc2)) {
    score1 = 5;
    bigc2.destroy();
    score = score+50

    blue1.visible = true;
    blue2.visible = true;
    blue3.visible = true;
    blue4.visible = true;

    ghost1.velocityX = 0;
    ghost1.velocityY = 0;
    ghost2.velocityX = 0;
    ghost2.velocityY = 0;
    ghost3.velocityX = 0;
    ghost3.velocityY = 0;
    ghost4.velocityX = 0;
    ghost4.velocityY = 0;

    ghost1.visible=false
    ghost2.visible=false
    ghost3.visible=false
    ghost4.visible=false

    blue1.velocityY = 5;
    blue2.velocityY = -5;
    blue3.velocityY = -5;
    blue4.velocityY = 5;
  }
  if (blue1.y === 600) {
    score1 = score1 - 1
    console.log(score1)
  }
  if (score1 == 0) {
    
    ghost1.visible=true
    ghost2.visible=true
    ghost3.visible=true
    ghost4.visible=true
    
    ghost1.x = 500
    ghost1.y = 100
    ghost2.x = 700
    ghost2.y = 350
    ghost3.x = 800
    ghost3.y = 350
    ghost4.x = 1000
    ghost4.y = 100

    ghost1.velocityY = random(3,7);
    ghost1.velocityX = random(3,7);
    ghost2.velocityY = random(3,5);
    ghost2.velocityX = random(3,5);
    ghost3.velocityY = random(5,7);
    ghost3.velocityX = random(5,7);
    ghost4.velocityY = random(1,5);
    ghost4.velocityX = random(1,5);

    bounceoffs();
    
    blue1.x = 500;
    blue1.y = 100;
    blue2.x = 600;
    blue2.y = 600;
    blue3.x = 900;
    blue3.y = 600;
    blue4.x = 1000;
    blue4.y = 100;
   
    blue1.visible = false;
    blue2.visible = false;
    blue3.visible = false;
    blue4.visible = false;

  }

}

function ghostTime3(){

  if (pacman.isTouching(bigc3)) {
    score1 = 5;
    bigc3.destroy();
    score = score+50

    blue1.visible = true;
    blue2.visible = true;
    blue3.visible = true;
    blue4.visible = true;

    ghost1.velocityX = 0;
    ghost1.velocityY = 0;
    ghost2.velocityX = 0;
    ghost2.velocityY = 0;
    ghost3.velocityX = 0;
    ghost3.velocityY = 0;
    ghost4.velocityX = 0;
    ghost4.velocityY = 0;

    ghost1.visible=false
    ghost2.visible=false
    ghost3.visible=false
    ghost4.visible=false

    blue1.velocityY = 5;
    blue2.velocityY = -5;
    blue3.velocityY = -5;
    blue4.velocityY = 5;
  }
  if (blue1.y === 600) {
    score1 = score1-1
  }
  if (score1 == 0) {
    
    ghost1.visible=true
    ghost2.visible=true
    ghost3.visible=true
    ghost4.visible=true
    
    ghost1.x = 500
    ghost1.y = 100
    ghost2.x = 700
    ghost2.y = 350
    ghost3.x = 800
    ghost3.y = 350
    ghost4.x = 1000
    ghost4.y = 100

    ghost1.velocityY = random(3,7);
    ghost1.velocityX = random(3,7);
    ghost2.velocityY = random(3,5);
    ghost2.velocityX = random(3,5);
    ghost3.velocityY = random(5,7);
    ghost3.velocityX = random(5,7);
    ghost4.velocityY = random(1,5);
    ghost4.velocityX = random(1,5);
    
    bounceoffs();
    
    blue1.x = 500;
    blue1.y = 100;
    blue2.x = 600;
    blue2.y = 600;
    blue3.x = 900;
    blue3.y = 600;
    blue4.x = 1000;
    blue4.y = 100;
   
    blue1.visible = false;
    blue2.visible = false;
    blue3.visible = false;
    blue4.visible = false;

  }

}function ghostTime4(){

  if (pacman.isTouching(bigc4)) {
    score1 = 5;
    bigc4.destroy();
    score = score+50

    blue1.visible = true;
    blue2.visible = true;
    blue3.visible = true;
    blue4.visible = true;

    ghost1.velocityX = 0;
    ghost1.velocityY = 0;
    ghost2.velocityX = 0;
    ghost2.velocityY = 0;
    ghost3.velocityX = 0;
    ghost3.velocityY = 0;
    ghost4.velocityX = 0;
    ghost4.velocityY = 0;

    ghost1.visible=false
    ghost2.visible=false
    ghost3.visible=false
    ghost4.visible=false

    blue1.velocityY = 5;
    blue2.velocityY = -5;
    blue3.velocityY = -5;
    blue4.velocityY = 5;

  }
  if (blue1.y === 600) {
    score1 = score1-1
  }
  if (score1 == 0) {
    
    ghost1.visible=true
    ghost2.visible=true
    ghost3.visible=true
    ghost4.visible=true
    
    ghost1.x = 500
    ghost1.y = 100
    ghost2.x = 700
    ghost2.y = 350
    ghost3.x = 800
    ghost3.y = 350
    ghost4.x = 1000
    ghost4.y = 100

    ghost1.velocityY = random(3,7);
    ghost1.velocityX = random(3,7);
    ghost2.velocityY = random(3,5);
    ghost2.velocityX = random(3,5);
    ghost3.velocityY = random(5,7);
    ghost3.velocityX = random(5,7);
    ghost4.velocityY = random(1,5);
    ghost4.velocityX = random(1,5);

    bounceoffs();
    
    blue1.x = 500;
    blue1.y = 100;
    blue2.x = 600;
    blue2.y = 600;
    blue3.x = 900;
    blue3.y = 600;
    blue4.x = 1000;
    blue4.y = 100;
   
    blue1.visible = false;
    blue2.visible = false;
    blue3.visible = false;
    blue4.visible = false;

  }

}function ghostTime5(){

  if (pacman.isTouching(bigc5)) {
    score1 = 5;
    bigc5.destroy();
    score = score+50

    blue1.visible = true;
    blue2.visible = true;
    blue3.visible = true;
    blue4.visible = true;

    ghost1.velocityX = 0;
    ghost1.velocityY = 0;
    ghost2.velocityX = 0;
    ghost2.velocityY = 0;
    ghost3.velocityX = 0;
    ghost3.velocityY = 0;
    ghost4.velocityX = 0;
    ghost4.velocityY = 0;

    ghost1.visible=false
    ghost2.visible=false
    ghost3.visible=false
    ghost4.visible=false

    blue1.velocityY = 5;
    blue2.velocityY = -5;
    blue3.velocityY = -5;
    blue4.velocityY = 5;
  }
  if (blue1.y === 600) {
    score1 = score1-1
  }
  if (score1 == 0) {

    ghost1.visible=true
    ghost2.visible=true
    ghost3.visible=true
    ghost4.visible=true

    ghost1.x = 500
    ghost1.y = 100
    ghost2.x = 700
    ghost2.y = 350
    ghost3.x = 800
    ghost3.y = 350
    ghost4.x = 1000
    ghost4.y = 100

    ghost1.velocityY = random(3,7);
    ghost1.velocityX = random(3,7);
    ghost2.velocityY = random(3,5);
    ghost2.velocityX = random(3,5);
    ghost3.velocityY = random(5,7);
    ghost3.velocityX = random(5,7);
    ghost4.velocityY = random(1,5);
    ghost4.velocityX = random(1,5);
    
    bounceoffs();

    blue1.x = 500;
    blue1.y = 100;
    blue2.x = 600;
    blue2.y = 600;
    blue3.x = 900;
    blue3.y = 600;
    blue4.x = 1000;
    blue4.y = 100;
   
    blue1.visible = false;
    blue2.visible = false;
    blue3.visible = false;
    blue4.visible = false;

  }

}function ghostTime6(){

  if (pacman.isTouching(bigc6)) {
    score1 = 5;
    bigc6.destroy();
    score = score+50

    blue1.visible = true;
    blue2.visible = true;
    blue3.visible = true;
    blue4.visible = true;

    ghost1.velocityX = 0;
    ghost1.velocityY = 0;
    ghost2.velocityX = 0;
    ghost2.velocityY = 0;
    ghost3.velocityX = 0;
    ghost3.velocityY = 0;
    ghost4.velocityX = 0;
    ghost4.velocityY = 0;

    ghost1.visible=false
    ghost2.visible=false
    ghost3.visible=false
    ghost4.visible=false

    blue1.velocityY = 5;
    blue2.velocityY = -5;
    blue3.velocityY = -5;
    blue4.velocityY = 5;
  }
  if (blue1.y === 600) {
    score1 = score1 - 1
  }
  if (score1 == 0) {
    
    ghost1.visible=true
    ghost2.visible=true
    ghost3.visible=true
    ghost4.visible=true

    ghost1.x = 500
    ghost1.y = 100
    ghost2.x = 700
    ghost2.y = 350
    ghost3.x = 800
    ghost3.y = 350
    ghost4.x = 1000
    ghost4.y = 100

    ghost1.velocityY = -random(3,7);
    ghost1.velocityX = random(3,7);
    ghost2.velocityY = random(3,5);
    ghost2.velocityX = -random(3,5);
    ghost3.velocityY = random(5,7);
    ghost3.velocityX = random(5,7);
    ghost4.velocityY = random(1,5);
    ghost4.velocityX = random(1,5);   
  
    bounceoffs();
    
    blue1.x = 500;
    blue1.y = 100;
    blue2.x = 600;
    blue2.y = 600;
    blue3.x = 900;
    blue3.y = 600;
    blue4.x = 1000;
    blue4.y = 100;
   
    blue1.visible = false;
    blue2.visible = false;
    blue3.visible = false;
    blue4.visible = false;

  }

}function ghostTime7(){

  if (pacman.isTouching(bigc7)) {
    score1 = 5;
    bigc7.destroy();
    score = score+50

    blue1.visible = true;
    blue2.visible = true;
    blue3.visible = true;
    blue4.visible = true;

    ghost1.velocityX = 0;
    ghost1.velocityY = 0;
    ghost2.velocityX = 0;
    ghost2.velocityY = 0;
    ghost3.velocityX = 0;
    ghost3.velocityY = 0;
    ghost4.velocityX = 0;
    ghost4.velocityY = 0;

    ghost1.visible=false
    ghost2.visible=false
    ghost3.visible=false
    ghost4.visible=false

    blue1.velocityY = 5;
    blue2.velocityY = -5;
    blue3.velocityY = -5;
    blue4.velocityY = 5;
  }
  if (blue1.y === 600) {
    score1 = score1 - 1
  }
  if (score1 == 0) {
    
    ghost1.visible=true
    ghost2.visible=true
    ghost3.visible=true
    ghost4.visible=true
  
    ghost1.x = 500
    ghost1.y = 100
    ghost2.x = 700
    ghost2.y = 350
    ghost3.x = 800
    ghost3.y = 350
    ghost4.x = 1000
    ghost4.y = 100

    ghost1.velocityY = random(3,7);
    ghost1.velocityX = random(3,7);
    ghost2.velocityY = random(3,5);
    ghost2.velocityX = random(3,5);
    ghost3.velocityY = random(5,7);
    ghost3.velocityX = random(5,7);
    ghost4.velocityY = random(1,5);
    ghost4.velocityX = random(1,5);

    bounceoffs();
    
    blue1.x = 500;
    blue1.y = 100;
    blue2.x = 600;
    blue2.y = 600;
    blue3.x = 900;
    blue3.y = 600;
    blue4.x = 1000;
    blue4.y = 100;
   
    blue1.visible = false;
    blue2.visible = false;
    blue3.visible = false;
    blue4.visible = false;

  }

}function ghostTime8(){

  if (pacman.isTouching(bigc8)) {
    score1 = 5;
    bigc8.destroy();
    score = score+50

    blue1.visible = true;
    blue2.visible = true;
    blue3.visible = true;
    blue4.visible = true;

    ghost1.velocityX = 0;
    ghost1.velocityY = 0;
    ghost2.velocityX = 0;
    ghost2.velocityY = 0;
    ghost3.velocityX = 0;
    ghost3.velocityY = 0;
    ghost4.velocityX = 0;
    ghost4.velocityY = 0;

    ghost1.visible=false
    ghost2.visible=false
    ghost3.visible=false
    ghost4.visible=false

    blue1.velocityY = 5;
    blue2.velocityY = -5;
    blue3.velocityY = -5;
    blue4.velocityY = 5;
  }
  if (blue1.y === 600) {
    score1 = score1 - 1
  }
  if (score1 == 0) {

    ghost1.visible=true
    ghost2.visible=true
    ghost3.visible=true
    ghost4.visible=true

    ghost1.x = 500
    ghost1.y = 100
    ghost2.x = 700
    ghost2.y = 350
    ghost3.x = 800
    ghost3.y = 350
    ghost4.x = 1000
    ghost4.y = 100
    
    ghost1.velocityY = -5
    ghost1.velocityX = 5
    ghost2.velocityY = 5
    ghost2.velocityX = -5
    ghost3.velocityY = 5
    ghost3.velocityX = 7
    ghost4.velocityY = 3
    ghost4.velocityX = 5
    
    blue1.x = 500;
    blue1.y = 100;
    blue2.x = 600;
    blue2.y = 600;
    blue3.x = 900;
    blue3.y = 600;
    blue4.x = 1000;
    blue4.y = 100;

    bounceoffs();
   
    blue1.visible = false;
    blue2.visible = false;
    blue3.visible = false;
    blue4.visible = false;

  }

}
*/
/*
function Left(){
  pacman.changeAnimation("movingLeft",movingLeft);
  pacman.x = pacman.x-10
}
function Right(){
  pacman.changeAnimation("movingRight",movingRight);
  pacman.x = pacman.x+10
}
function Up(){
  pacman.changeAnimation("movingUp",movingUp);
  pacman.y = pacman.y-10
}
function Down(){
  pacman.changeAnimation("movingDown",movingDown);
  pacman.y = pacman.y+10
}
*/
function bounceoffs(){
  
  pacman.collide(leftBound);
  pacman.collide(rightBound);
  pacman.collide(topBound);
  pacman.collide(bottomBound);

  ghost1.bounceOff(leftBound);
  ghost1.bounceOff(rightBound);
  ghost1.bounceOff(topBound);
  ghost1.bounceOff(bottomBound);

  ghost2.bounceOff(leftBound);
  ghost2.bounceOff(rightBound);
  ghost2.bounceOff(topBound);
  ghost2.bounceOff(bottomBound);

  ghost3.bounceOff(leftBound);
  ghost3.bounceOff(rightBound);
  ghost3.bounceOff(topBound);
  ghost3.bounceOff(bottomBound);

  ghost4.bounceOff(leftBound);
  ghost4.bounceOff(rightBound);
  ghost4.bounceOff(topBound);
  ghost4.bounceOff(bottomBound);
  
  blue1.bounceOff(leftBound);
  blue1.bounceOff(rightBound);
  blue1.bounceOff(topBound);
  blue1.bounceOff(bottomBound);

  blue2.bounceOff(leftBound);
  blue2.bounceOff(rightBound);
  blue2.bounceOff(topBound);
  blue2.bounceOff(bottomBound);

  blue3.bounceOff(leftBound);
  blue3.bounceOff(rightBound);
  blue3.bounceOff(topBound);
  blue3.bounceOff(bottomBound);

  blue4.bounceOff(leftBound);
  blue4.bounceOff(rightBound);
  blue4.bounceOff(topBound);
  blue4.bounceOff(bottomBound);
  
  pacman.collide(s11);
  pacman.collide(s12);
  pacman.collide(s13);
  pacman.collide(s14);
  
  pacman.collide(s21);
  pacman.collide(s22);
  pacman.collide(s23);
  pacman.collide(s24);
  pacman.collide(s25);

  pacman.collide(s31);
  pacman.collide(s32);
  pacman.collide(s33);
  pacman.collide(s34);
  
  pacman.collide(s41);
  pacman.collide(s42);
  pacman.collide(s43);
  pacman.collide(s44);
  pacman.collide(s45);
  pacman.collide(s46);
  
  pacman.collide(s51);
  pacman.collide(s52);
  pacman.collide(s53);
  pacman.collide(s54);
  pacman.collide(s55);
  pacman.collide(s56);
  pacman.collide(s57);
  pacman.collide(s58);

  ghost1.bounceOff(s11);
  ghost1.bounceOff(s12);
  ghost1.bounceOff(s13);
  ghost1.bounceOff(s14);    
  ghost1.bounceOff(s21);
  ghost1.bounceOff(s22);
  ghost1.bounceOff(s23);
  ghost1.bounceOff(s24);
  ghost1.bounceOff(s25);
  ghost1.bounceOff(s31);
  ghost1.bounceOff(s32);
  ghost1.bounceOff(s33);
  ghost1.bounceOff(s34);    
  ghost1.bounceOff(s41);
  ghost1.bounceOff(s42);
  ghost1.bounceOff(s43);
  ghost1.bounceOff(s44);
  ghost1.bounceOff(s45);
  ghost1.bounceOff(s46);    
  ghost1.bounceOff(s51);
  ghost1.bounceOff(s52);
  ghost1.bounceOff(s53);
  ghost1.bounceOff(s54);
  ghost1.bounceOff(s55);
  ghost1.bounceOff(s56);
  ghost1.bounceOff(s57);
  ghost1.bounceOff(s58);
  
  ghost2.bounceOff(s11);
  ghost1.bounceOff(s12);
  ghost2.bounceOff(s13);
  ghost2.bounceOff(s14);    
  ghost2.bounceOff(s21);
  ghost2.bounceOff(s22);
  ghost2.bounceOff(s23);
  ghost2.bounceOff(s24);
  ghost2.bounceOff(s25);
  ghost2.bounceOff(s31);
  ghost2.bounceOff(s32);
  ghost2.bounceOff(s33);
  ghost2.bounceOff(s34);    
  ghost2.bounceOff(s41);
  ghost2.bounceOff(s42);
  ghost2.bounceOff(s43);
  ghost2.bounceOff(s44);
  ghost2.bounceOff(s45);
  ghost2.bounceOff(s46);    
  ghost2.bounceOff(s51);
  ghost2.bounceOff(s52);
  ghost2.bounceOff(s53);
  ghost2.bounceOff(s54);
  ghost2.bounceOff(s55);
  ghost2.bounceOff(s56);
  ghost2.bounceOff(s57);
  ghost2.bounceOff(s58);
  
  ghost3.bounceOff(s11);
  ghost3.bounceOff(s12);
  ghost3.bounceOff(s13);
  ghost3.bounceOff(s14);    
  ghost3.bounceOff(s21);
  ghost3.bounceOff(s22);
  ghost3.bounceOff(s23);
  ghost3.bounceOff(s24);
  ghost3.bounceOff(s25);
  ghost3.bounceOff(s31);
  ghost3.bounceOff(s32);
  ghost3.bounceOff(s33);
  ghost3.bounceOff(s34);    
  ghost3.bounceOff(s41);
  ghost3.bounceOff(s42);
  ghost3.bounceOff(s43);
  ghost3.bounceOff(s44);
  ghost3.bounceOff(s45);
  ghost3.bounceOff(s46);    
  ghost3.bounceOff(s51);
  ghost3.bounceOff(s52);
  ghost3.bounceOff(s53);
  ghost3.bounceOff(s54);
  ghost3.bounceOff(s55);
  ghost3.bounceOff(s56);
  ghost3.bounceOff(s57);
  ghost3.bounceOff(s58);
      
  ghost4.bounceOff(s11);
  ghost4.bounceOff(s12);
  ghost4.bounceOff(s13);
  ghost4.bounceOff(s14);    
  ghost4.bounceOff(s21);
  ghost4.bounceOff(s22);
  ghost4.bounceOff(s23);
  ghost4.bounceOff(s24);
  ghost4.bounceOff(s25);
  ghost4.bounceOff(s31);
  ghost4.bounceOff(s32);
  ghost4.bounceOff(s33);
  ghost4.bounceOff(s34);    
  ghost4.bounceOff(s41);
  ghost4.bounceOff(s42);
  ghost4.bounceOff(s43);
  ghost4.bounceOff(s44);
  ghost4.bounceOff(s45);
  ghost4.bounceOff(s46);    
  ghost4.bounceOff(s51);
  ghost4.bounceOff(s52);
  ghost4.bounceOff(s53);
  ghost4.bounceOff(s54);
  ghost4.bounceOff(s55);
  ghost4.bounceOff(s56);
  ghost4.bounceOff(s57);
  ghost4.bounceOff(s58);

  blue1.bounceOff(s11);
  blue1.bounceOff(s12);
  blue1.bounceOff(s13);
  blue1.bounceOff(s14);    
  blue1.bounceOff(s21);
  blue1.bounceOff(s22);
  blue1.bounceOff(s23);
  blue1.bounceOff(s24);
  blue1.bounceOff(s25);
  blue1.bounceOff(s31);
  blue1.bounceOff(s32);
  blue1.bounceOff(s33);
  blue1.bounceOff(s34);    
  blue1.bounceOff(s41);
  blue1.bounceOff(s42);
  blue1.bounceOff(s43);
  blue1.bounceOff(s44);
  blue1.bounceOff(s45);
  blue1.bounceOff(s46);    
  blue1.bounceOff(s51);
  blue1.bounceOff(s52);
  blue1.bounceOff(s53);
  blue1.bounceOff(s54);
  blue1.bounceOff(s55);
  blue1.bounceOff(s56);
  blue1.bounceOff(s57);
  blue1.bounceOff(s58);
  
  blue2.bounceOff(s11);
  blue2.bounceOff(s12);
  blue2.bounceOff(s13);
  blue2.bounceOff(s14);    
  blue2.bounceOff(s21);
  blue2.bounceOff(s22);
  blue2.bounceOff(s23);
  blue2.bounceOff(s24);
  blue2.bounceOff(s25);
  blue2.bounceOff(s31);
  blue2.bounceOff(s32);
  blue2.bounceOff(s33);
  blue2.bounceOff(s34);    
  blue2.bounceOff(s41);
  blue2.bounceOff(s42);
  blue2.bounceOff(s43);
  blue2.bounceOff(s44);
  blue2.bounceOff(s45);
  blue2.bounceOff(s46);    
  blue2.bounceOff(s51);
  blue2.bounceOff(s52);
  blue2.bounceOff(s53);
  blue2.bounceOff(s54);
  blue2.bounceOff(s55);
  blue2.bounceOff(s56);
  blue2.bounceOff(s57);
  blue2.bounceOff(s58);
  
  blue3.bounceOff(s11);
  blue3.bounceOff(s12);
  blue3.bounceOff(s13);
  blue3.bounceOff(s14);    
  blue3.bounceOff(s21);
  blue3.bounceOff(s22);
  blue3.bounceOff(s23);
  blue3.bounceOff(s24);
  blue3.bounceOff(s25);
  blue3.bounceOff(s31);
  blue3.bounceOff(s32);
  blue3.bounceOff(s33);
  blue3.bounceOff(s34);    
  blue3.bounceOff(s41);
  blue3.bounceOff(s42);
  blue3.bounceOff(s43);
  blue3.bounceOff(s44);
  blue3.bounceOff(s45);
  blue3.bounceOff(s46);    
  blue3.bounceOff(s51);
  blue3.bounceOff(s52);
  blue3.bounceOff(s53);
  blue3.bounceOff(s54);
  blue3.bounceOff(s55);
  blue3.bounceOff(s56);
  blue3.bounceOff(s57);
  blue3.bounceOff(s58);
      
  blue4.bounceOff(s11);
  blue4.bounceOff(s12);
  blue4.bounceOff(s13);
  blue4.bounceOff(s14);    
  blue4.bounceOff(s21);
  blue4.bounceOff(s22);
  blue4.bounceOff(s23);
  blue4.bounceOff(s24);
  blue4.bounceOff(s25);
  blue4.bounceOff(s31);
  blue4.bounceOff(s32);
  blue4.bounceOff(s33);
  blue4.bounceOff(s34);    
  blue4.bounceOff(s41);
  blue4.bounceOff(s42);
  blue4.bounceOff(s43);
  blue4.bounceOff(s44);
  blue4.bounceOff(s45);
  blue4.bounceOff(s46);    
  blue4.bounceOff(s51);
  blue4.bounceOff(s52);
  blue4.bounceOff(s53);
  blue4.bounceOff(s54);
  blue4.bounceOff(s55);
  blue4.bounceOff(s56);
  blue4.bounceOff(s57);
  blue4.bounceOff(s58);

}

function pacmancollides(){
      
  if(pacman.isTouching(c11)){
    c11.destroy();
    score = score+10
  }
  if(pacman.isTouching(c12)){
    c12.destroy();
    score = score+10
  }
  if(pacman.isTouching(c13)){
    c13.destroy();
    score = score+10
  }
  if(pacman.isTouching(c14)){
    c14.destroy();
    score = score+10
  }
  if(pacman.isTouching(c15)){
    c15.destroy();
    score = score+10
  }
  if(pacman.isTouching(c16)){
    c16.destroy();
    score = score+10
  }
  if(pacman.isTouching(c17)){
    c17.destroy();
    score = score+10
  }
  if(pacman.isTouching(c18)){
    c18.destroy();
    score = score+10
  }
  if(pacman.isTouching(c19)){
    c19.destroy();
    score = score+10
  }
  if(pacman.isTouching(c110)){
    c110.destroy();
    score = score+10
  }
  if(pacman.isTouching(c111)){
    c111.destroy();
    score = score+10
  }
  if(pacman.isTouching(c112)){
    c112.destroy();
    score = score+10
  }
  if(pacman.isTouching(c113)){
    c113.destroy();
    score = score+10
  }
  if(pacman.isTouching(c114)){
    c114.destroy();
    score = score+10
  }
  if(pacman.isTouching(c115)){
    c115.destroy();
    score = score+10
  }
  if(pacman.isTouching(c116)){
    c116.destroy();
    score = score+10
  }
  if(pacman.isTouching(c117)){
    c117.destroy();
    score = score+10
  }
  if(pacman.isTouching(c118)){
    c118.destroy();
    score = score+10
  }
  if(pacman.isTouching(c119)){
    c119.destroy();
    score = score+10
  }
  if(pacman.isTouching(c120)){
    c120.destroy();
    score = score+10
  }
  
  if(pacman.isTouching(c21)){
    c21.destroy();
    score = score+10
  }
  if(pacman.isTouching(c22)){
    c22.destroy();
    score = score+10
  }
  if(pacman.isTouching(c23)){
    c23.destroy();
    score = score+10
  }
  if(pacman.isTouching(c24)){
    c24.destroy();
    score = score+10
  }
  if(pacman.isTouching(c25)){
    c25.destroy();
    score = score+10
  }
  if(pacman.isTouching(c26)){
    c26.destroy();
    score = score+10
  }
  if(pacman.isTouching(c27)){
    c27.destroy();
    score = score+10
  }
  if(pacman.isTouching(c28)){
    c28.destroy();
    score = score+10
  }
  if(pacman.isTouching(c29)){
    c29.destroy();
    score = score+10
  }
  if(pacman.isTouching(c210)){
    c210.destroy();
    score = score+10
  }
  if(pacman.isTouching(c211)){
    c211.destroy();
    score = score+10
  }
  if(pacman.isTouching(c212)){
    c212.destroy();
    score = score+10
  }
  if(pacman.isTouching(c213)){
    c213.destroy();
    score = score+10
  }
  if(pacman.isTouching(c214)){
    c214.destroy();
    score = score+10
  }
  if(pacman.isTouching(c215)){
    c215.destroy();
    score = score+10
  }
  if(pacman.isTouching(c216)){
    c216.destroy();
    score = score+10
  }
  if(pacman.isTouching(c217)){
    c217.destroy();
    score = score+10
  }
  if(pacman.isTouching(c218)){
    c218.destroy();
    score = score+10
  }
  if(pacman.isTouching(c219)){
    c219.destroy();
    score = score+10
  }
  if(pacman.isTouching(c220)){
    c220.destroy();
    score = score+10
  }
  if(pacman.isTouching(c221)){
    c221.destroy();
    score = score+10
  }
  if(pacman.isTouching(c222)){
    c222.destroy();
    score = score+10
  }
  if(pacman.isTouching(c223)){
    c223.destroy();
    score = score+10
  }
  if(pacman.isTouching(c224)){
    c224.destroy();
    score = score+10
  }

  if(pacman.isTouching(c31)){
    c31.destroy();
    score = score+10
  }
  if(pacman.isTouching(c32)){
    c32.destroy();
    score = score+10
  }
  if(pacman.isTouching(c33)){
    c33.destroy();
    score = score+10
  }
  if(pacman.isTouching(c34)){
    c34.destroy();
    score = score+10
  }
  if(pacman.isTouching(c35)){
    c35.destroy();
    score = score+10
  }
  if(pacman.isTouching(c36)){
    c36.destroy();
    score = score+10
  }
  if(pacman.isTouching(c37)){
    c37.destroy();
    score = score+10
  }
  if(pacman.isTouching(c38)){
    c38.destroy();
    score = score+10
  }
  if(pacman.isTouching(c39)){
    c39.destroy();
    score = score+10
  }
  if(pacman.isTouching(c310)){
    c310.destroy();
    score = score+10
  }
  if(pacman.isTouching(c311)){
    c311.destroy();
    score = score+10
  }
  if(pacman.isTouching(c312)){
    c312.destroy();
    score = score+10
  }
  if(pacman.isTouching(c313)){
    c313.destroy();
    score = score+10
  }
  if(pacman.isTouching(c314)){
    c314.destroy();
    score = score+10
  }
  if(pacman.isTouching(c315)){
    c315.destroy();
    score = score+10
  }
  if(pacman.isTouching(c316)){
    c316.destroy();
    score = score+10
  }
  if(pacman.isTouching(c317)){
    c317.destroy();
    score = score+10
  }
  if(pacman.isTouching(c318)){
    c318.destroy();
    score = score+10
  }
  if(pacman.isTouching(c319)){
    c319.destroy();
    score = score+10
  }
  if(pacman.isTouching(c320)){
    c320.destroy();
    score = score+10
  }
  if(pacman.isTouching(c321)){
    c321.destroy();
    score = score+10
  }
  if(pacman.isTouching(c322)){
    c322.destroy();
    score = score+10
  }
  if(pacman.isTouching(c323)){
    c323.destroy();
    score = score+10
  }
  if(pacman.isTouching(c324)){
    c324.destroy();
    score = score+10
  }
  if(pacman.isTouching(c325)){
    c325.destroy();
    score = score+10
  }
  if(pacman.isTouching(c326)){
    c326.destroy();
    score = score+10
  }
  if(pacman.isTouching(c327)){
    c327.destroy();
    score = score+10
  }
  if(pacman.isTouching(c328)){
    c328.destroy();
    score = score+10
  }
  
  if(pacman.isTouching(c41)){
    c41.destroy();
    score = score+10
  }
  if(pacman.isTouching(c42)){
    c42.destroy();
    score = score+10
  }
  if(pacman.isTouching(c43)){
    c43.destroy();
    score = score+10
  }
  if(pacman.isTouching(c44)){
    c44.destroy();
    score = score+10
  }
  if(pacman.isTouching(c45)){
    c45.destroy();
    score = score+10
  }
  if(pacman.isTouching(c46)){
    c46.destroy();
    score = score+10
  }
  if(pacman.isTouching(c47)){
    c47.destroy();
    score = score+10
  }
  if(pacman.isTouching(c48)){
    c48.destroy();
    score = score+10
  }
  if(pacman.isTouching(c49)){
    c49.destroy();
    score = score+10
  }
  if(pacman.isTouching(c410)){
    c410.destroy();
    score = score+10
  }
  if(pacman.isTouching(c411)){
    c411.destroy();
    score = score+10
  }
  if(pacman.isTouching(c412)){
    c412.destroy();
    score = score+10
  }
  if(pacman.isTouching(c413)){
    c413.destroy();
    score = score+10
  }
  if(pacman.isTouching(c414)){
    c414.destroy();
    score = score+10
  }
  if(pacman.isTouching(c415)){
    c415.destroy();
    score = score+10
  }
  if(pacman.isTouching(c416)){
    c416.destroy();
    score = score+10
  }
  if(pacman.isTouching(c417)){
    c417.destroy();
    score = score+10
  }
  if(pacman.isTouching(c418)){
    c418.destroy();
    score = score+10
  }
  if(pacman.isTouching(c419)){
    c419.destroy();
    score = score+10
  }
  if(pacman.isTouching(c420)){
    c420.destroy();
    score = score+10
  }
  if(pacman.isTouching(c421)){
    c421.destroy();
    score = score+10
  }
  if(pacman.isTouching(c422)){
    c422.destroy();
    score = score+10
  }
  if(pacman.isTouching(c423)){
    c423.destroy();
    score = score+10
  }
  if(pacman.isTouching(c424)){
    c424.destroy();
    score = score+10
  }
      
  if(pacman.isTouching(c51)){
    c51.destroy();
    score = score+10
  }
  if(pacman.isTouching(c52)){
    c52.destroy();
    score = score+10
  }
  if(pacman.isTouching(c53)){
    c53.destroy();
    score = score+10
  }
  if(pacman.isTouching(c54)){
    c54.destroy();
    score = score+10
  }
  if(pacman.isTouching(c55)){
    c55.destroy();
    score = score+10
  }
  if(pacman.isTouching(c56)){
    c56.destroy();
    score = score+10
  }
  if(pacman.isTouching(c57)){
    c57.destroy();
    score = score+10
  }
  if(pacman.isTouching(c58)){
    c58.destroy();
    score = score+10
  }
  if(pacman.isTouching(c59)){
    c59.destroy();
    score = score+10
  }
  if(pacman.isTouching(c510)){
    c510.destroy();
    score = score+10
  }
  if(pacman.isTouching(c511)){
    c511.destroy();
    score = score+10
  }
  if(pacman.isTouching(c512)){
    c512.destroy();
    score = score+10
  }
  if(pacman.isTouching(c513)){
    c513.destroy();
    score = score+10
  }
  if(pacman.isTouching(c514)){
    c514.destroy();
    score = score+10
  }
  if(pacman.isTouching(c515)){
    c515.destroy();
    score = score+10
  }
  if(pacman.isTouching(c516)){
    c516.destroy();
    score = score+10
  }
  if(pacman.isTouching(c517)){
    c517.destroy();
    score = score+10
  }
  if(pacman.isTouching(c518)){
    c518.destroy();
    score = score+10
  }
  if(pacman.isTouching(c519)){
    c519.destroy();
    score = score+10
  }
  if(pacman.isTouching(c520)){
    c520.destroy()
    score = score+10
  }
  if(pacman.isTouching(c521)){
    c521.destroy();
    score = score+10
  }
  if(pacman.isTouching(c522)){
    c522.destroy();
    score = score+10
  }
  if(pacman.isTouching(c523)){
    c523.destroy();
    score = score+10
  }
  if(pacman.isTouching(c524)){
    c524.destroy();
    score = score+10
  }
          
  if(pacman.isTouching(c61)){
    c61.destroy();
    score = score+10
  }
  if(pacman.isTouching(c62)){
    c62.destroy();
    score = score+10
  }
  if(pacman.isTouching(c63)){
    c63.destroy();
    score = score+10
  }
  if(pacman.isTouching(c64)){
    c64.destroy();
    score = score+10
  }
  if(pacman.isTouching(c65)){
    c65.destroy();
    score = score+10
  }
  if(pacman.isTouching(c66)){
    c66.destroy();
    score = score+10
  }
  if(pacman.isTouching(c67)){
    c67.destroy();
    score = score+10
  }
  if(pacman.isTouching(c68)){
    c68.destroy();
    score = score+10
  }
  if(pacman.isTouching(c69)){
    c69.destroy();
    score = score+10
  }
  if(pacman.isTouching(c610)){
    c610.destroy();
    score = score+10
  }
  if(pacman.isTouching(c71)){
    c71.destroy();
    score = score+10
  }
  if(pacman.isTouching(c72)){
    c72.destroy();
    score = score+10
  }
  if(pacman.isTouching(c73)){
    c73.destroy();
    score = score+10
  }
  if(pacman.isTouching(c74)){
    c74.destroy();
    score = score+10
  }
  if(pacman.isTouching(c75)){
    c75.destroy();
    score = score+10
  }
  if(pacman.isTouching(c76)){
    c76.destroy();
    score = score+10
  }
  if(pacman.isTouching(c77)){
    c77.destroy();
    score = score+10
  }
  if(pacman.isTouching(c78)){
    c78.destroy();
    score = score+10
  }
  if(pacman.isTouching(c79)){
    c79.destroy();
    score = score+10
  }
  if(pacman.isTouching(c710)){
    c710.destroy();
    score = score+10
  }
  if(pacman.isTouching(c711)){
    c711.destroy();
    score = score+10
  }
  if(pacman.isTouching(c712)){
    c712.destroy();
    score = score+10
  }
}

