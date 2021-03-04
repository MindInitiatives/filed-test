import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserDataComponent } from './components/user-data/user-data.component';

const routes: Routes = [
  { path: '', redirectTo: '/user-data', pathMatch: 'full' },
  {
    path:'user-add', component: UserAddComponent
  },
  {
    path:'user-data', component: UserDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
