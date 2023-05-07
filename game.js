class Yard extends AdventureScene {
    constructor() {
        super("yard", "The Yard");
    }

    onEnter() {
        let window = this.add.text(this.w * 0.5, this.h * 0.1, "🪟 window")
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
                } else {
                    this.showMessage("window's locked. shame.")
                }
            })
        let plant = this.add.text(this.w * 0.1, this.h * 0.45, "🪴 plant")
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

        let door = this.add.text(this.w * 0.5, this.h * 0.8, "🚪 door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("the door to your house. Going through here would surely be what most humans would to get into a house.")
                })
            .on('pointerdown', () => {    
                    this.showMessage("you open the door to go find some cookies!")
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
        let television = this.add.text(this.w * 0.30, this.h * 0.45, "📺 tv" )
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("television. Why not play a round of overwatch?”")
            })
            .on('pointerdown', () => {
                    this.shakeItem(television)
                    this.showMessage("we lost, this game sucks it’s actually so bad trash game trash creators awful gameplay, valorant is way better anyways because this game is so dead it's on life support who even plays this awful game anymore it's such a nightmare to try to do anything in this game because the devs dont care about it and its definitely not my fault we lost but my teammates why do i always get awful teammates?");
            })
        let yardDoor = this.add.text(this.w * 0.1, this.h * 0.8, "🚪 door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("this door heads to the yard!");
                })
            .on('pointerdown', () => {    
                    this.showMessage("not sure why you'd wanna head back to the yard, but okay!");
                    this.gotoScene('yard');
                    this.shakeItem(door);
                
            })
        let kitchendoor = this.add.text(this.w * 0.5, this.h * 0.1, "🚪 door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("THIS DOOR GOES TO THE KITCHEN THIS IS SO EXCITING IT’S COOKIE TIME AHHHHHHHHH")
                })
            .on('pointerdown', () => {    
                    this.showMessage("COOKIEEEEEEEEEESSSSSS!!!!");
                    this.gotoScene('kitchen');
                    this.shakeItem(kitchendoor);
                
            })

        let garagekey = this.add.text(this.w * 0.30, this.h * 0.8, "🔑 key")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("the key to the garage! huzzah!")
            })
            .on('pointerdown', () => {
                this.showMessage("you pick up the key.");
                this.gainItem('garagekey');
                this.grabItem(garagekey)
            })

        let window = this.add.text(this.w * 0.1, this.h * 0.1, "🪟 window")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("“that is, in fact, a fweaking window.”");
            })
            .on('pointerdown', () => {
                this.showMessage("not sure why you'd wanna head back to the yard, but okay!")
                this.gotoScene('yard');
                this.shakeItem(window)
            });

        let garagedoor = this.add.text(this.w * 0.5, this.h * 0.8, "🚪 door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('this door heads to the garage.');
                
            })
            .on('pointerdown', () => {
                if (this.hasItem("garagekey")) {
                    this.loseItem("garagekey");
                    this.shakeItem(garagedoor)
                    this.showMessage("unlocked the door!");
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
        let cookie = this.add.text(this.w * 0.1, this.h * 0.5, "🍪 cookie")
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
        let sink = this.add.text(this.w * 0.35, this.h * 0.1, "🚰 sink")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("the sink. You gotta clean those grubby little paws after all the plant throwing.")
            })
            .on('pointerdown', () => {
                    this.shakeItem(sink)
                    this.showMessage("hands cleaned, all ready to munch on cookies!");
            })
        let kitchendoor2 = this.add.text(this.w * 0.35, this.h * 0.9, "🚪 door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("a door that leads to the living room!")
                })
            .on('pointerdown', () => {    
                    this.showMessage("you head back to the living room.")
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
        let ladder = this.add.text(this.w * 0.5, this.h * 0.8, "🪜 ladder")
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

        let door = this.add.text(this.w * 0.1, this.h * 0.8, "🚪 door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("the door to your living room.")
                })
            .on('pointerdown', () => {   
                    this.showMessage('it’s locked. Oh gee willickers, we left the key inside! Silly billy, gotta find another way inside after your mistakey-wakey!');
                
            })
        let plant = this.add.text(this.w * 0.5, this.h * 0.1, "🪴 plant")
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
            let wall = this.add.text(this.w * 0.1, this.h * 0.1, "🧱 wall ")
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
        this.add.text(50,50, "Cookie Quest").setFontSize(50).setTint(0x000000);
        this.add.text(50, 100, "You’ve been tending your flowers for too long, and now your tummy is a-rumblin’").setFontSize(20).setTint(0x000000);
        this.add.text(50,150, "Click anywhere to begin.").setFontSize(20).setTint(0x000000);
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
        this.cameras.main.fadeIn(1000, 0, 0, 0);
        this.add.text(50, 50, "And thus, you munched on your cookie. It was delightful.").setFontSize(20).setTint(0x000000);
        this.add.text(50, 200, "The End.").setFontSize(20).setTint(0x000000);
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    backgroundColor: 0xffe599,
    scene: [Intro, Yard, LivingRoom, Garage, Kitchen, Outro],
    title: "Adventure Game",
});