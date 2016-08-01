import {Component, Query, QueryList, Provider} from '@angular/core';
import {Chessboard} from './chessboard';
import {Piece} from './rules/Piece';
@Component({
    selector: 'chessboard',
    templateUrl: '/app/chess/ChessboardComponent.html',
    providers: [Chessboard, Piece]
})

export class ChessboardComponent {
    constructor(private chessboard:Chessboard) {

    }

    public todos:Number[] = [0, 1, 2, 3, 4, 5, 6, 7];

    public imageLocation(row:number, col:number):string {
        return "/app/img/" + this.imageFileName(row, col);
    }

    public backgroundCSS(row:number, col:number):string {
        if((row+col)%2 == 0)
            return "bg-gray";
        else
            return "bg-white";
    }

    private imageFileName(row:number, col:number):string {
        var intVal = this.chessboard.getFieldValue(row, col);
        var val = intVal;
        if (val < 0) {
            val = val * -1;
        }
        switch (val) {
            case 5 :
                return intVal == 5 ? "w_queen.png" : "b_queen.png";
            case 6 :
                return intVal == 6 ? "w_king.png" : "b_king.png";
            case 1 :
                return intVal == 1 ? "w_pawn.png" : "b_pawn.png";
            case 2 :
                return intVal == 2 ? "w_rook.png" : "b_rook.png";
            case 3 :
                return intVal == 3 ? "w_knight.png" : "b_knight.png";
            case 4 :
                return intVal == 4 ? "w_bishop.png" : "b_bishop.png";
            default :
                return "empty.png";

        }
    }

    public onclick(row:number, col:number) {
        //alert(row + " " + col);
        //this.chessboard.onClick(row, col);
    }

    public ondragstart(row:number, col:number) {
        //alert(row + " " + col);
        this.chessboard.onClick(row, col);

    }

    public ondragdrop(row:number, col:number) {
        //alert(row + " drop " + col);
        this.chessboard.move(row, col);

    }

    public ondragover(row:number, col:number) {
        event.preventDefault();
    }

}
