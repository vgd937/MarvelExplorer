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
    path: 'favorites',
    loadComponent: () =>
      import('./favorites/favorites.component').then(
        (m) => m.FavoritesComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
