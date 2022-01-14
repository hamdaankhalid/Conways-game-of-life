import { InvalidErrorMessage } from "../types";

export class InvalidBoardStateError extends Error {
    constructor(public errors: string[]){
        super('Invalid Board State Error');
        Object.setPrototypeOf(this, InvalidBoardStateError.prototype);
    }
}