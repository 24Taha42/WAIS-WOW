let score = 0;
let game = 0; 
let question = 0; 
let choice = 0;
let questionsM = ["1. 2 + 2 = ?", "2. 7 + 5 = ?", "3. 2 + 4 = ?", "4. 10 - 9 = ?", "5. 15 + 4 = ?", "6. 2 - 0 = ?", "7. 5 + 1 = ?", "8. 2 + 3 = ?", "9. 5 - 3 = ?", "10. 12 - 3 = ?"];
let answersM = [["4", "5", "2", "3"], ["10", "9", "12", "75"],["24", "5", "6", "8"],["11", "19", "109", "2"],["19", "154", "16", "11"],["2", "20", "0", "4"], ["15", "4", "6", "3"], ["5", "1", "3", "2"], ["2", "8", "4", "9"], ["9", "4", "3", "10"]];
let questionsE = ["1. Which word is spelled correctly?", "2. Which word is spelled incorrectly?", "3. Which word comes first alphabetically?", "4. Which word comes last alphabetically?", "5. Learning your...", "6. What letter comes after Q?", "7. What letter comes before I?", "8. Which letter is lowercase?", "9. Which letter is uppercase?", "10. Which word is spelled incorrectly?"];
let answersE = [["actiun", "purple", "orang", "sed"], ["mother", "badly", "winter", "sumer"],["apple", "zebra", "lemon", "pencil"],["xylophone", "volume", "winter", "spring"],["xyz's", "abc's", "lmnop's", "hijk's"],["R", "M", "O", "L"], ["Z", "A", "H", "J"], ["O", "P", "e", "F"], ["W", "k", "a", "d"], ["student", "rainboe", "paper", "rock"]];

let Q = 0;
let A = 0; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  math = createButton("mathematics");
  math.position(windowWidth/2, windowHeight/2);
  math.mousePressed(maths);
 

  english2 = createButton("english");
  english2.position(windowWidth/2-200, windowHeight/2);
  english2.mousePressed(englishs);

  a = createButton("a");
  a.position(windowWidth/2 - 200, windowHeight/2);
  a.mousePressed(as);
  a.hide();

  b = createButton("b");
  b.position(windowWidth/2 - 200, windowHeight/2 + 30);
  b.mousePressed(bs);
  b.hide();

  c = createButton("c");
  c.position(windowWidth/2 - 200, windowHeight/2 + 60);
  c.mousePressed(cs);
  c.hide();

  d = createButton("d");
  d.position(windowWidth/2 - 200, windowHeight/2 + 90);
  d.mousePressed(ds);
  d.hide();


}

function draw() {
  if(game == 0){
    math.show();
    english2.show();
  }else{
    math.hide();
    english2.hide();
    a.show();
    b.show();
    c.show();
    d.show(); 
     if(game == 1){
      question = questionsM
       answer = answersM
    }

    if(game == 2){
      question = questionsE
      answer = answersE
  }
    text(question[Q], windowWidth/2 -20, windowHeight/4 - 100);
    a.html("a. " + answer[Q][0]);
     b.html("b. " + answer[Q][1]);
     c.html("c. " + answer[Q][2]);
     d.html("d. " + answer[Q][3]);
  }

  

}

function maths(){
  game = 1;
}


function englishs(){
  game = 2;
}

function as(){
  choice = 1;
}

function bs(){
  choice = 2;
}

function cs(){
  choice = 3;
}


function ds(){
  choice = 4;
}
