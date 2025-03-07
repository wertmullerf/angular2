import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/simpsons/character-list/character-list.component';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-simpsons-super',
  imports: [CharacterListComponent],
  templateUrl: './simpsons-super.component.html',
})
export class SimpsonsSuperPageComponent {
  name = signal('');
  age = signal(0);
  characters = signal<Character[]>([
    { id: 1, name: 'Homero', age: 40 },
    { id: 2, name: 'Marge', age: 42 },
    { id: 3, name: 'Moe', age: 50 },
  ]);

  addCharacter(): void {
    if (this.name().length > 0 && this.age() > 0) {
      let aux: Character = {
        id: this.characters().length + 1,
        name: this.name(),
        age: this.age(),
      };
      //this.characters().push(aux);
      this.characters.update((list) => [...list, aux]);
      this.resetFields();
    }
  }
  resetFields(): void {
    this.name.set('');
    this.age.set(0);
  }
}
