module objects {
    export class Bullet extends createjs.Bitmap {
        //Constructor/////////////////////////////////////////////////////////////////////////////
       
        constructor(x: number, y: number) {
            super("bullet");

            this.x = x;
            this.y = y;
        } //constructor ends

        
        public update() {
            this.x += 5;
            console.log("bullet moving");

            if (this.x > 700) {

                stage.removeChild(this);
            } //if ends
        }

        public collide(): void {

            stage.removeChild(this); //remove the bullet from the game
        } //method collide ends
    }
} //method update end  