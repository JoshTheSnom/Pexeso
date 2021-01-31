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

  savedCard: Card | null = null;

  cards: Card[] = [
    {icon: "Apple", flipped: false},
    {icon: "Watermelon", flipped: false},
    {icon: "Orange", flipped: false},
    {icon: "Strawberry", flipped: false},
    {icon: "Grape", flipped: false},
    {icon: "Cherry", flipped: false},
    {icon: "Mango", flipped: false},
    {icon: "Banana", flipped: false},
    {icon: "Apple", flipped: false},
    {icon: "Watermelon", flipped: false},
    {icon: "Orange", flipped: false},
    {icon: "Strawberry", flipped: false},
    {icon: "Grape", flipped: false},
    {icon: "Cherry", flipped: false},
    {icon: "Mango", flipped: false},
    {icon: "Banana", flipped: false}

  ]
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
            }, 750);
          }
          this.savedCard = null;
        }
      }
    }
}
