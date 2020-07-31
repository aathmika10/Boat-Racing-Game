class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
 }

  update(state){
    database.ref('/').update({
      gameState: state
    })
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    boat1 = createSprite(100,200);
    boat1.addImage(boat1img);
    boat1.scale=0.4
    boat2 = createSprite(300,200);
    boat2.addImage(boat2img);
    boat2.scale=0.4
    boat3 = createSprite(500,200);
    boat3.addImage(boat3img);
    boat3.scale=0.4
    boat4 = createSprite(700,200);
    boat4.addImage(boat4img);
    boat4.scale=0.5
    boats = [boat1, boat2, boat3, boat4];
  }

  play(){
    form.hide();
Player.getPlayerInfo();

    player.getBoatsAtEnd();
    
    if(allPlayers !== undefined){
    
      background(shoreimg)
      image(oceanimg,0,-displayHeight*4,displayWidth,displayHeight*5);
     
      var index = 0;

      var x = 100;
      var y;

      for(var plr in allPlayers){
   
        index = index + 1 ;
      
        x = x + 250;
    
        y = displayHeight - allPlayers[plr].distance;
        boats[index-1].x = x;
        boats[index-1].y = y;

        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,160,160);
          boats[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = boats[index-1].y
        }
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance>displayHeight*5){
      gameState=2;
      player.rank+=1;
      Player.updateboatsAtEnd(player.rank);
      textSize(31);
      text("Your Rank : "+player.rank, displayWidth/2 - 50,y-15);
    }

    drawSprites();
  }

    end(){
      console.log("gameEnded");
      console.log(player.rank)
    }

}
