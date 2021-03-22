import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: './home/home.module#HomePageModule'  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'first', loadChildren: './first/first.module#FirstPageModule' },
  { path: 'second', loadChildren: './second/second.module#SecondPageModule' },
  { path: 'third', loadChildren: './third/third.module#ThirdPageModule' },
  { path: 'four', loadChildren: './four/four.module#FourPageModule' },
  { path: 'five', loadChildren: './five/five.module#FivePageModule' },
  { path: 'six', loadChildren: './six/six.module#SixPageModule' },
  { path: 'seven', loadChildren: './seven/seven.module#SevenPageModule' },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
