import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recurso-nao-encontrado',
  templateUrl: './recurso-nao-encontrado.component.html',
  styleUrls: ['./recurso-nao-encontrado.component.css']
})
export class RecursoNaoEncontradoComponent implements OnInit {

  @Input() mensagem = '';
  constructor() { }

  ngOnInit(): void {
  }

}
