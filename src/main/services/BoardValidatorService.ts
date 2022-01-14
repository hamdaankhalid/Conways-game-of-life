import { Cell } from "cell/Cell";

export class BoardValidatorService{
    getErrors(board: Cell[][]): string[]{
        const numRows = board.length;
        const numColumns = board[0].length;
        const errors = [];
        for (let row = 0; row < numRows; row++) {
            for (let col = 0; col < numColumns; col++) {

                if(!this.isValidCell(board[row][col].state)){
                    errors.push(
                        `Cell state invalid at row, col, value: ${row},${col},${board[row][col].state}`
                    );
                }
            }
        }

        return errors;
    }

    private isValidCell(val){
        return val==='X' || val==='O';
    }
}