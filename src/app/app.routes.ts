import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/music-data',
    pathMatch: 'full',
  },
  {
    path: 'music-data',
    loadChildren: () =>
      import('@lazy/music-data/music-data.routes').then(
        (m) => m.MUSIC_DATA_ROUTES
      ),
  },
];
