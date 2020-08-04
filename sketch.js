//Create variables here
var dog,database,foods,foodStock;
var dogImg,happyDogImg;
function preload()
{
	
dogImg = loadImage("images/dogImg.png");
happyDogImg = loadImage("images/dogImg1.png");

}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(200,200);
  dog.addImage(dogImg);
  dog.scale = 0.5;
  database = firebase.database();
  foodStock = database.ref("Food");
  foodStock.on("value",readStock)



}


function draw() {  
background(0,230,0);
  if(keyWentDown(UP_ARROW)){
    foods = foods-1
    writeStock(foods);
    dog.addImage(happyDogImg);
  }



drawSprites();
  //add styles here
}

function readStock(data){
foods = data.val();

}
function writeStock(x){
database.ref("/").update(
  {"Food":x}) 


}
