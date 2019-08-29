const cocktails = [
    {
        name: "Cuba Libre",
        ingredients: ["coke", "rum" , "limes"]
    },
    {
        name: "Moscow Mule",
        ingredients: ["vodka", "ginger beer", "cucumber"]
    },
    {
        name: "Screwdriver",
        ingredients: ["vodka", "orange juice"]
    },
    {
        name: "Vodka-E",
        ingredients: ["vodka", "red bull"]
    },
    {
        name: "Skinny Bitch",
        ingredients: ["vodka", "soda"]
    }, 
    {
        name: "Caribic Boost",
        ingredients: ["rum", "red bull"]
    }
    
]


class Game {
    constructor() {
        this.background = new Background();
        this.player = new Player();
        this.shootedIng = []; 
        this.matchNum=0;
        this.score = 0; 
        this.match = cocktails[this.matchNum].ingredients;
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
        document.getElementById("order-name").innerText = cocktails[this.matchNum % cocktails.length].name;
        document.getElementById("order-ingredients").innerText = cocktails[this.matchNum % cocktails.length].ingredients.join(", "); 
        document.getElementById("score-value").innerText = (this.score)
            
        }
        
        checkMatch() {
            // let shout = this.shootedIng.filter(x => {
            //     return this.match.includes(x)
            // })
            // console.log(this.match.length, this.shootedIng.length)
            if(this.match.length === this.shootedIng.length){
                this.shootedIng = [];
                this.matchNum ++;
                this.match = cocktails[this.matchNum % cocktails.length].ingredients;
                this.score += 100;
                console.log('WINNER')
            }
        }
    
}




