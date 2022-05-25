import { PersonagensService } from './personagens.service';
import { Component, OnInit } from '@angular/core';
import { Personagens } from './personagem';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css'],
})
export class PersonagensComponent implements OnInit {
  personagens$!: Personagens;
  todosPersonagens$!: Personagens;
  carregando = false;
  erro = false;

  constructor(private personagensService: PersonagensService) {}

  async ngOnInit() {

    this.carregando = true;
    await this.personagensService.getPersonagens().then(
      (personagens) => {
        this.todosPersonagens$ = personagens;
        this.personagens$ = personagens;
      },
      (error) => (this.erro = true)
    );
    this.carregando = false;
  }

  buscar(textoBusca: string) {
    if (textoBusca != '') {
      this.personagens$ = this.todosPersonagens$.filter(
        (personagem) => personagem.nome.toLowerCase().includes(textoBusca.toLowerCase())
      );
      return;
    }
    this.personagens$ = this.todosPersonagens$;
  }
}
