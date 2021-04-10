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
      });
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
    
        iceMan1 = createSprite(100,200);
        iceMan2 = createSprite(200,200);
        iceMan3 = createSprite(300,100);
        iceMan4 = createSprite(300,150);
        iceMan5 = createSprite(200,270);
        players = [iceMan1, iceMan2, iceMan3, iceMan4, iceMan5];
    }

    play(){
        form.hide();

        Player.getPlayerInfo();
        
        if(allPlayers !== undefined){
          //background(rbg(0));
          //image()

          var index = 0;
          
        }
        drawSprites();
      }  
}