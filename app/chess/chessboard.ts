import {Component, Provider} from '@angular/core';
import {Piece} from './rules/Piece';

export class Chessboard {
    private _fields:number[][] = [
        [-2, -3, -4, -5, -6, -4, -3, -2],
        [-1, -1, -1, -1, -1, -1, -1, -1],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [2, 3, 4, 5, 6, 4, 3, 2]
    ];
    piece:Piece;

    public constructor() {
        this.piece = new Piece();
    }


    public getFieldValue(row:number, col:number):number {
        return this._fields[row][col];
    }

    private fromRow:number;
    private fromCol:number;
    private clicked:boolean = false;

    public onClick(row:number, col:number):boolean {
        if (this._fields[row][col] == 0) {
            return false;
        }

        this.clicked = true;
        this.fromRow = row;
        this.fromCol = col;
        return true;
    }

    public move(toRow:number, toCol:number):boolean {
        //alert(this.clicked + " Old Move " + this.fromRow + " " + this.fromCol + " new Points " + toRow + " " + toCol);
        if (this.clicked) {
            this.clicked = false;
            // piece.checkRules(this.fromRow, toRow, this.fromCol, toCol);
            if (this.fromRow == toRow && this.fromCol == toCol) {
                return false;
            }

            this._fields[toRow][toCol] = this._fields[this.fromRow][this.fromCol];
            this._fields[this.fromRow][this.fromCol] = 0;
        }
        return false;
    }


}