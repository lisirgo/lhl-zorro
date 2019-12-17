import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo.component';
import { LoginComponent } from './login/login.component';
import { DatePickerComponent } from './date-picker/date-picker.component';


const routes: Routes = [
  {
    path:'',
    component:DemoComponent ,
  },{
    path:'login',
    component:LoginComponent
  },{
    path:'date-picker',
    component:DatePickerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
