import { Component } from '@angular/core';

interface Card{
  icon: string;
  flipped: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pexeso';

  numPairs: number = 4;
  foundPairs: number = 0;
  won: boolean = false;
  hasStarted: boolean = false;


  savedCard: Card | null = null;

  listCards: Card[] = [
    {icon: "Apple", flipped: false},
    {icon: "Apple", flipped: false},
    {icon: "Watermelon", flipped: false},
    {icon: "Watermelon", flipped: false},
    {icon: "Orange", flipped: false},
    {icon: "Orange", flipped: false},
    {icon: "Strawberry", flipped: false},
    {icon: "Strawberry", flipped: false},
    {icon: "Grape", flipped: false},
    {icon: "Grape", flipped: false},
    {icon: "Cherry", flipped: false},
    {icon: "Cherry", flipped: false},
    {icon: "Mango", flipped: false},
    {icon: "Mango", flipped: false},
    {icon: "Banana", flipped: false},
    {icon: "Banana", flipped: false},

  ]
  cards: Card[];
  startGame(pairs: string) {
    this.won = false;
    this.numPairs = pairs as unknown as number;
    this.hasStarted = true;

    this.cards = this.listCards.slice(0, this.numPairs*2);
    this.cards = this.cards.sort(() =>  Math.random() - 0.5);
  }





  turn(clickedCard: Card): void {
      if (clickedCard.flipped === true) {
        return;
      }
      if (this.savedCard === null) {
        clickedCard.flipped = true;
        this.savedCard = clickedCard;
      } else {
        if (this.savedCard !== clickedCard) {
          clickedCard.flipped = true;
          if (clickedCard.icon !== this.savedCard.icon) {
            const savedCard = this.savedCard;
            setTimeout(() => {
              clickedCard.flipped = false;
              savedCard.flipped = false;
            }, 500);
          }
          else {
            this.foundPairs++;
            this.hasWon();
          }
          this.savedCard = null;
        }
      }
    }

    hasWon() {
      if(this.foundPairs == this.numPairs) {

        this.won = true;
        for(let i = 0; i < this.cards.length; i++) {
          this.cards[i].flipped = false;
        }
        this.cards = [];
        this.foundPairs = 0;
        this.savedCard = null;
        this.hasStarted = false;
      }
    }
}
