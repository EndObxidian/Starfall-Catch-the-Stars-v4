class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }

    async start() {
        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form()
            form.display();
        }
player1 = createSprite(200,500);
player1.addImage("player1",player_img);
player1.scale = 0.7;

player2 = createSprite(800,500);
player2.addImage("player2", player_img);
players=[player1,player2];
player2.scale = 0.7;

    }

        play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(bkgImg, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                         
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);

                         
                     }
                    
                         textSize(25);
                         fill("white");
                         text("Player 1 :" +allPlayers.player1.score,50,50);
                        text("Player 2 :" + allPlayers.player2.score, 50, 100);
                 
                 }
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 if (frameCount % 25 === 0) {
                     stars = createSprite(random(100, 1000), 0, 100, 100);
                     stars.scale = 0.2;
                     stars.velocityY = 5;
                     var rand = Math.round(random(1,1));
                     switch(rand){
                         case 1: stars.addImage("star1",starImg);
                         break;
                     }
                     starGroup.add(stars);
                     
                 }
                 
                  if (player.index !== null) {
                      for (var i = 0; i < starGroup.length; i++) {
                          if (starGroup.get(i).isTouching(players)) {
                              starGroup.get(i).destroy();
                              player.score =player.score+1;
                              player.update();
                              
                          }
                          
                      }
                  }

                  if (frameCount % 45 === 0) {
                    meteors = createSprite(random(100, 1000), 0, 100, 100);
                    meteors.scale = 0.1;
                    meteors.velocityY = 4;
                    var rand = Math.round(random(1,1));
                    switch(rand){
                        case 1: meteors.addImage("meteor1",meteorImg);
                        break;
                    }
                    meteorGroup.add(meteors);
                    
                }

                if (player.index !== null) {
                    for (var i = 0; i < meteorGroup.length; i++) {
                        if (meteorGroup.get(i).isTouching(players)) {
                            meteorGroup.get(i).destroy();
                            player.score =player.score-1;
                            player.update();
                            count = count+1; 
                            if (count>=5){
                                gameState = 2;
                            }
                        }
                        
                    }
                }
         
        

    }

    end(){
       console.log("Game Ended");
       meteors.velocityY = 0;
       stars.velocityY = 0;
       fill("red");
       textSize(100);
       text("Game Ended",225,200);

       textSize(25);
       fill("red");
       text("Player 1 :" +allPlayers.player1.score,400,250);
       text("Player 2 :" + allPlayers.player2.score, 400,300);
    }
}