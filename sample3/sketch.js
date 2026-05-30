let LeftEar = false;
let RightEar = false;
let Eyelashes = false;
let Smile = false;

function setup() {
  createCanvas(600, 400);
}

function draw(){
  let SpecialMode = (LeftEar && RightEar && Eyelashes && Smile);
  
  if (SpecialMode) {
  let x = random(width);
  let y = random(height);
  fill(random(200, 255), random(100, 200), random(150, 255));
  noStroke();
  beginShape();
  vertex(x, y); 
  bezierVertex(x - 15, y - 15, x - 30, y + 15, x, y + 30);
  bezierVertex(x + 30, y + 15, x + 15, y - 15, x, y);
  endShape(CLOSE);
  } else {
  background('#E0FFE0');
  }
  
  //뒷머리
  fill('#663300');
  noStroke();
  arc(300, 240, 260, 400, -3.8, 0.69, CHORD);
  
  //몸
  fill(150)
  rect(160, 350, 280, 300, 20);
  
  //귀(인터랙션)
  if (LeftEar) {
    fill('#FFE0C0');
    noStroke();
    ellipse(210, 210, 50, 80);
    stroke('255');
    strokeWeight(14);
    point(204, 250);
  }
  if (RightEar) {
    fill('#FFE0C0');
    noStroke();
    ellipse(390, 210, 50, 80);
    stroke('255');
    strokeWeight(14);
    point(396, 250);
  }
  
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
  
  //속눈썹
  if (Eyelashes) {
    stroke(0);
    strokeWeight(1);
    //왼쪽 속눈썹
    line(240, 195, 235, 187); 
    line(245, 190, 241, 183); 
    line(253, 190, 250, 183);
    //오른쪽 속눈썹
    if (!SpecialMode) {
      line(355, 195, 363, 188); 
      line(350, 193, 356, 184); 
      line(343, 191, 348, 182);
    }
  }
  
  //눈
  if (SpecialMode) {
    //왼쪽 눈
    noFill(); 
    stroke('#663300'); 
    strokeWeight(3);
    arc(255, 185, 50, 30, 3.6, 5.8, OPEN);
    arc(340, 185, 50, 30, 3.6, 5.8, OPEN);
    stroke(0); 
    arc(255, 205, 40, 30, 3.6, 5.8, OPEN);
    fill(250); 
    noStroke(); 
    ellipse(255, 201, 40, 18);
    fill(0); 
    ellipse(255, 201, 20, 19);
    fill(250); 
    ellipse(260, 196, 5, 5);
    //오른쪽 눈
    stroke(0);
    strokeWeight(2);
    noFill();
    line(355, 195, 325, 201);
    line(325, 201, 355, 210);
  } else {
    noFill(); 
    stroke('#663300'); 
    strokeWeight(3);
    arc(255, 185, 50, 30, 3.6, 5.8, OPEN);
    arc(340, 185, 50, 30, 3.6, 5.8, OPEN);
    stroke(0)
    arc(255, 205, 40, 30, 3.6, 5.8, OPEN);
    arc(340, 205, 40, 30, 3.6, 5.8, OPEN);
    fill(250); noStroke();
    ellipse(255, 201, 40, 18); ellipse(340, 201, 40, 18);
    fill(0);
    ellipse(255, 201, 20, 19); ellipse(340, 201, 20, 19);
    fill(250);
    ellipse(260, 196, 5, 5); ellipse(345, 196, 5, 5);
  }
  
  //코
  noFill();
  stroke(10);
  strokeWeight(2);
  line(300, 200, 310, 235);
  line(295, 235, 310, 235);
  
  //입
  if (Smile) {
    // 마우스 클릭 시: 빨갛고 도톰한 입술
    fill('#FF3333'); // 진한 빨강
    noStroke(); // 테두리도 약간 진하게
    arc(300, 260, 50, 40, 0, PI, CHORD);
  } else {
    // 평소 상태: 연한 핑크색 선
    noFill();
    stroke('#FF9999'); 
    strokeWeight(3);
    arc(300, 265, 40, 20, 0, 3, OPEN);
  }
  
  //볼터치
  fill('#FFCCCC');
  noStroke();
  ellipse(240, 230, 30, 20); 
  ellipse(360, 230, 30, 20);
}

//이벤트 함수
  function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    LeftEar = !LeftEar; // true면 false로, false면 true로 반전
  } 
  if (keyCode === RIGHT_ARROW) {
    RightEar = !RightEar;
  }
  if (key === 's') {
   saveGif('mySketch', 7);
    }
}

  function mousePressed() {
  Eyelashes = !Eyelashes;
  Smile = !Smile;
}

/*********************************************
  1. mouse:
	- 마우스 버튼 클릭시 속눈썹이 생기고 입 모양이 미소로 바뀜. 재클릭 시 원 상태로 돌아옴.
        
  2. keyboard:
	- 왼쪽 화살표 키를 누르면 왼쪽 귀가 나타남. 재클릭 시 사라짐.
    - 오른쪽 화살표 키를 누르면 오른쪽 귀가 나타남. 재클릭 시 사라짐.
    - 's' 키를 누르면 현재 캔버스 화면을 7초 동안 녹화하여 gif 파일로 저장됨.
        
    3. Special Mode (조건부 인터랙션):
	  - 위 4가지 조건(좌우 귀, 속눈썹, 미소)이 모두 활성화되면 스페셜 모드가 실행됨.
	  - 배경에 무작위로 하트가 생성되며, 오른쪽 눈이 윙크 모양으로 변함.
***********************************************/	