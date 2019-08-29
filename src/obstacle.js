class Obstacle { 
    constructor(ingName, ingImg) {
    this.width = 120;
    this.height = 120;
    this.y = 0;
    this.x = random(0, width-this.width); 

    this.ingredient = ingName
    this.img = ingImg

    

    this.angle = 0;
    }

    draw() {
        console.log(width)
        this.y += 2;
        
        image(this.img, this.x, this.y, this.width, this.height)
        
        
        
    }
}