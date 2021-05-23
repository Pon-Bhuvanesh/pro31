var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=330;
var score =0;
function setup() {
  createCanvas(900, 750);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=130; k = k + 95) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 13, divisionHeight));
  }
  //create division objects
  for (var k = 0; k <=200; k = k + 190) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 13, divisionHeight));
  }
  //create division objects
  for (var k = 0; k <=280; k = k + 280) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 13, divisionHeight));
  }
  //create division objects
  for (var k = 0; k <=380; k = k + 368) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 13, divisionHeight));
  }
  //create division objects
  for (var k = 0; k <=480; k = k + 450) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 13, divisionHeight));
  }
  //create division objects
  for (var k = 0; k <=580; k = k + 538) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 13, divisionHeight));
  }
  //create division objects
  for (var k = 0; k <=680; k = k + 628) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 13, divisionHeight));
  }
  //create division objects
  for (var k = 0; k <=780; k = k + 720) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 13, divisionHeight));
  }
  //create division objects
  for (var k = 0; k <=880; k = k + 810) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 13, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,235));
  }

  //create 4nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,178));
  }

  //create 3rd row of plinko objects
  for (var j = 80; j <=width; j=j+50) 
  {
    plinkos.push(new Plinko(j,110));
  }
  
  //create 1th row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,50));
  }

  //create 6nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,385));
  }

  //create 7rd row of plinko objects
  for (var j = 80; j <=width; j=j+50) 
  {
    plinkos.push(new Plinko(j,338));
  }
  
  //create 8th row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,285));
  }


  
    
}
function draw() {
  background("lightblue");
  textSize(35)
 text("Score : "+score,350,35);
 text("😎WELCOME TO S.PON BHUVANESH GAME😎",90,160);
 text("LIKE/SHARE(all my games)",250,220);
 textSize(35)
 text("😎Are you lucky or not😎",270,270);
 textSize(50)
 
 text("🤴",15,550);
 textSize(50)
 text("🤴",825,550);
 textSize(50)
 text("😖",378,660);
 textSize(50)
 text("😖",465,660);
 textSize(50)
 text("😉",290,700);
 textSize(50)
 text("😉",550,700);
 textSize(50)
 text("🤗",200,660);
 textSize(50)
 text("🤗",640,660);
 textSize(50)
 text("🤩",730,600);
 textSize(50)
 text("🤩",105,600);

 
 Engine.update(engine);
  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(frameCount%60===0){
    particles .push(new Particle(random(width/2-30, width/2+30), 10,10));
    score++;
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
  }



