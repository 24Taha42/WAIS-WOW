let score = 0;
let game = 0; 
let question = 0; 
let choice = 0;
let questionsM = ["1. 2 + 2 = ?", "2. 7 + 5 = ?", "3. 2 + 4 = ?", "4. 10 - 9 = ?", "5. 15 + 4 = ?", "6. 2 - 0 = ?", "7. 5 + 1 = ?", "8. 2 + 3 = ?", "9. 5 - 3 = ?", "10. 12 - 3 = ?"];
let answersM = [["4", "5", "2", "3"], ["10", "9", "12", "75"],["24", "5", "6", "8"],["11", "1", "109", "2"],["19", "154", "16", "11"],["2", "20", "0", "4"], ["15", "4", "6", "3"], ["5", "1", "3", "2"], ["9", "8", "4", "2"], ["4", "9", "3", "10"]];
let questionsE = ["1. Which word is spelled correctly?", "2. Which word is spelled incorrectly?", "3. Which word comes first alphabetically?", "4. Which word comes last alphabetically?", "5. Learning your...", "6. What letter comes after Q?", "7. What letter comes before I?", "8. Which letter is lowercase?", "9. Which letter is uppercase?", "10. Which word is spelled incorrectly?"];
let answersE = [["actiun", "purple", "orang", "sed"], ["mother", "badly", "winter", "sumer"],["apple", "zebra", "lemon", "pencil"],["xylophone", "volume", "winter", "spring"],["xyz's", "abc's", "lmnop's", "hijk's"],["R", "M", "O", "L"], ["Z", "A", "H", "J"], ["O", "P", "e", "F"], ["W", "k", "a", "d"], ["student", "rainboe", "paper", "rock"]];
let questionsM2 = ["1. What number is this?: 1", "2. What number is this? 10", "3. What number is this?: 5", "4. Is 10 greater than 8?", "5. Is 5 equal to 5?", "6. What number is this?: 7", "7. Is 3 greater than 7?", "8. Is 10 less than 2?", "9. What number is this?: 8", "10. Is 10 equal to 3?"]
let answersM2 = [["One", "Eleven", "Two", "Three"], ["Six", "Ten", "One", "Zero"], ["Four", "Three", "Five", "Ten"], ["Yes", "No"], ["Yes", "No"], ["Three, Seven, Two, Nine"], ["Yes", "No"], ["Yes", "No"], ["Five", "Ten", "Six", "Eight"], ["Yes", "No"]]

let Q = 0;

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

  thiss = createButton("menu");
  thiss.position(windowWidth/2 - 100, windowHeight/2+220);
  thiss.mousePressed(next);
  thiss.hide();


}

