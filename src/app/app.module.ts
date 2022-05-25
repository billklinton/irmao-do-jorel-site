import { HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import localeBr from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SobreComponent } from './sobre/sobre.component';
import { EpisodiosComponent } from './episodios/episodios.component';
import { PersonagensComponent } from './personagens/personagens.component';
import { CardPersonagensComponent } from './personagens/card-personagens/card-personagens.component';
import { DetalhePersonagemComponent } from './personagens/detalhe-personagem/detalhe-personagem.component';
import { TemporadasComponent } from './temporadas/temporadas/temporadas.component';
import { CardTemporadaComponent } from './temporadas/card-temporada/card-temporada.component';
import { CardEpisodioComponent } from './episodios/card-episodio/card-episodio.component';
import { DetalheEpisodioComponent } from './episodios/detalhe-episodio/detalhe-episodio.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { RecursoNaoEncontradoComponent } from './shared/recurso-nao-encontrado/recurso-nao-encontrado.component';
import { InputFormComponent } from './shared/input-form/input-form.component';

registerLocaleData(localeBr, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SobreComponent,
    EpisodiosComponent,
    PersonagensComponent,
    CardPersonagensComponent,
    DetalhePersonagemComponent,
    TemporadasComponent,
    CardTemporadaComponent,
    CardEpisodioComponent,
    DetalheEpisodioComponent,
    SpinnerComponent,
    RecursoNaoEncontradoComponent,
    InputFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
