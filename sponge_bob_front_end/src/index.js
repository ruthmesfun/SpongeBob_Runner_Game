document.addEventListener('DOMContentLoaded', () => {
    //required variables
    const minGap = 200;
    const maxGap = 300;
    const obstacleSprites = ['assets/images/obstacles/4b21adf278d1d70.gif', 'assets/images/obstacles/524246e9f66085a32b9cd46aedab9266_w200.gif', 'assets/images/obstacles/20772690_90x90.gif', 'assets/images/obstacles/burglar_balls.gif', 'assets/images/obstacles/giphy.gif', 'assets/images/obstacles/jellyfish.gif', 'assets/images/obstacles/pogoSquidward.gif']
    
    let myObstacles = [];


    //Start the game
    const startGame = () => {
        runnerGame.start()
    }

    //check each interval of time has passed (150ms) 
    const eachInterval = (n) => {
        return runnerGame.frame % n === 0
    }

    //choose a randome sprite
    const randomSprite = () => {
        let i = Math.floor(Math.random() * (obstacleSprites.length));
        return obstacleSprites[i]
    }

    //randomGap
    const randomGap = () => {
        return Math.floor(minGap + Math.random() * (maxGap - minGap + 1));
    }

    const runnerGame = {
        // load the canvas
        canvas: document.querySelector('canvas'),
        start: function(){
            this.canvas.height = 800;
            this.canvas.width = 1200;
            this.context = this.canvas.getContext('2d')
            //counts how many times we run the update function
            this.frame = 0
            this.interval = setInterval(this.update, 5)
        },
        //update the sprites in our game area
        update: function(){
            runnerGame.clear();
            // Creates sprite if passed 150 ms
            if (eachInterval(randomGap())){ 
                myObstacles.push(new Obstacle())
                runnerGame.frame = 0;
            }
    
            for(let obstacle of myObstacles){
                obstacle.x -= 1;
                obstacle.create();
    
            }
    
            runnerGame.frame++;
        },
        //clears the sprites in the game area
        clear: function(){
            this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
        },
        stop: function(){
    
        }
    
    }

    //obstacle class 
    class Obstacle{
        constructor(){
            this.height = 50;
            this.width = 50;
            this.x = 1200 - this.width;
            this.y = 800 - this.height;
            this.i = Math.floor(Math.random() * (obstacleSprites.length));
        }
    
        create(){
           let image = new Image()
           image.src = obstacleSprites[this.i]
           runnerGame.context.drawImage(image, this.x, this.y, this.width, this.height )
        }
    }



    //invoke to start the game 

    startGame()
})