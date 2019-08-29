const game = new Game();
function preload() {
    ingredients.forEach(ingredient => {
        ingredient.img = loadImage(ingredient.img)
    })
}
function setup() {
    console.log("P5 Setup");
    
    createCanvas(window.innerWidth, window.innerHeight)
    game.setup();

}
let bullets = [];
let obstacles = [];
const ingredients = [
    {
        name: "coke",
        img: "assets/kisspng-the-coca-cola-company-fizzy-drinks-diet-coke-coca-cola-5ad66696806416.2332078415240004065259.png"
    },
    {
        name: "rum",
        img: "assets/kisspng-bacardi-superior-light-rum-bacardi-cocktail-liquor-bacardi-carta-blanca-alchemy-asia-5b70992c6b0745.7809709815341059004384.png"
    },
    {
        name: "vodka",
        img: "assets/kisspng-absolut-vodka-bottle-v-s-group-wine-vodka-squadra-russa-5b16085373b8a3.147585651528170579474.png"
    },
    { 
        name: "ginger beer",
        img:"assets/kisspng-ginger-beer-fizzy-drinks-root-beer-cream-soda-beer-5acca52e88e552.6297660415233610705607.png"
    },
    {
        name: "orangejuice",
        img:"assets/kisspng-ginger-beer-fizzy-drinks-root-beer-cream-soda-beer-5acca52e88e552.6297660415233610705607.png"
    },
    {
        name: "cucumber",
        img:"assets/kisspng-cucumber-extract-vegetable-salad-food-cucumber-5a707627232bb5.9323140615173197191441.png"
    },
    {
        name: "limes",
        img: "assets/kisspng-juice-lemon-lime-drink-sweet-lemon-lime-5a74f28111bd83.7946539415176136970727.png"
    },{
        name: "energy",
        img:"assets/kisspng-energy-drink-red-bull-soft-drink-monster-energy-ou-red-bull-png-image-5a752823e87af2.9912243915176274279523.png"
    },
    {
        name: "soda",
        img:"assets/kisspng-water-bottles-bottled-water-glass-bottle-5b279a54cf9fd7.1166890915293220688504.png"
    },
    {
        name: "orange juice",
        img:"assets/kisspng-orange-juice-soft-drink-apple-juice-orange-juice-5a703976cf5888.8346758015173041828493.png"
    }
]
function draw() {
    //clear();
    move();
    // keyPressed();
    background(225);
    game.draw();
    if (bullets.length) {
        bullets.forEach(function (element, index) {
            element.draw()
            if(element.collisionCheck(obstacles)) bullets.splice(index, 1);
            if (element.y  <= 0) {
                bullets.splice(index, 1);
              }
        });
    }
    if (frameCount > 120 && frameCount % 120 === 0) {


        let randIng = ingredients[Math.floor(Math.random()*ingredients.length)]
        
        obstacles.push(new Obstacle(randIng.name, randIng.img));
     
    
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

function move() {

    if (keyIsDown(LEFT_ARROW) && game.player.x > 0) {
        game.player.x -= 10;
        
    } else if (keyIsDown(RIGHT_ARROW) && game.player.x + 100 < width) {
        game.player.x += 10;
    }
}


function keyPressed(){
    if (keyCode === 32) {
        bullets.push(new Bullet(game.player.x, game.player.y));
    }

}





