"use strict";
var Piece_1 = require('./rules/Piece');
var Chessboard = (function () {
    function Chessboard() {
        this._fields = [
            [-2, -3, -4, -5, -6, -4, -3, -2],
            [-1, -1, -1, -1, -1, -1, -1, -1],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [2, 3, 4, 5, 6, 4, 3, 2]
        ];
        this.clicked = false;
        this.piece = new Piece_1.Piece();
    }
    Chessboard.prototype.getFieldValue = function (row, col) {
        return this._fields[row][col];
    };
    Chessboard.prototype.onClick = function (row, col) {
        if (this._fields[row][col] == 0) {
            return false;
        }
        this.clicked = true;
        this.fromRow = row;
        this.fromCol = col;
        return true;
    };
    Chessboard.prototype.move = function (toRow, toCol) {
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
    };
    return Chessboard;
}());
exports.Chessboard = Chessboard;
//# sourceMappingURL=chessboard.js.map