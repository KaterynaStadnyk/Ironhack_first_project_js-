const game = new Game();
function preload() {
}
function setup() {
    console.log("P5 Setup");
    createCanvas(900, 540);
    game.setup();

}
let bullets = [];
let obstacles = [];

function draw() {
    //clear();
    background(225)
    game.draw();
    if (bullets.length) {
        bullets.forEach(function (element, index) {
            element.draw()
            element.collisionCheck(obstacles)
            if (element.y  <= 0) {
                bullets.splice(index, 1);
              }
        });
    }
    if (frameCount > 120 && frameCount % 120 === 0) {
        obstacles.push(new Obstacle());
      }
      if(obstacles.length){
      obstacles.forEach((obstacle, index) => {
        obstacle.draw();
        if (obstacle.y  >= 540) {
          obstacles.splice(index, 1);
        }
    })
}
}
function keyPressed() {
    if (keyCode === 32) {
        bullets.push(new Bullet(game.player.x, game.player.y));
    }
    if (keyCode === 37) {
        console.log('left')
        game.player.x -= 20;

    } else if (keyCode === 39) {
        console.log('right')
        game.player.x += 20;
    }
}





