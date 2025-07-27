import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';
import { AppComponent } from './app.component';

export const appRoutes: Route[] = [
  {
    path: 'plop-js',
    loadChildren: () =>
      loadRemoteModule('plop-js', './Routes').then((m) => m.remoteRoutes)
  },
  {
    path: 'login',
    loadChildren: () =>
      loadRemoteModule('login', './Routes').then((m) => m.remoteRoutes)
  },
  {
    path: '',
    component: AppComponent,
  },
];
