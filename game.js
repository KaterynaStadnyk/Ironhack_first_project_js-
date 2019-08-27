class Game {
    constructor() {
        this.background = new Background();
        this.player = new Player();
        //this.bullets = [];
        // this.bullet = new Bullet();
        // this.obstacles = [];
        this.shootedIng = []; 
    }
    setup() {
        this.background.setup();
        this.player.setup();
        //this.bullet.setup();
    }
    draw() {
        this.background.draw();
        this.player.draw();
        // this.bullet.draw();

        
            
            // for every bullet in this.bullets call the draw function
            
        // ;
    }


    
    }

