class Bullet {
    constructor(x, y) {
        this.x = x + 50;
        this.y = y -20;
    }
    draw() {
       
        push();
        translate(this.x, this.y);
        fill("black");
        rect(0, 0, 10, 10);
        this.y -= 10;
        pop();
        
    }
    collisionCheck(obsArr) {
        // console.log(this.y)
        // if (
        //   bullet.x + bullet.width <= obstacle.x || // player's right edge is left of the left edge of the obstacle
        //   obstacle.x + obstacle.width <= this.player.x // obstacle's right edge is left of the left edge of the player
        // ) {
        //   return false;
          
        // }  
        // if (
        //   bullet.y + bullet.height <= obstacle.y || // player's bottom edge is top of the obstacle's top edge
        //   obstacle.y + obstacle.height <= bullet.y // obstacle's bottom edge is top of the player's top edge
        // ) {
        //   return false;
        // }
        // return true;
        // console.log(collisionCheck);
        obsArr.forEach((obs, i) => {
            // console.log(this.y)
            if(this.y >= obs.y + obs.height && obs.x < this.x && this.x < obs.x + obs.width){
                console.log('collision!!!!')
                game.shootedIng.push(obs.ingredient)
                console.log(game.shootedIng)
            }

            // if(ingredients.includes(obs){
            //     return 
            // })
        })
      }
}




