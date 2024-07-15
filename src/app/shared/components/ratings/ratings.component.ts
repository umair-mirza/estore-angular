import { Component, Input } from '@angular/core';
import {
  IconDefinition,
  faStar,
  faStarHalfStroke,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrl: './ratings.component.scss',
})
export class RatingsComponent {
  faStar = faStar;
  faStarHalfStroke = faStarHalfStroke;
  faStarEmpty = faStarEmpty;

  stars: IconDefinition[] = [];

  private _score: number = 0;

  @Input() //used to mark a property in child component that can receive data from parent component
  set score(val: number) {
    //setter function for score input property. whenever score is changed from parent component, this setter method will be executed
    this._score = val > 5 ? 5 : val;
    const solidStarCount: number = Math.floor(this._score);
    for (let i = 0; i < solidStarCount; i++) {
      this.stars.push(faStar);
    }
    if (this._score - solidStarCount > 0 && this._score - solidStarCount < 1) {
      this.stars.push(faStarHalfStroke);
    }

    for (let i: number = this.stars.length; i < 5; i++) {
      this.stars.push(faStarEmpty);
    }
  }
}
