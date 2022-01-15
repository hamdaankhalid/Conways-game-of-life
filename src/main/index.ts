// DI as needed

import { Gameplay } from "./gameplay";

console.log("Setting up");

const COLUMNS = 40;
const ROWS = 30;

const ALIVES =[
    '5, 5',
    '6, 6',
    '4, 7',
    '4, 8',
    '4, 9',
    '4, 10',
    '12, 30',
    '14, 40',
    '14, 39',
    '28, 32',
    '29, 33',
    '0, 0',
    '3, 7',
]

const gameplay = new Gameplay(ROWS, COLUMNS, ALIVES);

gameplay.play();
