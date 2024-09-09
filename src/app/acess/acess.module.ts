import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcessRoutingModule } from './acess-routing.module';
import { RegisterComponent } from './register/register.component';
import { MaterialModule } from 'src/material-module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AcessRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AcessModule { }
