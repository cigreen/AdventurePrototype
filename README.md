A simple adventure game by Connor Green based on a simple adventure game engine by [Adam Smith](https://github.com/rndmcnlly).

Code requirements:
- **4+ scenes based on `AdventureScene`**: Satisfied (Yard, Living Room, Garage, Kitchen).
- **2+ scenes *not* based on `AdventureScene`**: Satisfied (Intro, Outro).
- **2+ methods or other enhancement added to the adventure game engine to simplify my scenes**:
    - Enhancement 1: Satisfied (shakeItem(obj) adds a shake animation to an object when called).
    - Enhancement 2: Satisfied (grabItem(obj) adds a disappearing animation to an object when called).

Experience requirements:
- **4+ locations in the game world**: Satisfied (Yard, Living Room, Garage, Kitchen).
- **2+ interactive objects in most scenes**: Satisfied (Each scene has items to be picked up, doors leading to other places, and special doors only able to be used when a specific item is in the inventory.)
- **Many objects have `pointerover` messages**: Satisfied (Every object has a 'pointerover' message.)
- **Many objects have `pointerdown` effects**: Satisfied (Every object has a 'pointerdown' message.)
- **Some objects are themselves animated**: Satisfied (Doors and inventory items all have animations signifying they have been used/grabbed.)

Asset sources:
- Objects were made using simple text and Apple emojis. 
- Cookie Quest Theme was created by myself using [VCV Rack](https://vcvrack.com/) and further edited using the [Reaper DAW](https://www.reaper.fm/)
- Selection sound effect was created by myself using the [Reaper DAW](https://www.reaper.fm/).

Code sources:
- `adventure.js` and `index.html` were created for this project [Adam Smith](https://github.com/rndmcnlly) and edited by me.
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly) and rewritten by me.