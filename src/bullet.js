class Bullet {
    constructor(x, y) {
        this.x = x + 50;
        this.y = y -20;
        this.exist = true
    }
    draw() {
       if(this.exist){
        push();
        translate(this.x, this.y);
        fill("white");
        circle(0, 0, 8);
        this.y -= 10;
        pop();
       }
        
    }



// for(i=0;i<cocktails.length;i++){
//     if(cocktails[i][0]==='Right ingredients'){
//         if(ingredients.indexOf([cocktails[i][1]])===-1){
//           cocktails.push([ingredients[i][1]]);
//         }
//       }
//    }

collisionCheck(obsArr) {


    /*
    IF GOOD INGREDIENT SCORE += 10
    IF WRONG INGREDIENT SCORE -= 10, NEW ORDER, DISPLAY MESSAGE
    IF ALL GOOD INGREDIENTS FOR ORDER SCORE += 100
    */
    
    obsArr.forEach((obs, i) => {
        if(this.y <= obs.y + obs.height && obs.x <= this.x && this.x <= obs.x + obs.width){
            console.log(game.match, obs.ingredient)
            if (!game.match.includes(obs.ingredient) ){
                game.matchNum++;
                game.shootedIng = [];
                game.match = cocktails[game.matchNum % cocktails.length].ingredients;
                if (game.score >= 10) {

                    game.score -= 10;
                    
                    let wrong = document.querySelector("#wrong");
                    wrong.style.display = "block"; 
                    setTimeout(() => {
                        wrong.style.display = "none"; 
                    }, 1000)
                }
                
            } else if(game.match.includes(obs.ingredient)) {
                // console.log(obs.ingredient, game.shootedIng)
                if(!game.shootedIng.includes(obs.ingredient)) {
                    game.shootedIng.push(obs.ingredient)
                    game.score += 10;
                }
            }
            
            obsArr.splice(i,1)
            
            // return true
        }
        
        
    })
}
}

//obstacle.ingredients = ["coke", "rhum", "vodka", "ginger beer"];
const shootedIng = []; 
//game.shootedIng = [];
// $.each(ingredients, function(i, el){
//     if ($.inArray(el, shootedIng) === -1) ingredients.push(game.shootedIng)
// })





// for(i=0; i<obs.ingredients; i++){
//     if(game.shootedIng === obs.ingredient){
//         filter(game.shootedIng);
//     }
//     if (game.shootedIng != obs.ingredient){
//     game.shootedIng.push(obs.ingredient);
//     }
// }



