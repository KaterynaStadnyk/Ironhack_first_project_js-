class Game {
    constructor() {
        this.background = new Background();
        this.player = new Player();
        this.shootedIng = []; 

        //
        this.match = ["vodka", "rum", "soda"]
        //
    }
    setup() {
        this.background.setup();
        this.player.preload()
        this.player.setup();

    }
    draw() {
        this.background.draw();
        this.player.draw();
        this.checkMatch();
        
    }

    checkMatch() {
        // if(this.match.length !== this.shootedIng.length) return false;
        for(let i = 0; i < this.match.length; i++){
            if(!this.shootedIng.includes(this.match[i])) return false;
        }
        console.log('MATCH!!!!!')
        this.shootedIng = []
        return true
    }
}

