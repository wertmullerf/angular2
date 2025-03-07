import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'counter-page',
  templateUrl: './counter-page.component.html',

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {
  public counterValue: number = 0;
  counterSignal = signal(0);

  constructor() {
    setInterval(() => {
      //this.counterSignal.update((currentValue) => currentValue + 1);
    }, 2000);
  }
  increaseBy(value: number) {
    this.counterValue += value;
    this.counterSignal.update((current) => current + value);
  }
  resetCounter() {
    this.counterValue = 0;
    this.counterSignal.set(0);
  }
}
