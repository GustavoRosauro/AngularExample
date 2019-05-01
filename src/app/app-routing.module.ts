import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListaComponent} from './lista/lista.component';
import {EditComponent} from './edit/edit.component';
export const routes: Routes = [
  {
  path:"lista",
  component:ListaComponent
  },
  {
    path:"lista/edit/:id",
    component:EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
