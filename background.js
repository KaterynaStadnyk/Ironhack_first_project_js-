class Background {
    constructor() {
//       this.Bar = 0; 
//     }
//     setup() {
//         this.Bar = loadImage("images/moss-iRF0psyhz10-unsplash.jpg");
//     }
//     draw() {
//      image(this.Bar, this.Bar, 0, width); 
     
//       }

//       

      let bg;
      let y = 0;
    }
      
      setup() {
        
        this.bg = loadImage("images/moss-iRF0psyhz10-unsplash.jpg");
        createCanvas(900, 540);
      }
      
      draw() {
        background(this.bg);
      
        // stroke(226, 204, 0);
        // line(0, y, width, y);
      
        // y++;
        // if (y > height) {
        //   y = 0;
        // }
      }
    
    }
    