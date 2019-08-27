const cocktails = [
    {
        name: "cuba libre",
        ingredients: ["coke", "rhum"]
    },
    {
        name: "moscow mule",
        ingredients: ["vodka", "ginger beer"]
    }
]

const ingredients = ["coke", "rhum", "vodka", "ginger beer"]


class Obstacle { 
    constructor() {
    this.width = random(50, 150);
    this.height = random(50,150);
    this.y = 0;
    this.x = random(0,width); 

    this.ingredient = ingredients[Math.floor(Math.random() * ingredients.length)]

    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    // let colours = ["red", "orange", "yellow", "blue", "lila", "pink"]
      
    }
  
//     draw() {
//         rect(this.x, this.y, this.width, this.height); 
//         this.y += 4 ; 
      
//     }
//   }

    // constructor() {
    //     let colours = r,g,b;
    //     // this.colour = ["red", "orange", "yellow", "blue", "lila", "pink"];
    //     // this.width = random(50, 150);
    //     // this.height = random(50,150);
    //     // this.y = 0;
    //     // this.x = random(0,width); 
    // }

    setup(){
 
    }
    
    draw() {
        // let colours = ["red", "orange", "yellow", "blue", "lila", "pink"];
        
        this.y += 4;
        fill(this.r, this.g, this.b);
        ellipse(this.x, this.y, this.width, this.height);
        // console.log(this.ingredient)
        fill("white")
        text(this.ingredient, this.x, this.y)
        // this.colour = random(fill(this.colour)); 
    }
}