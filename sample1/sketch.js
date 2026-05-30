function setup() {
  createCanvas(600, 400);
}
function draw() {
  background(150);
  noStroke();
  fill('#FF0000');
  rect(100, 320, 400, 20);
  fill('#FF6666');
  rect(100, 300, 400, 20);
  fill('#FF8000');
  rect(100, 280, 400, 20);
  fill('#FFA040');
  rect(100, 260, 400, 20);
  fill('#FFC080');
  rect(100, 240, 400, 20);
  fill('#FFE0C0');
  rect(100, 220, 400, 20);
  fill('#FFFFE5');
  rect(100, 200, 400, 20);
  fill('#E5FFFF');
  rect(100, 180, 400, 20);
  fill('#CCE5FF');
  rect(100, 160, 400, 20);
  fill('#99CCFF');
  rect(100, 140, 400, 20);
  fill('#66B2FF');
  rect(100, 120, 400, 20);
  fill('#0080FF');
  rect(100, 100, 400, 20);
  fill('#0060C0');
  rect(100, 80, 400, 20);
  fill('#004080');
  rect(100, 60, 400, 20);
  fill('#FF0000'); 
  arc(300, 320, 100, 100, PI, 0);
  
  //별
  stroke(255);
  strokeWeight(5);
  point(150, 80);
  point(450, 75);
  point(300, 90);
  point(220, 100);
  point(420, 100);
  
  //햇빛
  stroke('#FFCC99');
  strokeWeight(2);
  line(300, 320, 160, 300);
  line(300, 320, 200, 250); 
  line(300, 320, 240, 220);
  line(300, 320, 300, 210);
  line(300, 320, 360, 220);
  line(300, 320, 400, 250);
  line(300, 320, 430, 300);
  
  //해
  noStroke();
  fill('#FF0000'); 
  arc(300, 322, 100, 100, PI, 0);
  
  //창틀
  fill('#804000');
  rect(100, 40, 400, 20);
  rect(100, 340, 400, 20);
  rect(80, 40, 20, 320);
  rect(500, 40, 20, 320);
  
  //빛
  fill(230); 
  quad(520, 40, 600, 80, 600, 450, 520, 360);
  quad(80, 360, 520, 360, 600, 400, 200, 450);
}
