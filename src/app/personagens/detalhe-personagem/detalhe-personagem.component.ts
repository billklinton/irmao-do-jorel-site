import { PersonagensService } from './../personagens.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personagem } from '../personagem';

@Component({
  selector: 'app-detalhe-personagem',
  templateUrl: './detalhe-personagem.component.html',
  styleUrls: ['./detalhe-personagem.component.css'],
})
export class DetalhePersonagemComponent implements OnInit {
  personagemId: number = 0;
  @Input() personagem$!: Personagem;
  carregando = false;
  erro = false;

  constructor(
    private route: ActivatedRoute,
    private personagensService: PersonagensService
  ) {}

  async ngOnInit() {
    this.carregando = true;
    this.route.params.subscribe((params) => {
      this.personagemId = params['personagemId'];
    });
    await this.personagensService.getPersonagemPorId(this.personagemId).then(
      (personagem) => (this.personagem$ = personagem),
      (error) => (this.erro = true)
    );
    this.carregando = false;
  }
}
