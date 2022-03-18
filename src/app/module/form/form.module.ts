import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { EntryformComponent } from './components/entryform/entryform.component';
import { ResultformComponent } from './components/resultform/resultform.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormComponent,
    EntryformComponent,
    ResultformComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule,
  ]
})
export class FormModule { }
