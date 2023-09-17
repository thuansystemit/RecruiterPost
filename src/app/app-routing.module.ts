import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'login', loadChildren: () => import('./features/main-inbox/login/login.module').then(item => item.LoginModule)},
  {path: '', loadChildren: () => import('./features/main-inbox/main-inbox.module').then(item => item.MainInboxModule)},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
