import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { 
    path: 'search', 
    component: HomePageComponent,
    loadChildren: () => import('./features/search/search.module').then(m => m.SearchModule)
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
