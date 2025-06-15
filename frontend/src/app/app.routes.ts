import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./character-search/character-search.component').then(
        (m) => m.CharacterSearchComponent
      ),
  },
  {
    path: 'character/:id',
    loadComponent: () =>
      import('./character-detail/character-detail.component').then(
        (m) => m.CharacterDetailComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
