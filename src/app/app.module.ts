import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { Pessoa } from './Model';
import {HttpClientModule} from '@angular/common/http'
import { HttpClient} from '@angular/common/http';
import { ListaComponent } from './lista/lista.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    Pessoa,
    HttpClient
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
