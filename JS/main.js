class Game {
    constructor(){
       
    }
    start(){
        this.attachEventListener();
        
    }
    
        attachEventListener(){
            document.addEventListener("keydown", (event) => {
                if (event.key === "ArrowLeft") {
                    player.moveLeft();
                } else if (event.key === "ArrowRight") {
                    player.moveRight();
                }
            });
        }
    
}






class Player {
    constructor() {
        this.width = 10;
        this.height = 2;
        this.positionX = (50 - (this.width / 2)) * (90 / 100);
        this.positionY = 12;
        this.domElement = null;
        

        this.createDomElement();
    }
    createDomElement() {
        this.domElement = document.createElement("div");

        // set id
        this.domElement.id = "player";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";

        //append to the dom
        const parentElm = document.getElementById("board");
        parentElm.appendChild(this.domElement);

    }
    moveLeft() {
        this.positionX--;
        this.domElement.style.left = this.positionX + "vw";
    }
    moveRight() {
        this.positionX++;
        this.domElement.style.left = this.positionX + "vw";
    }

}


const player = new Player();



    

    class Bricks{
        constructor() {
            this.width = 5;
            this.height = 1;
            this.positionX = 0;
            this.positionY = 0;
            this.domElement = null;
            
    
            this.createDomElement();
        }
        createDomElement() {
            
            this.domElement = document.createElement("div");
            
          
    
            // set id
            this.domElement.className = "bricks";
            this.domElement.style.width = this.width + "vw";
            this.domElement.style.height = this.height + "vh";
            this.domElement.style.left = this.positionX + "vw";
            this.domElement.style.bottom = this.positionY + "vh";
            
            //append to the dom
            const parentElm = document.getElementById("board");
            parentElm.appendChild(this.domElement);
    
        }
        
    
    }
    for (let i = 0; i < 32; i++) {
        const brick = new Bricks();
        }

   class Ball{
    constructor(){
        this.width = 15;
        this.height = 15;
        this.positionX = (50 - (this.width / 2)) * (90 / 100);
        this.positionY = 20;
         


        this.createDomElement();
        this.moveDown();
    }
        createDomElement() {
           
            this.domElement = document.createElement("div");

            this.domElement.id = "ball";
            this.domElement.style.width = this.width + "px";
            this.domElement.style.height = this.height + "px";
            this.domElement.style.left = this.positionX + "vw";
            this.domElement.style.bottom = this.positionY + "vh";

            const parentElm = document.getElementById("board");
        parentElm.appendChild(this.domElement);
     }

       moveDown() {
        setInterval(() => {
            this.positionY++; 
            this.domElement.style.bottom = this.positionY + "vh"; 
        }, 100); 
    }
}





    
 const ball = new Ball();


 const game = new Game();
 game.start();