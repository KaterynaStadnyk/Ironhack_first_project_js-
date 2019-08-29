class Player {
    constructor() {
        this.x = 500;
        this.y = window.innerHeight - 150;
        
    }

    preload() {
        this.playerImg = loadImage("./assets/bartender.png")
    }

    
    setup() {
        this.targetX = width / 2;
        this.targetY = 0;
        

    }


    draw() {
        
        
        push();
        translate(this.x + 50, this.y);
        image(this.playerImg, 0 ,0, 100,140)
        rotate(this.angle);
        fill("black");
        
        pop();

    }
    
 }