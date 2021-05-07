import { Component } from '@angular/core';
import { Constants } from '../shared/constants/const';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  sumHistory: string = '';
  tempSumHistory: string;
  showTitle: string = 'Ionic Calculator';
  sum: string = '';
  buttonList: any[] = Constants.buttons;

  constructor() {}

  handleClick(e: MouseEvent, operator: string) {
    this.showTitle = '';
    this.sum = '';

    let element = e.target as HTMLElement;
    this.animete(element);

    if (operator === '=') {
      this.calculate();
    } else if (operator === 'C') {
      this.reset();
    } else if (operator === 'Del') {
      this.backspace();
    } else {
      this.sumHistory += operator;
    }
  }

  calculate = () => {
    try {
      this.sum =
        eval(this.sumHistory).length > 5
          ? eval(this.sumHistory).toFixed(4)
          : eval(this.sumHistory);

      this.sumHistory = '';
    } catch (e) {}
  };

  reset = () => {
    this.sumHistory = '';
    this.sum = '';
    this.showTitle = 'Ionic Calculator';
  };

  backspace = () => {
    const tempSum = this.sumHistory.substr(0, this.sumHistory.length - 1);
    this.sumHistory = tempSum;
  };

  animete(e) {
    e.animate(
      [
        // keyframes
        { transform: 'translate3d(-1px, 0, 0)' },
        { transform: 'translate3d(2px, 0, 0)' },
        { transform: 'translate3d(-4px, 0, 0)' },
        { transform: 'translate3d(4px, 0, 0)' },
      ],
      {
        // timing options
        duration: 500,
        iterations: 1,
      }
    );
  }
}
