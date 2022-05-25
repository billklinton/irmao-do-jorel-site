import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Episodio } from '../episodios';
import { EpisodiosService } from '../episodios.service';

@Component({
  selector: 'app-detalhe-episodio',
  templateUrl: './detalhe-episodio.component.html',
  styleUrls: ['./detalhe-episodio.component.css'],
})
export class DetalheEpisodioComponent implements OnInit {
  episodioId: number = 0;
  erro = false;
  carregando = false;
  @Input() episodio$!: Episodio;

  constructor(
    private route: ActivatedRoute,
    private episodiosService: EpisodiosService
  ) {}

  async ngOnInit() {
    this.carregando = true;
    this.route.params.subscribe((params) => {
      this.episodioId = params['episodioId'];
    });
    await this.episodiosService.getEpisodioPorId(this.episodioId).then(
      (episodio) => (this.episodio$ = episodio),
      (error) => (this.erro = true)
    );
    this.carregando = false;
  }
}
