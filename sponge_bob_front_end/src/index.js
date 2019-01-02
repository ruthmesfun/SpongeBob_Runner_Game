document.addEventListener('DOMContentLoaded', () => {
    //required variables
    const minGap = 150;
    const maxGap = 300;
    const obstacleSprites = ['assets/images/obstacles/4b21adf278d1d70.gif', 'assets/images/obstacles/524246e9f66085a32b9cd46aedab9266_w200.gif', 'assets/images/obstacles/20772690_90x90.gif', 'assets/images/obstacles/burglar_balls.gif', 'assets/images/obstacles/giphy.gif', 'assets/images/obstacles/jellyfish.gif', 'assets/images/obstacles/pogoSquidward.gif']
    
    //obstacle array
    let myObstacles = [];


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

    //score
    const score = {
        x: 400,
        y: 50,
        update: function(text){
            runnerGame.context.fillStyle = '#FFF56C';
            runnerGame.context.font = '30px Slackey';
            runnerGame.context.fillText(text,this.x,this.y)
        }
    }

    //Text

    const text = (text, font_size, x, y) => {
        runnerGame.context.fillStyle = '#FFF56C';
        runnerGame.context.font = `${font_size} Slackey`;
        runnerGame.context.fillText(text,x,y)
    }

    //Loads the game area

    const runnerGame = {
        // load the canvas
        canvas: document.querySelector('canvas'),
        start: function(){
            this.canvas.height = 400;
            this.canvas.width = 600;
            this.context = this.canvas.getContext('2d')
            //counts how many times we run the update function
            this.frame = 0
            this.score = 0
            score.update("Score: 0")
            this.interval = setInterval(this.update, 5)
            document.addEventListener('keydown', (event) => {
                if(event.which === 32){
                    player.speedY = -2;
                }
            })
        },
        //update the sprites in our game area
        update: function(){
            for(let obstacle of myObstacles){
                if(player.collide(obstacle)){
                    runnerGame.stop()
                }
            }
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
            player.newPosition();
            player.create();
            runnerGame.frame++;
            runnerGame.score += 0.01;
            score.update("Score: " + Math.floor(runnerGame.score))
        },
        //clears the sprites in the game area
        clear: function(){
            this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
        },
        stop: function(){
            clearInterval(this.interval);
        }
    
    }

    //Player 

    const player = {
        height: 70,
        width: 70,
        // Player's x & y are not dymanic. Not reading the runnerGame attributes
        x: 0,
        y: 330, //very confused with this
        speedY: 0,
        create: function(){
            let image = new Image()
            image.src = 'assets/images/spongebob.gif'
            runnerGame.context.drawImage(image, this.x, this.y, this.width, this.height)
        },
        newPosition: function(){
            if (this.y === 150){
                this.speedY = 2;
            }
            this.y = this.y + this.speedY
            if (this.y === 330){
                this.speedY = 0
            }
        },
        collide:function(obs){
            return this.x + this.width > obs.x + 30 && this.x < obs.x + obs.width - 30 && this.y + this.height > obs.y 
        }

    }

    //obstacle class 
    class Obstacle{
        constructor(){
            this.height = 60;
            this.width = 60;
            this.x = runnerGame.canvas.width - this.width;
            this.y = runnerGame.canvas.height - this.height;
            this.i = Math.floor(Math.random() * (obstacleSprites.length));
        }
    
        create(){
           let image = new Image()
           image.src = obstacleSprites[this.i]
           runnerGame.context.drawImage(image, this.x, this.y, this.width, this.height )
        }
    }



    //invoke to start the game 

    runnerGame.start()
})