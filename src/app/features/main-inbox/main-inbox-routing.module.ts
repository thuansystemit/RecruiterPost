import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainInboxComponent } from './main-inbox.component';

const routes: Routes = [
  {
    path: '',
    component: MainInboxComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(item => item.HomeModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainInboxRoutingModule { }
