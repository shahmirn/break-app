import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { About } from './about';
import { NoContent } from './no-content';
import { PreferencesComponent } from './preferences';
import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home',  component: Home },
  { path: 'about', component: About },
  { path: 'preferences', component: PreferencesComponent},
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
  },
  { path: '**',    component: NoContent },
];
