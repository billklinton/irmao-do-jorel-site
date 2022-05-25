import { DetalhePersonagemComponent } from './personagens/detalhe-personagem/detalhe-personagem.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonagensComponent } from './personagens/personagens.component';
import { EpisodiosComponent } from './episodios/episodios.component';
import { SobreComponent } from './sobre/sobre.component';
import { TemporadasComponent } from './temporadas/temporadas/temporadas.component';
import { DetalheEpisodioComponent } from './episodios/detalhe-episodio/detalhe-episodio.component';

const routes: Routes = [
  { path: '', component: PersonagensComponent },
  { path: 'personagens', component: PersonagensComponent },
  { path: 'detalhe-personagem/:personagemId', component: DetalhePersonagemComponent },
  { path: 'temporadas', component: TemporadasComponent },
  { path: 'episodios/:temporada', component: EpisodiosComponent },
  { path: 'detalhe-episodio/:episodioId', component: DetalheEpisodioComponent },
  { path: 'sobre', component: SobreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
