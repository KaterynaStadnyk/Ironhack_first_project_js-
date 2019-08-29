// const cocktails = [
//     {
//         name: "Cuba Libre",
//         ingredients: ["coke", "rum" , "limes"]
//     },
//     {
//         name: "Moscow Mule",
//         ingredients: ["vodka", "ginger beer", "cucumber"]
//     },
//     {
//         name: "Screwdriver",
//         ingredients: ["vodka", "orangejuice"]
//     },
//     {
//         name: "Vodka-E",
//         ingredients: ["vodka", "energy"]
//     },
//     {
//         name: "Skinny Bitch",
//         ingredients: ["vodka", "soda"]
//     }
// ]





class Obstacle { 
    constructor(ingName, ingImg) {
    this.width = 80;
    this.height = 80;
    this.y = 0;
    this.x = random(0,width); 

    this.ingredient = ingName
    this.img = ingImg

    // this.r = random(255);
    // this.g = random(255);
    // this.b = random(255);

    this.angle = 0;
    }

    draw() {
        
        this.y += 2;
        // fill(this.r, this.g, this.b);
        // rect(this.x, this.y, this.width, this.height);
        image(this.img, this.x, this.y, this.width, this.height)
        
        // fill("white")
        // text(this.ingredient, this.x, this.y)
        
    }
}