import { Cell } from "../cell/Cell";
import { CellState } from "../types";

export class RuleService {
    newState(cell: Cell, board: Cell[][]): CellState{
        const neighbors = this.getNeighbors(board, cell.row, cell.col);
        if(cell.state==='X'){
            return this.nextStateWhenAlive(neighbors);
        }
        else{
            return this.nextStateWhenDead(neighbors);
        }
    }

    private nextStateWhenAlive(neighbors: Cell[]){
        // apply business rules to retrieved neighbors
        const aliveCount = this.countOccurences(neighbors, 'X');

        if((aliveCount === 2) || (aliveCount === 3)){
        return 'X';
        }
        
        if( aliveCount < 2){
            return 'O';
        }
        
        if(aliveCount > 3){
            return 'O';
        }

        return 'X';
    }

    private nextStateWhenDead(neighbors: Cell[]){
        const aliveNeigbors = this.countOccurences(neighbors, 'X');

        if(aliveNeigbors === 3){
            return 'X';
        }

        return 'O';
    }

    private getNeighbors(board: Cell[][], row: number, col:number): Cell[]{
        const colLen = board[0].length-1;
    const rowLen = board.length-1;

    const result = [];

    if((row > 0) && (col > 0)){
        result.push(board[row-1][col-1]) 
    }
    
    if(row > 0){
        result.push(board[row-1][col]);
    }

    if((row > 0) && (col<colLen)){
        result.push(board[row-1][col+1]);
    }
        
    if(col>0){
        result.push(board[row][col-1]);
    }
     if(col<colLen){
         result.push(board[row][col+1]);
    }
    
    if(row<rowLen){
        result.push(board[row+1][col]);
         if(col<colLen){
             result.push(board[row+1][col+1]);
         }
         if(col>0){
             result.push(board[row+1][col-1]);   
         }
     }
    
    return result;
    }

    private countOccurences(arr: Cell[], state: CellState){
        const rowLen = arr.length;
        let count = 0;
        for (let i = 0; i < rowLen; i++) {
                if(arr[i].state === state){
                    count++;
                }
        }
        return count;
    }
}