let cor;
let posicaoHorizontal;
let poaicaoVertical;

function setup() {
  createCanvas(400, 400);
background("white");
  cor=color(random(0,255), random(0, 255), random(0,255));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}

function draw() {
  circle(posicaoHorizontal, posicaoVertical, 50);
  fill (cor)
  
 if(mouseX > posicaoHorizontal){
   posicaoHorizontal = posicaoHorizontal + 1;
 }
  if(mouseX < posicaoHorizontal){
   posicaoHorizontal = posicaoHorizontal - 1;
 }
  if(mouseY > posicaoVertical){
   posicaoVertical = posicaoVertical + 1;
 }
  if(mouseY < posicaoVertical){
   posicaoVertical = posicaoVertical - 1;
 }
  if(mouseIsPressed){
  cor = color(random(0,255), random(0, 255), random(0,255));
    
  }
} 
