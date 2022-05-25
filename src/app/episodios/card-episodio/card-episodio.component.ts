import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Episodio } from '../episodios';

@Component({
  selector: 'app-card-episodio',
  templateUrl: './card-episodio.component.html',
  styleUrls: ['./card-episodio.component.css']
})
export class CardEpisodioComponent {

  @Input() episodio!: Episodio;

  constructor(private router: Router) { }

  public verDetalhesEpisodio(){
    this.router.navigate(['/detalhe-episodio', this.episodio.id]);
  }
}
