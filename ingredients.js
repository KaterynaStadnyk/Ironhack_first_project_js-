class Ingredients {
    constructor() {
        let colours = r,g,b;
        // this.colour = ["red", "orange", "yellow", "blue", "lila", "pink"];
        // this.width = random(50, 150);
        // this.height = random(50,150);
        // this.y = 0;
        // this.x = random(0,width); 
    }

    setup(){
        r = random(255);
        g = random(255);
        b = random(255);
    }
    
    draw() {
        let colours = ["red", "orange", "yellow", "blue", "lila", "pink"];
        ellipse(360, 200, 200, 200);
        fill(r, g, b);
        this.colour = random(fill(this.colour)); 
    }
}