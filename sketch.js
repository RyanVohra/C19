
var  runner, runner_running, runner_collided;
var background1
var ground, invisibleGround, groundImage;





function preload(){
runner_running = loadAnimation("runner gif-1.png.png","runner gif-2.png.png","runner gif-3.png.png","runner gif-4.png.png","runner gif-5.png.png");
background1= loadImage("bg1.jpg");
groundImage=loadImage("ground2.png")
}

function setup() {
    createCanvas(600,300)
    runner= createSprite(50,200,20,50);
    runner.addAnimation("running",runner_running);
    runner.scale= 0.17

    


    invisibleGround = createSprite(200,320,800,10);
  invisibleGround.visible = true;
  
    

    
}

function draw() {
    background(background1)
    background1.velocityX=-3




   imageMode(CENTER)
   




   if(keyDown("space")&& runner.y >= 100) {
    runner.velocityY = -12;
   }


   
  
 drawSprites()
}
funcyi