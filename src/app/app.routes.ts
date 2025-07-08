import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { TeamComponent } from './pages/team/team.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pokemon',
    component: PokemonComponent
  },
  {
    path:'my-team',
    component: TeamComponent
  }
];
