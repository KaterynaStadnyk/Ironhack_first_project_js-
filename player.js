class Player {
    constructor() {
        this.x = 500;
        this.y = window.innerHeight - 150;
        //this.angle = 0;
        // this.playerImg; 
    }

    preload() {
        this.playerImg = loadImage("./assets/bartender.png")
    }

    
    setup() {
        this.targetX = width / 2;
        this.targetY = 0;
        // this.playerImg = this.playerImg, 0,0;
        //this.playerImg = loadImage('./assets/bartender.png');

    }


    draw() {
        fill("red");
        // rect(this.x, this.y, 100, 100);
        push();
        translate(this.x + 50, this.y);
        image(this.playerImg, 0 ,0, 100,140)
        rotate(this.angle);
        fill("black");
        
        pop();

    }
    // aim() {
    //     if (keyIsDown(39)) {
    //         this.angle += .1;
    //     }
    //     if (keyIsDown(37)) {
    //         this.angle -= .1;
    //     }
    }
    // shoot() {
    //     if (keyIsDown(32)) {
    //         let bullet = new Bullet(this.x, this.y, this.angle);
    //         bullet.draw();
    //         //game.bullets.push(bullet);
    //     }
    // }
//     move (){
//         if (keyCode === 37) {
//             this.x -= 20;
//           } else if (keyCode === 39) {
//             this.x += 20;
//           }
//     }
// }