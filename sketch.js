const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, bug1,bug3,bug2;
var backgroundImg,platform;
var touch, slingshot;
var log1,log2,log3,log4,log5
var wall
var person,dot

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
    backgroundImg=loadImage("backgroundimg.png")
}

function setup(){
    var canvas = createCanvas(1400,600);
    engine = Engine.create();
    world = engine.world;
    
    
    


   

    ground = new Ground(700,height,1400,20);
   ground1=new Ground(700,0,1400,20)
   ground2=new Ground(0,700,20,1400)
   ground3=new Ground(300,700,20,1400)
   ground4=new Ground(1400,700,20,1400)

 box1 = new Box(100,320,70,70);
    box2 = new Box(50,320,70,70);
    box3 = new Box(50,240,70,70);
    box4 = new Box(50,240,70,70);
     box5 = new Box(50,160,70,70);
    box6 = new Box(110,320,70,70);
    box7 = new Box(110,320,70,70);
    box8 = new Box(110,320,70,70);
    box9 = new Box(110,320,70,70);
    box10 = new Box(100,120,70,70);
    box11 = new Box(100,120,70,70);
    box12 = new Box(100,120,70,70);
    box13 = new Box(100,120,70,70);
    box14 = new Box(100,120,70,70);
    box15 = new Box(100,120,70,70);
    box16 = new Box(100,120,70,70);
    box17 = new Box(100,120,70,70);
    box18 = new Box(100,120,70,70);
    box19 = new Box(100,120,70,70);
    box20 = new Box(100,120,70,70);
   
   //log1 = new Log(50,120,25,110);
//log2 = new Log(50,120,25,110);
    //log3 =  new Log(50,180,25,110);
    // log4 = new Log(50,120,25,110);
   // log5 = new Log(50,120,25,110);
//log6 = new Log(100,120,25,110);
//log7 = new Log(100,120,25,110);
//log8 = new Log(100,120,25,110);
//log9 = new Log(100,120,25,110);

    //slingshot = new SlingShot(log1.body,{x:100, y:400});
}

function draw(){
    
        background(backgroundImg);
        noStroke();
        textSize(25)
        fill("black")
        text("To move the blocks press Q-P and A-L press space to release ", 530,570)
        
    
    Engine.update(engine);
    strokeWeight(4);
    
    ground.display();
    ground1.display()
    ground2.display()
    ground3.display()
    ground4.display()

    box1.display();
    box2.display();
     box3.display();
    box4.display();
    box5.display();
      box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box16.display()
    box17.display()
    box18.display()
    box19.display()
    box20.display()


    //log1.display();
 //log2.display()
   //log3.display();
   //log4.display();
    //log5.display();
    // log6.display()
    // log7.display()
    // log8.display()
     //log9.display()
   
     
     
   //slingshot.display();   
   
   keyPressed()
  
   
   if(keyCode === 87 ){
     Matter.Body.setPosition(box1.body,{x:mouseX,y:mouseY})
     noStroke();
        textSize(35)
        fill("black")
      text("Using",mouseX,mouseY)
 } if(keyCode === 69 ){
     Matter.Body.setPosition(box3.body,{x:mouseX,y:mouseY})
     noStroke();
        textSize(35)
        fill("black")
      text("Using",mouseX,mouseY)
 }
 if(keyCode === 82 ){
    Matter.Body.setPosition(box4.body,{x:mouseX,y:mouseY})
    noStroke();
        textSize(35)
        fill("black")
      text("Using",mouseX,mouseY)
}if(keyCode === 84 ){
    Matter.Body.setPosition(box5.body,{x:mouseX,y:mouseY})
    noStroke();
        textSize(35)
        fill("black")
      text("Using",mouseX,mouseY)
}if(keyCode === 89 ){
    Matter.Body.setPosition(box6.body,{x:mouseX,y:mouseY})
    noStroke();
        textSize(35)
        fill("black")
      text("Using",mouseX,mouseY)
}if(keyCode === 85 ){
    Matter.Body.setPosition(box7.body,{x:mouseX,y:mouseY})
    noStroke();
        textSize(35)
        fill("black")
      text("Using",mouseX,mouseY)
}if(keyCode === 73 ){
    Matter.Body.setPosition(box8.body,{x:mouseX,y:mouseY})
    noStroke();
        textSize(35)
        fill("black")
      text("Using",mouseX,mouseY)
}if(keyCode === 79 ){
    Matter.Body.setPosition(box9.body,{x:mouseX,y:mouseY})
    noStroke();
        textSize(35)
        fill("black")
      text("Using",mouseX,mouseY)
}if(keyCode === 80 ){
    Matter.Body.setPosition(box10.body,{x:mouseX,y:mouseY})
    noStroke();
        textSize(35)
        fill("black")
      text("Using",mouseX,mouseY)
}
if(keyCode === 65 ){
    Matter.Body.setPosition(box11.body,{x:mouseX,y:mouseY})
    noStroke();
        textSize(35)
        fill("black")
      text("Using",mouseX,mouseY)
}
if(keyCode === 83 ){
    Matter.Body.setPosition(box12.body,{x:mouseX,y:mouseY})
    noStroke();
        textSize(35)
        fill("black")
      text("Using",mouseX,mouseY)
}if(keyCode === 68 ){
    Matter.Body.setPosition(box13.body,{x:mouseX,y:mouseY})
    noStroke();
        textSize(35)
        fill("black")
      text("Using",mouseX,mouseY)
}if(keyCode === 70 ){
    Matter.Body.setPosition(box15.body,{x:mouseX,y:mouseY})
    noStroke();
        textSize(35)
        fill("black")
      text("Using",mouseX,mouseY)
}if(keyCode === 71 ){
    Matter.Body.setPosition(box16.body,{x:mouseX,y:mouseY})
    noStroke();
        textSize(35)
        fill("black")
      text("Using",mouseX,mouseY)
}if(keyCode === 72 ){
    Matter.Body.setPosition(box17.body,{x:mouseX,y:mouseY})
    noStroke();
        textSize(35)
        fill("black")
      text("Using",mouseX,mouseY)
}
if(keyCode === 74 ){
    Matter.Body.setPosition(box18.body,{x:mouseX,y:mouseY})
    noStroke();
        textSize(35)
        fill("black")
      text("Using",mouseX,mouseY)
}
if(keyCode === 75 ){
    Matter.Body.setPosition(box19.body,{x:mouseX,y:mouseY})
    noStroke();
        textSize(35)
        fill("black")
      text("Using",mouseX,mouseY)
}
if(keyCode === 76 ){
    Matter.Body.setPosition(box20.body,{x:mouseX,y:mouseY})
    noStroke();
        textSize(35)
        fill("black")
      text("Using",mouseX,mouseY)
}


  
   

  
}




 
function keyPressed(){
    if(keyCode === 81 ){
      
        Matter.Body.setPosition(box2.body,{x:mouseX,y:mouseY})
        noStroke();
        textSize(35)
        fill("black")
      text("Using",mouseX,mouseY)
      
    
    }
}

 
  

  