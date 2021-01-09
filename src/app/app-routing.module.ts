
import { LoginComponent } from './account/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './account/login/shared/auth.guard';
import { HomeComponent } from './layout/home/home/home.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'home', component: HomeComponent }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: LoginComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
