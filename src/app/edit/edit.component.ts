import { Component, OnInit } from '@angular/core';
import { PessoaServiceService, Pessoa } from '../Model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private service:PessoaServiceService,private route:ActivatedRoute) { }
  pessoa:any = [];
  ngOnInit() {
    const id  =  this.route.snapshot.params['id'];
    this.BuscaPessoa(id);
  }
  BuscaPessoa(id:number){
    this.service.GetPessoa(id).subscribe((data:{})=>{
      this.pessoa = data;
    });
  }
AlterarPessoa(pessoaObj:Pessoa):void{
  this.service.EditPessoa(pessoaObj);
  this.LimpaCampos();
}
RemovePessoa(id:number){
  this.service.DeletaPessoa(id);
  //this.LimpaCampos();
}
LimpaCampos():void{
window.location.href = "/lista";
}
}
