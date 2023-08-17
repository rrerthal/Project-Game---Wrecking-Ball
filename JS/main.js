class Game {
    constructor(){
        this.ball = null;
        this.score = new Score();
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
                } else if (event.key === " ") { // Tecla de espaço
                    if (!this.ball) { // Se a bola ainda não foi criada
                        this.ball = new Ball(player.positionX, player.positionY,player,this.score);
                    }
                }
            });
        }
       
    }
    
    class Score {
        constructor() {
            this.value = 0;
            this.domElement = null;
    
            this.createDomElement();
        }
    
        createDomElement() {
            this.domElement = document.createElement("div");
            this.domElement.id = "score";
            this.domElement.innerText = ` ${this.value}`;
            const parentElm = document.getElementById("board");
            parentElm.appendChild(this.domElement);
        }
    
        update(value) {
            this.value += value;
            this.domElement.innerText = ` ${this.value}`;
        }
    }






class Player {
    constructor() {
        this.width = 10;
        this.height = 0.4;
        this.positionX = (50 - (this.width / 2)) * (90 / 100);
        this.positionY = 12;
        this.domElement = null;
        

        this.createDomElement();
    }
    createDomElement() {
        this.domElement = document.createElement("div");

       
        this.domElement.id = "player";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";

        const parentElm = document.getElementById("board");
        parentElm.appendChild(this.domElement);

    }
    moveLeft() {
        const speed = 4;
        if (this.positionX > 1) { 
            this.positionX -= speed;
            this.domElement.style.left = this.positionX + "vw";
        }
    }

    moveRight() {
        const speed = 4;
        if (this.positionX < 81) { 
            this.positionX += speed;
            this.domElement.style.left = this.positionX + "vw";
        }
    }
}






    

    class Bricks{
        constructor() {
            this.width = 5;
            this.height = 2;
            this.positionX = 0;
            this.positionY = 0;
            this.domElement = null;
            
    
            this.createDomElement();
        }
        createDomElement() {
            
            this.domElement = document.createElement("div");
            
          
    
          
            this.domElement.className = "bricks";
            this.domElement.style.width = this.width + "vw";
            this.domElement.style.height = this.height + "vh";
            this.domElement.style.left = this.positionX + "vw";
            this.domElement.style.bottom = this.positionY + "vh";
            
            
            const parentElm = document.getElementById("board");
            parentElm.appendChild(this.domElement);
    
        }
        
    
    }
    for (let i = 0; i < 128; i++) {
        const brick = new Bricks();
        }

   class Ball{
    constructor(playerPositionX, playerPositionY,player,score){
        this.width = 15;
        this.height = 15;
        this.positionX = playerPositionX;
        this.positionY = playerPositionY;
        this.player = player;
        this.score = score;
        
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
        let directionY = 1;
        let directionX = 1;

         const interval =  setInterval(() => {
               const playerBottom = this.player.positionY;
               const playerLeft = this.player.positionX;
               const playerRight = playerLeft + this.player.width;

               const bricks = document.getElementsByClassName("bricks");
            for (const brick of bricks) {
                if (!brick.classList.contains("broken")) {  
                    const brickRect = brick.getBoundingClientRect();
                    const ballRect = this.domElement.getBoundingClientRect();

                    if (
                        ballRect.left < brickRect.right &&
                        ballRect.right > brickRect.left &&
                        ballRect.top < brickRect.bottom &&
                        ballRect.bottom > brickRect.top
                    ) {
                        brick.classList.add("broken"); 
                        directionY *= -1;
                        this.score.update(750 );
                }
            } 

            
          
            



            
        }
        



               if(bricks.length === 0){
                console.log("Game Over");  
                clearInterval(interval);
                window.location.href = "../win.html";

               }
                        
        
               if (
                   this.positionY <= playerBottom &&
                   this.positionX >= playerLeft &&
                   this.positionX <= playerRight
               ) {
                   directionY = 1; 
               }
               
               if (this.positionY < playerBottom) {
                console.log("Game Over");  
                clearInterval(interval);
                window.location.href = "./gameover.html";  
            }

               if (this.positionY < (113 - this.height) && directionY === 1) {
                   this.positionY++;
               } else {
                   directionY = -1 ;
                   this.positionY--;
               }

               if (this.positionX <= 1 && directionX === -1) {
                   directionX = 1;
               } else if (this.positionX < (104 - this.width) && directionX === 1) {
                   this.positionX++;
               } else {
                   directionX = -1;
                   this.positionX--;
               }



               
               this.domElement.style.bottom = this.positionY + "vh";
               this.domElement.style.left = this.positionX + "vw";
           }, 20);
        }
    }
    







 const player = new Player();
 
 

 const game = new Game();
 game.start();