// DI as needed

import { Gameplay } from "./gameplay";

console.log("Setting up");

const gameplay = new Gameplay(10, 6, ['0, 0', '1, 5', '2, 0', '1, 1', '3, 2', '4,4', '1, 3', '9, 5', '8, 7']);

gameplay.play();
