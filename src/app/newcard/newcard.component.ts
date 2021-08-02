import { Component, OnInit } from "@angular/core";
import { Card } from "../card.model";

@Component({
    selector: 'app-newcard',
    templateUrl: './newcard.component.html'
})

export class NewCardComponent implements OnInit{

    cards: Card[] = [
        {
        title: "Griffsoft",
        description: 'Lorem'
    },
    {
        title: "Márk",
        description: 'Lorem asd'
    }
]


    constructor(){}

    ngOnInit(){}
    
}