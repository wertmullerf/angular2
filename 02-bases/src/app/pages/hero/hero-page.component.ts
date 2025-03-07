import { Component, computed, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
@Component({
  selector: 'hero-page',
  templateUrl: './hero-page.component.html',
  imports: [UpperCasePipe],
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(() => {
    return `${this.name()} - ${this.age()} `;
  });

  changeHero(): void {
    this.name.set('Spiderman');
    this.age.set(22);
  }
  resetForm(): void {
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge(): void {
    this.age.set(60);
  }
}
