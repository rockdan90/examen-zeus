import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeRoutingModule } from './employe-routing.module';
import { EmployeComponent } from './employe.component';




@NgModule({
  declarations: [EmployeComponent],
  imports: [
    CommonModule,
    EmployeRoutingModule,
    CommonModule,
    HttpClientModule
  ]
})
export class EmployeModule { }
