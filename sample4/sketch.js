function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(150);
  
  // 하늘
  days = color(0, 128, 255);
  sunset = color(255, 140, 20);
  night = color(50, 45, 120);
  let timetime = (sin(frameCount * 0.01) + 1) / 2; 
  let top = lerpColor(days, night, timetime);
  let bottom = lerpColor(sunset, days, timetime);
  
  noStroke();
  for (let y = 60; y <= 340; y += 5) {
    let inter = map(y, 60, 340, 0, 1);
    let colors = lerpColor(top, bottom, inter);
    fill(colors);
    rect(100, y, 400, 5);
  }

  // 별
  let star = map(timetime, 0.4, 0.8, 0, 255);
  stroke(255, star);
  let starSize = 4.5 + sin(frameCount * 0.1) * 2.5; 
  strokeWeight(starSize);
  point(150, 90); 
  point(450, 80); 
  point(300, 80); 
  point(210, 128);
  point(420, 125); 
  point(310, 110); 
  point(230, 90); 
  point(370, 100);

  // 햇살, 해
  let sunsize = map(timetime, 0.2, 0.7, 1, 0, true);
  let sun = map(timetime, 0.3, 0.7, 255, 0, true);  
  
  noStroke();
  let shine = sun * 0.12;

  fill(255, 204, 153, shine);
  arc(300, 340, 320 * sunsize, 320 * sunsize, PI, 0);
  fill(255, 204, 153, shine * 1.5);
  arc(300, 340, 220 * sunsize, 220 * sunsize, PI, 0);
  fill(255, 204, 153, shine * 2.0);
  arc(300, 340, 150 * sunsize, 150 * sunsize, PI, 0);

  noStroke();
  fill(255, 40, 0, sun); 
  arc(300, 340, 110 * sunsize, 110 * sunsize, PI, 0);

  //창틀
  fill('#804000');
  rect(100, 40, 400, 20); rect(100, 340, 400, 20);
  rect(80, 40, 20, 320); rect(500, 40, 20, 320);

  //창문 빛
  fill(210); 
  quad(520, 40, 600, 80, 600, 450, 520, 360);
  quad(80, 360, 520, 360, 600, 400, 200, 450);
}

  // gif 저장
  function keyPressed() {
  if (key === 's') 
    saveGif('mySketch', 10);
  }