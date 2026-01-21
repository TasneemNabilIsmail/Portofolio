import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    redirectTo:'portfolio',
    path: '**'
  },
  {
    path:'portfolio',
    component: LayoutComponent
  }
];
