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
        ingredients: ["vodka", "orangejuice"]
    },
    {
        name: "Vodka-E",
        ingredients: ["vodka", "energy"]
    },
    {
        name: "Skinny Bitch",
        ingredients: ["vodka", "soda"]
    }
]


class Game {
    constructor() {
        this.background = new Background();
        this.player = new Player();
        this.shootedIng = []; 
        this.matchNum=0;

        //
        //
        this.score = 0; 
        this.match = cocktails[this.matchNum % cocktails.length].ingredients;//["vodka", "rum", "soda"]; 
    }
    setup() {
        this.background.setup();
        this.player.preload()
        this.player.setup();
        
    }
    draw() {
        // console.log(this.match)
        this.background.draw();
        this.player.draw();
        
        this.checkMatch();
        // const nextMatch = this.checkMatch()
        // if (nextMatch === false) {
            //     this.changeMatch(); 
            // }
        
        
        
        // this.shootedIng.forEach(ing => {
        //     if (this.match.includes(ing)){
        //         this.score += 10;
        //     } else {
        //         console.log('WRONG ING')
        //     }
        // })
        // if (cocktails[this.matchNum].name) {
        document.getElementById("order-name").innerText = cocktails[this.matchNum % cocktails.length].name;
        // }
        document.getElementById("order-ingredients").innerText = cocktails[this.matchNum % cocktails.length].ingredients; 
        document.getElementById("score-value").innerText = (this.score)
            
        }
        scoring() {
            this.shootedIng.forEach(ing => {
                if (this.match.includes(ing)){
                    this.score += 10;
                } else {
                    this.score = 0;
                    this.matchNum ++;
                    console.log('WRONG ING')
                }
            })
        }
        
        checkMatch() {
            // if(this.match.length !== this.shootedIng.length) return false;
            for(let i = 0; i < this.match.length; i++){
                if(!this.shootedIng.includes(this.match[i])) return false;
            }
            this.shootedIng = [];
            this.matchNum ++;
            this.score += 100;
            console.log('WINNER')
            return true
        }
        
        changeMatch(){
            this.score += this.shootedIng.includes(this.match[i]) ;
            // this.matchNum++;
            // this.match=cocktails[this.matchNum].ingredients;
        }
        //document.getElementById('score-span').innerText = Score: ${playerScore};
    
}




