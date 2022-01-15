import { clear } from 'console';
import { Board } from './board/Board';
import { Cell } from './cell/Cell';
import { BoardValidatorService } from './services/BoardValidatorService';
import { RuleService } from './services/RuleService';

export class Gameplay {
    private board: Board;
    private ruleService: RuleService;

    constructor(rows: number, cols: number, alives: string[]){
        this.board = new Board(rows, cols, new BoardValidatorService(), alives);
        this.ruleService = new RuleService();
    }

    play(){
        setInterval(() => {
            clear();
            process.stdout.cursorTo(0);
            this.board.printBoard();
            let currentState = this.board.getCurrentState();
            this.board.setState(this.computeNextState(currentState));
        }, 250);
    }

    private computeNextState(state: Cell[][]): Cell[][]{
        const nextState = []

        const initialState = state.map(function(arr) { //create a copy
            return arr.slice();
        });

        for (let row = 0; row < state.length; row++) {
            let newRow = [];
            for (let col = 0; col < state[0].length; col++) {
                let newStatus = this.ruleService.newState(initialState[row][col], initialState);
                let newCell = new Cell(row, col, newStatus)
                newRow.push(newCell);
            }
            nextState.push(newRow);
        }

        return nextState;
    }

    private isDone(prevState: Cell[][], currState: Cell[][]){
        return prevState === currState;
    }
}