import {Component, Query, QueryList, Provider} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Chessboard} from './chessboard';
import {Piece} from './rules/Piece';
import {Queen} from "./rules/Queen";
import {King} from "./rules/King";
import {Pawn} from "./rules/Pawn";
import {Rook} from "./rules/Rook";
import {Knight} from "./rules/Knight";
import {Bishop} from "./rules/Bishop";
@Component({
    selector: 'chessboard',
    templateUrl: '/app/chess/ChessboardComponent.html',
    providers: [Chessboard]
})

export class ChessboardComponent {
    constructor(private chessboard:Chessboard) {

    }

    public todos:Number[] = [0, 1, 2, 3, 4, 5, 6, 7];

    public imageLocation(row:number, col:number):string {
        return "/app/img/" + this.imageFileName(row, col);
    }

    public backgroundCSS(row:number, col:number):string {
        if ((row + col) % 2 == 0)
            return "bg-gray";
        else
            return "bg-white";
    }

    private piece:Piece;

    private imageFileName(row:number, col:number):string {
        this.piece = this.chessboard.getFieldValue(row, col);

        if (this.piece == null)
            return "empty.png";

        return this.piece.getPieceImage();
    }

    public onclick(row:number, col:number) {
        //alert(row + " " + col);
        //this.chessboard.onClick(row, col);
    }

    public ondragstart(row:number, col:number) {
        //alert(row + " " + col);
        this.chessboard.onClick(row, col);

    }

    whoseTurn:string = "White";

    public ondragdrop(row:number, col:number) {
        //alert(row + " drop " + col);
        this.whoseTurn = this.chessboard.move(row, col);

    }

    public ondragover(row:number, col:number) {
        event.preventDefault();
    }

}
