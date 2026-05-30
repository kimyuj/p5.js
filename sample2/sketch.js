function setup() {
  createCanvas(600, 400);
  background('#E0FFE0');

  //뒷머리
  fill('#663300');
  noStroke();
  arc(300, 240, 260, 400, -3.8, 0.69, CHORD);

  //몸
  fill(150)
  rect(160, 350, 280, 300, 20);

  //얼굴
  fill('#FFE5CC');
  noStroke();
  ellipse(300, 200, 180, 220);
  rect(275, 300, 50, 50, 0);
  triangle(275, 350, 326, 350, 300, 390);

  
  //앞머리
  fill('#663300');
  arc(230, 120, 100, 100, -0.5, 2, CHORD); 
  arc(370, 120, 100, 100, 1, 3.5, CHORD);
  rect(270, 80, 55, 88, 0);

  fill('#663300');
  beginShape();
  vertex(200, 200);
  bezierVertex(200, 200, 180, 50, 300, 60)
  endShape(CLOSE);

  beginShape();
  vertex(400, 200);
  bezierVertex(400, -20, 180, 80, 270, 80)
  endShape(CLOSE);


  //눈
  noFill();             
  stroke('#663300');    
  strokeWeight(3);      
  arc(255, 185, 50, 30, 3.6, 5.8, OPEN);
  arc(340, 185, 50, 30, 3.6, 5.8, OPEN);
  
  noFill();             
  stroke(0);    
  strokeWeight(3);
  arc(255, 205, 40, 30, 3.6, 5.8, OPEN);
  arc(340, 205, 40, 30, 3.6, 5.8, OPEN);
  
  fill(250);
  noStroke();
  ellipse(255, 201, 40, 18); 
  ellipse(340, 201, 40, 18);
  
  fill(0);
  ellipse(255, 201, 20, 19); 
  ellipse(340, 201, 20, 19);
  
  fill(250);
  ellipse(260, 196, 5, 5); 
  ellipse(345, 196, 5, 5);

  
  //코
  noFill();
  stroke(10);
  strokeWeight(2);
  line(300, 200, 310, 235);
  line(295, 235, 310, 235);

  
  //입         
  stroke('#FF9999');
  strokeWeight(3);
  arc(300, 265, 40, 20, 0, 3, OPEN);
  

  //볼터치
  fill('#FFCCCC');
  noStroke();
  ellipse(240, 230, 30, 20); 
  ellipse(360, 230, 30, 20);

}