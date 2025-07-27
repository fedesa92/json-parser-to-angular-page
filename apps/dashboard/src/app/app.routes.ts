import { Route } from '@angular/router';
/* That's all the changes required to replace Static Module Federation with Dynamic Module Federation */
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
    component: AppComponent
  }
];
