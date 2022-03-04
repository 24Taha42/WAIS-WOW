let score = 0;
let game = 0; 
let question = 0; 


function setup() {
  createCanvas(windowWidth, windowHeight);
  math = createButton("mathmatics");
  math.position(windowWidth/2, windowHeight/2);
  math.mousePressed(maths);
 

  english2 = createButton("english");
  english2.position(windowWidth/2-200, windowHeight/2);
  english2.mousePressed(englishs);

  

}

function draw() {
  if(game == 0){
    math.show();
    english2.show();
  }else{
    math.hide();
    english2.hide();
    inp.show();
  }

  if(game == 1){
    
  }

  if(game == 2){
    
  }




  
}

function maths(){
  game = 1;
}


function englishs(){
  game = 2;
}
