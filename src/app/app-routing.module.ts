import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { FormComponent } from './module/form/form.component';
import { KaarComponent } from './module/kaar/kaar.component';

const routes: Routes = [
  { path : '', component : MainComponent },
  { path : 'kaar', component : KaarComponent },
  { path : 'form', component : FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
