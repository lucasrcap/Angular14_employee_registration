import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { StatusComponent } from './status/status.component';
import { AuthGuard } from './Guard/auth.guard';
import { UserComponent } from './user/user.component';
import { RoleGuard } from './Guard/role.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
      {path: '', component: LoginComponent, canActivate: [AuthGuard]},
      {path: "home", component:HomeComponent, canActivate:[AuthGuard]},
      {path: "about", component:AboutComponent, canActivate:[AuthGuard]},
      {path: "user", component:UserComponent, canActivate:[RoleGuard]},
      {path: 
      "contact", component:ContactComponent, 
      children: [
      {path:"add", component:AddContactComponent},
      {path:"edit/:id", component:AddContactComponent}
    ], canActivate:[AuthGuard]
  },
  {path:"acess", loadChildren:()=> import('./acess/acess.module').then(opt=>opt.AcessModule)},
  {path:"login", loadComponent:()=>import('./login/login.component').then(opt=>opt.LoginComponent)},
  {path: "**", component:StatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
