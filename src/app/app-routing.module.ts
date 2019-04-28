import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListaComponent} from './lista/lista.component';
export const routes: Routes = [
  {
  path:"lista",
  component:ListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
