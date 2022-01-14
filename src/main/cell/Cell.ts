import { CellState } from "../types";

export class Cell {
    constructor(public row: number, public col: number, public state: CellState){}
}