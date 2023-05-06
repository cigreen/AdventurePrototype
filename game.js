class Yard extends AdventureScene {
    constructor() {
        super("yard", "The Yard");
    }

    onEnter() {
        let window = this.add.text(this.w * 0.3, this.w * 0.3, "🪟 window")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("plant")) {
                    this.showMessage("oh man, you're gonna vandalize your own house, aren't you?");
                } else {
                    this.showMessage("a window on your house. Some HOOLIGANS threw a ball at this one time and it broke.");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("plant")) {
                    this.shakeItem(window)
                    this.loseItem("plant");
                    this.showMessage("alright. I mean, yeah, that certainly is A method to enter your own home.");
                    window.setText("🪟 broken window");
                    this.gotoScene('livingroom');
                }
            })
        let plant = this.add.text(this.w * 0.5, this.w * 0.1, "🪴 plant")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("a plant in a pot. Surprisingly hefty!")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the plant.");
                this.gainItem('plant');
                // replace this with the stuff from engine enhancement
                this.grabItem(plant)
            })

        let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("the door to your house. Going through here would surely be what most humans would to get into a house.")
                })
            .on('pointerdown', () => {    
                    this.gotoScene('livingroom');
                    this.shakeItem(door)
                
            })

    }
}

class LivingRoom extends AdventureScene {
    constructor() {
        super("livingroom", "The Living Room");
    }
    onEnter() {
        let kitchendoor = this.add.text(this.w * 0.5, this.w * 0.1, "🚪 door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("THIS DOOR GOES TO THE KITCHEN THIS IS SO EXCITING IT’S COOKIE TIME AHHHHHHHHH")
                })
            .on('pointerdown', () => {    
                    this.gotoScene('kitchen');
                    this.shakeItem(kitchendoor)
                
            })

        let garagekey = this.add.text(this.w * 0.4, this.w * 0.15, "🔑 key")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("the key to the garage! huzzah!")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the key.");
                this.gainItem('garagekey');
                this.grabItem(garagekey)
            })

        let window = this.add.text(this.w * 0.3, this.w * 0.4, "🪟 window")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("“that is, in fact, a fweaking window.”");
            })
            .on('pointerdown', () => {
                this.gotoScene('yard');
                this.shakeItem(window)
            });

        let garagedoor = this.add.text(this.w * 0.6, this.w * 0.2, "🚪 door")
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('this door heads to the garage.');
                
            })
            .on('pointerdown', () => {
                if (this.hasItem("garagekey")) {
                    this.loseItem("garagekey");
                    this.shakeItem(garagedoor)
                    this.showMessage("Unlocked the door!");
                    garagedoor.setText("🚪 unlocked door");
                    this.gotoScene('garage');
                } else {
                    this.showMessage("oopsie doopsie, gotta get the key!")
                }
            })
    }
}
class Kitchen extends AdventureScene {
    constructor() {
        super("kitchen", "The Kitchen");
    }
    onEnter() {
        let cookie = this.add.text(this.w * 0.3, this.w * 0.3, "🍪 cookie")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("a cookie on the top shelf. Might need a ladder to reach that.");
            })
            .on('pointerdown', () => {
                if (this.hasItem("ladder")) {
                        this.shakeItem(cookie)
                        this.showMessage("IT’S COOKIE TIME LETS GOOOOOOOO!");
                        this.gotoScene('outro');
                } else {
                    this.showMessage("nope, too high. gotta find a ladder!")
                }
            })
        let sink = this.add.text(this.w * 0.2, this.w * 0.15, "🚰 sink")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("the sink. You gotta clean those grubby little paws after all the plant throwing.")
            })
            .on('pointerdown', () => {
                    this.shakeItem(sink)
                    this.showMessage("hands cleaned, all ready to munch on cookies!");
            })
        let kitchendoor2 = this.add.text(this.w * 0.5, this.w * 0.1, "🚪 door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("a door that leads to the living room!")
                })
            .on('pointerdown', () => {    
                    this.shakeItem(kitchendoor2)
                    this.gotoScene('livingroom');
                
            })
    }
}
class Garage extends AdventureScene {
    constructor() {
        super("garage", "The Garage");
    }
    onEnter() {
        let ladder = this.add.text(this.w * 0.2, this.w * 0.15, "🪜 ladder")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("this could be helpful to get a cookie from the top shelf.")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the ladder.");
                this.gainItem('ladder');
                this.grabItem(ladder)
            })

        let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("the door to your living room.")
                })
            .on('pointerdown', () => {   
                    this.showMessage('it’s locked. Oh gee willickers, we left the key inside! Silly billy, gotta find another way inside after your mistakey-wakey!');
                
            })
        let plant = this.add.text(this.w * 0.5, this.w * 0.1, "🪴 plant")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("another plant! In the room with the least amount of sun! Real smart thinking, putting it in here.")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the plant.");
                this.gainItem('plant');
                this.grabItem(plant)
            })
            let wall = this.add.text(this.w * 0.3, this.w * 0.3, "🧱 wall ")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("plant")) {
                    this.showMessage("ok, there's no way this works a second time.");
                } else {
                    this.showMessage("a literal brick wall.");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("plant")) {
                    this.loseItem("plant");
                    this.shakeItem(wall)
                    this.showMessage("WHAT");
                    wall.setText("🧱 broken wall");
                    this.gotoScene('livingroom');
                } else {
                    this.showMessage("you're not the kool-aid man.")
                }
            })
    }
}
class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(50,50, "Cookie Quest").setFontSize(50);
        this.add.text(50, 100, "You’ve been tending your flowers for too long, and now your tummy is a-rumblin’").setFontSize(20);
        this.add.text(50,150, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('yard'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "And thus, you munched on your cookie. It was delightful.").setFontSize(20);
        this.add.text(50, 200, "The End.").setFontSize(20);
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
        //backgroundColor: 0xffe599
    },
    scene: [Intro, Yard, LivingRoom, Garage, Kitchen, Outro],
    title: "Adventure Game",
});