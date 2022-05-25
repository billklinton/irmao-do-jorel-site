import { Personagem } from './../personagem';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-personagens',
  templateUrl: './card-personagens.component.html',
  styleUrls: ['./card-personagens.component.css'],
})
export class CardPersonagensComponent {
  @Input() personagem!: Personagem;

  constructor(private router: Router) {}

  public abreDetalhe(){
    this.router.navigate(['/detalhe-personagem', this.personagem.id]);
  }
}
