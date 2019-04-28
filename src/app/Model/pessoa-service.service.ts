import { Injectable } from '@angular/core';
import { Pessoa } from './Pessoa';
import { HttpClient } from '@angular/common/http';
import { ok } from 'assert';
import { Config } from 'protractor';
import { error } from '@angular/compiler/src/util';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaServiceService {

  constructor(private pessoa:Pessoa,private http:HttpClient) { }

public EnviaPessoa(pessoa:Pessoa){
return this.http.post("/api/values",{nome:pessoa.nome,idade:pessoa.idade}).subscribe(
  data=>{
     console.log(data.toString())
    },
    (error:any)=>{
      console.log(error);
    });
}
public BuscaPessoas(){
  return this.http.get<Pessoa>('/api/values');
}
}