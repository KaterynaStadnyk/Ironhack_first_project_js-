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
        this.match = cocktails[this.matchNum % cocktails.length].ingredients;
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
        scoring() {
            this.shootedIng.forEach(ing => {
                if (this.match.includes(ing)){
                    this.score += 10;
                } else {
                    if(this.score >= 10){
                        this.score -= 10;
                    }
                    this.matchNum ++;
                    let wrong = document.querySelector("#wrong");
                    wrong.style.display = "block"; 
                    setTimeout(() => {
                        wrong.style.display = "none"; 
                    }, 1000)
                    }
                
            })
}
        
        checkMatch() {
            let shout = this.shootedIng.filter(x => {
                return this.match.includes(x)
            })
            if(this.match.length === shout.length){
                this.shootedIng = [];
                this.matchNum ++;
                this.score += 100;
                console.log('WINNER')
            }
        }
    
}




