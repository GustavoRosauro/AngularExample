import { Component, OnInit } from '@angular/core';
import { Pessoa, PessoaServiceService } from '../Model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private service:PessoaServiceService) { }
  pessoas:any = [];
  ngOnInit() {
    this.BuscaPessoas();
  }
  BuscaPessoas(){
    return this.service.BuscaPessoas().subscribe((data:{})=>{
      this.pessoas = data;
    })
  }
}
