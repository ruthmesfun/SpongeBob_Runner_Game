
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
    
           setTimeout(runnerGame.context.drawImage(image, this.x, this.y, this.width, this.height ),5)

        }
    }


