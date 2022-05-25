import { ActivatedRoute } from '@angular/router';
import { EpisodiosService } from './episodios.service';
import { Component, OnInit, Input } from '@angular/core';
import { Episodios } from './episodios';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.css'],
})
export class EpisodiosComponent implements OnInit {
  temporada: number = 0;
  episodios$!: Episodios;
  todosEpisodios$!: Episodios;
  erro = false;
  carregando = false;

  constructor(
    private episodiosService: EpisodiosService,
    private router: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.carregando = true;
    this.router.params.subscribe((params) => {
      this.temporada = params['temporada'];
    });
    await this.episodiosService.getEpisodiosPorTemporada(this.temporada).then(
      (episodios) => {
        this.todosEpisodios$ = episodios;
        this.episodios$ = episodios;
      },
      (error) => (this.erro = true)
    );
    this.carregando = false;
  }

  buscar(textoBusca: string){
    if (textoBusca != '') {
      this.episodios$ = this.todosEpisodios$.filter(
        (episodio) => episodio.nome.toLowerCase().includes(textoBusca.toLowerCase())
      );
      return;
    }
    this.episodios$ = this.todosEpisodios$;
  }
}
