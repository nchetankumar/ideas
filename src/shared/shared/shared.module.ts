import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { CommonMaterialModule } from 'src/app/core/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';


@NgModule({
  declarations: [LoginComponent, DialogComponentComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CommonModule,
    CommonMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent,
    DialogComponentComponent
  ]
})
export class SharedModule { }
