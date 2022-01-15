import * as printArray from 'printarray';
import { Cell } from '../cell/Cell';
import { InvalidBoardStateError } from '../errors/InvalidBoardStateError';
import { BoardValidatorService } from '../services/BoardValidatorService';
import { CellState } from '../types';

export class Board {
    private board: Cell[][];
    private boardValidatorService: any;
    private cols: number;
    private rows: number;

    constructor(rows: number, columns:number, boardValidatorService: BoardValidatorService, alives: string[]){
        this.boardValidatorService = boardValidatorService;
        this.cols = columns;
        this.rows = rows;
        this.board = this.constructBoardStructure(rows, columns, alives);
    }

    public printBoard() : void{
        console.table(this.board.map((row) => row.map(col => col.state)));
    }

    public getCurrentState() : Cell[][]{
        return this.board;
    }

    public setState(newState: Cell[][]): void{
        this.validateAndSetState(newState);
    }

    private validateAndSetState(state: Cell[][]){
        const errors = this.boardValidatorService.getErrors(state);

        if(errors.length === 0){
            this.board = state;
            return;
        }
        else{
            throw new InvalidBoardStateError(errors);
        }
    }

    private constructBoardStructure(numRows: number, numColumns: number, alives: string[]): Cell[][]{
        const board = [];
        for (let row = 0; row < numRows; row++) {
            let currentRow = [];
            for (let col = 0; col < numColumns; col++) {
                let value: CellState = alives.includes(`${row}, ${col}`) ? 'X' : 'O';
                let cell = new Cell(row, col, value);
                currentRow.push(cell);
            }
            board.push(currentRow);
        }
        return board;
    }

}