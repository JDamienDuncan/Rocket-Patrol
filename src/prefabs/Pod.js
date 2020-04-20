// Rocket prefab
class Pod extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);   // add to existing scene, displayList, updateList
        this.points = pointValue;   // store pointValue
    }

    update() {
        // move Pod Right
        this.x += 8;
        // wraparound from left to right edge
        if (this.x >= 640) {
            this.reset();
        }
    }

    reset() {
        var value = Phaser.Math.Between(120, 350);
        this.x = -300;
        this.y = value;
        
    }
}