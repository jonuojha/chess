import {Component, Query, QueryList, Provider} from '@angular/core';
import {Piece} from './Piece';

@Component({
    providers:[Piece]
})

export class Pawn extends Piece{
    public constructor(){
        super();
    }
    public commonRule():void {

    }
}