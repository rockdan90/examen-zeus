import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeComponent } from './employe/employe.component';
// import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'employees',component:EmployeComponent},
  { path: 'employe', loadChildren: () => import('./employe/employe.module').then(m => m.EmployeModule) },
  {path: '**',pathMatch: 'full',redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
