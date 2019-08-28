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

//     const ingredients = ["coke", "rhum", "vodka", "ginger beer"]

// for(i=0;i<cocktails.length;i++){
//     if(cocktails[i][0]==='Right ingredients'){
//         if(ingredients.indexOf([cocktails[i][1]])===-1){
//           cocktails.push([ingredients[i][1]]);
//         }
//       }
//    }

collisionCheck(obsArr) {
    
    obsArr.forEach((obs, i) => {
        // console.log(this.y)
        if(this.y <= obs.y + obs.height && obs.x <= this.x && this.x <= obs.x + obs.width){
            console.log('collision!!!!')
            if (!game.shootedIng.includes(obs.ingredient)){
                game.shootedIng.push(obs.ingredient)
            }
            
            obsArr.splice(i,1)
            
            
            //this.exist = false
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



