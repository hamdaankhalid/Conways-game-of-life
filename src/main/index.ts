// DI as needed

import { Gameplay } from "./gameplay";

console.log("Setting up");

const COLUMNS = 12;
const ROWS = 12;

const ALIVES =[
    '5, 5',
    '6, 6',
    '4, 7',
    '4, 8',
    '4, 9',
    '4, 10',
    '3, 7',
]

const gameplay = new Gameplay(COLUMNS, ROWS, ALIVES);

gameplay.play();