function draw() {
  if(game == 0){
    Q=0
    math.show();
    english2.show();
    a.hide();
    b.hide();
    c.hide();
    d.hide();
    thiss.hide();
  }else{
    math.hide();
    english2.hide();
    a.show();
    b.show();
    c.show();
    d.show();
    //thiss.show();
  
     if(game == 1){
        question = questionsM;
       answer = answersM;
    }

    if(game == 2){
      question = questionsE;
      answer = answersE;
  }
    background("#a6eaff")
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
  check();
}

function bs(){
  choice = 2;
  check();
}

function cs(){
  choice = 3;
  check();
}


function ds(){
  choice = 4;
  check();
}

function check(){
  if(Q<10){
  if(game == 1){
    if(Q == 0){
      if(choice == 1){
        correct();
      }else{
        incorrect(answersM[Q][0])
      }
    }
    if(Q == 1){
      if(choice == 3){
        correct();
      }else{
        incorrect(answersM[Q][2])
      }
    }
    if(Q == 2){
      if(choice == 3){
        correct();
      }else{
        incorrect(answersM[Q][2])
      }
    }
    if(Q == 3){
      if(choice == 2){
        correct();
      }else{
        incorrect(answersM[Q][1])
      }
    }
    if(Q == 4){
      if(choice == 1){
        correct();
      }else{
        incorrect(answersM[Q][0])
      }
    }
    if(Q == 5){
      if(choice == 1){
        correct();
      }else{
        incorrect(answersM[Q][0])
      }
    }
    if(Q == 6){
      if(choice == 3){
        correct();
      }else{
        incorrect(answersM[Q][2])
      }
    }
    if(Q == 7){
      if(choice == 1){
        correct();
      }else{
        incorrect(answersM[Q][0])
      }
    }
    if(Q == 8){
      if(choice == 4){
        correct();
      }else{
        incorrect(answersM[Q][3])
      }
    }
    if(Q == 9){
      if(choice == 2){
        correct();
      }else{
        incorrect(answersM[Q][1])
      }
    }
  }

  if(game == 2){
    if(Q == 0){
      if(choice == 2){
        correct();
      }else{
        incorrect(answersE[Q][1])
      }
    }
    if(Q == 1){
      if(choice == 4){
        correct();
      }else{
        incorrect(answersE[Q][3])
      }
    }
    if(Q==2){
      if(choice == 1){
        correct();
      }else{
        incorrect(answersE[Q][0])
      }
    }
    if(Q == 3){
      if(choice == 2){
        correct();
      }else{
        incorrect(answersE[Q][1])
      }
    }
    if(Q == 4){
      if(choice==2){
        correct();
      }else{
        incorrect(answersE[Q][1])
      }
    }
    if(Q == 5){
      if(choice==1){
        correct();
      }else{
        incorrect(answersE[Q][0])
      }
    }
     if(Q == 6){
      if(choice==3){
        correct();
      }else{
        incorrect(answersE[Q][2])
      }
    }
     if(Q == 7){
      if(choice==3){
        correct();
      }else{
        incorrect(answersE[Q][2])
      }
    }
     if(Q == 8){
      if(choice==1){
        correct();
      }else{
        incorrect(answersE[Q][0])
      }
    }
     if(Q == 9){
      if(choice==2){
        correct();
      }else{
        incorrect(answersE[Q][1])
      }
    }
 
  }  

  if(game == 3){
    if(Q == 0){
      if(choice == 1){
        correct();
      }else{
        incorrect(answersM2[Q][1])
      }
    }
    if(Q == 1){
      if(choice == 2){
        correct();
      }else{
        incorrect(answersM2[Q][2])
      }
    }
    if(Q==2){
      if(choice == 3){
        correct();
      }else{
        incorrect(answersM2[Q][3])
      }
    }
    if(Q == 3){
      if(choice == 2){
        correct();
      }else{
        incorrect(answersM2[Q][2])
      }
    }
    if(Q == 4){
      if(choice == 1){
        correct();
      }else{
        incorrect(answersM2[Q][0])
      }
    }
    if(Q == 5){
      if(choice == 2){
        correct();
      }else{
        incorrect(answersM2[Q][1])
      }
    }
     if(Q == 6){
      if(choice == 2){
        correct();
      }else{
        incorrect(answersM2[Q][1])
      }
    }
     if(Q == 7){
      if(choice == 2){
        correct();
      }else{
        incorrect(answersM2[Q][1])
      }
    }
     if(Q == 8){
      if(choice == 4){
        correct();
      }else{
        incorrect(answersM2[Q][3])
      }
    }
     if(Q == 9){
      if(choice == 2){
        correct();
      }else{
        incorrect(answersM2[Q][1])
      }
    }
 
  }
  Q=Q+1;
  }else{
    background("#a6eaff")
    text("your score is " + score +  "out of 10", windowWidth/2 -20, windowHeight/4 - 100)
    thiss.show();
  }

}

function correct(){
  score = score +1;
  console.log(score)
  text("correct", windowWidth/2 -20, windowHeight/4 - 80);
}

function incorrect(word){
  text("incorrect, answer is " + word, windowWidth/2 -20, windowHeight/4 - 80)
}

function next(){
  game = 0; 
}
