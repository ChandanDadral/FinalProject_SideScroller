module objects {
    export class Bullet extends objects.GameObject {
        //Constructor/////////////////////////////////////////////////////////////////////////////
       
        constructor(x: number, y: number) {
            super("bullet");
            this.soundString = "coinSound";
            this.x = x;
            this.y = y;
        } //constructor ends

        
        public update() {
            this.x += 5;
            //   console.log("bullet moving");

            if (this.x > 700) {

                stage.removeChild(this);
            } //if ends
        }

        public _reset() {
            // set the ring to start at a random x and y value
            this.x = 640 + Math.floor(Math.random() * 640);
            this.y = Math.floor(Math.random() * 480);

        }
        public collide(): void {

            stage.removeChild(this);

        } //method collide ends
    }
} //method update end  
