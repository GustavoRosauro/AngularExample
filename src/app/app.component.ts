import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pessoa } from './Model/Pessoa';
import { PessoaServiceService } from './Model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('form') form:NgForm;
  pessoa:Pessoa;
  ngOnInit(){
    this.pessoa = new Pessoa;
  }
  constructor(private service:PessoaServiceService){}
  Cadastrar():void{
    this.service.EnviaPessoa(this.pessoa);
  }
}
