import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { SimpsonsComponent } from './pages/simpsons/simpsons.component';
import { SimpsonsSuperPageComponent } from './pages/simpsons-super/simpsons-super.component';

export const routes: Routes = [
  { path: '', component: CounterPageComponent },
  { path: 'hero', component: HeroPageComponent },
  { path: 'simpsons', component: SimpsonsComponent },
  { path: 'simpsons-super', component: SimpsonsSuperPageComponent },
  { path: '**', redirectTo: '' },
];
